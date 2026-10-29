// Women's health guides: plain-language answers to the questions women most often search for (English, plus Tamil versions of the top three).
// General education only: no diagnosis, no drug doses, and never a claim that a named doctor wrote or reviewed a page.
import { site } from '../site.mjs';
import { icon, crumbs, faqBlock, ctaBand, btnWA, btnCall, servicePage, slugUrl, doctorUrl } from '../lib.mjs';

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
    title: 'Irregular Periods: Causes and When to See a Gynecologist | Abishek Hospital',
    description: `Why periods become irregular (PCOS, thyroid, stress, weight) and when to see a gynecologist in Erode. A simple guide from Abishek Hospital. Call ${P}.`,
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
    title: 'White Discharge in Women: Normal or Not? | Abishek Hospital, Erode',
    description: `When white vaginal discharge is normal, when it is a sign of infection, and when to see a gynecologist. Simple guide from Abishek Hospital, Erode. Call ${P}.`,
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
    title: 'Early Pregnancy Symptoms and What to Do First | Abishek Hospital, Erode',
    description: `Early signs of pregnancy, when to take a test, what to do in the first weeks and the danger signs. A simple guide from Abishek Hospital, Erode. Call ${P}.`,
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
    title: 'Normal Delivery or Caesarean? A Simple Guide | Abishek Hospital, Erode',
    description: `Normal (vaginal) delivery and caesarean compared: benefits, risks, recovery and when a caesarean is advised. A plain guide from Abishek Hospital, Erode.`,
    h1: 'Normal Delivery or <em>Caesarean</em>? A Simple Guide',
    tamil: 'சுகப்பிரசவம் அல்லது சிசேரியன் · வலியில்லா பிரசவம்',
    lead: 'Both are safe when they are the right choice for you and your baby. This guide explains the differences in simple words, and why the decision is best made with your doctor.',
    icon: 'syringe', service: 'normal and painless delivery and caesarean birth',
    facts: [
      { icon: 'heart', title: 'Normal delivery', text: 'Usually a shorter stay and quicker recovery' },
      { icon: 'scissors', title: 'Caesarean', text: 'Surgery, advised for medical reasons' },
      { icon: 'syringe', title: 'Painless labour', text: 'An epidural can be offered with a normal delivery' },
    ],
    sections: [
      { id: 'normal', title: 'Normal (vaginal) delivery', nav: 'Normal delivery', html: `<p>When pregnancy is healthy and the baby is head down, most women can try a normal delivery. Recovery is usually quicker, the hospital stay is shorter, and there is no abdominal surgery. Risks include tears or a cut (episiotomy) that needs stitches, and sometimes the need for help with forceps or a vacuum, or a change to a caesarean during labour.</p><p>Fear of pain is a common reason women ask about a caesarean. An <a href="${slugUrl('normal-painless-delivery-erode')}">epidural (painless) labour</a> can make a normal delivery much more comfortable.</p>` },
      { id: 'caesarean', title: 'Caesarean section', nav: 'Caesarean', html: `<p>A caesarean is an operation to deliver the baby through the tummy. It is <b>planned</b> when, for example, the baby lies feet first or sideways, the placenta covers the cervix (placenta praevia), or a medical condition makes labour unsafe. It becomes an <b>emergency</b> when labour is not progressing, the baby is distressed, or there is heavy bleeding.</p><p>Recovery takes longer: a few days in hospital and several weeks at home, with care of the wound and no heavy lifting. Risks include infection, bleeding and blood clots, and it can affect later pregnancies.</p>` },
      { id: 'vbac', title: 'Can I have a normal delivery after a caesarean?', nav: 'After a caesarean', html: `<p>Often, yes. It depends on why the earlier caesarean was done, the type of scar on your womb and your current pregnancy. Your doctor will assess you individually and plan the safest way for you to deliver. See our page on <a href="${slugUrl('high-risk-pregnancy-erode')}">high-risk pregnancy care</a> if you have a medical condition.</p>` },
      { id: 'choose', title: 'How to decide', nav: 'How to decide', html: list(['Talk to your doctor early, at your antenatal visits, and ask questions.', 'Choose what is safest for you and your baby, rather than a particular date or time.', 'Keep an open mind: a plan for a normal delivery can change if the situation changes.', 'Ask about pain relief for labour.']) },
      { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: care('normal delivery, painless (epidural) delivery and caesarean birth') },
    ],
    faqs: [
      ['Is normal delivery always better than a caesarean?', 'For a healthy pregnancy, a normal delivery usually has a quicker recovery. But a caesarean can be the safest choice, and the best choice is the one your doctor advises for your situation.'],
      ['Can I choose a caesarean without a medical reason?', 'Please discuss it with your doctor. Surgery has risks and a longer recovery, so it is usually advised for medical reasons.'],
      ['Is painless delivery available?', `Yes. Epidural (painless) labour is available at Abishek Hospital, with over 2,500 epidural deliveries. <a href="${slugUrl('normal-painless-delivery-erode')}">Read about normal and painless delivery</a>.`],
    ],
    related: ['normal-painless-delivery-erode', 'maternity-hospital-erode', 'high-risk-pregnancy-erode', 'gynecologist-erode'],
    waText: 'Hello Abishek Hospital, I would like to talk about normal delivery and painless delivery.',
  },
  {
    slug: 'food-and-care-in-early-pregnancy',
    title: 'Food and Care in Early Pregnancy: A Simple Guide | Abishek Hospital',
    description: `What to eat, what to avoid and how to ease nausea in early pregnancy, with everyday Tamil Nadu foods. A simple guide from Abishek Hospital, Erode. Call ${P}.`,
    h1: 'Food and Care in <em>Early Pregnancy</em>',
    tamil: 'கர்ப்பகால உணவு · முதல் மூன்று மாத பராமரிப்பு',
    lead: 'You do not need a special diet. Balanced, home-cooked food, the supplements your doctor prescribes, enough water and rest are the basics. Here is a simple guide.',
    icon: 'sprout', service: 'pregnancy care, diet advice and antenatal check-ups',
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
    title: 'Care After Delivery: Recovery, Feeding and Warning Signs | Abishek Hospital',
    description: `How to look after yourself after a normal delivery or caesarean: bleeding, stitches, feeding, mood and warning signs. A plain guide from Abishek Hospital, Erode.`,
    h1: 'Care <em>After Delivery</em>: Recovery and Warning Signs',
    tamil: 'பிரசவத்திற்குப் பிந்தைய பராமரிப்பு',
    lead: 'The weeks after birth are a time of healing. This guide covers what to expect, how to care for yourself and your baby, and the warning signs that need medical help.',
    icon: 'heart', service: 'postnatal check-ups and care after delivery',
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
  const data = { icon: g.icon, crumbs: c, eyebrow: 'Women’s health guide', h1: g.h1, tamil: g.tamil, lead: g.lead, waText: g.waText, facts: g.facts, sections: g.sections, faqs: g.faqs, related: g.related };
  const page = { path, title: g.title, description: g.description, schemaType: 'MedicalWebPage', crumbs: c, faqs: g.faqs, render: () => servicePage(data) };
  if (g.ta) page.alternates = [['en-IN', path], ['ta-IN', `/ta/${g.ta}/`]];
  return page;
}
export const guidePages = en.map(enPage);

/* ---------------- Tamil guides (the three most searched topics) ---------------- */
const taWa = 'வணக்கம் அபிஷேக் மருத்துவமனை, நான் முன்பதிவு செய்ய விரும்புகிறேன்.';
const taCare = `<p lang="ta">ஈரோடு கோட்டை அபிஷேக் மருத்துவமனையில் டாக்டர் ஜெயந்தி பிரபாகரனைச் சந்திக்க வாட்ஸ்அப் செய்யுங்கள் அல்லது ${P} என்ற எண்ணில் அழைக்கவும். புறநோயாளிகள் நேரம்: திங்கள் – சனி, காலை 9:00 – மாலை 6:30. அவசர சிகிச்சை 24 மணி நேரமும் உண்டு.</p>
<p class="note" lang="ta">இந்தப் பக்கம் பொதுவான தகவலுக்காக மட்டுமே. இது நோய் கண்டறிதல் அல்ல; உங்கள் மருத்துவரின் ஆலோசனைக்கு மாற்றும் அல்ல.</p>`;
const taList = (items) => `<ul class="checks" lang="ta">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ta = [
  {
    slug: 'white-discharge', en: 'white-discharge',
    title: 'வெள்ளைப்படுதல்: காரணங்கள், எப்போது மருத்துவர்? | அபிஷேக் மருத்துவமனை',
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
    title: 'ஒழுங்கற்ற மாதவிடாய்: காரணங்களும் சிகிச்சையும் | அபிஷேக் மருத்துவமனை, ஈரோடு',
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
    title: 'கர்ப்பத்தின் ஆரம்ப அறிகுறிகள்: என்ன செய்ய வேண்டும்? | அபிஷேக் மருத்துவமனை',
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
];

function taPage(g) {
  const path = `/ta/${g.slug}/`;
  const enPath = `${guidesUrl}${g.en}/`;
  const c = [['Home', '/'], ['தமிழ்', '/ta/'], [g.crumb]];
  return {
    path, lang: 'ta', alternates: [['en-IN', enPath], ['ta-IN', path]],
    title: g.title, description: g.description, schemaType: 'MedicalWebPage', crumbs: c, faqs: g.faqs,
    render: () => `
<section class="page-hero"><div class="wrap">${crumbs(c)}
<span class="eyebrow">${icon('languages')} <span lang="ta">தமிழில்</span></span>
<h1 lang="ta">${g.h1}</h1>
<p class="lead" lang="ta">${g.lead}</p>
<div class="btn-row">${btnWA(taWa, 'வாட்ஸ்அப்பில் முன்பதிவு')}${btnCall(`அழைக்க ${P}`, 'btn btn-outline')}</div>
</div></section>
${g.sections.map(([t, html], i) => `<section class="section${i % 2 ? ' section-soft' : ''}"><div class="wrap"><h2 lang="ta">${t}</h2><div class="prose">${html}</div></div></section>`).join('\n')}
<section class="section section-soft"><div class="wrap"><div class="sec-head"><h2 lang="ta">அடிக்கடி கேட்கப்படும் கேள்விகள்</h2></div>${faqBlock(g.faqs)}</div></section>
<section class="section"><div class="wrap"><div class="prose"><h2 lang="ta">அபிஷேக் மருத்துவமனையில்</h2>${taCare}<p><a class="link-arrow" href="${enPath}">Read this guide in English ${icon('arrow')}</a></p></div></div></section>
${ctaBand('முன்பதிவுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்', `வாட்ஸ்அப் செய்யுங்கள் அல்லது ${P} என்ற எண்ணில் அழைக்கவும். அவசர சிகிச்சை 24 மணி நேரமும் உண்டு.`, taWa)}`,
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
    { icon: 'languages', title: 'Also in Tamil', text: 'The three most-searched topics' },
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
  title: 'Women’s Health Guides in English and Tamil | Abishek Hospital, Erode',
  description: `Simple guides on irregular periods, white discharge, early pregnancy, normal delivery vs caesarean, pregnancy food and care after delivery. Some in Tamil.`,
  schemaType: 'CollectionPage',
  crumbs: hubCrumbs,
  faqs: hubData.faqs,
  render: () => servicePage(hubData),
};
