// Women's health guides: plain-language answers to the questions women most often search for (English, plus Tamil versions of the top three).
// General education only: no diagnosis, no drug doses, and never a claim that a named doctor wrote or reviewed a page.
import { site } from '../site.mjs';
import { icon, crumbs, faqBlock, ctaBand, btnWA, btnCall, servicePage, shareRow, videoSection, slugUrl, doctorUrl } from '../lib.mjs';
import { placements } from '../videos.mjs';

const P = site.phone.display;
export const guidesUrl = '/women-health-guides/';
const care = (what) => `<p>${site.doctor.name}, ${site.doctor.role} at ${site.name}, Erode Fort, sees women for ${what}. Message us on WhatsApp or call ${P} to book. Clinic hours are ${site.hours.opd}, and emergency care is available ${site.hours.emergency}. <a href="${doctorUrl}">About the doctor</a>.</p>
<p class="note">This guide is general information to help you decide when to seek care. It is not a diagnosis and does not replace advice from your own doctor.</p>`;
const list = (items) => `<ul class="checks">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const urgent = (title, items, tail = '') => `<div class="callout warn"><h3>${title}</h3>${list(items)}${tail}</div>`;

/* ---------------- English guides ---------------- */
const en = [
  {
    slug: 'irregular-periods',
    title: 'Irregular Periods: Causes and Treatment | Abishek Hospital',
    description: `Why periods become irregular (PCOS, thyroid, stress, weight) and when to see a gynecologist in Erode. A guide from Abishek Hospital. Call ${P}.`,
    h1: 'Irregular Periods: <em>Causes</em> and When to See a Doctor',
    tamil: 'ஒழுங்கற்ற மாதவிடாய் · மாதவிடாய் பிரச்சனை',
    lead: 'Irregular periods are very common, and many causes are easy to treat. Here is what is normal, what can cause a change, and the signs that mean you should see a gynecologist.',
    icon: 'droplets', ta: 'irregular-periods', service: 'periods and menstrual problems, PCOS and hormonal care',
    facts: [
      { icon: 'calendar', title: 'Usual cycle: 21 to 35 days', text: 'Counted from day 1 of one period to day 1 of the next' },
      { icon: 'droplets', title: 'Usual bleeding: 2 to 7 days', text: 'Teenagers and women near menopause vary more' },
      { icon: 'stethoscope', title: 'See a doctor if', text: 'No period for 3 months, or very heavy or painful bleeding' },
    ],
    sections: [
      { id: 'normal', title: 'What is a normal period?', nav: 'What is normal', html: `<p>Count the days from the first day of one period to the first day of the next. In most adult women this is between 21 and 35 days, and bleeding lasts about 2 to 7 days. In the first few years after periods begin, and in the years before menopause, cycles are often less regular.</p>` },
      { id: 'causes', title: 'Common causes of irregular periods', nav: 'Causes', html: `<p>Many things can change your cycle. Some are temporary and some need treatment:</p>${list(['<b>PCOS / PCOD</b> (polycystic ovaries): irregular ovulation, often with acne, extra hair growth or weight gain', '<b>Thyroid problems</b>, an underactive or overactive thyroid', '<b>Stress</b>, sudden weight loss or gain, very heavy exercise', '<b>Pregnancy and breastfeeding</b>', '<b>Birth control</b> pills, injections or a hormonal IUD', '<b>Raised prolactin</b>, a hormone that can stop ovulation', '<b>Perimenopause</b>, the years before menopause', '<b>Fibroids or polyps</b> in the womb, usually with heavy or long bleeding'])}<p>Read more about <a href="${slugUrl('pcos-treatment-erode')}">PCOS treatment</a> and <a href="${slugUrl('gynecologist-erode')}">gynaecology care</a>.</p>` },
      { id: 'see-doctor', title: 'When should I see a gynecologist?', nav: 'When to see a doctor', html: urgent('See a doctor if you have:', ['no period for 3 months and you are not pregnant', 'cycles shorter than 21 days or longer than 35 days, again and again', 'bleeding for more than 7 days', 'bleeding so heavy that you soak a pad every hour or two, or pass large clots', 'bleeding between periods, after sex, or after menopause', 'severe period pain that stops your daily life', 'acne, extra facial hair and weight gain together (signs of PCOS)', 'no pregnancy after 12 months of trying (6 months if you are 35 or older)']) },
      { id: 'tests', title: 'What tests and treatment can I expect?', nav: 'Tests and treatment', html: `<p>Your doctor will ask about your cycles and may suggest a pregnancy test, blood tests (for example thyroid and hormones, and haemoglobin if bleeding is heavy) and an ultrasound scan of the pelvis. Treatment depends on the cause. It can be lifestyle changes, medicines to regulate the cycle or treat the underlying problem, or, for fibroids and polyps, a procedure. Please do not take hormone tablets on your own.</p>` },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('irregular, heavy and painful periods') },
    ],
    faqs: [
      ['Are irregular periods always PCOS?', 'No. PCOS is one common cause, but thyroid problems, stress, weight changes, birth control and other conditions can also change your cycle. A check-up and simple tests find the cause.'],
      ['Can stress delay my period?', 'Yes. Stress, illness, travel, sudden weight change and heavy exercise can delay a period. If it keeps happening, get checked.'],
      ['When should I take a pregnancy test if my period is late?', 'A home urine test is reliable from the day your period was due. The first urine of the morning is best. If it is negative and the period still does not come, repeat it after a week and see your doctor.'],
      ['Can irregular periods affect getting pregnant?', `They can, because ovulation may be irregular. Many women still conceive with simple treatment. See <a href="${slugUrl('infertility-treatment-erode')}">fertility care</a> if you have been trying for 12 months (6 months if you are 35 or older).`],
    ],
    related: ['pcos-treatment-erode', 'gynecologist-erode', 'infertility-treatment-erode', 'maternity-hospital-erode'],
    waText: 'Hello Abishek Hospital, I would like to book an appointment for irregular periods.',
  },
  {
    slug: 'white-discharge',
    title: 'White Discharge: Normal or Not? | Abishek Hospital, Erode',
    description: `When white discharge is normal, when it is a sign of infection, and when to see a gynecologist. Simple guide from Abishek Hospital. Call ${P}.`,
    h1: 'White Discharge in Women: <em>Normal or Not?</em>',
    tamil: 'வெள்ளைப்படுதல் · எப்போது மருத்துவரைப் பார்க்க வேண்டும்',
    lead: 'A little white or clear vaginal discharge is normal and healthy. It is a problem only when it changes in smell, colour or amount, or comes with itching, burning or pain. Here is how to tell the difference.',
    icon: 'thermometer', ta: 'white-discharge', service: 'vaginal discharge, infections and women’s health problems',
    facts: [
      { icon: 'check', title: 'Usually normal', text: 'Clear to milky white, little or no smell, changes with the cycle' },
      { icon: 'thermometer', title: 'Needs a check', text: 'Strong smell, green, yellow or grey colour, itching, pain' },
      { icon: 'hand-heart', title: 'Avoid', text: 'Washing inside the vagina and using strong soaps or sprays' },
    ],
    sections: [
      { id: 'normal', title: 'What is normal vaginal discharge?', nav: 'What is normal', html: `<p>The vagina cleans itself with a small amount of fluid. This discharge is clear or milky white, has little or no smell, and does not itch. It is usually more around ovulation, before a period, during pregnancy and while breastfeeding. Normal discharge does not make the body weak.</p>` },
      { id: 'causes', title: 'What can cause abnormal discharge?', nav: 'Causes', html: `<p>Common causes are:</p>${list(['<b>Yeast (fungal) infection:</b> thick, curd-like discharge with itching and burning', '<b>Bacterial vaginosis:</b> thin, grey-white discharge with a fishy smell', '<b>Infections passed on by sex</b>, such as trichomonas, which can cause yellow-green, frothy discharge', '<b>Cervical infection or a polyp</b> on the cervix', '<b>A forgotten tampon</b> or other object left in the vagina'])}<p>The treatment is different for each cause, so please do not keep buying creams or tablets without a check-up.</p>` },
      { id: 'see-doctor', title: 'When should I see a doctor?', nav: 'When to see a doctor', html: urgent('See a doctor if you have discharge with:', ['a strong or fishy smell', 'green, yellow or grey colour', 'itching, burning, redness or swelling', 'pain in the lower tummy or pain during sex', 'burning while passing urine', 'bleeding between periods or after sex', 'fever', 'a pregnancy: any unusual discharge, or a watery leak, needs a check on the same day']) },
      { id: 'self-care', title: 'Everyday care', nav: 'Everyday care', html: list(['Wash only the outside with plain water. Do not wash inside the vagina (douching) and avoid perfumed soaps, sprays and wipes.', 'Wear cotton underwear, change it daily and dry well after a bath.', 'Wipe from front to back after using the toilet.', 'If you are given medicine, finish the full course. Some infections need your partner to be treated too.']) },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('white discharge, vaginal infections and other gynaecological problems') },
    ],
    faqs: [
      ['Is white discharge before periods normal?', 'Usually yes. A rise in clear or white discharge before a period is common. See a doctor if it smells, itches, burns or comes with pain.'],
      ['Does white discharge mean pregnancy?', 'Not by itself. Discharge can increase in early pregnancy, but a missed period and a pregnancy test are the signs to rely on.'],
      ['Does white discharge cause weakness or back pain?', 'Normal discharge does not. If you feel tired, weak or have back pain, ask your doctor to check for other causes, such as low iron (anaemia) or infection.'],
      ['Can I treat it at home?', 'Everyday hygiene helps, but the right treatment depends on the cause. Please see a doctor instead of repeating creams or tablets on your own.'],
    ],
    related: ['gynecologist-erode', 'pcos-treatment-erode', 'maternity-hospital-erode', 'infertility-treatment-erode'],
    waText: 'Hello Abishek Hospital, I would like to book an appointment for white discharge.',
  },
  {
    slug: 'early-pregnancy-symptoms',
    title: 'Early Pregnancy Symptoms & First Steps | Abishek Hospital',
    description: `Early signs of pregnancy, when to take a test, what to do in the first weeks and the danger signs. A simple guide from Abishek Hospital. Call ${P}.`,
    h1: '<em>Early Pregnancy</em> Symptoms and What to Do First',
    tamil: 'கர்ப்பத்தின் ஆரம்ப அறிகுறிகள் · கர்ப்பப் பரிசோதனை',
    lead: 'A missed period is often the first sign, but nausea, tender breasts and tiredness are common too. Here are the usual signs, when to test, what to do in the first weeks and the signs that need urgent care.',
    icon: 'baby', ta: 'early-pregnancy-symptoms', service: 'early pregnancy, antenatal care and delivery',
    facts: [
      { icon: 'calendar', title: 'Most common sign', text: 'A missed period' },
      { icon: 'clipboard', title: 'Home test', text: 'Reliable from the day your period was due' },
      { icon: 'stethoscope', title: 'First visit', text: 'As soon as the test is positive, ideally in the first trimester' },
    ],
    sections: [
      { id: 'signs', title: 'Common early signs of pregnancy', nav: 'Common signs', html: list(['a missed period', 'nausea or vomiting, usually from about 6 weeks', 'tender or swollen breasts', 'unusual tiredness', 'passing urine more often', 'dislike of foods you used to enjoy', 'mild cramps or very light spotting']) + '<p>These signs can also have other causes, and some women have none, so only a test confirms pregnancy.</p>' },
      { id: 'test', title: 'When to take a pregnancy test', nav: 'Pregnancy test', html: `<p>A home urine test is reliable from the day your period was due. The first urine of the morning gives the clearest result. If it is negative and your period still does not come, repeat it after a week. Your doctor can confirm the pregnancy and check its position and heartbeat with an ultrasound scan, usually at about 6 to 8 weeks.</p><p>Know your due date: use our free <a href="/pregnancy-due-date-calculator/">pregnancy due date calculator</a>.</p>` },
      { id: 'first-steps', title: 'What to do in the first weeks', nav: 'First steps', html: list(['Book your first antenatal visit as soon as the test is positive, ideally in the first trimester.', 'Take folic acid as your doctor advises, ideally from before you conceive.', 'Stop tobacco, pan, gutkha and alcohol completely.', 'Do not take any medicine, including traditional or herbal medicines, without asking your doctor.', 'Eat balanced home-cooked meals, drink enough water and rest well.']) + `<p>See our <a href="${guidesUrl}food-and-care-in-early-pregnancy/">guide to food and care in early pregnancy</a> and <a href="${slugUrl('maternity-hospital-erode')}">antenatal care at Abishek Hospital</a>.</p>` },
      { id: 'danger', title: 'Danger signs: get help straight away', nav: 'Danger signs', html: urgent('Call ' + P + ' or go to the nearest hospital for:', ['heavy vaginal bleeding', 'severe pain on one side of the tummy, or pain at the tip of the shoulder', 'fainting or severe dizziness', 'vomiting so much that you cannot keep water down', 'fever or burning while passing urine'], `<p>Emergency care is available ${site.hours.emergency}. In a life-threatening emergency dial 108 or 112 for an ambulance.</p>`) },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('pregnancy care from the first visit to delivery') },
    ],
    faqs: [
      ['Can I feel pregnancy symptoms before a missed period?', 'Some women do, but early symptoms are not reliable. A pregnancy test from the day your period is due is the dependable way to know.'],
      ['Is light spotting normal in early pregnancy?', 'A little spotting can happen, but any bleeding in pregnancy should be checked by your doctor. If it is heavy or comes with pain, get help at once.'],
      ['How soon should I see a doctor after a positive test?', 'As soon as you can, ideally in the first trimester. Early care lets your doctor check your health, confirm your due date and catch any risk early.'],
    ],
    related: ['maternity-hospital-erode', 'normal-painless-delivery-erode', 'high-risk-pregnancy-erode', 'gynecologist-erode'],
    waText: 'Hello Abishek Hospital, I would like to book my first antenatal visit.',
  },
  {
    slug: 'normal-delivery-vs-caesarean',
    title: 'Normal Delivery or Caesarean? | Abishek Hospital',
    description: `Normal (vaginal) delivery and caesarean compared: benefits, risks, recovery and when a caesarean is advised. A plain guide from Abishek Hospital, Erode.`,
    h1: 'Normal Delivery or <em>Caesarean</em>? A Simple Guide',
    tamil: 'சுகப்பிரசவம் அல்லது சிசேரியன் · வலியில்லா பிரசவம்',
    lead: 'Both are safe when they are the right choice for you and your baby. This guide explains the differences in simple words, and why the decision is best made with your doctor.',
    icon: 'syringe', ta: 'normal-delivery-vs-caesarean', service: 'normal and painless delivery and caesarean birth',
    facts: [
      { icon: 'heart', title: 'Normal delivery', text: 'Usually a shorter stay and quicker recovery' },
      { icon: 'scissors', title: 'Caesarean', text: 'Surgery, advised for medical reasons' },
      { icon: 'syringe', title: 'Painless labour', text: 'An epidural can be offered with a normal delivery' },
    ],
    sections: [
      { id: 'normal', title: 'Normal (vaginal) delivery', nav: 'Normal delivery', html: `<p>When pregnancy is healthy and the baby is head down, most women can try a normal delivery. Recovery is usually quicker, the hospital stay is shorter, and there is no abdominal surgery. Risks include tears or a cut (episiotomy) that needs stitches, and sometimes the need for help with forceps or a vacuum, or a change to a caesarean during labour.</p><p>Fear of pain is a common reason women ask about a caesarean. An <a href="${slugUrl('normal-painless-delivery-erode')}">epidural (painless) labour</a> can make a normal delivery much more comfortable.</p>` },
      { id: 'caesarean', title: 'Caesarean section', nav: 'Caesarean', html: `<p>A caesarean is an operation to deliver the baby through the tummy. It is <b>planned</b> when, for example, the baby lies feet first or sideways, the placenta covers the cervix (placenta praevia), or a medical condition makes labour unsafe. It becomes an <b>emergency</b> when labour is not progressing, the baby is distressed, or there is heavy bleeding.</p><p>Recovery takes longer: a few days in hospital and several weeks at home, with care of the wound and no heavy lifting. Risks include infection, bleeding and blood clots, and it can affect later pregnancies.</p><p>For the full picture, with what happens before, during and after the operation, see <a href="${slugUrl('caesarean-delivery-erode')}">caesarean (C-section) delivery in Erode</a>.</p>` },
      { id: 'compare', title: 'Normal delivery and caesarean, side by side', nav: 'Side by side', wide: true, html: `
<div class="grid cols-2">
<div class="card flat"><h3>Normal delivery</h3><ul class="checks"><li><b>Stay:</b> usually shorter</li><li><b>Recovery:</b> usually quicker; you can often move around soon after</li><li><b>Pain:</b> labour pain, which an epidural can ease</li><li><b>Body:</b> no abdominal surgery; sometimes stitches for a tear or cut</li><li><b>Next pregnancy:</b> usually no special planning</li><li><b>Needs a change of plan when:</b> labour stops progressing or the baby is not coping</li></ul></div>
<div class="card flat"><h3>Caesarean</h3><ul class="checks"><li><b>Stay:</b> usually a few days</li><li><b>Recovery:</b> several weeks, with wound care and no heavy lifting</li><li><b>Pain:</b> pain from the wound after the operation, managed with suitable medicines</li><li><b>Body:</b> an operation on the tummy and womb</li><li><b>Next pregnancy:</b> your doctor plans the timing and the way you deliver</li><li><b>Advised when:</b> it is the safer choice for you or your baby</li></ul></div>
</div>
<div class="prose"><p style="margin-top:1.2rem">These are general differences. What is right for you depends on your health, your baby and how labour goes, so your doctor’s advice comes first.</p></div>` },
      { id: 'vbac', title: 'Can I have a normal delivery after a caesarean?', nav: 'After a caesarean', html: `<p>Often, yes. It depends on why the earlier caesarean was done, the type of scar on your womb and your current pregnancy. Your doctor will assess you individually and plan the safest way for you to deliver. See our page on <a href="${slugUrl('high-risk-pregnancy-erode')}">high-risk pregnancy care</a> if you have a medical condition.</p>` },
      { id: 'choose', title: 'How to decide', nav: 'How to decide', html: list(['Talk to your doctor early, at your antenatal visits, and ask questions.', 'Choose what is safest for you and your baby, rather than a particular date or time.', 'Keep an open mind: a plan for a normal delivery can change if the situation changes.', 'Ask about pain relief for labour.']) },
      { id: 'ask', title: 'Questions to ask your doctor', nav: 'Questions to ask', html: list(['Is there any reason in my pregnancy that makes a caesarean more likely?', 'Which delivery do you advise for me, and why?', 'What will happen if my plan changes during labour?', 'What pain relief can I have, and can I have an epidural?', 'How long will I stay, and how will my recovery go?', 'If I need a caesarean, how will it affect my next pregnancy?', 'When should I come to the hospital?']) + `<p>After the birth, read about <a href="${slugUrl('postnatal-care-erode')}">postnatal care and recovery</a>.</p>` },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('normal delivery, painless (epidural) delivery and caesarean birth') },
    ],
    faqs: [
      ['Is normal delivery always better than a caesarean?', 'For a healthy pregnancy, a normal delivery usually has a quicker recovery. But a caesarean can be the safest choice, and the best choice is the one your doctor advises for your situation.'],
      ['Can I choose a caesarean without a medical reason?', 'Please discuss it with your doctor. Surgery has risks and a longer recovery, so it is usually advised for medical reasons.'],
      ['How long does recovery take after each type of delivery?', `After a normal delivery most women feel much better within days to a couple of weeks, while a caesarean usually needs several weeks of careful recovery. Everyone is different. See <a href="${slugUrl('postnatal-care-erode')}">postnatal care</a> and <a href="${slugUrl('caesarean-delivery-erode')}">recovery after a caesarean</a>.`],
      ['Can I breastfeed after a caesarean?', 'Yes. Breastfeeding can usually start soon after the operation, with help to find comfortable positions.'],
      ['Is painless delivery available?', `Yes. Epidural (painless) labour is available at Abishek Hospital, with over 2,500 epidural deliveries. <a href="${slugUrl('normal-painless-delivery-erode')}">Read about normal and painless delivery</a>.`],
    ],
    related: ['normal-painless-delivery-erode', 'caesarean-delivery-erode', 'postnatal-care-erode', 'maternity-hospital-erode'],
    waText: 'Hello Abishek Hospital, I would like to talk about normal delivery and painless delivery.',
  },
  {
    slug: 'food-and-care-in-early-pregnancy',
    title: 'Food & Care in Early Pregnancy | Abishek Hospital',
    description: `What to eat, what to avoid and how to ease nausea in early pregnancy, with everyday Tamil Nadu foods. A guide from Abishek Hospital, Erode. Call ${P}.`,
    h1: 'Food and Care in <em>Early Pregnancy</em>',
    tamil: 'கர்ப்பகால உணவு · முதல் மூன்று மாத பராமரிப்பு',
    lead: 'You do not need a special diet. Balanced, home-cooked food, the supplements your doctor prescribes, enough water and rest are the basics. Here is a simple guide.',
    icon: 'sprout', ta: 'food-and-care-in-early-pregnancy', service: 'pregnancy care, diet advice and antenatal check-ups',
    facts: [
      { icon: 'sprout', title: 'Eat balanced meals', text: 'Dal, vegetables, greens, fruit, milk or curd, grains' },
      { icon: 'pill', title: 'Supplements', text: 'Folic acid, iron and calcium as your doctor prescribes' },
      { icon: 'shield', title: 'Avoid', text: 'Tobacco, pan, alcohol and raw or undercooked food' },
    ],
    sections: [
      { id: 'eat', title: 'What to eat', nav: 'What to eat', html: list(['<b>Pulses and dal, eggs, milk and curd, and well-cooked fish or meat</b> for protein and calcium.', '<b>Green leafy vegetables (keerai), other vegetables and fresh fruit</b> for iron, folate and fibre.', '<b>Ragi, whole grains, nuts and seeds</b> for energy and minerals.', '<b>Plenty of water</b>, and clean, freshly prepared food.']) },
      { id: 'avoid', title: 'What to avoid', nav: 'What to avoid', html: list(['Tobacco, pan, gutkha and alcohol: no amount is safe.', 'Raw or undercooked meat, fish and eggs, and unpasteurised milk.', 'Unwashed fruit and vegetables, and food left out for hours.', 'Large predatory fish such as shark and swordfish.', 'Too much tea or coffee: keep it to about two cups a day.', 'Unripe (raw) papaya, which is usually advised against in pregnancy.', 'Any herbal, traditional or “tonic” medicine, unless your doctor agrees.']) },
      { id: 'nausea', title: 'Easing morning sickness', nav: 'Morning sickness', html: `<p>Eat small, frequent meals instead of large ones, keep a dry snack such as a biscuit or puffed rice by the bed, sip water or lemon water through the day, and avoid smells and fried or oily food that make you feel sick. If you cannot keep water down, or you are losing weight, see your doctor, because this may need treatment.</p>` },
      { id: 'supplements', title: 'Supplements and check-ups', nav: 'Supplements', html: `<p>Your doctor will advise folic acid, iron and calcium, and the dose that suits you. Do not take extra or skip doses without asking. Go for your antenatal visits and tests on time. Read about <a href="${slugUrl('maternity-hospital-erode')}">antenatal care in Erode</a>, and about the <a href="${guidesUrl}early-pregnancy-symptoms/">early signs of pregnancy</a>.</p>` },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('pregnancy care and nutrition advice') },
    ],
    faqs: [
      ['Can I eat non-vegetarian food in pregnancy?', 'Yes, if it is fresh and well cooked. Avoid raw or undercooked meat, fish and eggs.'],
      ['How much tea or coffee is safe?', 'Keep it to about two cups a day in total.'],
      ['Should I eat for two?', 'No. You do not need to double your food, especially in the first trimester. Eat balanced meals and let your doctor guide your weight gain.'],
    ],
    related: ['maternity-hospital-erode', 'high-risk-pregnancy-erode', 'normal-painless-delivery-erode', 'gynecologist-erode'],
    waText: 'Hello Abishek Hospital, I would like to book a pregnancy check-up.',
  },
  {
    slug: 'care-after-delivery',
    title: 'Care After Delivery and Warning Signs | Abishek Hospital',
    description: `Looking after yourself after a normal delivery or caesarean: bleeding, stitches, feeding, mood and warning signs. A guide from Abishek Hospital, Erode.`,
    h1: 'Care <em>After Delivery</em>: Recovery and Warning Signs',
    tamil: 'பிரசவத்திற்குப் பிந்தைய பராமரிப்பு',
    lead: 'The weeks after birth are a time of healing. This guide covers what to expect, how to care for yourself and your baby, and the warning signs that need medical help.',
    icon: 'heart', ta: 'care-after-delivery', service: 'postnatal check-ups and care after delivery',
    facts: [
      { icon: 'droplets', title: 'Bleeding', text: 'Settles gradually over about 4 to 6 weeks' },
      { icon: 'stethoscope', title: 'Check-up', text: 'About 6 weeks after delivery, earlier if advised' },
      { icon: 'siren', title: 'Warning signs', text: 'Heavy bleeding, fever, foul discharge, severe pain' },
    ],
    sections: [
      { id: 'recovery', title: 'What to expect in the first weeks', nav: 'Recovery', html: `<p>Bleeding after birth is like a heavy period at first and slowly lessens over about four to six weeks. Rest as much as you can, eat well, drink plenty of water and accept help at home. If you had stitches, keep the area clean and dry. After a caesarean, keep the wound dry, avoid heavy lifting and follow your doctor’s advice on movement and rest.</p>` },
      { id: 'warning', title: 'Warning signs: get help straight away', nav: 'Warning signs', html: urgent('Call ' + P + ' or go to a hospital if you have:', ['very heavy bleeding (soaking a pad every hour) or large clots', 'fever, or foul-smelling vaginal discharge', 'a wound that is red, swollen, leaking pus or opening', 'severe pain in the tummy', 'a painful, swollen calf, breathlessness or chest pain', 'a severe headache with blurred vision or swelling', 'feeling very low or anxious, or thoughts of harming yourself or your baby'], `<p>Emergency care is available ${site.hours.emergency}. In a life-threatening emergency dial 108 or 112 for an ambulance.</p>`) },
      { id: 'feeding', title: 'Feeding your baby', nav: 'Feeding', html: `<p>Try to start breastfeeding within the first hour if you and the baby are well. Breastfeed only for the first six months, then add other foods and continue breastfeeding. If feeding hurts or the baby cannot latch, ask for help early: it usually improves with the right positioning.</p>` },
      { id: 'mood', title: 'Your mood and your check-up', nav: 'Mood and check-up', html: `<p>Feeling tearful or low in the first two weeks (“baby blues”) is common. If it lasts longer, or you feel unable to cope, please talk to your doctor: help is available. Have a postnatal check-up about six weeks after delivery (earlier after a caesarean or complications) and discuss family planning, because breastfeeding does not reliably prevent pregnancy for long. Keep your baby’s vaccines on schedule.</p>` },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('postnatal check-ups, family planning and care after delivery') },
    ],
    faqs: [
      ['How long does bleeding last after delivery?', 'It lessens gradually over about four to six weeks. See a doctor if it suddenly becomes heavy, smells foul or comes with fever.'],
      ['When can I start family planning?', 'You can discuss it at any time, and ideally at your six-week check-up. Please do not rely on breastfeeding alone to prevent pregnancy.'],
      ['When will my caesarean wound heal?', 'The skin usually heals in a few weeks, but full recovery takes longer. Follow your doctor’s advice and avoid heavy lifting until you are told it is safe.'],
    ],
    related: ['maternity-hospital-erode', 'normal-painless-delivery-erode', 'gynecologist-erode', 'infertility-treatment-erode'],
    waText: 'Hello Abishek Hospital, I would like to book a postnatal check-up.',
  },
];

const guideCrumbs = (g) => [['Home', '/'], ['Women’s health guides', guidesUrl], [g.short || g.h1.replace(/<[^>]+>/g, '')]];
function enPage(g) {
  const path = `${guidesUrl}${g.slug}/`;
  const c = guideCrumbs({ ...g, short: g.title.split(' | ')[0] });
  const data = { icon: g.icon, crumbs: c, eyebrow: 'Women’s health guide', h1: g.h1, tamil: g.tamil, lead: g.lead, waText: g.waText, facts: g.facts, sections: g.sections, faqs: g.faqs, related: g.related, videos: placements['guide/' + g.slug], share: { url: site.url + path, text: g.title.split(' | ')[0] } };
  const page = { path, title: g.title, description: g.description, schemaType: 'MedicalWebPage', crumbs: c, faqs: g.faqs, render: () => servicePage(data) };
  if (g.ta) page.alternates = [['en-IN', path], ['ta-IN', `/ta/${g.ta}/`]];
  return page;
}
export const guidePages = en.map(enPage);

/* ---------------- Tamil guides (the most searched topics; `alone: true` = a Tamil-only guide with no English twin, so no hreflang pair) ---------------- */
export const taWa = 'வணக்கம் அபிஷேக் மருத்துவமனை, நான் முன்பதிவு செய்ய விரும்புகிறேன்.';
export const taCare = `<p lang="ta">ஈரோடு கோட்டை அபிஷேக் மருத்துவமனையில் டாக்டர் ஜெயந்தி பிரபாகரனைச் சந்திக்க வாட்ஸ்அப் செய்யுங்கள் அல்லது ${P} என்ற எண்ணில் அழைக்கவும். புறநோயாளிகள் நேரம்: திங்கள் – சனி, காலை 9:00 – மாலை 6:30. அவசர சிகிச்சை 24 மணி நேரமும் உண்டு.</p>
<p class="note" lang="ta">இந்தப் பக்கம் பொதுவான தகவலுக்காக மட்டுமே. இது நோய் கண்டறிதல் அல்ல; உங்கள் மருத்துவரின் ஆலோசனைக்கு மாற்றும் அல்ல.</p>`;
export const taList = (items) => `<ul class="checks" lang="ta">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ta = [
  {
    slug: 'white-discharge', en: 'white-discharge',
    title: 'வெள்ளைப்படுதல்: காரணங்கள் | அபிஷேக்',
    description: 'வெள்ளைப்படுதல் எப்போது இயல்பானது, எப்போது தொற்றின் அறிகுறி, மருத்துவரை எப்போது பார்க்க வேண்டும் என்பதற்கான எளிய விளக்கம். ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'வெள்ளைப்படுதல்',
    h1: '<em>வெள்ளைப்படுதல்</em>: இயல்பானதா? எப்போது மருத்துவரைப் பார்க்க வேண்டும்?',
    lead: 'யோனியிலிருந்து சிறிதளவு வெள்ளை அல்லது தெளிவான திரவம் வெளியேறுவது இயல்பானதே. ஆனால் துர்நாற்றம், அரிப்பு, நிறம் மாறுதல் அல்லது வலி இருந்தால் பரிசோதனை அவசியம்.',
    sections: [
      ['இயல்பான வெள்ளைப்படுதல்', '<p lang="ta">இது யோனியைச் சுத்தமாகவும் ஈரப்பதத்துடனும் வைத்திருக்க உதவுகிறது. தெளிவான அல்லது பால் போன்ற வெள்ளை நிறத்தில், கடுமையான நாற்றம் இல்லாமல் இருக்கும். மாதவிடாய் சுழற்சியின் நடுவில், மாதவிடாய்க்கு முன், கர்ப்ப காலத்தில் மற்றும் பாலூட்டும் காலத்தில் அளவு அதிகரிக்கலாம்.</p>'],
      ['இவை இருந்தால் மருத்துவரைப் பாருங்கள்', taList(['கடுமையான அல்லது மீன் வாடை போன்ற துர்நாற்றம்', 'பச்சை, மஞ்சள் அல்லது சாம்பல் நிறம்', 'தயிர் போன்ற கெட்டியான திரவத்துடன் அரிப்பு, எரிச்சல் அல்லது வீக்கம்', 'அடிவயிற்று வலி', 'சிறுநீர் கழிக்கும்போது எரிச்சல்', 'மாதவிடாய்க்கு இடையில் அல்லது உறவுக்குப் பின் ரத்தப்போக்கு', 'காய்ச்சல்', 'கர்ப்ப காலத்தில் ஏதேனும் அசாதாரண திரவம் அல்லது தண்ணீர் போல கசிவு'])],
      ['பொதுவான காரணங்கள்', '<p lang="ta">பூஞ்சைத் தொற்று, பாக்டீரியா தொற்று, டிரைக்கோமோனாஸ் போன்ற பாலியல் தொடர்பான தொற்றுகள், கருப்பை வாயில் வீக்கம் அல்லது கட்டி ஆகியவை காரணங்களாக இருக்கலாம். காரணத்தைப் பொறுத்தே சிகிச்சை மாறும்; எனவே சுயமாக மருந்து வாங்கிப் பயன்படுத்த வேண்டாம்.</p>'],
      ['அன்றாடப் பராமரிப்பு', taList(['வெளிப்புறப் பகுதியை மட்டும் சுத்தமான தண்ணீரால் கழுவுங்கள்', 'யோனிக்குள் கழுவுவதையும் வாசனை சோப்பு, ஸ்ப்ரே பயன்படுத்துவதையும் தவிர்க்கவும்', 'பருத்தி உள்ளாடை அணிந்து தினமும் மாற்றவும்', 'மருத்துவர் தந்த மருந்தை முழுமையாக முடிக்கவும்'])],
    ],
    faqs: [
      ['வெள்ளைப்படுதலால் உடல் பலவீனம் அடையுமா?', 'இயல்பான வெள்ளைப்படுதலால் பலவீனம் ஏற்படாது. சோர்வு இருந்தால் ரத்தசோகை (இரும்புச்சத்து குறைவு) உள்ளதா என்று மருத்துவரிடம் பரிசோதித்துக் கொள்ளுங்கள்.'],
      ['மாதவிடாய்க்கு முன் வெள்ளைப்படுதல் இயல்பானதா?', 'பொதுவாக ஆம். நாற்றம், அரிப்பு, வலி இல்லாவிட்டால் கவலை வேண்டாம்.'],
      ['வெள்ளைப்படுதல் கர்ப்பத்தின் அறிகுறியா?', 'அது மட்டுமே அறிகுறி அல்ல. மாதவிடாய் தள்ளிப்போனால் கர்ப்பப் பரிசோதனை செய்யுங்கள்.'],
    ],
  },
  {
    slug: 'irregular-periods', en: 'irregular-periods',
    title: 'ஒழுங்கற்ற மாதவிடாய்: காரணங்கள் | அபிஷேக்',
    description: 'மாதவிடாய் ஒழுங்கற்று வருவதற்கான காரணங்கள் (பிசிஓஎஸ், தைராய்டு, மன அழுத்தம்), மருத்துவரை எப்போது பார்க்க வேண்டும் என்பதற்கான எளிய விளக்கம்.',
    crumb: 'ஒழுங்கற்ற மாதவிடாய்',
    h1: '<em>ஒழுங்கற்ற மாதவிடாய்</em>: காரணங்களும் சிகிச்சையும்',
    lead: 'மாதவிடாய் சுழற்சி பொதுவாக 21 முதல் 35 நாட்களுக்குள் வரும். அடிக்கடி இதற்கு மேல் அல்லது குறைவாக வந்தால், அல்லது மூன்று மாதங்களுக்கு மேல் வராவிட்டால் மருத்துவரைப் பார்க்க வேண்டும்.',
    sections: [
      ['இயல்பான மாதவிடாய்', '<p lang="ta">ஒரு மாதவிடாய் தொடங்கிய முதல் நாளிலிருந்து அடுத்த மாதவிடாயின் முதல் நாள் வரை சுழற்சி கணக்கிடப்படும். ரத்தப்போக்கு பொதுவாக 2 முதல் 7 நாட்கள் இருக்கும். பருவம் எய்திய முதல் சில ஆண்டுகளிலும், மெனோபாஸ் நெருங்கும் காலத்திலும் சுழற்சி மாறுபடலாம்.</p>'],
      ['காரணங்கள்', taList(['பிசிஓஎஸ் / பிசிஓடி (சினைப்பை நீர்க்கட்டிகள்)', 'தைராய்டு பிரச்சனை', 'மன அழுத்தம், திடீர் எடை கூடுதல் அல்லது குறைதல்', 'கர்ப்பம் மற்றும் பாலூட்டுதல்', 'கருத்தடை மாத்திரைகள் அல்லது ஊசிகள்', 'புரோலாக்டின் ஹார்மோன் அதிகரிப்பு', 'மெனோபாஸ் நெருங்குதல்', 'கர்ப்பப்பை கட்டிகள் அல்லது பாலிப்'])],
      ['இவற்றில் ஒன்று இருந்தால் மருத்துவரைப் பாருங்கள்', taList(['கர்ப்பம் இல்லாமல் மூன்று மாதங்களுக்கு மேல் மாதவிடாய் வராதது', 'சுழற்சி 21 நாட்களுக்குக் குறைவாக அல்லது 35 நாட்களுக்கு மேல் அடிக்கடி வருவது', 'ஏழு நாட்களுக்கு மேல் ரத்தப்போக்கு', 'ஒன்று அல்லது இரண்டு மணி நேரத்திற்கு ஒரு நாப்கின் நனையும் அளவுக்கு அதிக ரத்தப்போக்கு', 'மாதவிடாய்க்கு இடையில் அல்லது உறவுக்குப் பின் ரத்தப்போக்கு', 'கடுமையான வலி', 'முகப்பரு, அதிக முடி வளர்ச்சி, எடை கூடுதல் (பிசிஓஎஸ் அறிகுறிகள்)', 'ஓராண்டு முயற்சித்தும் கர்ப்பம் தரிக்காதது (35 வயதுக்கு மேல் ஆறு மாதங்கள்)'])],
      ['பரிசோதனையும் சிகிச்சையும்', `<p lang="ta">கர்ப்பப் பரிசோதனை, தைராய்டு மற்றும் ஹார்மோன் ரத்தப் பரிசோதனைகள், அடிவயிற்று ஸ்கேன் ஆகியவை செய்யப்படலாம். காரணத்தைப் பொறுத்து வாழ்க்கை முறை மாற்றம், மருந்துகள் அல்லது பிற சிகிச்சை வழங்கப்படும். மருத்துவர் சொல்லாமல் ஹார்மோன் மாத்திரைகளை எடுக்க வேண்டாம். <a href="${slugUrl('pcos-treatment-erode')}">பிசிஓஎஸ் சிகிச்சை பற்றி (ஆங்கிலத்தில்)</a>.</p>`],
    ],
    faqs: [
      ['ஒழுங்கற்ற மாதவிடாய் எல்லாம் பிசிஓஎஸ்-ஆ?', 'இல்லை. தைராய்டு, மன அழுத்தம் உள்ளிட்ட பல காரணங்கள் உண்டு; பரிசோதனை மூலமே தெரியும்.'],
      ['மன அழுத்தத்தால் மாதவிடாய் தள்ளிப்போகுமா?', 'ஆம், தள்ளிப்போகலாம். தொடர்ந்து நடந்தால் மருத்துவரிடம் பரிசோதித்துக் கொள்ளுங்கள்.'],
      ['மாதவிடாய் தள்ளிப்போனால் எப்போது கர்ப்பப் பரிசோதனை செய்யலாம்?', 'மாதவிடாய் வர வேண்டிய நாளிலிருந்து செய்யலாம்; காலையின் முதல் சிறுநீரில் செய்வது சிறந்தது.'],
    ],
  },
  {
    slug: 'early-pregnancy-symptoms', en: 'early-pregnancy-symptoms',
    title: 'கர்ப்பத்தின் ஆரம்ப அறிகுறிகள் | அபிஷேக்',
    description: 'கர்ப்பத்தின் ஆரம்ப அறிகுறிகள், கர்ப்பப் பரிசோதனை எப்போது செய்யலாம், முதல் வாரங்களில் செய்ய வேண்டியவை மற்றும் ஆபத்து அறிகுறிகள். ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'கர்ப்பத்தின் ஆரம்ப அறிகுறிகள்',
    h1: 'கர்ப்பத்தின் <em>ஆரம்ப அறிகுறிகள்</em>',
    lead: 'மாதவிடாய் தள்ளிப்போவது கர்ப்பத்தின் முதல் அறிகுறியாக இருப்பது பொதுவானது. குமட்டல், மார்பகங்களில் வலி, சோர்வு போன்றவையும் இருக்கலாம். பரிசோதனையால் உறுதிசெய்து, உடனே மருத்துவரைப் பார்ப்பது நல்லது.',
    sections: [
      ['பொதுவான அறிகுறிகள்', taList(['மாதவிடாய் தள்ளிப்போதல்', 'குமட்டல் அல்லது வாந்தி (பெரும்பாலும் ஆறாவது வாரத்திலிருந்து)', 'மார்பகங்களில் வலி அல்லது வீக்கம்', 'அதிக சோர்வு', 'அடிக்கடி சிறுநீர் கழித்தல்', 'சில உணவுகள் பிடிக்காமல் போதல்', 'லேசான வயிற்றுப் பிடிப்பு அல்லது மிகக் குறைவான புள்ளி ரத்தம்'])],
      ['கர்ப்பப் பரிசோதனை', `<p lang="ta">வீட்டிலேயே சிறுநீர் கர்ப்பப் பரிசோதனை செய்யலாம். மாதவிடாய் வர வேண்டிய நாளிலிருந்து சரியான முடிவு கிடைக்கும்; காலையின் முதல் சிறுநீர் சிறந்தது. எதிர்மறை வந்தும் மாதவிடாய் வராவிட்டால் ஒரு வாரம் கழித்து மீண்டும் செய்யுங்கள். ஸ்கேன் மூலம் மருத்துவர் கர்ப்பத்தை உறுதிசெய்வார். பிரசவ தேதியை அறிய: <a href="/pregnancy-due-date-calculator/">பிரசவ தேதி கணிப்பான் (ஆங்கிலத்தில்)</a>.</p>`],
      ['முதல் வாரங்களில் என்ன செய்ய வேண்டும்', taList(['முதல் மூன்று மாதத்திற்குள் மருத்துவரைச் சந்திக்கவும்', 'மருத்துவர் அறிவுறுத்தியபடி ஃபோலிக் அமில மாத்திரை எடுத்துக்கொள்ளவும்', 'புகையிலை, பான், மது முற்றிலும் தவிர்க்கவும்', 'மருத்துவரிடம் கேட்காமல் மருந்துகள், நாட்டு மருந்துகள் எடுக்க வேண்டாம்', 'சமச்சீர் உணவு, போதுமான தண்ணீர், ஓய்வு'])],
      ['உடனே மருத்துவமனைக்குச் செல்ல வேண்டிய நிலைகள்', `<div class="callout warn" lang="ta">${taList(['அதிக ரத்தப்போக்கு', 'வயிற்றின் ஒரு பக்கத்தில் கடுமையான வலி அல்லது தோள்பட்டை வலி', 'மயக்கம்', 'தொடர்ந்து வாந்தி, தண்ணீர்கூட தங்காதது', 'காய்ச்சல் அல்லது சிறுநீர் கழிக்கும்போது எரிச்சல்'])}<p>${P} என்ற எண்ணில் அழைக்கவும்; அவசர சிகிச்சை 24 மணி நேரமும் உண்டு. உயிருக்கு ஆபத்தான நிலையில் 108 அல்லது 112-ஐ அழைக்கவும்.</p></div>`],
    ],
    faqs: [
      ['மாதவிடாய் தள்ளிப்போகும் முன்பே அறிகுறிகள் தெரியுமா?', 'சிலருக்குத் தெரியலாம், ஆனால் அவை நம்பகமானவை அல்ல. பரிசோதனையே உறுதியான வழி.'],
      ['கர்ப்பத்தில் லேசான புள்ளி ரத்தம் இயல்பானதா?', 'சிலருக்கு ஏற்படலாம்; ஆனாலும் எந்த ரத்தப்போக்கையும் மருத்துவரிடம் காட்ட வேண்டும்.'],
    ],
  },
  {
    slug: 'normal-delivery-vs-caesarean', en: 'normal-delivery-vs-caesarean',
    title: 'சுகப்பிரசவமா, சிசேரியனா? எளிய வழிகாட்டி | அபிஷேக்',
    description: 'சுகப்பிரசவம் மற்றும் சிசேரியன் ஒப்பீடு: நன்மைகள், அபாயங்கள், குணமடையும் காலம், சிசேரியன் எப்போது தேவை. ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'சுகப்பிரசவம் அல்லது சிசேரியன்',
    h1: '<em>சுகப்பிரசவமா</em>, சிசேரியனா? எளிய வழிகாட்டி',
    lead: 'உங்களுக்கும் குழந்தைக்கும் எது சரியானதோ, அதைத் தேர்ந்தெடுத்தால் இரண்டுமே பாதுகாப்பானவை. வேறுபாடுகளை எளிய சொற்களில் விளக்குகிறோம்; முடிவை மருத்துவருடன் சேர்ந்து எடுப்பதே சிறந்தது.',
    sections: [
      ['சுகப்பிரசவம்', '<p lang="ta">கர்ப்பம் ஆரோக்கியமாகவும் குழந்தையின் தலை கீழ்நோக்கியும் இருந்தால், பெரும்பாலான பெண்கள் சுகப்பிரசவத்தை முயற்சிக்கலாம். பொதுவாக உடல் விரைவாகத் தேறும்; மருத்துவமனையில் தங்கும் நாட்கள் குறைவு; வயிற்றில் அறுவை சிகிச்சை இல்லை. சில நேரங்களில் கிழிவு அல்லது அறுவை (எபிசியோடமி) காரணமாகத் தையல் தேவைப்படலாம்; ஃபோர்செப்ஸ் அல்லது வாக்யூம் உதவி தேவைப்படலாம்; பிரசவத்தின் நடுவில் சிசேரியனுக்கு மாற்ற வேண்டியும் வரலாம்.</p><p lang="ta">வலி குறித்த பயமே பல பெண்கள் சிசேரியனைக் கேட்கக் காரணம். எபிடியூரல் (வலியில்லா) பிரசவம் சுகப்பிரசவத்தை மிகவும் சௌகரியமாக்கும். <a href="/ta/normal-painless-delivery-erode/">வலியில்லா பிரசவம் பற்றி மேலும்</a>.</p>'],
      ['சிசேரியன் அறுவை', '<p lang="ta">சிசேரியன் என்பது வயிற்றின் வழியாகக் குழந்தையை வெளியே எடுக்கும் அறுவை சிகிச்சை. குழந்தை கால்கள் முதலாக அல்லது குறுக்காக இருப்பது, நஞ்சுக்கொடி கருப்பை வாயை மூடியிருப்பது, பிரசவம் பாதுகாப்பற்றதாகும் உடல்நலப் பிரச்சனை போன்ற நிலைகளில் இது முன்கூட்டியே <b>திட்டமிடப்படும்</b>. பிரசவம் முன்னேறாதபோது, குழந்தை சிரமப்படும்போது அல்லது அதிக ரத்தப்போக்கு ஏற்படும்போது <b>அவசரமாகவும்</b> செய்யப்படலாம்.</p><p lang="ta">உடல் தேறுவதற்கு அதிக நேரம் ஆகும்: மருத்துவமனையில் சில நாட்கள், வீட்டில் பல வாரங்கள் காயத்தைப் பராமரிக்க வேண்டும்; கனமான பொருட்களைத் தூக்கக் கூடாது. தொற்று, ரத்தப்போக்கு, ரத்தக் கட்டிகள் போன்ற அபாயங்கள் உண்டு; அடுத்த கர்ப்பங்களையும் இது பாதிக்கலாம். <a href="/ta/caesarean-delivery-erode/">சிசேரியன் பற்றி விரிவாக</a>.</p>'],
      ['ஒரு பார்வையில் ஒப்பீடு', taList(['<b>சுகப்பிரசவம் - தங்கும் காலம்:</b> பொதுவாகக் குறைவு', '<b>சுகப்பிரசவம் - குணமடைதல்:</b> பொதுவாக விரைவு; விரைவிலேயே நடமாடலாம்', '<b>சுகப்பிரசவம் - வலி:</b> பிரசவ வலி இருக்கும்; எபிடியூரல் மூலம் குறைக்கலாம்', '<b>சிசேரியன் - தங்கும் காலம்:</b> பொதுவாக சில நாட்கள்', '<b>சிசேரியன் - குணமடைதல்:</b> பல வாரங்கள்; காயப் பராமரிப்பு, கனமான வேலை கூடாது', '<b>சிசேரியன் - அடுத்த கர்ப்பம்:</b> பிரசவ நேரத்தையும் முறையையும் மருத்துவர் திட்டமிடுவார்', 'இவை பொதுவான வேறுபாடுகள் மட்டுமே; உங்கள் உடல்நிலை, குழந்தையின் நிலை, பிரசவம் நடக்கும் விதம் ஆகியவற்றைப் பொறுத்து முடிவு மாறும்; மருத்துவரின் ஆலோசனையே முதன்மை'])],
      ['சிசேரியனுக்குப் பிறகு சுகப்பிரசவம் சாத்தியமா?', '<p lang="ta">பல நேரங்களில் சாத்தியமே. முந்தைய சிசேரியன் ஏன் செய்யப்பட்டது, கருப்பையில் உள்ள தழும்பின் வகை, தற்போதைய கர்ப்பத்தின் நிலை ஆகியவற்றைப் பொறுத்தது. மருத்துவர் உங்களைத் தனியாகப் பரிசோதித்து, பாதுகாப்பான பிரசவ முறையைத் திட்டமிடுவார்.</p>'],
      ['எப்படி முடிவெடுப்பது?', taList(['கர்ப்பகால பரிசோதனைகளின்போதே மருத்துவரிடம் பேசுங்கள்; கேள்விகள் கேளுங்கள்', 'குறிப்பிட்ட நாள் அல்லது நேரத்தை விட, உங்களுக்கும் குழந்தைக்கும் பாதுகாப்பானதைத் தேர்ந்தெடுங்கள்', 'நிலைமை மாறினால் சுகப்பிரசவத் திட்டமும் மாறலாம் என்பதை மனதில் வைத்திருங்கள்', 'பிரசவ வலி நிவாரணம் பற்றிக் கேளுங்கள்'])],
      ['மருத்துவரிடம் கேட்க வேண்டிய கேள்விகள்', taList(['என் கர்ப்பத்தில் சிசேரியன் தேவைப்படும் வாய்ப்பை அதிகரிக்கும் காரணம் ஏதாவது உண்டா?', 'எனக்கு எந்த முறை பிரசவத்தைப் பரிந்துரைக்கிறீர்கள், ஏன்?', 'பிரசவத்தின்போது திட்டம் மாறினால் என்ன செய்வீர்கள்?', 'எனக்கு எந்த வலி நிவாரணம் கிடைக்கும்? எபிடியூரல் எடுத்துக்கொள்ளலாமா?', 'எத்தனை நாட்கள் மருத்துவமனையில் இருக்க வேண்டும்; எப்படித் தேறுவேன்?', 'சிசேரியன் தேவைப்பட்டால், அடுத்த கர்ப்பத்தில் என்ன மாற்றம் இருக்கும்?', 'எப்போது மருத்துவமனைக்கு வர வேண்டும்?'])],
    ],
    faqs: [
      ['சுகப்பிரசவம் எப்போதும் சிசேரியனை விடச் சிறந்ததா?', 'ஆரோக்கியமான கர்ப்பத்தில் சுகப்பிரசவத்தில் பொதுவாக விரைவாகத் தேறலாம். ஆனால் சில நேரங்களில் சிசேரியனே பாதுகாப்பான தேர்வு; உங்கள் நிலைக்கு மருத்துவர் பரிந்துரைப்பதே சிறந்தது.'],
      ['மருத்துவக் காரணம் இல்லாமல் சிசேரியன் கேட்கலாமா?', 'மருத்துவரிடம் இதைப் பற்றி விவாதியுங்கள். அறுவை சிகிச்சையில் அபாயங்களும் நீண்ட குணமடையும் காலமும் உண்டு; எனவே பொதுவாக மருத்துவக் காரணங்களுக்காகவே பரிந்துரைக்கப்படும்.'],
      ['சிசேரியனுக்குப் பிறகு தாய்ப்பால் கொடுக்கலாமா?', 'கொடுக்கலாம். அறுவைக்குப் பிறகு விரைவிலேயே தொடங்கலாம்; வசதியான நிலைகளைக் கண்டறிய உதவி கிடைக்கும்.'],
      ['வலியில்லா பிரசவம் உண்டா?', 'ஆம். அபிஷேக் மருத்துவமனையில் எபிடியூரல் (வலியில்லா) பிரசவம் உண்டு; 2,500-க்கும் மேற்பட்ட எபிடியூரல் பிரசவங்கள் நடந்துள்ளன.'],
    ],
  },
  {
    slug: 'food-and-care-in-early-pregnancy', en: 'food-and-care-in-early-pregnancy',
    title: 'கர்ப்பகால உணவும் பராமரிப்பும் | அபிஷேக்',
    description: 'ஆரம்ப கர்ப்பத்தில் என்ன சாப்பிட வேண்டும், எதைத் தவிர்க்க வேண்டும், வாந்தி குமட்டலைக் குறைப்பது எப்படி. ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'கர்ப்பகால உணவு',
    h1: 'ஆரம்ப கர்ப்பத்தில் <em>உணவும் பராமரிப்பும்</em>',
    lead: 'சிறப்பு உணவு எதுவும் தேவையில்லை. வீட்டில் சமைத்த சமச்சீர் உணவு, மருத்துவர் தரும் சத்து மாத்திரைகள், போதுமான தண்ணீர், ஓய்வு ஆகியவையே அடிப்படை. எளிய வழிகாட்டி இதோ.',
    sections: [
      ['என்ன சாப்பிடலாம்?', taList(['<b>பருப்பு, முட்டை, பால், தயிர், நன்கு வேகவைத்த மீன் அல்லது இறைச்சி</b>: புரதமும் கால்சியமும் கிடைக்கும்', '<b>கீரைகள், காய்கறிகள், புதிய பழங்கள்</b>: இரும்புச்சத்து, ஃபோலேட், நார்ச்சத்து கிடைக்கும்', '<b>கேழ்வரகு, முழு தானியங்கள், கொட்டைகள், விதைகள்</b>: ஆற்றலும் தாதுக்களும் கிடைக்கும்', '<b>போதுமான தண்ணீர்</b>, சுத்தமான, புதிதாகச் சமைத்த உணவு'])],
      ['எதைத் தவிர்க்க வேண்டும்?', taList(['புகையிலை, பான், குட்கா, மது: எந்த அளவும் பாதுகாப்பானதல்ல', 'வேகாத அல்லது அரைகுறையாக வெந்த இறைச்சி, மீன், முட்டை; காய்ச்சாத பால்', 'கழுவாத பழங்கள், காய்கறிகள்; பல மணி நேரம் வெளியே வைத்த உணவு', 'ஷார்க், வாள்மீன் போன்ற பெரிய கொள்ளை மீன்கள்', 'அதிகமான தேநீர் அல்லது காபி: ஒரு நாளைக்கு சுமார் இரண்டு கோப்பை வரை மட்டும்', 'பழுக்காத (பச்சை) பப்பாளி: கர்ப்ப காலத்தில் பொதுவாகத் தவிர்க்கச் சொல்லப்படுகிறது', 'மருத்துவர் ஒப்புக்கொள்ளாமல் மூலிகை, நாட்டு மருந்து, "டானிக்" எதுவும் எடுக்க வேண்டாம்'])],
      ['வாந்தி, குமட்டலைக் குறைக்க', '<p lang="ta">ஒரே நேரத்தில் அதிகம் சாப்பிடாமல் சிறிது சிறிதாக அடிக்கடி சாப்பிடுங்கள். படுக்கைக்கு அருகில் பிஸ்கட் அல்லது பொரி போன்ற உலர்ந்த உணவை வைத்துக்கொள்ளுங்கள். நாள் முழுவதும் தண்ணீர் அல்லது எலுமிச்சை நீரைச் சிறிது சிறிதாகப் பருகுங்கள். குமட்டலை அதிகரிக்கும் வாசனைகளையும் எண்ணெய், பொரித்த உணவுகளையும் தவிருங்கள். தண்ணீர்கூடத் தங்காவிட்டால் அல்லது எடை குறைந்தால் மருத்துவரைப் பாருங்கள்; இதற்குச் சிகிச்சை தேவைப்படலாம்.</p>'],
      ['சத்து மாத்திரைகளும் பரிசோதனைகளும்', `<p lang="ta">ஃபோலிக் அமிலம், இரும்பு, கால்சியம் ஆகியவற்றை உங்களுக்குப் பொருத்தமான அளவில் மருத்துவர் பரிந்துரைப்பார். மருத்துவரிடம் கேட்காமல் கூடுதலாக எடுக்கவோ தவிர்க்கவோ வேண்டாம். கர்ப்பகாலப் பரிசோதனைகளையும் ஸ்கேன்களையும் உரிய நேரத்தில் செய்துகொள்ளுங்கள். <a href="/ta/early-pregnancy-symptoms/">கர்ப்பத்தின் ஆரம்ப அறிகுறிகள்</a> பற்றியும் <a href="/ta/pregnancy-scans/">கர்ப்பகால ஸ்கேன்கள்</a> பற்றியும் படிக்கலாம்.</p>`],
    ],
    faqs: [
      ['கர்ப்ப காலத்தில் அசைவ உணவு சாப்பிடலாமா?', 'சாப்பிடலாம், புதியதாகவும் நன்றாக வேகவைத்ததாகவும் இருந்தால். வேகாத இறைச்சி, மீன், முட்டையைத் தவிர்க்கவும்.'],
      ['தேநீர், காபி எவ்வளவு பாதுகாப்பானது?', 'மொத்தமாக ஒரு நாளைக்கு சுமார் இரண்டு கோப்பை வரை.'],
      ['இருவருக்கான உணவை நான் சாப்பிட வேண்டுமா?', 'வேண்டாம். குறிப்பாக முதல் மூன்று மாதங்களில் உணவை இரட்டிப்பாக்கத் தேவையில்லை. சமச்சீராகச் சாப்பிடுங்கள்; எடை கூடுதலை மருத்துவர் வழிநடத்துவார்.'],
    ],
  },
  {
    slug: 'care-after-delivery', en: 'care-after-delivery',
    title: 'பிரசவத்திற்குப் பிந்தைய பராமரிப்பு | அபிஷேக்',
    description: 'சுகப்பிரசவம் அல்லது சிசேரியனுக்குப் பிறகு ரத்தப்போக்கு, தையல், பாலூட்டுதல், மனநிலை, ஆபத்து அறிகுறிகள். ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'பிரசவத்திற்குப் பிந்தைய பராமரிப்பு',
    h1: 'பிரசவத்திற்குப் பிந்தைய <em>பராமரிப்பு</em>: குணமடைதலும் ஆபத்து அறிகுறிகளும்',
    lead: 'குழந்தை பிறந்த பின் வரும் வாரங்கள் உடல் தேறும் காலம். என்ன நடக்கும், உங்களையும் குழந்தையையும் எப்படிப் பராமரிப்பது, எந்த அறிகுறிகளுக்கு மருத்துவ உதவி தேவை என்பதை இந்தப் பக்கம் விளக்குகிறது.',
    sections: [
      ['முதல் வாரங்களில் என்ன நடக்கும்?', '<p lang="ta">பிரசவத்திற்குப் பின் ஏற்படும் ரத்தப்போக்கு தொடக்கத்தில் அதிக மாதவிடாய் போல இருக்கும்; சுமார் நான்கு முதல் ஆறு வாரங்களில் படிப்படியாகக் குறையும். முடிந்தவரை ஓய்வெடுங்கள், நன்றாகச் சாப்பிடுங்கள், போதுமான தண்ணீர் குடியுங்கள், வீட்டில் உதவியை ஏற்றுக்கொள்ளுங்கள். தையல் போடப்பட்டிருந்தால் அந்தப் பகுதியைச் சுத்தமாகவும் உலர்ந்ததாகவும் வையுங்கள். சிசேரியனுக்குப் பிறகு காயத்தை உலர்ந்ததாக வைத்து, கனமான பொருட்களைத் தூக்காமல், நடமாட்டம் மற்றும் ஓய்வு பற்றிய மருத்துவர் ஆலோசனையைப் பின்பற்றுங்கள்.</p>'],
      ['ஆபத்து அறிகுறிகள்: உடனே உதவி பெறுங்கள்', `<div class="callout warn" lang="ta"><h3>இவற்றில் ஏதேனும் இருந்தால் ${P} என்ற எண்ணில் அழைக்கவும் அல்லது மருத்துவமனைக்குச் செல்லவும்:</h3>${taList(['மிக அதிக ரத்தப்போக்கு (ஒவ்வொரு மணி நேரமும் நாப்கின் நனைதல்) அல்லது பெரிய ரத்தக் கட்டிகள்', 'காய்ச்சல், அல்லது துர்நாற்றம் வீசும் திரவம்', 'காயம் சிவந்து, வீங்கி, சீழ் வடிதல் அல்லது பிரிதல்', 'வயிற்றில் கடுமையான வலி', 'கணுக்காலில் வலியுடன் வீக்கம், மூச்சுத் திணறல் அல்லது நெஞ்சு வலி', 'கடுமையான தலைவலியுடன் பார்வை மங்குதல் அல்லது வீக்கம்', 'மிகவும் சோர்வாக அல்லது பதற்றமாக உணர்தல், அல்லது தன்னையோ குழந்தையையோ காயப்படுத்தும் எண்ணம்'])}<p>அவசர சிகிச்சை 24 மணி நேரமும் உண்டு. உயிருக்கு ஆபத்தான நிலையில் 108 அல்லது 112-ஐ அழைக்கவும்.</p></div>`],
      ['குழந்தைக்குப் பாலூட்டுதல்', '<p lang="ta">தாயும் குழந்தையும் நலமாக இருந்தால், பிறந்த முதல் மணி நேரத்திற்குள் தாய்ப்பால் தொடங்க முயலுங்கள். முதல் ஆறு மாதங்கள் தாய்ப்பால் மட்டும் கொடுங்கள்; பின்னர் மற்ற உணவுகளைச் சேர்த்துத் தாய்ப்பாலையும் தொடருங்கள். பால் கொடுக்கும்போது வலித்தாலோ குழந்தை சரியாகப் பிடிக்கவில்லை என்றாலோ தாமதிக்காமல் உதவி கேளுங்கள்; சரியான நிலையில் வைத்தால் பொதுவாகச் சரியாகும்.</p>'],
      ['உங்கள் மனநிலையும் பரிசோதனையும்', '<p lang="ta">முதல் இரண்டு வாரங்களில் அழுகை வருவதும் மனம் சோர்வடைவதும் (“பேபி புளூஸ்”) பொதுவானது. இது நீண்ட நாட்கள் தொடர்ந்தாலோ சமாளிக்க முடியவில்லை என்று தோன்றினாலோ மருத்துவரிடம் பேசுங்கள்; உதவி கிடைக்கும். பிரசவத்திற்கு சுமார் ஆறு வாரங்களுக்குப் பின் (சிசேரியன் அல்லது சிக்கல்கள் இருந்தால் அதற்கு முன்பே) பிரசவத்திற்குப் பிந்தைய பரிசோதனை செய்துகொள்ளுங்கள்; குடும்பக் கட்டுப்பாடு பற்றியும் பேசுங்கள், ஏனெனில் தாய்ப்பால் கொடுப்பதால் மட்டும் நீண்ட காலம் கர்ப்பத்தைத் தடுக்க முடியாது. குழந்தையின் தடுப்பூசிகளை அட்டவணைப்படி போடுங்கள்.</p>'],
    ],
    faqs: [
      ['பிரசவத்திற்குப் பின் ரத்தப்போக்கு எத்தனை நாள் நீடிக்கும்?', 'சுமார் நான்கு முதல் ஆறு வாரங்களில் படிப்படியாகக் குறையும். திடீரென அதிகமானால், துர்நாற்றம் வீசினால் அல்லது காய்ச்சலுடன் வந்தால் மருத்துவரைப் பாருங்கள்.'],
      ['குடும்பக் கட்டுப்பாட்டை எப்போது தொடங்கலாம்?', 'எப்போது வேண்டுமானாலும் பேசலாம்; ஆறு வார பரிசோதனையில் பேசுவது சிறந்தது. தாய்ப்பால் கொடுப்பதை மட்டும் நம்பி கர்ப்பத்தைத் தவிர்க்க வேண்டாம்.'],
      ['சிசேரியன் காயம் எப்போது ஆறும்?', 'தோல் பொதுவாக சில வாரங்களில் ஆறும்; முழுமையாகத் தேற அதிக நாட்கள் ஆகும். மருத்துவர் ஆலோசனையைப் பின்பற்றுங்கள்; பாதுகாப்பு என்று சொல்லும் வரை கனமான பொருட்களைத் தூக்க வேண்டாம்.'],
    ],
  },
  {
    slug: 'pregnancy-scans', en: 'maternity-hospital-erode', enPath: '/maternity-hospital-erode/', enLabel: 'Pregnancy care in Erode (in English)', alone: true,
    title: 'கர்ப்பகால ஸ்கேன்கள்: எப்போது, ஏன்? | அபிஷேக்',
    description: 'கர்ப்ப காலத்தில் செய்யப்படும் ஸ்கேன்கள் எவை, எப்போது, ஏன் செய்யப்படுகின்றன என்பதற்கான எளிய விளக்கம். ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'கர்ப்பகால ஸ்கேன்கள்',
    h1: 'கர்ப்பகால <em>ஸ்கேன்கள்</em>: எப்போது, ஏன்?',
    lead: 'ஸ்கேன் என்பது ஒலி அலைகளால் குழந்தையையும் கருப்பையையும் பார்க்கும் பாதுகாப்பான பரிசோதனை. எத்தனை ஸ்கேன், எப்போது என்பது ஒவ்வொரு கர்ப்பத்திற்கும் மாறுபடும்; உங்கள் மருத்துவர் உங்களுக்கான திட்டத்தைச் சொல்வார்.',
    sections: [
      ['ஸ்கேன் ஏன் செய்யப்படுகிறது?', '<p lang="ta">கர்ப்பம் கருப்பைக்குள் சரியான இடத்தில் உள்ளதா, குழந்தையின் இதயத் துடிப்பு உள்ளதா, குழந்தையின் வளர்ச்சியும் உடல் உறுப்புகளும் சரியாக உள்ளனவா, பனிக்குட நீர் மற்றும் நஞ்சுக்கொடியின் நிலை எப்படி உள்ளது என்பதை அறிய ஸ்கேன் உதவுகிறது. ஸ்கேனில் எக்ஸ்-ரே கதிர்வீச்சு இல்லை; மருத்துவர் பரிந்துரைக்கும்போது செய்வது பாதுகாப்பானது.</p>'],
      ['பொதுவாக எந்த ஸ்கேன்கள்?', taList(['<b>ஆரம்ப ஸ்கேன் (முதல் மூன்று மாதம்):</b> கர்ப்பத்தை உறுதிசெய்ய, இதயத் துடிப்பைப் பார்க்க, பிரசவ தேதியைக் கணிக்க', '<b>சுமார் 11 முதல் 14 வாரங்களில்:</b> குழந்தையின் ஆரம்ப வளர்ச்சி மற்றும் சில குறைபாடுகளுக்கான வாய்ப்பைப் பார்க்கும் பரிசோதனை; பெரும்பாலும் ரத்தப் பரிசோதனையுடன்', '<b>சுமார் 18 முதல் 20 வாரங்களில்:</b> குழந்தையின் உடல் உறுப்புகளை விரிவாகப் பார்க்கும் ஸ்கேன்', '<b>பிந்தைய மாதங்களில்:</b> தேவைப்பட்டால் குழந்தையின் வளர்ச்சி, பனிக்குட நீர், நஞ்சுக்கொடி, குழந்தையின் நிலை ஆகியவற்றைப் பார்க்க', 'எல்லா ஸ்கேன்களும் எல்லோருக்கும் தேவைப்படாது; சிலருக்கு கூடுதல் ஸ்கேன்கள் தேவைப்படலாம்; இதை உங்கள் மருத்துவர் தீர்மானிப்பார்'])],
      ['ஸ்கேனுக்கு முன்', taList(['மருத்துவர் சொல்லும் ஸ்கேனுக்கு நேரத்தில் வாருங்கள்; சில ஸ்கேன்களுக்கு சிறுநீர்ப்பையில் சிறிது நீர் இருக்க வேண்டியிருக்கலாம்; அதுபற்றி முன்கூட்டியே கேளுங்கள்', 'முந்தைய ஸ்கேன் மற்றும் ரத்தப் பரிசோதனை அறிக்கைகளைக் கொண்டு வாருங்கள்', 'அறிக்கையில் புரியாத சொற்கள் இருந்தால் மருத்துவரிடம் கேளுங்கள்'])],
      ['குழந்தையின் பாலினம் பற்றி', '<p lang="ta">இந்தியச் சட்டப்படி, கருவில் உள்ள குழந்தையின் பாலினத்தை ஸ்கேன் மூலம் கண்டறிவதும் தெரிவிப்பதும் தடைசெய்யப்பட்டுள்ளது. எனவே ஸ்கேன் மையங்களில் இதைப் பற்றிக் கேட்க வேண்டாம்.</p>'],
      ['உடனே மருத்துவமனைக்குச் செல்ல வேண்டிய நிலைகள்', `<div class="callout warn" lang="ta">${taList(['அதிக ரத்தப்போக்கு', 'கடுமையான வயிற்று வலி', 'நீர் போன்ற திரவம் தொடர்ந்து கசிவது', 'குழந்தையின் அசைவு குறைதல் அல்லது நிற்பது', 'கடுமையான தலைவலியுடன் பார்வை மங்குதல், முகம் மற்றும் கை கால் வீக்கம்'])}<p>${P} என்ற எண்ணில் அழைக்கவும்; அவசர சிகிச்சை 24 மணி நேரமும் உண்டு. உயிருக்கு ஆபத்தான நிலையில் 108 அல்லது 112-ஐ அழைக்கவும்.</p></div>`],
    ],
    faqs: [
      ['கர்ப்பகால ஸ்கேன் குழந்தைக்குப் பாதுகாப்பானதா?', 'ஆம். ஸ்கேன் ஒலி அலைகளைப் பயன்படுத்துகிறது; எக்ஸ்-ரே கதிர்வீச்சு இல்லை. மருத்துவர் பரிந்துரைத்த ஸ்கேன்களைச் செய்துகொள்ளுங்கள்.'],
      ['கர்ப்ப காலத்தில் எத்தனை ஸ்கேன்கள் தேவை?', 'ஒவ்வொருவருக்கும் மாறுபடும். மருத்துவர் உங்கள் உடல்நிலை மற்றும் கர்ப்பத்தின் நிலையைப் பொறுத்துத் திட்டமிடுவார்.'],
      ['ஸ்கேனில் குழந்தையின் பாலினத்தைச் சொல்வார்களா?', 'இல்லை. சட்டப்படி பாலினத்தைக் கண்டறிவதும் தெரிவிப்பதும் தடைசெய்யப்பட்டுள்ளது.'],
    ],
  },
  {
    slug: 'labour-pain', en: 'normal-painless-delivery-erode', enPath: '/normal-painless-delivery-erode/', enLabel: 'Normal and painless delivery (in English)', alone: true,
    title: 'பிரசவ வலி: அறிகுறிகள், சமாளிக்கும் வழிகள் | அபிஷேக்',
    description: 'பிரசவ வலி எப்போது தொடங்குகிறது, மருத்துவமனைக்கு எப்போது வர வேண்டும், வலியைச் சமாளிக்கும் வழிகள் மற்றும் வலியில்லா பிரசவம். ஈரோடு அபிஷேக் மருத்துவமனை.',
    crumb: 'பிரசவ வலி',
    h1: '<em>பிரசவ வலி</em>: அறிகுறிகளும் சமாளிக்கும் வழிகளும்',
    lead: 'பிரசவ வலி பலருக்குப் பயத்தைத் தரும். அது எப்படித் தொடங்கும், எப்போது மருத்துவமனைக்கு வர வேண்டும், வலியைக் குறைக்க என்னென்ன வழிகள் உள்ளன என்பதை எளிய சொற்களில் தெரிந்துகொள்ளுங்கள்.',
    sections: [
      ['பிரசவ வலி தொடங்கிவிட்டதற்கான அறிகுறிகள்', taList(['அடிவயிற்றிலும் முதுகிலும் வலி ஒழுங்காக வருவது; நேரம் செல்லச் செல்ல வலியின் அளவு அதிகரித்து, இரண்டு வலிகளுக்கு இடையே உள்ள இடைவெளி குறைவது', 'பனிக்குடம் உடைந்து நீர் வெளியேறுவது', 'சளியுடன் கலந்த லேசான ரத்தம் (“ஷோ”) வெளியேறுவது', 'ஓய்வெடுத்தாலும், நடந்தாலும் வலி குறையாமல் தொடர்வது'])],
      ['எப்போது மருத்துவமனைக்கு வர வேண்டும்?', `<div class="callout warn" lang="ta">${taList(['வலி ஒழுங்காக வந்து, இடைவெளி குறைந்து, வலிமை கூடுவது', 'பனிக்குடம் உடைந்தது, அல்லது நீர் தொடர்ந்து கசிவது; நீர் பச்சையாக அல்லது ரத்தத்துடன் இருந்தால் உடனே வர வேண்டும்', 'அதிக ரத்தப்போக்கு', 'குழந்தையின் அசைவு குறைதல் அல்லது நிற்பது', 'நிற்காத, தொடர்ந்த கடுமையான வயிற்று வலி', 'கடுமையான தலைவலியுடன் பார்வை மங்குதல், முகம் மற்றும் கை கால் வீக்கம்'])}<p>சந்தேகமாக இருந்தால் தாமதிக்காமல் ${P} என்ற எண்ணில் அழைக்கவும்; அவசர சிகிச்சை 24 மணி நேரமும் உண்டு. உயிருக்கு ஆபத்தான நிலையில் 108 அல்லது 112-ஐ அழைக்கவும்.</p></div>`],
      ['வலியைச் சமாளிக்கும் இயற்கை வழிகள்', taList(['ஆழமாக, மெதுவாக மூச்சு விடுங்கள்', 'மருத்துவர் அனுமதித்தால் மெதுவாக நடங்கள்; நிலைகளை மாற்றிக்கொள்ளுங்கள்', 'முதுகை மெதுவாகத் தடவச் சொல்லுங்கள்; சூடான ஒத்தடம் அல்லது வெதுவெதுப்பான நீரில் குளிப்பது ஆறுதல் தரலாம்', 'உங்களுக்கு நம்பிக்கையான ஒருவர் உடன் இருப்பது தைரியம் தரும்', 'பிரசவத்தைப் பற்றி முன்கூட்டியே தெரிந்துகொள்வதும் மருத்துவரிடம் கேள்விகள் கேட்பதும் பயத்தைக் குறைக்கும்'])],
      ['வலியில்லா (எபிடியூரல்) பிரசவம்', '<p lang="ta">சுகப்பிரசவத்தின்போது வலியை மிகவும் குறைக்க எபிடியூரல் முறை உள்ளது. இது எல்லோருக்கும் ஏற்றதா என்பதை மருத்துவர் உங்கள் உடல்நிலையைப் பார்த்து முடிவு செய்வார். அபிஷேக் மருத்துவமனையில் 2,500-க்கும் மேற்பட்ட எபிடியூரல் பிரசவங்கள் நடந்துள்ளன. <a href="/ta/normal-painless-delivery-erode/">சுகப்பிரசவம் மற்றும் வலியில்லா பிரசவம் பற்றி மேலும்</a>.</p>'],
    ],
    faqs: [
      ['பிரசவ வலி எத்தனை மணி நேரம் இருக்கும்?', 'ஒவ்வொருவருக்கும் மாறுபடும்; முதல் பிரசவத்தில் பொதுவாகச் சற்று நீண்ட நேரம் ஆகலாம். மருத்துவ குழு உங்களையும் குழந்தையையும் தொடர்ந்து கண்காணிக்கும்.'],
      ['பிரசவ வலிக்கு பயம் இருந்தால் என்ன செய்வது?', 'கர்ப்பகாலப் பரிசோதனையின்போதே மருத்துவரிடம் பேசுங்கள். வலி நிவாரண வழிகளைப் பற்றி முன்கூட்டியே தெரிந்துகொள்வது பயத்தைக் குறைக்கும்.'],
      ['எபிடியூரல் எடுத்துக்கொள்ளலாமா?', 'பெரும்பாலான பெண்கள் எடுத்துக்கொள்ளலாம்; உங்கள் உடல்நிலையைப் பார்த்து மருத்துவர் முடிவு செய்வார்.'],
    ],
  },
];

export function taPage(g) {
  const path = `/ta/${g.slug}/`;
  const enPath = g.enPath || `${guidesUrl}${g.en}/`;
  const c = [['Home', '/'], ['தமிழ்', '/ta/'], [g.crumb]];
  const wtext = g.wa || taWa;   // a page can bring its own pre-filled WhatsApp message (the online consultation page does)
  return {
    path, lang: 'ta', ...(g.alone ? {} : { alternates: [['en-IN', enPath], ['ta-IN', path]] }), ...(g.focus ? { focus: g.focus } : {}),
    title: g.title, description: g.description, schemaType: 'MedicalWebPage', crumbs: c, faqs: g.faqs,
    render: () => `
<section class="page-hero"><div class="wrap${g.aside !== undefined ? ' split split-form' : ''}">${g.aside !== undefined ? '<div>' : ''}${crumbs(c)}
<span class="eyebrow">${icon('languages')} <span lang="ta">தமிழில்</span></span>
<h1 lang="ta">${g.h1}</h1>
<p class="lead" lang="ta">${g.lead}</p>
${g.heroHtml !== undefined ? g.heroHtml : `<div class="btn-row">${btnWA(wtext, 'வாட்ஸ்அப்பில் முன்பதிவு')}${btnCall(`அழைக்க ${P}`, 'btn btn-outline')}</div>`}
${g.aside !== undefined ? `</div>${g.aside}` : ''}
</div></section>
${g.sections.map(([t, html], i) => `<section class="section${i % 2 ? ' section-soft' : ''}"><div class="wrap"><h2 lang="ta">${t}</h2><div class="prose">${html}</div></div></section>`).join('\n')}
${videoSection(placements[g.enPath ? g.en : 'guide/' + g.en], { ta: true, soft: g.sections.length % 2 === 0 })}
<section class="section section-soft"><div class="wrap"><div class="sec-head"><h2 lang="ta">அடிக்கடி கேட்கப்படும் கேள்விகள்</h2></div>${faqBlock(g.faqs)}</div></section>
${shareRow(site.url + path, g.title.split(' | ')[0], '<span lang="ta">பயனுள்ளதாக இருந்ததா? குடும்பத்தினருடனும் நண்பர்களுடனும் பகிருங்கள்.</span>', '<span lang="ta">வாட்ஸ்அப்பில் பகிர</span>')}
<section class="section"><div class="wrap"><div class="prose"><h2 lang="ta">அபிஷேக் மருத்துவமனையில்</h2>${g.care !== undefined ? g.care : taCare}<p><a class="link-arrow" href="${enPath}">${g.enLabel || 'Read this guide in English'} ${icon('arrow')}</a></p></div></div></section>
${g.endCta !== undefined ? g.endCta : ctaBand('முன்பதிவுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்', `வாட்ஸ்அப் செய்யுங்கள் அல்லது ${P} என்ற எண்ணில் அழைக்கவும். அவசர சிகிச்சை 24 மணி நேரமும் உண்டு.`, wtext)}`,
  };
}
export const taGuidePages = ta.map(taPage);

/* ---------------- hub ---------------- */
const hubCrumbs = [['Home', '/'], ['Women’s health guides']];
const hubData = {
  icon: 'clipboard', crumbs: hubCrumbs, eyebrow: 'Free guides for women',
  h1: 'Women’s Health <em>Guides</em>',
  tamil: 'பெண்கள் ஆரோக்கிய வழிகாட்டி · தமிழிலும்',
  lead: `Plain answers to the questions women ask most about periods, discharge, pregnancy, delivery and recovery, from ${site.name}, Erode Fort. Some are also in Tamil.`,
  waText: 'Hello Abishek Hospital, I have a question about my health.',
  facts: [
    { icon: 'info', title: 'General information', text: 'Not a diagnosis and not a substitute for a check-up' },
    { icon: 'languages', title: 'Also in Tamil', text: 'Eight guides on the most-asked topics' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
  ],
  sections: [
    { id: 'guides', title: 'All guides', nav: 'Guides', wide: true, html: `<div class="grid cards">${en.map((g) => `<a class="card" href="${guidesUrl}${g.slug}/"><span class="ico">${icon(g.icon)}</span><h3>${g.title.split(' | ')[0]}</h3><p>${g.lead}</p><span class="link-arrow">Read the guide ${icon('arrow')}</span></a>`).join('')}</div>` },
    { id: 'tamil', title: 'தமிழில் (in Tamil)', nav: 'Tamil guides', wide: true, html: `<ul class="chips">${ta.map((g) => `<li><a href="/ta/${g.slug}/" lang="ta">${g.crumb}</a></li>`).join('')}</ul>` },
  ],
  faqs: [
    ['Who writes these guides?', `They are general patient information prepared for ${site.name}. They do not replace a consultation with your own doctor.`],
    ['Can I get my question answered by a doctor?', `Yes. Message us on WhatsApp or call ${P} to book a consultation with ${site.doctor.name}.`],
  ],
  related: ['maternity-hospital-erode', 'gynecologist-erode', 'pcos-treatment-erode', 'infertility-treatment-erode'],
};
export const guidesHub = {
  path: guidesUrl,
  title: 'Women’s Health Guides in English & Tamil | Abishek Hospital',
  description: `Simple guides on irregular periods, white discharge, early pregnancy, normal delivery vs caesarean, pregnancy food and care after delivery. Some in Tamil.`,
  schemaType: 'CollectionPage',
  crumbs: hubCrumbs,
  faqs: hubData.faqs,
  render: () => servicePage(hubData),
};
