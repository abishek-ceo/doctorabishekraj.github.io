#!/usr/bin/env python3
"""Generate the optimized site images from the original brand files.

Originals (doctor.png, hospital-logo.png) are never modified.
Requires: Pillow, numpy, scipy.   Run from anywhere:  python3 tools/make-images.py
Output goes to assets/img/ (committed, so the site needs no build step to serve them).

Optional: put the hospital's own photos in photos/ (jpg/png/webp). They are resized to
480/960/1600 px WebP, stripped of EXIF (including GPS location) and listed in
assets/img/photos/photos.json for the page builder.
"""
import json
import pathlib
import sys

import numpy as np
from PIL import Image, ImageOps
from scipy import ndimage

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'assets' / 'img'
OUT.mkdir(parents=True, exist_ok=True)
DEBUG = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else None

# Soft rose studio backdrop that replaces the lime-green one (top -> bottom).
BG_TOP = np.array([253, 232, 241], dtype=np.float64)
BG_BOTTOM = np.array([238, 163, 197], dtype=np.float64)


def save_webp(img, name, quality=82):
    path = OUT / name
    img.save(path, 'WEBP', quality=quality, method=6)
    print(f'  {name}: {img.width}x{img.height}, {path.stat().st_size:,} bytes')


def portrait():
    """Replace the green-screen style backdrop with a brand-friendly rose gradient.

    The original background is a smooth vertical gradient, so it is modelled per row.
    For every pixel the share of background (alpha) is estimated against the nearest solid
    foreground colour, and the new backdrop is swapped in with  C' = C + alpha * (B' - B).
    This also cancels green spill on hair and skin edges.
    """
    C = np.asarray(Image.open(ROOT / 'doctor.png').convert('RGB')).astype(np.float64)
    h, w, _ = C.shape
    ge = C[..., 1] - np.maximum(C[..., 0], C[..., 2])          # "green excess"
    ys = np.repeat(np.arange(h)[:, None], w, axis=1)
    sure_bg = ge > 60
    coef = [np.polyfit(ys[sure_bg], C[..., c][sure_bg], 2) for c in range(3)]
    row_bg = np.stack([np.polyval(coef[c], np.arange(h)) for c in range(3)], axis=1)
    B = np.repeat(row_bg[:, None, :], w, axis=1)

    fg = ndimage.binary_erosion(ge < 8, iterations=2)           # solid, non-green foreground
    idx = ndimage.distance_transform_edt(~fg, return_indices=True)[1]
    F = C[idx[0], idx[1]]
    num = ((C - F) * (B - F)).sum(axis=2)
    den = ((B - F) ** 2).sum(axis=2) + 1e-6
    alpha = np.clip(num / den, 0, 1)
    alpha[fg] = 0
    alpha[np.linalg.norm(C - B, axis=2) < 12] = 1

    t = (np.arange(h) / (h - 1))[:, None, None]
    B_new = np.repeat((BG_TOP * (1 - t) + BG_BOTTOM * t), w, axis=1)
    out = np.clip(C + alpha[..., None] * (B_new - B), 0, 255).astype(np.uint8)
    img = Image.fromarray(out)
    if DEBUG:
        Image.fromarray((alpha * 255).astype(np.uint8)).save(DEBUG / 'portrait-alpha.png')
        img.save(DEBUG / 'portrait-new.png')
    print('portrait')
    save_webp(img, 'doctor-698.webp', 84)
    save_webp(img.resize((480, round(480 * h / w)), Image.LANCZOS), 'doctor-480.webp', 84)
    save_webp(img.resize((240, round(240 * h / w)), Image.LANCZOS), 'doctor-240.webp', 84)


def logos():
    """Pure-white backdrop (the file has a faint off-white one), tight crops and app icons."""
    a = np.asarray(Image.open(ROOT / 'hospital-logo.png').convert('RGB')).astype(np.float64)
    a = np.clip(a * (255.0 / np.array([252.0, 253.0, 255.0])), 0, 255).astype(np.uint8)
    L = Image.fromarray(a)
    dist = np.abs(a.astype(int) - 255).sum(axis=2)
    content = dist > 40
    # The heart ends at row 261; the wordmark starts below the empty rows 262-264.
    heart_cols = np.where(content[54:262].any(axis=0))[0]
    pad = 10
    # Stop at row 264 (still blank) so the tops of the wordmark letters stay out, then pad with white.
    heart = L.crop((heart_cols.min() - pad, 54 - pad, heart_cols.max() + pad + 1, 264))
    heart = ImageOps.expand(heart, border=(0, 0, 0, pad - 2), fill=(255, 255, 255))
    cols = np.where(content.any(axis=0))[0]
    rows = np.where(content.any(axis=1))[0]
    full = L.crop((cols.min() - pad, rows.min() - pad, cols.max() + pad + 1, rows.max() + pad + 1))
    print('logo')
    save_webp(full, 'logo-full.webp', 90)
    save_webp(heart, 'mark-lg.webp', 90)                                   # 238 px wide, for 3x screens
    save_webp(heart.resize((88, round(88 * heart.height / heart.width)), Image.LANCZOS), 'mark-sm.webp', 90)

    def square(size, scale):
        canvas = Image.new('RGB', (size, size), (255, 255, 255))
        tw = int(size * scale)
        th = round(tw * heart.height / heart.width)
        h2 = heart.resize((tw, th), Image.LANCZOS)
        canvas.paste(h2, ((size - tw) // 2, (size - th) // 2))
        return canvas

    print('icons')
    for name, size, scale in (('icon-512.png', 512, 0.72), ('icon-192.png', 192, 0.72),
                              ('apple-touch-icon.png', 180, 0.72), ('favicon-32.png', 32, 0.94)):
        img = square(size, scale)
        img.save(OUT / name, optimize=True)
        print(f'  {name}: {size}x{size}, {(OUT / name).stat().st_size:,} bytes')
    square(48, 0.94).save(ROOT / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
    print(f'  favicon.ico: {(ROOT / "favicon.ico").stat().st_size:,} bytes')


def photos():
    src = ROOT / 'photos'
    if not src.is_dir():
        return
    dest = OUT / 'photos'
    dest.mkdir(exist_ok=True)
    items = []
    for p in sorted(src.iterdir()):
        if p.suffix.lower() not in ('.jpg', '.jpeg', '.png', '.webp'):
            continue
        im = ImageOps.exif_transpose(Image.open(p)).convert('RGB')   # also drops EXIF/GPS on save
        stem = p.stem.lower().replace(' ', '-')
        widths = [w for w in (480, 960, 1600) if w <= im.width] or [im.width]
        files = {}
        for w in widths:
            r = im if w == im.width else im.resize((w, round(w * im.height / im.width)), Image.LANCZOS)
            name = f'{stem}-{w}.webp'
            r.save(dest / name, 'WEBP', quality=78, method=6)
            files[w] = name
        items.append({'id': stem, 'width': im.width, 'height': im.height, 'files': files})
        print(f'  photo {p.name}: {im.width}x{im.height} -> {sorted(files)}')
    (dest / 'photos.json').write_text(json.dumps(items, indent=1))


if __name__ == '__main__':
    portrait()
    logos()
    photos()
