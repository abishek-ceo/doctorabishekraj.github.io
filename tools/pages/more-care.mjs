// More care pages: caesarean delivery, fibroids and ovarian cysts, postnatal care.
// General information only: no diagnosis, no doses, no promises about results. Every page keeps its warning-signs box and says the doctor decides.
// Only numbers the site already states elsewhere are used (40,000+ safe deliveries, 7,000+ laparoscopic surgeries). Costs: "explained upfront, no hidden fees".
// Tamil twins live in ta-services.mjs (the Tamil text needs a native-speaker proofread); makeServicePage links the two with hreflang.
import { makeServicePage } from '../lib.mjs';
import { site } from '../site.mjs';

const P = site.phone.display;
const emergency = '<p>Emergency care is available 24 hours a day. In a life-threatening emergency, dial 108 or 112 for an ambulance.</p>';

/* ------------------------------------------------------------ Caesarean delivery ------------------------------------------------------------ */
const caesarean = makeServicePage({
  slug: 'caesarean-delivery-erode',
  title: 'C-Section (Caesarean Delivery) in Erode | Abishek Hospital',
  description: `Caesarean (C-section) delivery at Abishek Hospital, Erode: when it is advised, what to expect, recovery and warning signs. Call ${P}.`,
  eyebrow: 'Caesarean delivery',
  h1: 'Caesarean (C-Section) Delivery in <em>Erode</em>',
  tamil: 'சிசேரியன் அறுவை சிகிச்சைப் பிரசவம்',
  lead: 'A caesarean (C-section) is an operation to deliver your baby through a cut in the tummy and womb. It is planned when it is the safer choice for you or your baby, and done urgently when labour or your baby’s condition needs it. Dr. Jayanthi Prabakaran explains the reason, the operation and your recovery clearly, so you know what to expect.',
  waText: 'Hello Abishek Hospital, I would like to ask about caesarean delivery.',
  facts: [
    { icon: 'award', title: 'Led by Dr. Jayanthi Prabakaran', text: '40,000+ safe deliveries' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
    { icon: 'hand-heart', title: 'Costs explained upfront', text: 'No hidden fees' },
    { icon: 'pin', title: 'Erode Fort', text: 'No.18, Near Bus Stand, Bharathi Street' },
  ],
  sections: [
    { id: 'what', title: 'What is a caesarean section?', nav: 'What it is', html: `
<p>In a caesarean section, the doctor makes a cut in the lower tummy and the womb, and delivers the baby through it. The operation is done in an operation theatre by a team that includes an obstetrician, an anaesthetist and nurses. It is a very common operation, and when it is needed it protects both mother and baby.</p>
<p>A caesarean is not a “lesser” way to give birth. A normal delivery is usually the preferred route when it is safe, but a caesarean can be lifesaving, and nobody should feel guilty about having one. <a href="/normal-painless-delivery-erode/#compare">Read about normal delivery and when a caesarean is advised</a>.</p>` },
    { id: 'when', title: 'When may a caesarean be advised?', nav: 'When it is advised', wide: true, html: `
<div class="prose"><p>The safest way for your baby to be born depends on you, your baby and how labour is going. A caesarean may be advised in the situations below. Your doctor will explain which one applies to you.</p></div>
<div class="grid cols-2" style="margin-top:.6rem">
<div class="card flat"><h3>Planned, before labour starts</h3><ul class="checks"><li>the placenta covers the cervix (placenta praevia)</li><li>the baby is lying sideways, or bottom-first in some cases</li><li>twins or more, in some cases</li><li>a previous caesarean or womb surgery, depending on the scar and the reason for it</li><li>certain medical conditions of the mother, or an infection that could pass to the baby</li></ul></div>
<div class="card flat"><h3>Urgent, during pregnancy or labour</h3><ul class="checks"><li>labour is not progressing as expected</li><li>the baby’s heartbeat shows that the baby is not coping well</li><li>bleeding because the placenta has separated early, or another emergency</li><li>a serious risk to the mother’s health</li></ul></div>
</div>` },
    { id: 'before', title: 'Before the operation', nav: 'Before the operation', html: `
<ol class="steps">
<li><b>A clear discussion</b><span>Your doctor explains why a caesarean is advised, the benefits and the risks, and answers your questions. You are asked to give your consent.</span></li>
<li><b>Tests and preparation</b><span>Blood tests, including your blood group and haemoglobin, and a review of your scans and reports, as advised. You will be told when to stop eating and drinking.</span></li>
<li><b>The anaesthetist’s check</b><span>The anaesthetist talks to you about the type of anaesthesia that is safest for you. Most women are awake and numb from the waist down, and some need a general anaesthetic. The anaesthetist advises you.</span></li>
<li><b>Getting ready</b><span>Pack your hospital bag, keep your reports and earlier scans with you, and tell the team about any medicines, allergies or health conditions.</span></li>
</ol>` },
    { id: 'operation', title: 'During the operation', nav: 'The operation', html: `
<p>The operation usually takes under an hour, and your baby is usually born within the first few minutes. If you are awake, you may feel pressure and tugging, but not pain. Your baby is checked by the team right after birth and, where it is safe, you can see and hold your baby early and begin breastfeeding. The rest of the time is spent closing the womb and the wound carefully.</p>` },
    { id: 'recovery', title: 'Recovery after a caesarean', nav: 'Recovery', html: `
<ul class="checks">
<li><b>In hospital.</b> You usually stay a few days. The team watches your bleeding, wound, pain and passing of urine, and helps you sit up, stand and walk early. Moving early helps your recovery.</li>
<li><b>Pain relief.</b> You are given pain relief that is suitable while breastfeeding. Take only what your doctor advises.</li>
<li><b>Your wound.</b> Keep it clean and dry, follow the dressing and stitch advice you are given, and do not put creams or home remedies on it unless your doctor says so.</li>
<li><b>Bleeding.</b> Some bleeding and discharge for several weeks is normal and should get lighter over time.</li>
<li><b>Rest and activity.</b> Short walks help. Avoid lifting anything heavier than your baby and avoid strenuous work for as long as your doctor advises. Ask before you drive.</li>
<li><b>Feeding and food.</b> Breastfeeding can usually start soon after the operation, with help to find comfortable positions. Eat balanced meals, drink enough water and continue the iron and calcium your doctor advises.</li>
<li><b>Your checkup.</b> A postnatal checkup is usually advised around six weeks after delivery. Your doctor may ask you to come earlier to check your wound.</li></ul>
<p>Read more about <a href="/postnatal-care-erode/">postnatal care after delivery</a>.</p>` },
    { id: 'warning-signs', title: 'Warning signs: when to come in immediately', nav: 'Warning signs', html: `<div class="callout warn"><h3>After a caesarean, call ${P} or come to the hospital straight away if you have:</h3><ul>
<li>a fever or chills</li>
<li>a wound that becomes red, swollen or painful, leaks fluid or pus, or opens</li>
<li>heavy bleeding (soaking a pad every hour or two) or large clots</li>
<li>foul-smelling vaginal discharge</li>
<li>severe tummy pain, or pain that keeps getting worse</li>
<li>pain or swelling in one leg, chest pain or sudden breathlessness</li>
<li>burning or difficulty when passing urine</li>
<li>a red, hot, painful area on a breast, with fever</li>
<li>feeling very low or hopeless, or thoughts of harming yourself or your baby</li></ul>
${emergency}</div>` },
    { id: 'next-pregnancy', title: 'Another pregnancy after a caesarean', nav: 'Next pregnancy', html: `
<p>Many women have a healthy pregnancy and delivery after a caesarean. Your doctor will advise how long to wait before your next pregnancy so that the scar on your womb heals well, and will plan your next delivery with you. Some women can safely try for a normal delivery (VBAC), and others are advised a repeat caesarean. It depends on why the earlier caesarean was done, your scar and how the next pregnancy goes. <a href="/normal-painless-delivery-erode/#vbac">Read about normal delivery after a caesarean</a>.</p>
<p>If your next pregnancy has extra risks, see our <a href="/high-risk-pregnancy-erode/">high-risk pregnancy care</a>.</p>` },
    { id: 'cost', title: 'Costs', nav: 'Costs', html: `
<p>The cost of a caesarean depends on the room you choose, the type of anaesthesia, the length of your stay and any extra care you or your baby need. We explain the expected costs clearly before treatment, with no hidden fees. Call or WhatsApp ${P} to discuss your situation.</p>
<p>This page is general information and does not replace advice from your own doctor after an examination.</p>` },
  ],
  faqs: [
    ['Is a caesarean safe?', 'It is a very common operation and is generally safe when it is done by a trained team. Like any operation it has risks, for example infection, bleeding or a reaction to the anaesthetic, which your doctor will explain. A caesarean is advised when its benefits for you or your baby are greater than these risks.'],
    ['Can I ask for a caesarean?', 'The decision is made together with your doctor, after looking at your health, your baby’s health and how your pregnancy is going. For most healthy pregnancies a normal delivery is safer and recovery is quicker. Dr. Jayanthi Prabakaran will talk through your options and your concerns.'],
    ['Will I feel pain during the operation?', 'With spinal or epidural anaesthesia you are awake but numb from the waist down, so you may feel pressure or tugging but not pain. Some women need a general anaesthetic and are asleep. The anaesthetist decides what is safest and explains it before the operation.'],
    ['How long will I stay in the hospital?', 'Usually a few days. The team checks your wound, bleeding, pain and feeding, and you go home when you are recovering well. Your doctor will tell you what to expect for you.'],
    ['When can I do my normal activities again?', 'Gentle walking starts early. Most women need several weeks before they return to normal daily work, and should avoid heavy lifting in that time. Your doctor will tell you when it is safe to drive or exercise.'],
    ['Can I breastfeed after a caesarean?', 'Yes. Breastfeeding can usually start soon after the operation. Ask the nurses to help you find comfortable positions, and tell us if you have pain or worries about your milk.'],
    ['Can I have a normal delivery after a caesarean?', 'Sometimes, yes. It depends on the reason for your earlier caesarean, your scar and your current pregnancy. Dr. Jayanthi Prabakaran will assess you and explain whether it is a safe option for you. <a href="/normal-painless-delivery-erode/#vbac">Read more</a>.'],
  ],
  related: ['normal-painless-delivery-erode', 'postnatal-care-erode', 'high-risk-pregnancy-erode', 'maternity-hospital-erode'],
});

/* ------------------------------------------------------------ Fibroids and ovarian cysts ------------------------------------------------------------ */
const fibroids = makeServicePage({
  slug: 'fibroids-ovarian-cyst-treatment-erode',
  title: 'Fibroids & Ovarian Cyst Treatment, Erode | Abishek Hospital',
  description: `Fibroids and ovarian cysts: symptoms, tests and treatment, from monitoring to keyhole surgery, with a lady gynaecologist in Erode. Call ${P}.`,
  eyebrow: 'Fibroids & ovarian cysts',
  h1: 'Fibroids &amp; Ovarian Cyst Treatment in <em>Erode</em>',
  tamil: 'கர்ப்பப்பைக் கட்டிகள் · சினைப்பை நீர்க்கட்டிகள் சிகிச்சை',
  lead: 'Fibroids and ovarian cysts are very common, and most are not cancer. Many cause no trouble and only need watching, while others cause heavy periods, pain or pressure and need treatment. Dr. Jayanthi Prabakaran helps you understand your scan, your options and the right time to act, including keyhole surgery when surgery is needed and suitable.',
  waText: 'Hello Abishek Hospital, I would like to book a consultation about fibroids or ovarian cysts.',
  facts: [
    { icon: 'stethoscope', title: 'Lady doctor, private and respectful', text: 'Dr. Jayanthi Prabakaran' },
    { icon: 'scissors', title: 'Keyhole surgery when needed', text: 'Over 7,000 laparoscopic surgeries' },
    { icon: 'hand-heart', title: 'Costs explained upfront', text: 'No hidden fees' },
    { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
  ],
  sections: [
    { id: 'fibroids', title: 'What are fibroids?', nav: 'Fibroids', html: `
<p>Fibroids are non-cancerous growths in the muscle of the womb. They are very common, especially between about 30 and 50 years of age. They can be as small as a seed or as large as a melon, and there may be one or several. Many fibroids cause no symptoms and are found by chance on a scan. They usually shrink after menopause.</p>
<p>Having fibroids does not mean you need an operation. What matters is whether they cause symptoms, how big they are and where they sit.</p>` },
    { id: 'cysts', title: 'What are ovarian cysts?', nav: 'Ovarian cysts', html: `
<p>An ovarian cyst is a fluid-filled sac on or inside an ovary. Most are harmless. Many “functional” cysts form as part of the normal monthly cycle and settle on their own within a few cycles. Other types need a closer look, for example cysts linked to endometriosis (sometimes called chocolate cysts), dermoid cysts, and cysts that are large or keep growing.</p>
<p>The many small follicles seen on the ovaries in PCOS are not the same thing: see <a href="/pcos-treatment-erode/">PCOS treatment</a>.</p>` },
    { id: 'symptoms', title: 'Symptoms to look out for', nav: 'Symptoms', wide: true, html: `
<div class="grid cols-2">
<div class="card flat"><h3>Fibroids may cause</h3><ul class="checks"><li>heavy or long periods, sometimes with clots</li><li>tiredness or breathlessness from anaemia</li><li>pelvic pressure or a feeling of fullness</li><li>passing urine often, or constipation</li><li>pain during periods or sex</li><li>trouble conceiving or problems in pregnancy, in some women</li></ul></div>
<div class="card flat"><h3>Ovarian cysts may cause</h3><ul class="checks"><li>no symptoms at all</li><li>a dull ache or heaviness in the lower tummy</li><li>bloating, or feeling full quickly</li><li>pain during periods or sex</li><li>irregular periods</li><li>sudden severe pain if a cyst bursts or twists (an emergency)</li></ul></div>
</div>
<div class="prose"><p style="margin-top:1.2rem">These symptoms can also have other causes, so please do not guess. An examination and a scan show what is going on.</p></div>` },
    { id: 'diagnosis', title: 'How they are diagnosed', nav: 'Diagnosis', html: `
<p>Diagnosis usually starts with a talk about your periods and symptoms, followed by an examination and an ultrasound scan, which shows the size, number and position of fibroids and the size and type of cysts. Blood tests may be advised, for example to check for anaemia or hormones, and in some cases further imaging is needed. Your doctor explains each test and why it is advised. Please bring any earlier scan reports and images.</p>` },
    { id: 'treatment', title: 'Treatment options', nav: 'Treatment', html: `
<h3>Watching and waiting</h3>
<p>Small fibroids or cysts that cause no symptoms are often simply monitored, with checkups and repeat scans.</p>
<h3>Medicines</h3>
<p>Medicines can ease heavy bleeding or pain and treat anaemia. They help with symptoms and do not remove a fibroid. Your doctor chooses what suits you.</p>
<h3>Surgery, when it is needed</h3>
<p>Surgery may be advised if a fibroid or cyst is large, growing, causing troublesome symptoms or affecting fertility, or if a scan shows a cyst that should be removed. The options include removing only the fibroid or the cyst and keeping the womb or, for some women, removing the womb. The choice depends on your age, your symptoms, the size and position of the growth, and whether you wish to have children.</p>
<p>Where it is suitable, <a href="/laparoscopic-surgery-erode/">keyhole (laparoscopic) surgery</a> uses small cuts and usually means less pain and a quicker recovery than open surgery. Over 7,000 laparoscopic gynaecological surgeries have been performed at Abishek Hospital.</p>` },
    { id: 'pregnancy', title: 'Fibroids, cysts and pregnancy', nav: 'Pregnancy', html: `
<p>Many women with fibroids or cysts conceive and have healthy pregnancies. Some fibroids, especially those that press into the womb cavity, and some cysts can make it harder to conceive or can affect a pregnancy, so it is worth having them assessed if you are planning a baby. If you are already pregnant, tell your doctor: fibroids and cysts are usually watched with scans. If you are finding it hard to conceive, see <a href="/infertility-treatment-erode/">fertility and IUI treatment</a>.</p>` },
    { id: 'warning-signs', title: 'Warning signs: when to come in immediately', nav: 'Warning signs', html: `<div class="callout warn"><h3>Call ${P} or come to the hospital straight away if you have:</h3><ul>
<li>sudden, severe pain in the lower tummy, especially with vomiting, fever or fainting</li>
<li>very heavy bleeding (soaking a pad every hour or two), or bleeding with dizziness</li>
<li>a racing heart, breathlessness or extreme weakness</li>
<li>in pregnancy: any bleeding, or severe tummy pain</li></ul>
<p>Bleeding after menopause should always be checked by a doctor, even if it is light.</p>${emergency}</div>` },
    { id: 'when', title: 'When to see a gynaecologist', nav: 'When to visit', html: `
<ul class="checks"><li>your periods are heavy, long or painful</li><li>you have lasting pelvic pain, pressure or a feeling of fullness</li><li>you feel a lump in the lower tummy, or your tummy is getting bigger</li><li>you are finding it hard to conceive</li><li>a scan has shown a fibroid or cyst and you would like advice</li></ul>
<p>You do not need to wait for symptoms to get worse. <a href="/gynecologist-erode/">See all gynaecology care at Abishek Hospital</a>.</p>
<p>This page is general information and does not replace advice from your own doctor after an examination.</p>` },
  ],
  faqs: [
    ['Do fibroids turn into cancer?', 'Fibroids are almost always non-cancerous, and cancer in a fibroid is very rare. If a growth is getting bigger quickly or looks unusual on a scan, your doctor will advise further tests.'],
    ['Do all fibroids need surgery?', 'No. Many are only watched, and some are treated with medicines. Surgery is advised when symptoms are troublesome, when the fibroid is large or growing, or when it affects fertility.'],
    ['Can an ovarian cyst go away by itself?', 'Many cysts, especially the functional ones that form during the monthly cycle, settle on their own within a few cycles. Your doctor may repeat the scan to check. Other cysts need treatment.'],
    ['Will fibroids or cysts stop me from getting pregnant?', 'Often they do not. But some can, depending on their size and position. It is best to have them assessed before you plan a pregnancy.'],
    ['Is keyhole surgery possible for fibroids and cysts?', 'Often yes, depending on the size, number and position of the growth and on your health. Dr. Jayanthi Prabakaran will advise whether keyhole surgery is suitable for you. <a href="/laparoscopic-surgery-erode/">Read about laparoscopic surgery</a>.'],
    ['Will I need to have my womb removed?', 'Not always. In many cases the fibroid or cyst can be treated while the womb is kept. Removing the womb is considered mainly when other treatments are not suitable and your family is complete. Your doctor will explain all your options.'],
  ],
  related: ['gynecologist-erode', 'laparoscopic-surgery-erode', 'pcos-treatment-erode', 'infertility-treatment-erode'],
});

/* ------------------------------------------------------------ Postnatal care ------------------------------------------------------------ */
const postnatal = makeServicePage({
  slug: 'postnatal-care-erode',
  title: 'Postnatal Care After Delivery in Erode | Abishek Hospital',
  description: `Postnatal care in Erode: recovery after normal or caesarean delivery, breastfeeding support, mood and warning signs. Abishek Hospital. Call ${P}.`,
  eyebrow: 'Postnatal care',
  h1: 'Postnatal Care After Delivery in <em>Erode</em>',
  tamil: 'பிரசவத்திற்குப் பிந்தைய பராமரிப்பு',
  lead: 'The weeks after birth are a time of healing, feeding and adjusting, for you and your baby. Abishek Hospital at Erode Fort supports your recovery after a normal or caesarean delivery, with breastfeeding support, a postnatal checkup and clear guidance on when to ask for help.',
  waText: 'Hello Abishek Hospital, I would like to ask about postnatal care.',
  facts: [
    { icon: 'award', title: 'Care by Dr. Jayanthi Prabakaran', text: '40,000+ safe deliveries' },
    { icon: 'clock', title: 'Postnatal checkup', text: 'Usually around 6 weeks after delivery' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
    { icon: 'pin', title: 'Erode Fort', text: 'No.18, Near Bus Stand, Bharathi Street' },
  ],
  sections: [
    { id: 'hospital', title: 'In the first days after delivery', nav: 'First days', html: `
<p>In the first days the team looks after you and your baby: checking your blood pressure, bleeding, pain and womb, helping you move and walk early, caring for your stitches or caesarean wound, and supporting feeding. Skin-to-skin contact and early breastfeeding help both of you. Before you go home, you are told how to look after yourself and your baby, what is normal, and when to call us.</p>` },
    { id: 'recovery', title: 'Your recovery at home', nav: 'Recovery', html: `
<ul class="checks">
<li><b>Bleeding.</b> Bleeding and discharge can last up to around six weeks, getting lighter and changing colour over time. Heavy bleeding is not normal: see the warning signs below.</li>
<li><b>Stitches or wound.</b> After a normal delivery with stitches, keep the area clean and dry, change pads often and wash from front to back. After a caesarean, follow the wound care advice you were given. <a href="/caesarean-delivery-erode/">Read about recovery after a caesarean</a>.</li>
<li><b>Pain.</b> Use only the pain relief your doctor has advised, and ask which medicines are suitable while breastfeeding.</li>
<li><b>Constipation and piles.</b> Drink enough water, eat fibre-rich food, and ask your doctor before using any laxative or cream.</li>
<li><b>Rest.</b> Rest when your baby sleeps, and accept help with housework and cooking.</li>
<li><b>Exercise.</b> Start with gentle walking. Pelvic floor exercises can help once you are comfortable. Ask your doctor before any strenuous exercise.</li></ul>` },
    { id: 'feeding', title: 'Breastfeeding and eating well', nav: 'Feeding', html: `
<p>Exclusive breastfeeding is recommended for the first six months. It is normal to need help at the start. Ask early if latching is painful, your nipples are cracked, your breasts feel hard or red, or you worry that your baby is not getting enough milk. Eat regular balanced meals, drink enough water, and continue the iron and calcium your doctor advised.</p>` },
    { id: 'mind', title: 'Your emotional health', nav: 'Emotional health', html: `
<p>Feeling tearful, anxious or overwhelmed in the first two weeks, sometimes called the “baby blues”, is common and usually passes. If low mood or worry lasts longer than two weeks or feels severe, or if you cannot sleep even when your baby sleeps, please tell your doctor or a family member. If you have thoughts of harming yourself or your baby, ask for help straight away. Postnatal depression is common, can be treated and is not your fault. Rest, support from your family and talking about how you feel all help.</p>` },
    { id: 'baby', title: 'Looking after your newborn', nav: 'Your newborn', html: `
<p>We guide you on feeding, sleep, cord care and jaundice, and on your baby’s vaccination schedule. Wash your hands before feeding and handling your baby, and keep the cord stump clean and dry.</p>
<div class="callout warn"><h3>Take your baby to a doctor promptly if your baby:</h3><ul><li>feeds poorly or refuses feeds</li><li>is very sleepy or hard to wake</li><li>has a fever, or feels unusually cold</li><li>has yellow skin that is spreading or getting deeper</li><li>has trouble breathing</li></ul></div>` },
    { id: 'checkup', title: 'Your postnatal checkup', nav: 'Checkup', html: `
<p>A postnatal checkup is usually advised around six weeks after delivery. Your doctor checks your blood pressure, stitches or wound, bleeding, breasts and weight, asks about your mood and feeding, and talks about family planning. If you had gestational diabetes or high blood pressure in pregnancy, you will also be advised follow-up tests. Come earlier if you have any worry or warning sign. Read our guide on <a href="/women-health-guides/care-after-delivery/">care after delivery</a>.</p>` },
    { id: 'family-planning', title: 'Family planning after delivery', nav: 'Family planning', html: `
<p>You can become pregnant again before your periods return, even while breastfeeding. Planning the gap between pregnancies protects your health and your baby’s. Many contraceptive options are suitable after delivery, including some that are safe while breastfeeding, and your doctor helps you choose. <a href="/gynecologist-erode/#family-planning">Read about family planning and contraception</a>.</p>` },
    { id: 'warning-signs', title: 'Warning signs: when to come in immediately', nav: 'Warning signs', html: `<div class="callout warn"><h3>Call ${P} or come to the hospital straight away if you have:</h3><ul>
<li>heavy bleeding (soaking a pad every hour or two) or large clots</li>
<li>a fever or chills, or foul-smelling vaginal discharge</li>
<li>a severe headache, blurred vision or a fit</li>
<li>pain or swelling in one leg, chest pain or sudden breathlessness</li>
<li>a wound that is red, swollen, leaking or opening</li>
<li>a red, hot, painful breast with fever</li>
<li>feeling very low or hopeless, or thoughts of harming yourself or your baby</li></ul>
${emergency}</div>
<p>This page is general information and does not replace advice from your own doctor after an examination.</p>` },
  ],
  faqs: [
    ['How long will I bleed after delivery?', 'Bleeding and discharge usually continue for up to around six weeks, getting lighter and changing colour over time. If you soak a pad every hour or two, pass large clots, or the discharge smells foul, call us straight away.'],
    ['Is it normal to feel sad after having a baby?', 'Feeling tearful or overwhelmed in the first two weeks is common. If it lasts longer, feels severe, or you have thoughts of harming yourself or your baby, please tell your doctor or a family member right away. Help is available.'],
    ['When can I start exercising?', 'Gentle walking can start early. Ask your doctor before strenuous exercise, especially after a caesarean or stitches. Pelvic floor exercises can help once you are comfortable.'],
    ['When should I come for my postnatal checkup?', 'Usually around six weeks after delivery. Come earlier if your wound or stitches worry you, or if you have any warning sign.'],
    ['Can I get pregnant while breastfeeding?', 'Yes, it is possible, even before your periods return. If you want to avoid or space a pregnancy, talk to your doctor about methods that suit you and are safe while breastfeeding.'],
    ['Can I take medicines while breastfeeding?', 'Many medicines are safe, but not all. Take only medicines your doctor has prescribed or approved, and tell every doctor you see that you are breastfeeding.'],
  ],
  related: ['maternity-hospital-erode', 'caesarean-delivery-erode', 'normal-painless-delivery-erode', 'gynecologist-erode'],
});

export default [caesarean, fibroids, postnatal];
