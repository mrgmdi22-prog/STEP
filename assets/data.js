// بنك الاختبار التشخيصي: أسئلة أصلية من تأليف أ. أحمد آل سالم. a = الإجابة الصحيحة (الأولى في القائمة وتُخلط عند العرض)
window.DIAG = {
 grammar: [
  {t:'tense', q:'By the time we arrived, the movie ____.', o:['had already started','already started','has already started','was already starting']},
  {t:'tense', q:'She ____ in Riyadh since 2019.', o:['has lived','lives','lived','is living']},
  {t:'cond', q:'If I ____ more time, I would learn another language.', o:['had','have','will have','would have']},
  {t:'passive', q:'The report ____ by the manager yesterday.', o:['was written','wrote','has written','is writing']},
  {t:'modal', q:'You ____ park here; it is forbidden.', o:["mustn't","don't have to","needn't",'might not']},
  {t:'relative', q:'The student ____ won the prize is my cousin.', o:['who','which','whose','whom']},
  {t:'prep', q:'He is very good ____ solving problems.', o:['at','in','on','for']},
  {t:'article', q:'She is ____ honest woman.', o:['an','a','the','(no article)']},
  {t:'compare', q:'This exam was ____ than the last one.', o:['more difficult','most difficult','difficulter','the more difficult']},
  {t:'wordform', q:'Her ____ to the team was very valuable.', o:['contribution','contribute','contributing','contributive']},
  {t:'reported', q:'She asked me where ____.', o:['I lived','did I live','do I live','I do live']},
  {t:'agree', q:'The number of students in the class ____ increased.', o:['has','have','are','were']}
 ],
 vocab: [
  {t:'vocab', q:'The company decided to <b>postpone</b> the meeting.', o:['delay','cancel','start','record']},
  {t:'vocab', q:'Water is <b>scarce</b> in the desert.', o:['rare','dirty','expensive','deep']},
  {t:'vocab', q:'He is a <b>reliable</b> friend.', o:['someone you can trust','very rich','always late','very funny']},
  {t:'vocab', q:'The results were <b>significant</b>.', o:['important','unclear','false','old']},
  {t:'vocab', q:'The government tried to <b>mitigate</b> the effects of the flood.', o:['make them less serious','make them worse','predict them','ignore them']},
  {t:'vocab', q:'He was <b>reluctant</b> to answer.', o:['unwilling','eager','able','afraid']}
 ],
 reading: [
  {p:'Many students believe that staying up late to study is the best way to prepare for an exam. However, researchers have found that sleep plays a key role in memory. During sleep, the brain organizes what we learned during the day and stores it for later. Students who sleep at least seven hours usually remember more than those who study all night. Therefore, experts advise students to review their notes in the evening and then go to bed early.',
   qs:[
    {t:'main', q:'What is the main idea of the passage?', o:['Sleep helps students remember what they study.','Students should never study at night.','Exams are harder in the evening.','The brain is inactive during sleep.']},
    {t:'detail', q:'According to the passage, students who sleep at least seven hours ____.', o:['usually remember more','study for longer','finish exams faster','take fewer notes']},
    {t:'rvocab', q:'In the passage, the word <b>key</b> is closest in meaning to ____.', o:['important','hidden','small','new']}
   ]},
  {p:'Tourism in small mountain villages has grown quickly in recent years. Visitors bring money, and many families now earn extra income by renting rooms. On the other hand, the villagers worry that the growing crowds may damage the environment and change their traditional way of life. Some villages have therefore limited the number of visitors in summer and asked tourists to respect local customs.',
   qs:[
    {t:'detail', q:'What worries the villagers?', o:['Crowds may harm nature and traditions.','There are too few visitors.','Room prices are too low.','Rooms are not available.']},
    {t:'infer', q:'Why have some villages limited visitors in summer?', o:['To protect nature and local culture','To raise room prices','Because of bad weather','Because families have left']},
    {t:'infer', q:"The writer's attitude to tourism is best described as ____.", o:['balanced','strongly opposed','completely positive','uninterested']}
   ]}
 ],
 listening: [
  {k:'conv', L:[['A','Hi Sara, are you coming to the study group tomorrow?'],['B',"I'd love to, but I have a dentist appointment at four."],['A',"No problem. We're meeting at five in the library, not at the cafeteria."],['B','Great. Then I can make it. Should I bring anything?'],['A','Just your grammar notebook. And maybe some water.']],
   qs:[
    {t:'detail', q:'Why can Sara come to the meeting?', o:['It starts after her appointment.','The dentist cancelled.','It was moved to the morning.','She is free all day.']},
    {t:'detail', q:'Where will they meet?', o:['In the library','In the cafeteria','In a classroom','At the dentist']},
    {t:'detail', q:'What should Sara bring?', o:['Her grammar notebook','A dictionary','A laptop','Her lunch']}
   ]},
  {k:'lec', L:[['A','Good morning, everyone. This is a reminder about next week. The science fair, which was planned for Tuesday, has been moved to Thursday, because the hall will be used for an exam on Tuesday. Please remember that projects must be submitted by Wednesday afternoon. Students who miss the deadline will lose ten marks.']],
   qs:[
    {t:'detail', q:'When will the science fair be held now?', o:['On Thursday','On Tuesday','On Wednesday','On Monday']},
    {t:'detail', q:'Why was it moved?', o:['The hall will be used for an exam.','The teachers are away.','It is a holiday.','The projects are not ready.']},
    {t:'detail', q:'What happens to students who are late?', o:['They lose ten marks.','They repeat the project.','They leave the fair.','Nothing happens.']}
   ]}
 ]
};
// بطاقات القواعد لكل موضوع (شرح أصلي مختصر)
window.TOPICS = {
 tense:{n:'الأزمنة',r:'اربط الزمن بكلمات الإشارة: since / for تعني المضارع التام (has lived)، by the time تعني الماضي التام (had started) للحدث الأسبق، yesterday / ago تعني الماضي البسيط.',e:'She has lived here since 2019. · By the time we arrived, the film had started.'},
 cond:{n:'الجمل الشرطية',r:'غير الواقعي في الحاضر: If + ماضي بسيط، would + مصدر. الممكن: If + مضارع، will + مصدر.',e:'If I had more time, I would travel. · If it rains, we will stay.'},
 passive:{n:'المبني للمجهول',r:'be + التصريف الثالث، ويتبع زمن الجملة: was written / is written / has been written.',e:'The report was written yesterday.'},
 modal:{n:'الأفعال الناقصة',r:'mustn\'t = ممنوع. don\'t have to / needn\'t = ليس لازماً. can / could / may / might درجات من الإمكان.',e:"You mustn't park here. · You don't have to come."},
 relative:{n:'أسماء الموصول',r:'who للشخص، which للشيء، whose للملكية، that للاثنين. بعد الفاعل المحذوف لا نكرر الضمير.',e:'The student who won the prize is my cousin.'},
 prep:{n:'حروف الجر',r:'تُحفظ مع الكلمة: good at، interested in، depend on، afraid of، different from. ادرسها كمجموعات لا كحروف منفردة.',e:'He is good at solving problems.'},
 article:{n:'أدوات التعريف',r:'a قبل الصوت الساكن، an قبل صوت متحرك (an honest، an hour). the لما هو معروف أو فريد.',e:'an honest woman · a university'},
 compare:{n:'المقارنة',r:'الكلمة القصيرة: taller than. الكلمة الطويلة: more difficult than. الأعلى: the tallest / the most difficult.',e:'This exam was more difficult than the last one.'},
 wordform:{n:'اشتقاق الكلمات',r:'انظر موقع الفراغ: بعد صفة الملكية (her / the) نضع اسماً، وبعد الفاعل فعلاً، وقبل الاسم صفة، وبعد الفعل ظرفاً.',e:'Her contribution was valuable.'},
 reported:{n:'الكلام المنقول',r:'في السؤال المنقول يعود ترتيب الجملة خبرياً (فاعل ثم فعل) ويرجع الزمن خطوة إلى الوراء.',e:'She asked me where I lived.'},
 agree:{n:'تطابق الفعل والفاعل',r:'The number of تعني مفرد. A number of تعني جمع. each / every / everyone تعني مفرد.',e:'The number of students has increased.'},
 vocab:{n:'المفردات',r:'تعلّم الكلمة داخل جملة، وخمّن معناها من السياق، وراجعها بعد يوم ثم ثلاثة أيام ثم أسبوع.',e:'postpone = delay · scarce = rare'},
 main:{n:'الفكرة الرئيسة',r:'الفكرة الرئيسة تغطي النص كله لا جزءاً منه. اقرأ أول جملة وآخر جملة ثم استبعد الخيارات الضيقة.',e:''},
 detail:{n:'التفاصيل',r:'ارجع إلى النص وابحث عن الكلمة المفتاحية في السؤال، والإجابة تأتي غالباً بصياغة مختلفة (مرادف).',e:''},
 rvocab:{n:'معنى الكلمة في النص',r:'عوّض الخيار مكان الكلمة في الجملة. المعنى الصحيح هو الذي يبقي الجملة سليمة.',e:''},
 infer:{n:'الاستنتاج',r:'الإجابة لا تُذكر حرفياً. اسأل: ماذا يعني هذا؟ ولا تأخذ خياراً متطرفاً (كل / أبداً) إلا بدليل.',e:''}
};
