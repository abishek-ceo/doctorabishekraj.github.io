// Gynaecology service pages: general gynaecology, PCOS/PCOD, fertility & IUI, laparoscopic surgery.
import { icon, makeServicePage } from '../lib.mjs';
import { site } from '../site.mjs';

const P = site.phone.display;
const card = (ic, title, text, link) =>
  `<div class="card flat"><span class="ico">${icon(ic)}</span><h3>${title}</h3><p>${text}</p>${link ? `<a class="link-arrow" href="${link[0]}">${link[1]} ${icon('arrow')}</a>` : ''}</div>`;

const gynae = makeServicePage({
  slug: 'gynecologist-erode',
  title: 'Gynecologist in Erode | Lady Doctor for Women’s Health | Abishek Hospital',
  description: 'Lady gynecologist in Erode for irregular or painful periods, fibroids, ovarian cysts, discharge, menopause and family planning. Abishek Hospital, Erode Fort.',
  eyebrow: 'Gynaecology & women’s health',
  h1: 'Gynecologist in <em>Erode</em>',
  tamil: 'மகளிர் மருத்துவம் · மாதவிடாய் பிரச்சனைகள் · கர்ப்பப்பை சிகிச்சை',
  lead: 'Looking for a lady doctor in Erode? Dr. Jayanthi Prabakaran offers private, respectful care for women of every age, from adolescence to menopause, using modern, minimally invasive techniques wherever possible.',
  waText: 'Hello Abishek Hospital, I would like to book a gynaecology consultation.',
  facts: [
    { icon: 'stethoscope', title: 'Dr. Jayanthi Prabakaran', text: 'Consultant Obstetrician & Gynaecologist' },
    { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
    { icon: 'users', title: 'Book or walk in', text: 'WhatsApp, call, or walk in during clinic hours' },
    { icon: 'shield', title: 'Private and confidential', text: 'Your information is kept private and secure' },
  ],
  sections: [
    { id: 'conditions', title: 'Conditions we diagnose and treat', nav: 'Conditions', wide: true, html: `
<div class="grid cards">
${card('droplets', 'Irregular, heavy or painful periods', 'A cycle shorter than 21 or longer than 35 days, very heavy bleeding, or pain that stops you from your daily work should be checked. Common causes are hormonal imbalance, PCOS, thyroid problems, fibroids and polyps.')}
${card('flower', 'PCOS / PCOD', 'Irregular periods, acne, excess hair growth and weight gain, and trouble conceiving.', ['/pcos-treatment-erode/', 'PCOS treatment'])}
${card('activity', 'Fibroids', 'Non-cancerous growths in the uterus that can cause heavy periods, pelvic pressure or trouble conceiving. Many can be treated by keyhole surgery when needed.', ['/laparoscopic-surgery-erode/', 'Keyhole surgery'])}
${card('heart-pulse', 'Ovarian cysts', 'Fluid-filled sacs on the ovary. Many are harmless and settle on their own, while some need monitoring or surgery.')}
${card('thermometer', 'White discharge and vaginal infections', 'Some discharge is normal. Itching, a bad smell, burning or a change in colour can point to an infection that is easily treated.')}
${card('clipboard', 'Pelvic pain and endometriosis', 'Long-lasting pelvic pain or very painful periods can be due to endometriosis or pelvic infection and deserve a proper check.')}
${card('shield', 'Cervical screening', 'A Pap smear or HPV test can find changes in the cervix early. Ask when you should start and how often to repeat it.')}
${card('sparkles', 'Menopause care', 'Hot flushes, poor sleep, mood changes and irregular periods around the age of 45 to 55 can be eased with the right guidance.')}
${card('pill', 'Family planning', 'Counselling on safe, affordable contraception, including pills, IUDs, injections and permanent methods.')}
${card('sprout', 'Adolescent health', 'Gentle guidance for teenagers on periods, period pain, hygiene and HPV vaccination.')}
</div>` },
    { id: 'when', title: 'When should you see a gynaecologist?', nav: 'When to visit', html: `
<ul class="checks">
<li>Your periods are very irregular, or you have missed periods for three months and you are not pregnant</li>
<li>Your periods are very heavy, last longer than a week or are very painful</li>
<li>You bleed between periods, after sex, or after menopause</li>
<li>You have pelvic pain, unusual discharge, itching or a bad smell</li>
<li>You feel a lump or swelling in your lower tummy</li>
<li>You have been trying to conceive for 12 months (6 months if you are 35 or older)</li>
<li>You are planning a pregnancy, or want advice on contraception</li>
<li>You have symptoms of menopause, or want a routine check-up and screening</li></ul>
<div class="callout"><p><b>Bleeding after menopause should always be checked</b> by a doctor, even if it is light or happens only once.</p></div>` },
    { id: 'screening', title: 'Cervical screening and HPV vaccination', nav: 'Screening', html: `
<p>Cervical cancer is largely preventable. Regular screening with a Pap smear or HPV test can find changes early, when treatment is simple, and the HPV vaccine protects against the virus that causes most cervical cancers. Ask Dr. Jayanthi Prabakaran when you should begin screening, how often to repeat it, and whether you or your daughter should have the HPV vaccine.</p>` },
    { id: 'menopause', title: 'Menopause and perimenopause care', nav: 'Menopause', html: `
<p>Menopause, when periods have stopped for 12 months, usually happens between 45 and 55. The years before it (perimenopause) can bring irregular periods, hot flushes, night sweats, poor sleep, mood changes, vaginal dryness and loss of bone strength.</p>
<p>Care is individual. It can include lifestyle changes, calcium and vitamin D, medicines for specific symptoms and, for some women, hormone therapy after a careful check. Do not ignore heavy bleeding, or bleeding after menopause.</p>` },
    { id: 'family-planning', title: 'Family planning and contraception', nav: 'Family planning', html: `
<p>The right method depends on your age, health, family size and preferences. We offer personalised, affordable counselling on options such as pills, copper and hormonal IUDs, injections, condoms and permanent methods like tubal ligation, as well as emergency contraception. After delivery, we help you plan the gap before your next pregnancy.</p>` },
    { id: 'lady-doctor', title: 'A lady doctor you can talk to', nav: 'Your comfort', html: `
<p>Many women put off seeing a gynaecologist because they feel shy or worried. Dr. Jayanthi Prabakaran offers respectful, private consultations, explains everything in plain language and discusses costs upfront. Dr. Jayanthi also shares women’s health videos in Tamil every day on <a href="/videos/">YouTube</a>, so you can learn at home before you visit.</p>` },
  ],
  faqs: [
    ['Which doctor should I see for period problems?', 'A gynaecologist. Irregular, heavy, painful or missed periods are all common reasons to visit, and most causes are treatable.'],
    ['Is it normal to have irregular periods?', 'Cycles can vary, especially in teenagers and near menopause. But cycles shorter than 21 days or longer than 35 days, missed periods, or very heavy bleeding should be checked, because PCOS, thyroid problems and fibroids are common causes.'],
    ['Do I need an appointment?', `You can book on WhatsApp or by phone at ${P}, or walk in during clinic hours (${site.hours.opd}). For emergencies we are open 24 hours a day.`],
    ['When should a girl first visit a gynaecologist?', 'There is no fixed age. A visit is a good idea if periods have not started by 15, are very painful or heavy, or if you or your parents have concerns. A gynaecologist can also advise on HPV vaccination.'],
    ['Is my consultation private?', 'Yes. Your consultation and medical information are kept private and secure.'],
    ['Do you treat fibroids and ovarian cysts?', 'Yes. Many can be treated with medicines or simply monitored, and when surgery is needed, keyhole (laparoscopic) surgery is often possible. Dr. Jayanthi Prabakaran will advise what is best for you.'],
  ],
  related: ['pcos-treatment-erode', 'laparoscopic-surgery-erode', 'infertility-treatment-erode'],
});

const pcos = makeServicePage({
  slug: 'pcos-treatment-erode',
  title: 'PCOS / PCOD Treatment in Erode | Abishek Hospital',
  description: 'PCOS and PCOD treatment in Erode for irregular periods, acne, excess hair, weight gain and fertility. Expert hormonal care at Abishek Hospital, Erode Fort.',
  eyebrow: 'PCOS / PCOD & hormonal care',
  h1: 'PCOS &amp; PCOD Treatment in <em>Erode</em>',
  tamil: 'பி.சி.ஓ.எஸ் / சினைப்பை நீர்க்கட்டி சிகிச்சை',
  lead: 'Irregular periods, stubborn acne, unwanted hair, weight gain or difficulty conceiving can all be signs of PCOS. It is common, it is manageable, and you do not have to face it alone. Dr. Jayanthi Prabakaran provides expert diagnosis and management of PCOS, thyroid and other hormonal conditions.',
  waText: 'Hello Abishek Hospital, I would like to book a consultation for PCOS / irregular periods.',
  facts: [
    { icon: 'flower', title: 'PCOS and hormonal care', text: 'Diagnosis and long-term management' },
    { icon: 'microscope', title: 'Fertility support', text: 'Ovulation and IUI treatment when you want to conceive' },
    { icon: 'video', title: 'Free Tamil videos', text: 'PCOS, periods and fertility explained on YouTube' },
    { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
  ],
  sections: [
    { id: 'what', title: 'What is PCOS?', nav: 'What is PCOS', html: `
<p>Polycystic ovary syndrome (PCOS) is a hormonal condition in which the ovaries do not release eggs regularly and the body makes more male hormones (androgens) than usual. Many women with PCOS also have insulin resistance, which makes it harder to control weight and blood sugar. The ovaries may show many small follicles (“cysts”) on ultrasound, but these are not true cysts and do not need to be removed.</p>
<div class="callout"><h3>PCOD or PCOS?</h3><p>In everyday use in India, “PCOD” and “PCOS” are often used for the same problem. Doctors use the term PCOS. Whatever you call it, the approach is similar: find out how it affects you, and treat what troubles you most.</p></div>` },
    { id: 'signs', title: 'Signs and symptoms', nav: 'Symptoms', html: `
<ul class="checks">
<li>irregular, infrequent or missed periods</li>
<li>acne and oily skin</li>
<li>excess hair on the face and body (hirsutism), or thinning hair on the scalp</li>
<li>weight gain, especially around the waist</li>
<li>dark, velvety patches of skin on the neck or underarms</li>
<li>difficulty getting pregnant</li>
<li>mood changes, low self-esteem or poor sleep</li></ul>
<p>Not every woman with PCOS has every sign, and some women with PCOS have a normal weight.</p>` },
    { id: 'diagnosis', title: 'How PCOS is diagnosed', nav: 'Diagnosis', html: `
<p>There is no single test. Your doctor will ask about your periods and symptoms, examine you, and usually advise a pelvic ultrasound and blood tests for hormones, thyroid, blood sugar and cholesterol.</p>
<p>PCOS is diagnosed when at least two of these three are present, after other causes have been ruled out: irregular or absent ovulation, signs of high male hormones (in your symptoms or blood tests), and polycystic-looking ovaries on ultrasound. In teenagers the diagnosis is made more carefully, because irregular periods are common in the first years.</p>` },
    { id: 'treatment', title: 'Treatment: tailored to what you want', nav: 'Treatment', html: `
<p>Treatment depends on your goals: regular periods, clearer skin, less hair growth, weight control or pregnancy.</p>
<ol class="steps">
<li><b>Lifestyle first</b><span>Food, activity, sleep and weight are the foundation of PCOS care.</span></li>
<li><b>Medicines to regulate your periods</b><span>Hormonal treatment can bring regular periods and also helps acne and unwanted hair.</span></li>
<li><b>Treatment for insulin resistance, when needed</b><span>Some women benefit from medicines that improve how the body handles sugar.</span></li>
<li><b>Skin and hair treatment</b><span>Targeted treatment for acne and unwanted hair growth.</span></li>
<li><b>Help to conceive</b><span>Ovulation-inducing medicines with monitoring, and IUI or other fertility treatment if needed. <a href="/infertility-treatment-erode/">Read about fertility and IUI treatment</a>.</span></li>
</ol>` },
    { id: 'lifestyle', title: 'Diet and lifestyle that help', nav: 'Diet & lifestyle', html: `
<p>If you are overweight, losing even 5 to 10% of your body weight can help bring back regular ovulation. Useful habits for everyone with PCOS:</p>
<ul class="checks">
<li>about 150 minutes of brisk activity a week, such as walking, cycling or swimming</li>
<li>balanced meals with whole grains, pulses, vegetables, fruit and protein</li>
<li>less sugary drinks, sweets, refined flour and fried snacks</li>
<li>regular meal times and 7 to 8 hours of sleep</li>
<li>ways to manage stress, such as walking, yoga or talking with family</li>
<li>no crash diets and no unproven “PCOS cures”</li></ul>` },
    { id: 'pregnancy', title: 'PCOS and pregnancy', nav: 'Pregnancy', html: `
<p>PCOS can make it harder to conceive, but most women with PCOS can become pregnant, often with simple treatment such as ovulation-inducing medicines and monitoring. Over 500 conceptions through IUI have been achieved under Dr. Jayanthi Prabakaran’s care.</p>
<p>A pregnancy with PCOS has a higher chance of gestational diabetes, high blood pressure and early delivery, so early antenatal care matters. See our <a href="/high-risk-pregnancy-erode/">high-risk pregnancy care</a> and <a href="/maternity-hospital-erode/">maternity care</a>.</p>` },
    { id: 'long-term', title: 'Looking after your long-term health', nav: 'Long-term health', html: `
<p>PCOS is lifelong, but good care lowers the chance of problems later: type 2 diabetes, high blood pressure and cholesterol, fatty liver, sleep apnoea, thickening of the uterine lining (which is why regular periods or protective treatment matter) and low mood or anxiety. Regular check-ups, even when you feel well, are part of treatment.</p>` },
  ],
  faqs: [
    ['Is PCOS curable?', 'PCOS cannot be cured, but its symptoms can be controlled very well with the right treatment and lifestyle changes. Many women have regular periods, clear skin and healthy pregnancies.'],
    ['Can I get pregnant if I have PCOS?', 'Yes, most women with PCOS can. Some need medicines to help ovulation, and a few need IUI or other fertility treatment. Starting early with your doctor improves your chances.'],
    ['Do I need to lose weight?', 'If you are overweight, even a modest weight loss can bring back regular periods and improve symptoms. Women with a normal weight can also have PCOS, and for them the focus is on other treatments and healthy habits.'],
    ['Will I need medicines for life?', 'Not always. Some women do well with lifestyle changes alone, while others need medicines for certain periods, such as when they want to conceive. Your plan is reviewed regularly.'],
    ['What tests are done for PCOS?', 'Usually a pelvic ultrasound and blood tests for hormones, thyroid, blood sugar and cholesterol. Your doctor decides which tests you need.'],
    ['What is the difference between PCOD and PCOS?', 'The two names are often used for the same problem in everyday talk, while doctors use the term PCOS. What matters is a proper check-up to see how it affects you, and treatment for your symptoms and goals.'],
  ],
  related: ['gynecologist-erode', 'infertility-treatment-erode', 'high-risk-pregnancy-erode'],
});

const fertility = makeServicePage({
  slug: 'infertility-treatment-erode',
  title: 'Infertility & IUI Treatment in Erode | Abishek Hospital',
  description: 'Infertility evaluation and IUI treatment in Erode, with over 500 conceptions through IUI. Compassionate fertility care by Dr. Jayanthi Prabakaran, Abishek Hospital.',
  eyebrow: 'Fertility & IUI',
  h1: 'Infertility Treatment &amp; IUI in <em>Erode</em>',
  tamil: 'குழந்தையின்மை சிகிச்சை · கருத்தரிப்பு ஆலோசனை · ஐ.யூ.ஐ',
  lead: 'Not conceiving after trying for a year is common, and in many couples the cause can be found and treated. Dr. Jayanthi Prabakaran offers compassionate fertility evaluation and IUI treatment at Abishek Hospital, with over 500 conceptions through IUI.',
  waText: 'Hello Abishek Hospital, I would like to book a fertility / IUI consultation.',
  facts: [
    { icon: 'microscope', title: 'Over 500 IUI conceptions', text: 'Fertility care with compassion and expertise' },
    { icon: 'users', title: 'Both partners welcome', text: 'Evaluation looks at the woman and the man' },
    { icon: 'shield', title: 'Private and respectful', text: 'Patient, confidential care' },
    { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
  ],
  sections: [
    { id: 'when', title: 'When to seek help', nav: 'When to seek help', html: `
<p>See a doctor if you have been trying to conceive for <b>12 months</b> without success, or <b>6 months</b> if the woman is 35 or older. Do not wait if you are over 40, if periods are irregular or absent, or if you already know of a condition that can affect fertility, such as PCOS, endometriosis, blocked tubes, a past pelvic infection or surgery, or a low sperm count.</p>` },
    { id: 'causes', title: 'What causes infertility?', nav: 'Causes', html: `
<p>Roughly one third of cases are due to the woman, one third to the man, and the rest to both partners or no cause being found. Age matters too.</p>
<div class="grid cols-2"><div><h3>In women</h3><ul class="checks"><li>ovulation problems, such as PCOS or thyroid disorders</li><li>blocked fallopian tubes</li><li>endometriosis</li><li>fibroids or other uterine problems</li></ul></div>
<div><h3>In men</h3><ul class="checks"><li>low sperm count</li><li>poor sperm movement</li><li>abnormally shaped sperm</li><li>infections, varicocele and lifestyle factors</li></ul></div></div>` },
    { id: 'evaluation', title: 'Your fertility evaluation', nav: 'Evaluation', html: `
<p>The evaluation looks at both partners and is done step by step:</p>
<ul class="checks"><li>a detailed history and examination of both partners</li><li>ovulation checks: cycle history, hormone tests and follicle monitoring by ultrasound</li><li>a pelvic ultrasound</li><li>a semen analysis, a simple and painless first test for the man</li><li>an assessment of the fallopian tubes, when needed</li><li>thyroid, blood sugar and other tests, as indicated</li></ul>` },
    { id: 'treatment', title: 'Treatment options', nav: 'Treatment', html: `
<p>Treatment depends on the cause, your age and how long you have been trying. It may include:</p>
<ul class="checks"><li>lifestyle changes and timing intercourse around ovulation</li><li>medicines to induce ovulation, with monitoring</li><li>treatment of the underlying problem, such as <a href="/pcos-treatment-erode/">PCOS</a>, thyroid disease, endometriosis or infection</li><li>IUI (intrauterine insemination)</li><li>surgery in selected cases, including <a href="/laparoscopic-surgery-erode/">laparoscopic (keyhole) surgery</a></li></ul>` },
    { id: 'iui', title: 'What is IUI?', nav: 'IUI explained', html: `
<p>Intrauterine insemination (IUI) places specially prepared sperm directly into the uterus around the time of ovulation. It is a short, simple procedure, similar to a Pap smear, and does not need anaesthesia.</p>
<h3>IUI may help when there is</h3>
<ul class="checks"><li>unexplained infertility</li><li>mild male-factor infertility</li><li>ovulation problems</li><li>a problem with the mucus at the cervix</li></ul>
<h3>How it works</h3>
<ol class="steps"><li><b>Ovulation is monitored</b><span>With or without ovulation-inducing medicines, using ultrasound checks.</span></li><li><b>The semen sample is prepared</b><span>The healthiest sperm are separated in the laboratory.</span></li><li><b>Insemination</b><span>The sperm are placed in the uterus with a thin catheter. You rest briefly and then go home.</span></li><li><b>Pregnancy test</b><span>About two weeks later.</span></li></ol>
<p>Success depends on age, the cause of infertility and the number of cycles tried, and Dr. Jayanthi Prabakaran will give you honest, individual expectations. Over 500 conceptions through IUI have been achieved under her care.</p>` },
    { id: 'beyond', title: 'When IUI may not be enough', nav: 'Beyond IUI', html: `
<p>IUI works for many couples, but not for everyone. Other treatments, such as IVF or ICSI, may be needed in situations like blocked fallopian tubes, severe male-factor infertility or advanced age. Your doctor will explain honestly whether IUI is likely to help you and what the next steps would be.</p>` },
    { id: 'tips', title: 'Simple things that improve your chances', nav: 'Tips', html: `
<ul class="checks"><li>Reach and keep a healthy weight.</li><li>Take folic acid daily, starting before conception.</li><li>Stop smoking, tobacco and alcohol, both partners.</li><li>Limit caffeine and stay moderately active.</li><li>Learn your fertile days, and have intercourse every one to two days around ovulation.</li><li>Manage stress and sleep well.</li><li>Avoid unproven remedies. Ask your doctor first.</li></ul>
<p>Infertility can be emotionally tiring. We treat every couple with privacy, respect and patience, and we encourage both partners to come together.</p>` },
  ],
  faqs: [
    ['How long should we try before seeing a doctor?', 'Twelve months if the woman is under 35, and six months if she is 35 or older. Go sooner if periods are irregular or you know of a condition that affects fertility.'],
    ['Does my husband also need tests?', 'Yes. In about half of couples a male factor contributes, and a semen analysis is a simple, painless first test.'],
    ['Is IUI painful?', 'No. Most women feel little or no discomfort, perhaps mild cramping. It takes only a few minutes and does not need anaesthesia.'],
    ['How many IUI cycles are usually tried?', 'Many couples are advised to try up to three or four well-timed cycles if tests suggest IUI is suitable. Your doctor will review the plan after each cycle.'],
    ['What is the difference between IUI and IVF?', 'In IUI, sperm are placed in the uterus and fertilisation happens inside the body. In IVF, eggs are collected, fertilised in a laboratory and the embryo is placed in the uterus. IVF is a more complex treatment and is advised in specific situations.'],
    ['Can PCOS be treated so that I can get pregnant?', 'Yes. Most women with PCOS can conceive with lifestyle changes, ovulation-inducing medicines and monitoring, and sometimes IUI. <a href="/pcos-treatment-erode/">Read about PCOS treatment</a>.'],
  ],
  related: ['pcos-treatment-erode', 'gynecologist-erode', 'laparoscopic-surgery-erode'],
});

const laparoscopy = makeServicePage({
  slug: 'laparoscopic-surgery-erode',
  title: 'Laparoscopic (Keyhole) Surgery in Erode | Abishek Hospital',
  description: 'Laparoscopic (keyhole) surgery for fibroids, ovarian cysts, endometriosis and more at Abishek Hospital, Erode Fort. Over 7,000 laparoscopic gynaecological surgeries.',
  eyebrow: 'Laparoscopic surgery',
  h1: 'Laparoscopic Gynaecological Surgery in <em>Erode</em>',
  tamil: 'லேப்ராஸ்கோபி அறுவை சிகிச்சை · சிறிய துளை அறுவை சிகிச்சை',
  lead: 'Gynaecological surgery through a few tiny cuts, with less pain, a shorter hospital stay and a quicker return to normal life. Dr. Jayanthi Prabakaran has performed over 7,000 laparoscopic gynaecological surgeries.',
  waText: 'Hello Abishek Hospital, I would like to book a consultation about laparoscopic (keyhole) surgery.',
  facts: [
    { icon: 'scissors', title: '7,000+ laparoscopic surgeries', text: 'Minimally invasive gynaecological surgery' },
    { icon: 'timer', title: 'Faster recovery', text: 'Smaller cuts, less pain, shorter hospital stay' },
    { icon: 'stethoscope', title: 'Consultation first', text: 'Your surgeon advises whether keyhole surgery suits you' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
  ],
  sections: [
    { id: 'what', title: 'What is laparoscopic (keyhole) surgery?', nav: 'What it is', html: `
<p>In laparoscopic surgery, the surgeon operates through three or four small cuts, usually 5 to 10 mm long, instead of one large incision. A thin camera shows the inside of your abdomen on a screen, and fine instruments are used to do the operation with great precision.</p>` },
    { id: 'conditions', title: 'Conditions that can be treated', nav: 'Conditions', html: `
<p>Where suitable, laparoscopy can be used for:</p>
<ul class="checks"><li>fibroids (myomectomy)</li><li>ovarian cysts (cystectomy)</li><li>endometriosis</li><li>ectopic pregnancy</li><li>hysterectomy for non-cancerous conditions</li><li>tubal surgery and sterilisation</li><li>pelvic adhesions</li><li>diagnostic laparoscopy for infertility or long-lasting pelvic pain</li></ul>
<p>Not sure what you need? Start with a <a href="/gynecologist-erode/">gynaecology consultation</a>.</p>` },
    { id: 'benefits', title: 'Benefits compared with open surgery', nav: 'Benefits', html: `
<ul class="checks"><li>smaller cuts and much smaller scars</li><li>less pain after the operation</li><li>less blood loss</li><li>a shorter hospital stay</li><li>a faster recovery and quicker return to normal activities</li><li>a lower risk of wound infection</li></ul>` },
    { id: 'process', title: 'What to expect', nav: 'What to expect', html: `
<ol class="steps">
<li><b>Consultation and tests</b><span>Your doctor examines you and advises an ultrasound, blood tests and an anaesthesia check.</span></li>
<li><b>Admission and preparation</b><span>You are told when to stop eating and drinking, and which medicines to continue.</span></li>
<li><b>The operation</b><span>Done under general anaesthesia, through small cuts, with the abdomen gently inflated with gas to create working space.</span></li>
<li><b>Recovery</b><span>Many women go home within a day or two and return to light activities within days to a couple of weeks, depending on the operation. Your surgeon will give you specific advice.</span></li>
<li><b>Follow-up</b><span>A check-up to review your recovery and any reports.</span></li>
</ol>` },
    { id: 'suitability', title: 'Is keyhole surgery right for me?', nav: 'Is it right for me', html: `
<p>Keyhole surgery suits most gynaecological operations, but not every case. Very large growths, extensive scarring from earlier surgery or some other conditions may need open surgery. If a keyhole operation cannot be completed safely, the surgeon may switch to an open operation, and this is explained to you in advance.</p>
<div class="callout warn"><p><b>Risks.</b> All surgery carries risks, including bleeding, infection, injury to nearby organs and problems related to anaesthesia. Serious complications are uncommon, and your surgeon will discuss the benefits and risks specific to you before you decide.</p></div>` },
  ],
  faqs: [
    ['Is laparoscopic surgery safe?', 'In experienced hands, laparoscopic surgery is safe and widely used for many gynaecological conditions. Like any operation it has risks, which your surgeon will explain before you decide.'],
    ['How long is the recovery after laparoscopic surgery?', 'It depends on the operation. Many women walk the same or next day, go home within a day or two and return to light activities within a week or two. Your surgeon will give you specific advice.'],
    ['Will I have visible scars?', 'The cuts are small, usually 5 to 10 mm, and fade well, so scars are much less noticeable than after open surgery.'],
    ['Can fibroids be removed without a big cut?', 'Often yes. Many fibroids can be removed laparoscopically, depending on their size, number and position. Your doctor will advise you after an ultrasound.'],
    ['Is hysterectomy possible by keyhole surgery?', 'Yes, for many non-cancerous conditions a hysterectomy can be done laparoscopically. Whether it is right for you depends on your condition and your health.'],
    ['How much does laparoscopic surgery cost?', `The cost depends on the operation, your health and the length of your hospital stay. We explain the expected cost clearly before any procedure, with no hidden fees. Call or WhatsApp ${P} for details.`],
  ],
  related: ['gynecologist-erode', 'pcos-treatment-erode', 'infertility-treatment-erode'],
});

export default [gynae, pcos, fertility, laparoscopy];
