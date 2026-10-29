// Pregnancy-related service pages: maternity, normal & painless delivery, high-risk pregnancy.
import { icon, makeServicePage, videoCard } from '../lib.mjs';
import { site } from '../site.mjs';

const P = site.phone.display;
const warnSigns = `<div class="callout warn"><h3>Call ${P} or come to the hospital straight away if you have:</h3><ul>
<li>bleeding from the vagina, or leaking of water</li>
<li>your baby moving much less than usual</li>
<li>regular, painful contractions, especially before 37 weeks</li>
<li>a severe headache, blurred vision, or sudden swelling of the face and hands</li>
<li>severe or constant tummy pain</li>
<li>fever, burning while passing urine, or a fit (seizure)</li></ul>
<p>Emergency care is available 24 hours a day. In a life-threatening emergency, dial 108 or 112 for an ambulance.</p></div>`;

const maternity = makeServicePage({
  slug: 'maternity-hospital-erode',
  title: 'Maternity Hospital in Erode | Pregnancy & Delivery | Abishek Hospital',
  description: `Pregnancy care and delivery at Abishek Hospital, Erode Fort: antenatal checkups, normal and painless delivery, postnatal care and 24/7 emergency. Call ${P}.`,
  eyebrow: 'Pregnancy & delivery',
  h1: 'Maternity Hospital in <em>Erode</em>',
  tamil: 'ஈரோடு மகப்பேறு மருத்துவமனை · கர்ப்பகால பராமரிப்பு · பிரசவம்',
  lead: 'From your first antenatal visit to the day you take your baby home, Abishek Hospital at Erode Fort provides complete pregnancy, delivery and postnatal care, led by Dr. Jayanthi Prabakaran, with over 40,000 safe deliveries to her name.',
  waText: 'Hello Abishek Hospital, I would like to book a pregnancy / maternity care appointment.',
  facts: [
    { icon: 'award', title: 'Led by Dr. Jayanthi Prabakaran', text: '40,000+ safe deliveries' },
    { icon: 'syringe', title: 'Painless (epidural) delivery', text: 'Over 2,500 epidural deliveries' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
    { icon: 'pin', title: 'Erode Fort', text: 'No.18, Near Bus Stand, Bharathi Street' },
    { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
  ],
  sections: [
    { id: 'antenatal', title: 'Antenatal care: what to expect', nav: 'Antenatal care', html: `
<p>Good antenatal (pregnancy) care starts early. Book your first visit as soon as a home test is positive, ideally in the first trimester, so your due date and health can be checked and any risk can be caught early.</p>
<h3>Your antenatal visits</h3>
<p>Visits are usually about once a month until 28 weeks, every two weeks until 36 weeks, and weekly after that. Your doctor may ask you to come more often if your pregnancy needs closer watching.</p>
<h3>Tests and scans</h3>
<p>Your doctor will advise the blood tests, urine tests and ultrasound scans you need at each stage, for example:</p>
<ul class="checks"><li>blood group and Rh factor, haemoglobin and iron levels</li><li>blood sugar, to screen for gestational diabetes (usually between 24 and 28 weeks, earlier if you are at risk)</li><li>thyroid and infection screening, as advised</li><li>ultrasound scans to confirm the due date, check your baby’s development and monitor growth</li></ul>
<h3>Everyday care</h3>
<p>Take folic acid, iron and calcium as prescribed, eat balanced home-cooked meals with enough protein, fruit, vegetables and water, walk daily unless told otherwise, and take the vaccines recommended in pregnancy. Avoid tobacco, alcohol and any medicine not prescribed for you.</p>
<p><b>Bring to your first visit:</b> previous medical and scan reports, a list of your medicines, the date of your last period and records of any earlier pregnancies.</p>` },
    { id: 'video', title: 'Watch: tips for a healthy pregnancy', nav: 'Watch', wide: true, html: `
<div class="split two">${videoCard()}
<div class="prose"><p>Dr. Jayanthi Prabakaran shares her tips for a healthy pregnancy in this video from our YouTube channel. A new women’s health video is shared every day, free for every family.</p>
<p><a class="link-arrow" href="/videos/">More health videos ${icon('arrow')}</a></p></div></div>` },
    { id: 'delivery', title: 'Your delivery options', nav: 'Delivery', wide: true, html: `
<div class="prose"><p>The safest way for your baby to be born depends on your health, your baby’s position and how labour progresses. Dr. Jayanthi Prabakaran will explain your options during your antenatal visits, so there are no surprises in labour.</p></div>
<div class="grid cards">
<div class="card flat"><span class="ico">${icon('baby')}</span><h3>Normal delivery</h3><p>Usually the preferred route when it is safe for you and your baby: quicker recovery, a shorter hospital stay and an easier start to breastfeeding.</p></div>
<div class="card flat"><span class="ico">${icon('syringe')}</span><h3>Painless (epidural) delivery</h3><p>An epidural eases labour pain while you stay awake and in control. Over 2,500 deliveries with epidural pain relief have been completed.</p></div>
<div class="card flat"><span class="ico">${icon('shield')}</span><h3>Caesarean section, when needed</h3><p>A C-section is advised when it is the safer option for you or your baby, for example in an emergency, or because of the baby’s position or a medical condition.</p></div>
</div>
<p style="margin-top:1.4rem"><a class="link-arrow" href="/normal-painless-delivery-erode/">Read about normal and painless delivery ${icon('arrow')}</a></p>` },
    { id: 'warning-signs', title: 'Warning signs: when to come in immediately', nav: 'Warning signs', html: warnSigns },
    { id: 'postnatal', title: 'After the birth: postnatal care', nav: 'Postnatal care', html: `
<p>Care does not end at delivery. In the first weeks you and your baby need support to recover and settle in.</p>
<ul class="checks">
<li><b>Breastfeeding support.</b> Exclusive breastfeeding for the first six months is recommended. Ask for help early if latching is painful or you are worried about your milk supply.</li>
<li><b>Your recovery.</b> Care of stitches or the caesarean wound, bleeding, pain relief, rest and nutrition.</li>
<li><b>Your emotional health.</b> Feeling low or tearful in the first two weeks is common. Tell your doctor if it lasts or feels severe.</li>
<li><b>Newborn care.</b> Feeding, sleep, cord care, jaundice and the vaccination schedule.</li>
<li><b>Family planning.</b> Safe ways to space your next pregnancy, discussed at your postnatal checkup, usually around six weeks after delivery.</li></ul>` },
    { id: 'why', title: 'Why families in Erode choose Abishek Hospital', nav: 'Why us', wide: true, html: `
<div class="grid cards">
<div class="card flat"><span class="ico">${icon('award')}</span><h3>Experience you can rely on</h3><p>Dr. Jayanthi Prabakaran, Academic Topper and Gold Medalist from Coimbatore Medical College, has over 40,000 safe deliveries to her name.</p></div>
<div class="card flat"><span class="ico">${icon('siren')}</span><h3>Open for emergencies, 24/7</h3><p>Pregnancy emergencies do not wait for clinic hours. Our emergency care is available day and night.</p></div>
<div class="card flat"><span class="ico">${icon('hand-heart')}</span><h3>Clear, honest costs</h3><p>Treatment costs are explained upfront, before any procedure, with no hidden fees.</p></div>
<div class="card flat"><span class="ico">${icon('video')}</span><h3>Free health education</h3><p>Daily pregnancy and women’s health videos in Tamil on our YouTube channel, free for every family.</p></div>
</div>` },
  ],
  faqs: [
    ['When should I first see a doctor in pregnancy?', 'As soon as you have a positive pregnancy test, ideally in the first trimester. Early visits let your doctor confirm your due date, check your health, start the right supplements and spot any risks early.'],
    ['How many antenatal visits will I need?', 'Most women are seen about once a month until 28 weeks, every two weeks until 36 weeks, and weekly until delivery. If your pregnancy is high-risk, you may be seen more often.'],
    ['Is emergency care available at night?', `Yes. Emergency care at Abishek Hospital is available 24 hours a day, 7 days a week. If you are in labour or have a pregnancy emergency, call ${P} or come straight to the hospital at Erode Fort.`],
    ['Do you offer painless delivery?', 'Yes. Epidural (painless) labour is available, and over 2,500 deliveries with epidural pain relief have been completed. <a href="/normal-painless-delivery-erode/">Learn more about painless delivery</a>.'],
    ['What should I bring to my first visit?', 'Your previous medical and scan reports, a list of medicines you take, the date of your last period, and records from earlier pregnancies. If you have diabetes, thyroid disease or high blood pressure, bring those reports too.'],
    ['How much does delivery cost?', `The cost depends on the type of delivery and any extra care you need. We explain expected costs clearly before treatment, with no hidden fees. Call or WhatsApp ${P} to discuss your situation.`],
  ],
  related: ['normal-painless-delivery-erode', 'high-risk-pregnancy-erode', 'gynecologist-erode'],
});

const delivery = makeServicePage({
  slug: 'normal-painless-delivery-erode',
  title: 'Normal & Painless (Epidural) Delivery in Erode | Abishek Hospital',
  description: `Normal delivery and painless (epidural) labour at Abishek Hospital, Erode Fort. Over 2,500 epidural deliveries. Led by Dr. Jayanthi Prabakaran. Call ${P}.`,
  eyebrow: 'Normal & painless delivery',
  h1: 'Normal &amp; Painless Delivery in <em>Erode</em>',
  tamil: 'சுகப்பிரசவம் · வலியில்லா பிரசவம் (எபிடியூரல்)',
  lead: 'When it is safe for you and your baby, a normal delivery is usually the preferred way to give birth, and labour pain no longer has to be endured. Over 2,500 deliveries with epidural (painless) pain relief have been completed under Dr. Jayanthi Prabakaran’s care.',
  waText: 'Hello Abishek Hospital, I would like to ask about normal / painless (epidural) delivery.',
  facts: [
    { icon: 'syringe', title: 'Epidural (painless) delivery', text: 'Over 2,500 epidural deliveries' },
    { icon: 'award', title: 'Led by Dr. Jayanthi Prabakaran', text: '40,000+ safe deliveries' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
    { icon: 'hand-heart', title: 'Costs explained upfront', text: 'No hidden fees' },
  ],
  sections: [
    { id: 'normal', title: 'Normal delivery: why it is usually preferred', nav: 'Normal delivery', html: `
<p>A normal (vaginal) delivery is a natural process that most healthy pregnancies can follow safely. Compared with a caesarean section, it generally means:</p>
<ul class="checks"><li>a quicker recovery and an earlier return to daily activities</li><li>a shorter hospital stay</li><li>a lower risk of surgical complications such as wound infection</li><li>an easier start to breastfeeding and skin-to-skin contact with your baby</li></ul>
<p>It is not always possible, and that is fine. The goal is always a healthy mother and a healthy baby, by the safest route for you.</p>` },
    { id: 'epidural', title: 'What is a painless (epidural) delivery?', nav: 'Painless delivery', html: `
<p>An epidural is a form of pain relief for labour. An anaesthetist places a very thin tube in your lower back, close to the nerves that carry labour pain, and gives medicine through it. Within about 10 to 20 minutes the pain eases, while you stay awake, feel your contractions as pressure, and can push when it is time.</p>
<h3>Good to know</h3>
<ul class="checks">
<li>It is widely used around the world and is generally considered safe for mother and baby.</li>
<li>It can be topped up during labour, so relief continues for as long as you need it.</li>
<li>Possible effects include a temporary drop in blood pressure, itching, shivering or numb legs. A headache afterwards is uncommon.</li>
<li>It does not usually increase the chance of a caesarean section, although the pushing stage may take a little longer.</li>
<li>It is not suitable for everyone, for example if you have a bleeding disorder or an infection at the injection site. Your doctor will check before recommending it.</li></ul>
<p>Talk to Dr. Jayanthi Prabakaran about pain relief in the last trimester, so you can decide calmly, well before labour begins.</p>` },
    { id: 'compare', title: 'Normal delivery or caesarean?', nav: 'Normal vs C-section', wide: true, html: `
<div class="grid cols-2">
<div class="card flat"><h3>A normal delivery is usually advised when…</h3><ul class="checks"><li>your baby is head-down and growing well</li><li>your pregnancy is healthy, or a condition is well controlled</li><li>labour starts and progresses normally</li></ul></div>
<div class="card flat"><h3>A caesarean is advised when…</h3><ul class="checks"><li>the baby is not getting enough oxygen, or labour is not progressing</li><li>the baby is lying sideways, or in some cases bottom-first</li><li>the placenta covers the cervix (placenta praevia)</li><li>there are certain medical conditions or previous uterine surgery</li></ul></div>
</div>
<div class="prose"><p style="margin-top:1.2rem">A caesarean can be lifesaving, and nobody should feel guilty about having one. We explain which route is safest for you and why, so you can decide together with your doctor.</p></div>` },
    { id: 'vbac', title: 'Normal delivery after a previous caesarean', nav: 'After a C-section', html: `
<p>Some women who have had a caesarean can safely try for a normal delivery next time. This is known as VBAC (vaginal birth after caesarean). Whether it is suitable depends on why the earlier caesarean was done, the type of scar on your uterus, the gap between pregnancies and how this pregnancy is going. Dr. Jayanthi Prabakaran will assess you individually and explain the benefits and risks before you decide.</p>` },
    { id: 'prepare', title: 'Preparing for a normal delivery', nav: 'Preparation', html: `
<ul class="checks"><li>Keep up your antenatal visits and scans.</li><li>Stay active with daily walking and gentle exercise, unless your doctor has advised otherwise.</li><li>Practise breathing and relaxation, and learn the signs of labour: regular contractions that get stronger and closer together, your waters breaking, or a blood-stained show.</li><li>Eat well and stay hydrated.</li><li>Pack your hospital bag and keep your reports handy by 36 weeks.</li><li>Discuss pain relief, including the epidural, ahead of time.</li></ul>
<p>If labour starts, or you are unsure, call ${P}. Emergency care is available 24/7. <a href="/maternity-hospital-erode/">See our full pregnancy and maternity care</a>.</p>` },
  ],
  faqs: [
    ['Is a painless delivery safe for my baby?', 'Epidural pain relief is widely used around the world and is generally considered safe for mother and baby. Only a small amount of medicine reaches the baby, and your baby is monitored during labour. Your doctor will check that it is suitable for you.'],
    ['Will I feel anything with an epidural?', 'You will usually still feel pressure and tightening with contractions, and you can tell when to push, but the sharp pain is greatly reduced. The level of relief varies from woman to woman and can be adjusted.'],
    ['Does an epidural increase the chance of a caesarean?', 'Studies show that epidural pain relief does not significantly increase the chance of a caesarean. It can make the pushing stage slightly longer.'],
    ['Can I have a normal delivery after a caesarean?', 'Sometimes, yes. It depends on the reason for your earlier caesarean, your scar and your current pregnancy. Dr. Jayanthi Prabakaran will assess you and explain whether it is a safe option for you.'],
    ['Do I have to decide about the epidural in advance?', 'No, you can ask for it during labour. But it helps to discuss it in the last trimester, so you know what to expect and any checks can be done in time.'],
    ['How much does a normal delivery cost in Erode?', `The cost depends on the type of delivery, the room you choose and any extra care needed. We explain costs upfront, with no hidden fees. Call or WhatsApp ${P} for details.`],
  ],
  related: ['maternity-hospital-erode', 'high-risk-pregnancy-erode', 'gynecologist-erode'],
});

const highRisk = makeServicePage({
  slug: 'high-risk-pregnancy-erode',
  title: 'High-Risk Pregnancy Care in Erode | Abishek Hospital',
  description: 'High-risk pregnancy care at Abishek Hospital, Erode Fort: gestational diabetes, high blood pressure, twins, previous C-section and more, with 24/7 monitoring.',
  eyebrow: 'High-risk pregnancy',
  h1: 'High-Risk Pregnancy Hospital in <em>Erode</em>',
  tamil: 'அதிக ஆபத்துள்ள கர்ப்பகால சிகிச்சை',
  lead: 'A high-risk pregnancy needs closer watching, not more worry. Dr. Jayanthi Prabakaran, a high-risk pregnancy specialist, provides planned, carefully monitored care, with 24/7 monitoring, so you and your baby are looked after at every step.',
  waText: 'Hello Abishek Hospital, I would like to book a high-risk pregnancy consultation.',
  facts: [
    { icon: 'award', title: 'High-risk pregnancy specialist', text: 'Dr. Jayanthi Prabakaran' },
    { icon: 'activity', title: '24/7 monitoring', text: 'Round-the-clock monitoring for complex pregnancies' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
    { icon: 'pin', title: 'Erode Fort', text: 'No.18, Near Bus Stand, Bharathi Street' },
  ],
  sections: [
    { id: 'what', title: 'What makes a pregnancy high-risk?', nav: 'What it means', wide: true, html: `
<div class="prose"><p>A pregnancy is called high-risk when the mother or baby has a higher chance of complications. It does not mean something will go wrong, only that extra care helps. Common reasons include:</p></div>
<div class="grid cols-2" style="margin-top:.6rem">
<ul class="checks"><li>age under 18 or over 35</li><li>diabetes, before or during pregnancy</li><li>high blood pressure or pre-eclampsia</li><li>thyroid disease or anaemia</li><li>being underweight or overweight</li><li>pregnancy after fertility treatment</li></ul>
<ul class="checks"><li>twins or triplets</li><li>a previous caesarean, miscarriage, preterm birth or stillbirth</li><li>a low-lying placenta (placenta praevia)</li><li>poor growth of the baby</li><li>Rh-negative blood group</li><li>heart, kidney, liver or lung disease, epilepsy or autoimmune disease</li></ul>
</div>` },
    { id: 'care', title: 'How we look after you', nav: 'Our care', html: `
<ol class="steps">
<li><b>Assessment and a personal plan</b><span>Your history, reports and risks are reviewed, and a plan is made for your visits, tests and medicines.</span></li>
<li><b>Closer monitoring</b><span>More frequent visits, with blood pressure and blood sugar checks, and scans to watch your baby’s growth and well-being as needed.</span></li>
<li><b>Medicines, diet and lifestyle guidance</b><span>Clear advice on medicines, food, activity and rest that suit your condition.</span></li>
<li><b>Other specialists when needed</b><span>If your condition needs it, your doctor will advise you to see other specialists, such as a physician or diabetologist.</span></li>
<li><b>Planning the delivery</b><span>The timing and the safest way for your baby to be born are discussed well in advance. Emergency care and monitoring are available 24/7.</span></li>
</ol>` },
    { id: 'conditions', title: 'Common high-risk situations', nav: 'Conditions', html: `
<h3>Gestational diabetes</h3>
<p>High blood sugar that starts in pregnancy. It is usually screened for between 24 and 28 weeks (earlier if you are at risk) and managed with diet, activity and, if needed, medicine. Good control protects you and your baby. Sugar usually returns to normal after delivery, but you should be tested again later.</p>
<h3>High blood pressure and pre-eclampsia</h3>
<p>High blood pressure after 20 weeks, sometimes with protein in the urine, can affect the mother and baby. Watch for a severe headache, blurred vision, upper tummy pain or sudden swelling, and report them at once.</p>
<h3>Twin pregnancy</h3>
<p>Twins need more frequent scans and checkups and carry a higher chance of early delivery, so careful planning matters.</p>
<h3>Previous caesarean or pregnancy loss</h3>
<p>Your earlier history shapes how your pregnancy and delivery are planned. Share all your records with your doctor.</p>
<h3>Anaemia and thyroid disorders</h3>
<p>Both are common and treatable, and controlling them improves your health and your baby’s growth.</p>
<h3>Preterm labour</h3>
<p>Contractions before 37 weeks need urgent attention. Call us or come in straight away.</p>` },
    { id: 'before', title: 'Planning a pregnancy with a health condition', nav: 'Before you conceive', html: `
<p>If you have diabetes, high blood pressure, thyroid disease, epilepsy or another long-term condition, see your doctor <em>before</em> you try to conceive. Getting your condition under control and starting folic acid early gives your baby the best start. We are happy to see you for pre-pregnancy counselling. If you are finding it hard to conceive, read about <a href="/infertility-treatment-erode/">fertility and IUI treatment</a>.</p>` },
    { id: 'warning-signs', title: 'Warning signs: when to come in immediately', nav: 'Warning signs', html: warnSigns },
  ],
  faqs: [
    ['What does high-risk pregnancy mean?', 'It means you or your baby have a higher chance of complications because of a medical condition, your age, your history or the pregnancy itself. With the right monitoring and care, most women with a high-risk pregnancy go on to have healthy babies.'],
    ['Can I have a normal delivery in a high-risk pregnancy?', 'Often yes, depending on your condition and how your pregnancy progresses. Your doctor will plan the delivery with you and may recommend a caesarean if it is the safer option.'],
    ['How often will I need to visit?', 'More often than in a routine pregnancy. Your doctor will decide based on your condition, and may ask for weekly or fortnightly visits, more frequent scans and home blood pressure or sugar readings.'],
    ['Do I need complete bed rest?', 'Not usually. Strict bed rest is rarely advised these days. Your doctor will tell you how much activity is safe for you.'],
    ['Is monitoring available at night?', `Yes. Our emergency care and monitoring are available 24 hours a day. Call ${P} or come straight to the hospital if you are worried.`],
    ['Will gestational diabetes go away after delivery?', 'It usually settles after delivery, but it raises the chance of type 2 diabetes later. You should have your blood sugar checked again after delivery and then regularly.'],
  ],
  related: ['maternity-hospital-erode', 'normal-painless-delivery-erode', 'pcos-treatment-erode'],
});

export default [maternity, delivery, highRisk];
