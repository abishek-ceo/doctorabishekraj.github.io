#!/usr/bin/env python3
"""Makes the three web fonts in assets/fonts/ smaller, for visitors on slow mobile networks.

  pip install fonttools brotli
  python3 tools/make-fonts.py

Starts from the Latin fonts in tools/fonts-src/ (DM Sans, Playfair Display and Playfair Display Italic, variable fonts from Google Fonts,
SIL Open Font Licence) and writes assets/fonts/*.woff2 with
  - only the weights the site uses (the weight range in site.css @font-face), and
  - only the characters the site can show in these fonts: Basic Latin, Latin-1 letters, common punctuation and the rupee sign.
Tamil is not in these fonts (it comes from the visitor's own Tamil font). A character outside this set, if you ever type one, falls back to
the next font in the stack, so nothing breaks. Re-run this script after changing the ranges below.
"""
import io
import os
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.varLib import instancer

HERE = os.path.dirname(os.path.abspath(__file__))
SRC, OUT = os.path.join(HERE, 'fonts-src'), os.path.join(HERE, '..', 'assets', 'fonts')
TYPO = [0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D, 0x2022, 0x2026, 0x00B7, 0x00A9, 0x00BD, 0x20B9, 0x00D7]
BODY = list(range(0x20, 0x7F)) + list(range(0xA0, 0x100)) + TYPO + [0x2192]   # DM Sans: all text, so keep the Latin-1 letters too
HEADINGS = list(range(0x20, 0x7F)) + TYPO                                     # Playfair is only used for headings, the hospital name and big numbers
FEATURES = ['kern', 'liga', 'clig', 'calt', 'ccmp', 'locl', 'mark', 'mkmk', 'case', 'lnum', 'pnum', 'tnum', 'onum']   # features the pages can use
FONTS = {  # file -> (weight range, characters); the weight range must match the @font-face font-weight in tools/site.css
    'DMSans-var.woff2': ((400, 700), BODY),
    'PlayfairDisplay-var.woff2': ((600, 900), HEADINGS),
    'PlayfairDisplay-italic-var.woff2': ((600, 800), HEADINGS),
}
for name, ((lo, hi), UNICODES) in FONTS.items():
    font = TTFont(os.path.join(SRC, name))
    font = instancer.instantiateVariableFont(font, {'wght': (lo, hi)}, inplace=False)
    buf = io.BytesIO(); font.flavor = None; font.save(buf); buf.seek(0); font = TTFont(buf, lazy=False)   # reload so every table is fully loaded
    opts = subset.Options(); opts.flavor = 'woff2'; opts.layout_features = FEATURES; opts.name_IDs = [1, 2, 3, 4, 6]; opts.notdef_outline = True; opts.glyph_names = False; opts.hinting = False
    sub = subset.Subsetter(opts); sub.populate(unicodes=UNICODES); sub.subset(font)
    out = os.path.join(OUT, name); font.flavor = 'woff2'; font.save(out)
    print(f'{name}: {os.path.getsize(os.path.join(SRC, name)) // 1024} KB -> {os.path.getsize(out) // 1024} KB')
