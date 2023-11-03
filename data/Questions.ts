import IMAGES from "@Images";
import { MatchTestType } from "@Types";

export const QuestionsTest1: MatchTestType = [
  {
    id: 0,
    question_en: "How important is religion for you ?",
    question_fr: "Quelle est l'importance de la religion pour vous ?",
    question_ar: "ما هي أهمية الدين بالنسبة لك ؟",
    type: "text",
    partner: false,
    other_side: "1",
    max_answers: 1,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Very religious, it takes a big part in my life",
        label_fr: "Très religieux.se, elle occupe une grande place dans ma vie",
        label_ar: "متدين جدا، يأخذ الدين جزء كبير في حياتي",
      },
      {
        id: 1,
        label_en: "Moderate religious",
        label_fr: "Religieux.se modéré.e",
        label_ar: "معتدل(ة) دينيا",
      },
      {
        id: 2,
        label_en: "I don't practice, but it's part of my identity and culture",
        label_fr:
          "Je ne pratique pas, mais cela fait partie de mon identité et de ma culture",
        label_ar: "لا أمارس العادات الدينية، لكنها جزء من هويتي وثقافتي",
      },
      {
        id: 3,
        label_en: "I am not religious at all",
        label_fr: "Je ne suis pas du tout religieux.se",
        label_ar: "أنا لست متدينا على الإطلاق",
      },
    ],
  },
  {
    id: 1,
    question_en: "How important should religion be to your partner ?",
    question_fr:
      "Quelle devrait être l'importance de la religion pour votre partenaire ?",
    question_ar: "ما هي أهمية الدين عند شريكك ؟",
    type: "text",
    partner: true,
    other_side: "0",
    max_answers: 0,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Very religious, it must takes a big part in my partner life",
        label_fr:
          "Très religieux.se, cela doit occuper une grande place dans la vie de mon partenaire",
        label_ar: "متدين جدا، يجب أن يأخذ الدين جزءا كبيرا في حياة شريكي",
      },
      {
        id: 1,
        label_en: "Moderate religious",
        label_fr: "Religieux.se modéré.e",
        label_ar: "معتدل(ة) دينيا",
      },
      {
        id: 2,
        label_en:
          "Not practicing, but must be a part of my partner identity and culture",
        label_fr:
          "Pas pratiquant.e, mais la religion doit faire partie de l'identité et de la culture de mon partenaire",
        label_ar: "لا يمارس العادات الدينية، لكنها جزء من هويته وثقافته",
      },
      {
        id: 3,
        label_en: "Not religious at all",
        label_fr: "Pas du tout religieux.se",
        label_ar: "ليس متدينا على الإطلاق",
      },
    ],
  },
  {
    id: 2,
    question_en: "What is your religion ?",
    question_fr: "Quelle est votre religion ?",
    question_ar: "ما هي ديانتك ؟",
    type: "text",
    other_side: "3",
    partner: false,
    max_answers: 1,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Muslim",
        label_fr: "Musulman.e",
        label_ar: "مسلم(ة)",
      },
      {
        id: 1,
        label_en: "Christian",
        label_fr: "Chrétien.ne",
        label_ar: "مسيحي(ة)",
      },
      {
        id: 2,
        label_en: "Jewish",
        label_fr: "Juif.ve",
        label_ar: "يهودي(ة)",
      },
      {
        id: 3,
        label_en: "Atheist",
        label_fr: "Athée",
        label_ar: "ملحد(ة)",
      },
      {
        id: 4,
        label_en: "Believer",
        label_fr: "Croyant.e",
        label_ar: "مؤمن(ة)",
      },
      {
        id: 5,
        label_en: "Spiritual",
        label_fr: "Spirituel.le",
        label_ar: "روحاني(ة)",
      },
      {
        id: 6,
        label_en: "Others",
        label_fr: "Autres",
        label_ar: "أخرى",
      },
      {
        id: 7,
        uncounted: true,
        label_en: "Prefer not to say",
        label_fr: "Je préfère ne pas le dire",
        label_ar: "افضل عدم القول",
      },
    ],
  },
  {
    id: 3,
    question_en: "What religion should your partner belong to ?",
    question_fr: "À quelle religion devrait appartenir votre partenaire ?",
    question_ar: "إلى أي دين يجب أن ينتمي شريكك ؟",
    type: "text",
    other_side: "2",
    partner: true,
    max_answers: 0,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Muslim",
        label_fr: "Musulman.e",
        label_ar: "مسلم(ة)",
      },
      {
        id: 1,
        label_en: "Christian",
        label_fr: "Chrétien.ne",
        label_ar: "مسيحي(ة)",
      },
      {
        id: 2,
        label_en: "Jewish",
        label_fr: "Juif.ve",
        label_ar: "يهودي(ة)",
      },
      {
        id: 3,
        label_en: "Atheist",
        label_fr: "Athée",
        label_ar: "ملحد(ة)",
      },
      {
        id: 4,
        label_en: "Believer",
        label_fr: "Croyant.e",
        label_ar: "مؤمن(ة)",
      },
      {
        id: 5,
        label_en: "Spiritual",
        label_fr: "Spirituel.le",
        label_ar: "روحاني(ة)",
      },
      {
        id: 6,
        label_en: "Others",
        label_fr: "Autres",
        label_ar: "أخرى",
      },
      {
        id: 7,
        label_en: "Indifferent",
        label_fr: "Indifférent.e",
        label_ar: "لا مبالي(ة)",
      },
      {
        id: 8,
        uncounted: true,
        label_en: "Prefer not to say",
        label_fr: "Je préfère ne pas le dire",
        label_ar: "افضل عدم القول",
      },
    ],
  },
  {
    id: 4,
    question_en: "Do you wear a religious sign (Hijab, Kippah, Cross...) ?",
    question_fr: "Portez-vous un signe religieux (Hijab, Kippa, croix...) ?",
    question_ar: "هل ترتدي علامة دينية (حجاب، الكبة، صليب...) ؟",
    other_side: "5",
    type: "text",
    partner: false,
    max_answers: 1,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Yes, a strict one",
        label_fr: "Oui, un signe religieux strict",
        label_ar: "نعم، ملتزم(ة)",
      },
      {
        id: 1,
        label_en: "Yes, a casual one",
        label_fr: "Oui, un signe religieux décontracté",
        label_ar: "نعم، غير ملتزم(ة)",
      },
      {
        id: 2,
        label_en: "No, I don't",
        label_fr: "Non, je n'en porte pas",
        label_ar: "لا أرتدي علامة دينية",
      },
    ],
  },
  {
    id: 5,
    question_en: "Do you accept that your partner wears a religious sign ?",
    question_fr:
      "Acceptez-vous que votre partenaire porte un signe religieux ?",
    question_ar: "هل تقبل أن يرتدي شريكك علامة دينية ؟",
    type: "text",
    other_side: "4",
    partner: true,
    max_answers: 0,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Yes, a strict one",
        label_fr: "Oui, un signe religieux strict",
        label_ar: "نعم، علامة دينية صارمة",
      },
      {
        id: 1,
        label_en: "Yes, a casual one",
        label_fr: "Oui, un signe religieux décontracté",
        label_ar: "نعم، علامة دينية عارضة",
      },
      {
        id: 2,
        label_en: "No, I don't",
        label_fr: "Non, je n'accepte pas",
        label_ar: "لا، أنا لا أقبل",
      },
      {
        id: 3,
        gainer_by_default: true,
        label_en: "Indifferent",
        label_fr: "Je suis indifférent.e à ce sujet, cela ne me dérange pas",
        label_ar: "أنا غير مبال",
      },
    ],
  },
  {
    id: 6,
    question_en: "What is your marital status ?",
    question_fr: "Quel est votre état civil ?",
    question_ar: "ما هي حالتك الاجتماعية ؟",
    type: "text",
    other_side: "7",
    partner: false,
    max_answers: 1,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Single",
        label_fr: "Célibataire",
        label_ar: "عازب(ة)",
      },
      {
        id: 1,
        label_en: "Divorced",
        label_fr: "Divorcé.e",
        label_ar: "مُطلّق(ة)",
      },
      {
        id: 2,
        label_en: "Widowed",
        label_fr: "Veuf.ve",
        label_ar: "أرمل(ة)",
      },
    ],
  },
  {
    id: 7,
    question_en: "What should be the marital status of your partner ?",
    question_fr: "Quel devrait être l'état civil de votre partenaire ?",
    question_ar: "الحالة الاجتماعية لشريكك ؟",
    other_side: "6",
    type: "text",
    partner: true,
    max_answers: 0,
    score_calculation_type: "opposite",
    answers: [
      {
        id: 0,
        label_en: "Single",
        label_fr: "Célibataire",
        label_ar: "عازب(ة)",
      },
      {
        id: 1,
        label_en: "Divorced",
        label_fr: "Divorcé.e",
        label_ar: "مُطلّق(ة)",
      },
      {
        id: 2,
        label_en: "Widowed",
        label_fr: "Veuf.ve",
        label_ar: "أرمل(ة)",
      },
    ],
  },
  {
    id: 8,
    question_en: "How do you feel about having kids ?",
    question_fr:
      "Comment vous sentez-vous par rapport au fait d'avoir des enfants ?",
    question_ar: "ما هو رأيك حول إنجاب الأطفال ؟",
    type: "text",
    partner: false,
    max_answers: 1,
    score_calculation_type: "mixed",
    answers: [
      {
        id: 0,
        matched_answer: [0, 3],
        label_en: "I'm not interested in having kids",
        label_fr: "Je ne suis pas intéressé.e pour avoir des enfants",
        label_ar: "أنا لست مهتمًا بإنجاب الأطفال",
      },
      {
        id: 1,
        matched_answer: [1, 2],
        label_en: "I would like having kids",
        label_fr: "J'aimerais bien en avoir",
        label_ar: "أود إنجاب الأطفال",
      },
      {
        id: 2,
        matched_answer: [1, 2],
        label_en: "I already have children, and I would like to have more",
        label_fr: "J'en ai déjà et j'aimerais bien en avoir plus",
        label_ar: "لدي أطفال، وأود أن أنجب المزيد",
      },
      {
        id: 3,
        matched_answer: [0, 3],
        label_en: "I already have children and I don't want any more",
        label_fr: "J'en ai déjà et je n'en veux pas d'autres",
        label_ar: "لدي أطفال لكني لا أرغب في إنجاب المزيد",
      },
      {
        id: 4,
        uncounted: true,
        label_en: "I'm unsure about whether to have children or not",
        label_fr: "Je ne suis pas sûr.r de vouloir avoir des enfants ou non",
        label_ar: "أنا غير متأكد مما إذا كنت أرغب في أن أنجب أطفالًا أم لا",
      },
    ],
  },
  {
    id: 9,
    question_en: "If you have kids, would you change diapers ?",
    question_fr:
      "Si vous aviez des enfants, seriez-vous prêt.e à changer des couches ?",
    question_ar: "إذا كنت تريد الأطفال، هل ستغير الحفاضات ؟",
    type: "text",
    partner: false,
    max_answers: 1,
    score_calculation_type: "direct",
    answers: [
      {
        id: 0,
        label_en: "Indeed",
        label_fr: "Evidemment",
        label_ar: "أكيد",
      },
      {
        id: 1,
        label_en: "Never",
        label_fr: "Jamais",
        label_ar: "أبداً",
      },
      {
        id: 2,
        label_en: "If I have to",
        label_fr: "Si je n'ai pas le choix",
        label_ar: "إذا اضطررت لذلك",
      },
    ],
  },
  {
    id: 10,
    question_en: "What is your opinion about polygamy ?",
    question_fr: "Quelle est votre opinion sur la polygamie ?",
    question_ar: "ما رأيك في تعدد الزوجات ؟",
    type: "text",
    partner: false,
    max_answers: 1,
    score_calculation_type: "mixed",
    answers: [
      {
        id: 0,
        matched_answer: [0],
        label_en: "I'm against",
        label_fr: "Je suis contre",
        label_ar: "أنا ضد",
      },
      {
        id: 1,
        matched_answer: [1, 2],
        label_en: "Indifferent",
        label_fr: "Indifférent.e",
        label_ar: "لا مبالي(ة)",
      },
      {
        id: 2,
        matched_answer: [1, 2],
        label_en: "I'm pro polygamy",
        label_fr: "Je suis pour la polygamie",
        label_ar: "أنا مؤيد لتعدد الزوجات",
      },
    ],
  },
  {
    id: 11,
    question_en: "Would you relocate to accommodate your partner job ?",
    question_fr:
      "Pouvez-vous déménager pour suivre votre partenaire suite à un changement de son parcours professionnel ?",
    question_ar: "هل ستنتقل الى مكان جديد على حسب طبيعة عمل شريكك ؟",
    type: "text",
    partner: false,
    max_answers: 1,
    score_calculation_type: "direct",
    answers: [
      {
        id: 0,
        label_en: "Yes",
        label_fr: "Oui",
        label_ar: "نعم",
      },
      {
        id: 1,
        label_en: "No",
        label_fr: "Non",
        label_ar: "لا",
      },
      {
        id: 2,
        label_en: "It depends on my situation",
        label_fr: "Cela dépendrait de ma situation",
        label_ar: "هذا يعتمد على وضعي",
      },
    ],
  },
  {
    id: 12,
    question_en:
      "After getting married, would you contribute to the household expenses ?",
    question_fr: "Après le mariage, contribuerez-vous aux dépenses du ménage ?",
    question_ar: "بعد الزواج، هل ستساهم في مصاريف المنزل ؟",
    type: "text",
    partner: false,
    other_side: "13",
    max_answers: 1,
    score_calculation_type: "mixed",
    answers: [
      {
        id: 0,
        matched_answer: [0, 1, 3],
        label_en: "I take full responsibility for all expenses",
        label_fr: "Je prendrai entièrement en charge toutes les dépenses",
        label_ar: "سوف أتحمل المسؤولية الكاملة عن جميع النفقات",
      },
      {
        id: 1,
        matched_answer: [0, 1],
        label_en: "I will contribute as much as possible",
        label_fr: "Je contribuerai autant que possible",
        label_ar: "سأساهم قدر المستطاع",
      },
      {
        id: 2,
        matched_answer: [2],
        label_en: "I prefer splitting expenses 50-50 with your partner",
        label_fr:
          "Je partagerais les dépenses à parts égales avec mon partenaire",
        label_ar: "أفضّل تقسيم النفقات 50-50 مع شريكي",
      },
      {
        id: 3,
        matched_answer: [0],
        label_en: "I choose to not participate in financial contributions",
        label_fr: "Je ne participerais pas financièrement aux dépenses",
        label_ar: "أفضل عدم المشاركة في المساهمات المالية",
      },
    ],
  },
  {
    id: 13,
    question_en:
      "Would you be open to a long-distance relationship ? if yes, for how long ?",
    question_fr:
      "Seriez-vous ouvert.e à une relation à distance ? et si oui, pendant combien de temps ?",
    question_ar:
      "هل تقدر على الدخول في علاقة مع شخص يبعد عنك بمسافة طويلة، إذا كانت الإجابة بنعم، فما هي أقصى مدة يمكنك تحملها ؟",
    type: "text",
    partner: false,
    max_answers: 1,
    score_calculation_type: "mixed",
    answers: [
      {
        id: 0,
        matched_answer: [0],
        label_en: "Never",
        label_fr: "Jamais",
        label_ar: "أبداً",
      },
      {
        id: 1,
        matched_answer: [1, 3],
        label_en: "For few months",
        label_fr: "Quelques mois",
        label_ar: "بضعة أشهر",
      },
      {
        id: 2,
        matched_answer: [2, 3],
        label_en: "For few years",
        label_fr: "Quelques années",
        label_ar: "بضع سنوات",
      },
      {
        id: 3,
        matched_answer: [2, 3],
        label_en: "Will handle it whatever it takes",
        label_fr: "Je ferai face quoi qu'il arrive",
        label_ar: "يمكنني التعامل مع الوقت الذي سيستغرقه الأمر",
      },
    ],
  },
];

export const QuestionsTest2: MatchTestType = [
  {
    id: 0,
    question_en: "How do you express affection toward your partner ?",
    question_fr:
      "Comment exprimez-vous de l'affection envers votre partenaire ?",
    question_ar: "كيف تعبر عن عاطفتك تجاه شريك حياتك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Through affectionate touch and caring actions",
        label_fr: "Par des gestes affectueux et de l'attention",
        label_ar: "الإهتمام و المراعاة",
      },
      {
        id: 1,
        label_en: "By offering gifts and flowers",
        label_fr: "En offrant des cadeaux et des fleurs",
        label_ar: "بتقديم الهدايا والزهور",
      },
      {
        id: 2,
        label_en: "By demonstrating respect and kindness ",
        label_fr: "Avec du respect et de la gentillesse ",
        label_ar: "من خلال إظهار الاحترام واللطف",
      },
      {
        id: 3,
        label_en:
          "By being an attentive listener and paying close attention to every detail",
        label_fr:
          "En écoutant activement et en consacrant toute mon attention en tout temps",
        label_ar: "من خلال الإستماع بإمعان والإهتمام بأدق التفاصيل",
      },
    ],
  },
  {
    id: 1,
    question_en: "How do you deal with conflict in a relationship ?",
    question_fr: "Comment gérez-vous les conflits dans une relation ?",
    question_ar: "كيف تتعامل مع الخصام في العلاقة ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "Stay quiet",
        label_fr: "Je garde le silence",
        label_ar: "البقاء هادئا",
      },
      {
        id: 1,
        label_en: "Calmly discuss issues",
        label_fr: "Je discute calmement du conflit",
        label_ar: "مناقشة الأمور بهدوء",
      },
      {
        id: 2,
        label_en: "Need time to not throw plates",
        label_fr: "J'ai besoin de me calmer pour me maîtriser",
        label_ar: "أحتاج إلى الوقت لعدم إعطاء المشكل أكثر من حجمه",
      },
      {
        id: 3,
        label_en: "Move forward",
        label_fr: "En passant à autre chose",
        label_ar: "تجاوز الخصام",
      },
    ],
  },
  {
    id: 2,
    question_en:
      "Regarding my partner's professional life, what should it be ?",
    question_fr: "Que devrait être la vie professionnelle de mon partenaire ?",
    question_ar: "كيف تفضل أن تكون الحياة المهنية لشريك حياتك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "opposite",
    other_side: "3",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en:
          "I would value it if my partner takes on the responsibility of caring for our home and children instead of pursuing a career",
        label_fr:
          "J'apprécierais que mon partenaire prenne soin de notre maison et de nos enfants plutôt que de travailler",
        label_ar:
          "أود أن يعتني شريكي بالأعمال المنزلية والأطفال بدلاً من العمل",
      },
      {
        id: 1,
        label_en:
          "I hope my partner can find a balance between work and personal life while being dedicated to their job",
        label_fr:
          "J'aimerai que mon partenaire travaille tout en accordant la priorité à la fois à son travail et à sa vie personnelle",
        label_ar:
          "أحب أن يعمل شريكي مع إعطاء الأولوية للعمل والحياة الشخصية مناصفة",
      },
      {
        id: 2,
        label_en:
          "I fully support my partner's choice, whether it's being a homemaker or pursuing a career",
        label_fr:
          "Je soutiendrais le choix de mon partenaire : rester à la maison ou travailler",
        label_ar: "سأدعم اختيار شريكي:  سوأ البقاء في المنزل أو العمل",
      },
      {
        id: 3,
        label_en:
          "It would be great if my partner could have a flexible job to be able to accompany me wherever I go",
        label_fr:
          "J'aimerais que mon partenaire ait un travail flexible pour pourvoir me suivre là où je serai",
        label_ar: "أرغب في أن يكون لشريكي عمل حر ليتمكن من التنقل معي بسهولة",
      },
      {
        id: 4,
        label_en:
          "I expect my partner to work and strive for a successful career",
        label_fr:
          "Mon partenaire doit travailler et aspirer à une bonne carrière",
        label_ar: "يجب أن يعمل شريكي ويسعى إلى تحقيق مسار مهني جيد",
      },
    ],
  },
  {
    id: 3,
    question_en: "How should my partner approach my professional life ?",
    question_fr:
      "Comment devrait être l'approche de mon partenaire vis-à-vis de ma vie professionnelle ?",
    question_ar: "كيف تفضل أن يكون موقف شريكك تجاه حياتك المهنية ؟",
    type: "text",
    partner: true,
    score_calculation_type: "opposite",
    other_side: "2",
    max_answers: 2,
    answers: [
      {
        id: 0,
        matched_answer: [1, 2, 4],
        label_en:
          "I would appreciate my partner's support in achieving my professional goals",
        label_fr:
          "J'apprécierais que mon partenaire me soutienne dans la réalisation de mes objectifs professionnels",
        label_ar: "سأكون ممتناً لو دعم شريكي تحقيق أهدافي المهنية",
      },
      {
        id: 1,
        matched_answer: [2, 3, 4],
        label_en:
          "I would like my partner to respect my decision to either work or stay at home and provide that choice",
        label_fr:
          "J'aimerais que mon partenaire m'offre le choix entre travailler ou rester à la maison",
        label_ar: "أرغب في أن يمنحني شريكي الخيار بين العمل والبقاء في المنزل",
      },
      {
        id: 2,

        matched_answer: [0, 3, 4],
        label_en:
          "I would value it if my partner encouraged me to focus on being at home and not pursue a career",
        label_fr:
          "J'apprécierais si mon partenaire m'encourage à rester à la maison et ne pas travailler",
        label_ar: "سأقدر لو شجعني شريكي على البقاء في المنزل وعدم العمل",
      },
      {
        id: 3,
        matched_answer: [1, 2, 3, 4],
        label_en:
          "It's important for me to have a partner who aligns with my lifestyle, valuing both my work and personal life equally",
        label_fr:
          "J'aimerais avoir un partenaire qui partage mon style de vie : accorder la priorité à la fois à mon travail et à ma vie personnelle",
        label_ar:
          "أود أن يكون لدي شريك يشاركني نمط حياتي: الأولوية للعمل والحياة الشخصية مناصفة",
      },
      {
        id: 4,
        matched_answer: [0, 2, 4],
        label_en:
          "I would like a partner who is understanding and accepting of my unconventional work conditions",
        label_fr:
          "J'aimerais avoir un partenaire qui accepte mes conditions de travail qui ne sont pas classiques",
        label_ar:
          "أرغب في أن يكون لدي شريك يتقبل ظروف حياتي المهنية والتي قد تكون غير تقليدية",
      },
      {
        id: 5,
        matched_answer: [0, 1, 2],
        label_en:
          "My ideal partner would be someone willing to travel and adapt to the demands of my professional life",
        label_fr:
          "Mon partenaire doit voyager et s'adapter à ma vie professionnelle",
        label_ar:
          "يجب أن يكون لدي شريك قادر على السفر والتكيف مع حياتي المهنية",
      },
    ],
  },
  {
    id: 4,
    question_en:
      "What is the proximity of your living situation to your parents ?",
    question_fr:
      "Quelle est la proximité de votre maison par rapport à celle de vos parents?",
    question_ar: "ماهو وضعك المعيشي مع عائلتك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "I live far away from my parents",
        label_fr: "Je vis loin de mes parents",
        label_ar: "أعيش بعيدًا عن عائلتي",
      },
      {
        id: 1,
        label_en: "My family and I live in the same house",
        label_fr: "Mes parents et moi vivons dans la même maison",
        label_ar: "أعيش مع عائلتي في نفس المنزل",
      },
      {
        id: 2,
        label_en: "My family and I live in the same neighborhood",
        label_fr: "Mes parents et moi vivons dans le même quartier",
        label_ar: "أعيش أنا وعائلتي في نفس الحي",
      },
    ],
  },
  {
    id: 5,
    question_en:
      "After getting married, which of the following living arrangements do you prefer ?",
    question_fr:
      "Après le mariage, quelle option préférez-vous parmi les suivantes ?",
    question_ar: "بعد الزواج، أي من الترتيبات المعيشية التالية تفضل ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Living in the same house as my parents",
        label_fr: "Vivre dans la même maison que mes parents",
        label_ar: "أعيش في نفس المنزل مع والدي",
      },
      {
        id: 1,
        label_en:
          "Living with my parents initially and then planning to move out on my own",
        label_fr:
          "Vivre avec mes parents initialement et ensuite prévoir de déménager seul.e",
        label_ar: "العيش مع والدي في البداية ثم التخطيط للعيش في مكان آخر",
      },
      {
        id: 2,
        label_en: "Having my own house even if it's far from my parents",
        label_fr:
          "Avoir ma propre maison, même si elle est loin de mes parents",
        label_ar: "امتلاك منزل خاص حتى لو كان بعيدًا عن والدي",
      },
      {
        id: 3,
        label_en: "Having my own house in proximity of my parents",
        label_fr: "Avoir ma propre maison à proximité de mes parents",
        label_ar: "امتلاك منزل خاص على مقربة من والدي",
      },
    ],
  },
  {
    id: 6,
    question_en:
      "When introducing your partner, what actions will you take if your family does not accept your choice ?",
    question_fr:
      "Lorsque je présenterais ma moitié, quelles actions vais-je entreprendre si ma famille n'accepte pas mon choix ?",
    question_ar:
      "عند تقديم شريكك، ما هو القرار الذي ستتخذه إذا لم تقبل عائلتك اختيارك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en:
          "It is essential for me to have my family's acceptance ; I can't imagine living without their blessings and support in my relationship",
        label_fr:
          "Il est essentiel pour moi d'avoir la bénédiction de ma famille ; je ne peux pas imaginer vivre sans leur soutien",
        label_ar:
          "من الضروري بالنسبة لي أن أحظى بقبول عائلتي، لا أستطيع أن أتخيل العيش من دون دعمهم في علاقتي",
      },
      {
        id: 1,
        label_en:
          "Seek Support: Reach out to friends or close family who can provide guidance and advice during this challenging time",
        label_fr:
          "Je vais chercher du soutien : je me tournerai vers mes amis.es ou mes proches qui peuvent me conseiller et me guider pendant cette période difficile",
        label_ar:
          "البحث عن الدعم: أحاول التواصل مع الأصدقاء أو الأقرباء الذين يمكنهم تقديم الإرشاد والنصح خلال هذه الفترة الصعبة",
      },
      {
        id: 2,
        label_en:
          "Evaluate the relationship if I have to choose between my family and my partner",
        label_fr:
          "J'évaluerai la relation : si je me retrouve à devoir choisir entre ma famille et mon partenaire, je prendrai le temps de réfléchir à la situation et à ce qui est le mieux pour moi",
        label_ar:
          "أقوم بتقييم علاقتي إذا كنت مضطرا للإختيار بين عائلتي وشريك حياتي",
      },
      {
        id: 3,
        label_en:
          "Give it Time: Sometimes, acceptance takes time. Patience can be key in allowing my family to gradually accept and give them the opportunity to see my partner's qualities",
        label_fr:
          "Je me donnerai du temps : parfois, l'acceptation prend du temps. Je serai patient.e en laissant à ma famille l'occasion de s'habituer à la présence de ma moitié et de découvrir ses qualités",
        label_ar:
          "امنح الأمر وقتًا: في بعض الأحيان، يستغرق القبول وقتًا. الصبر قد يكون المفتاح في منح عائلتي فرصة تدريجية للقبول ورؤية صفات شريكي",
      },
      {
        id: 4,
        label_en:
          "I will have confidence in my choice: I have the right to choose your partner and determine my own happiness",
        label_fr:
          "J'aurai confiance en mon choix : j'ai le droit de choisir la personne idéale pour moi et de déterminer mon propre bonheur",
        label_ar:
          "أكون واثقة من اختياراتي: لدي الحق في اختيار شريك حياتي والمحيط الذي سأشعر بالسعادة فيه",
      },
    ],
  },
  {
    id: 7,
    question_en:
      "Regarding the house cleaning, which of the following options best describes your approach ?",
    question_fr:
      "En ce qui concerne les tâches ménagères, quelle option décrit le mieux votre approche ?",
    question_ar:
      "فيما يتعلق بتنظيف المنزل، أي من الخيارات التالية يصفك بشكل أفضل ؟",
    type: "text",
    partner: false,
    score_calculation_type: "mixed",
    max_answers: 1,
    answers: [
      {
        id: 0,
        matched_answer: [1, 2, 3],
        label_en: "I do all the home tasks myself",
        label_fr: "Je fais toutes les tâches ménagères moi-même",
        label_ar: "أقوم بجميع المهام المنزلية بنفسي",
      },
      {
        id: 1,
        matched_answer: [0, 3],
        label_en: "I let my partner do all the home tasks",
        label_fr:
          "Je laisse mon/ma partenaire s'occuper de toutes les tâches ménagères",
        label_ar: "أترك شريكي يقوم بجميع المهام المنزلية",
      },
      {
        id: 2,
        matched_answer: [2, 0],
        label_en: "I share the home tasks with my partner",
        label_fr: "Je partage les tâches ménagères avec mon/ma partenaire",
        label_ar: "أشارك في المهام المنزلية مع شريكي",
      },
      {
        id: 3,
        matched_answer: [0, 1, 3],
        label_en: "I hire a house cleaner to do the home tasks",
        label_fr:
          "J'embauche une femme de ménage pour s'occuper des tâches ménagères",
        label_ar: "أستأجر عامل منازل للقيام بمهام المنزل",
      },
    ],
  },
  {
    id: 8,
    question_en:
      "Neat-freak or the messy one ? Please choose the one that represents you the most accurately",
    question_fr:
      "Maniaque du rangement ou désordonné.e ? Veuillez choisir l'image qui vous représente le plus",
    question_ar: "مرتب أم فوضوي؟ الرجاء اختيار السلوك الذي يمثلك بدقة أكبر",
    type: "image",
    partner: false,
    score_calculation_type: "mixed",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: IMAGES.TESTS.ESSENTIAL.image1Q7,
        label_fr: IMAGES.TESTS.ESSENTIAL.image1Q7,
        label_ar: IMAGES.TESTS.ESSENTIAL.image1Q7,
        matched_answer: [0, 1],
      },
      {
        id: 1,
        label_en: IMAGES.TESTS.ESSENTIAL.image2Q7,
        label_fr: IMAGES.TESTS.ESSENTIAL.image2Q7,
        label_ar: IMAGES.TESTS.ESSENTIAL.image2Q7,
        matched_answer: [0, 1, 2],
      },
      {
        id: 2,
        label_en: IMAGES.TESTS.ESSENTIAL.image3Q7,
        label_fr: IMAGES.TESTS.ESSENTIAL.image3Q7,
        label_ar: IMAGES.TESTS.ESSENTIAL.image3Q7,
        matched_answer: [2, 1],
      },
    ],
  },
  {
    id: 9,
    question_en: "Do you enjoy cooking ?",
    question_fr: "Aimez-vous cuisiner ?",
    question_ar: "هل تحب الطبخ ؟",
    type: "text",
    partner: false,
    score_calculation_type: "mixed",
    max_answers: 1,
    answers: [
      {
        id: 0,
        matched_answer: [0, 2, 3],
        label_en: "Cooking relax me so I would like to do it by myself",
        label_fr: "Cuisiner me détend, j'aimerais le faire moi-même",
        label_ar: "الطبخ يريحني لذلك أود أن أفعل ذلك بنفسي",
      },
      {
        id: 1,
        matched_answer: [1],
        label_en: "Cooking together create memorable moments",
        label_fr: "Cuisiner ensemble crée des moments mémorables",
        label_ar: "الطبخ معًا يخلق لحظات لا تُنسى",
      },
      {
        id: 2,
        matched_answer: [0, 2],
        label_en: "I like to mix between cooking and ordering from outside",
        label_fr: "J'aime alterner entre cuisiner et me faire livrer",
        label_ar: "أحب الخلط بين الطبخ وطلب الأكل من الخارج",
      },
      {
        id: 3,
        matched_answer: [0],
        label_en: "I prefer to not cook, I am not talented",
        label_fr: "Je préfère ne pas cuisiner, je n'ai pas de talent",
        label_ar: "أفضل عدم الطهي، فأنا لست موهوبًا",
      },
    ],
  },
  {
    id: 10,
    question_en: "Do you accept that your partner drink alcohol ?",
    question_fr: "Acceptez-vous que votre partenaire consomme de l'alcool ?",
    question_ar: "هل تقبل أن يشرب شريكك الكحول ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "Yes",
        label_fr: "Oui",
        label_ar: "نعم",
      },
      {
        id: 1,
        label_en: "No",
        label_fr: "Non",
        label_ar: "لا",
      },
      {
        id: 2,
        label_en: "Occasionally",
        label_fr: "Occasionnellement",
        label_ar: "أحياناً",
      },
      {
        id: 3,
        label_en: "Yes, but only with in my presence",
        label_fr: "Oui, mais seulement en ma présence",
        label_ar: "نعم، ولكن فقط بحضوري",
      },
      {
        id: 4,
        label_en: "Indifferent",
        label_fr: "Indifférent.e",
        label_ar: "لا مبالي(ة)",
      },
    ],
  },
  {
    id: 11,
    question_en: "Do you accept that your partner smoke ?",
    question_fr: "Acceptez-vous que votre partenaire fume ?",
    question_ar: "هل تسمح لشريكك بالتدخين ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "Yes",
        label_fr: "Oui",
        label_ar: "نعم",
      },
      {
        id: 1,
        label_en: "No",
        label_fr: "Non",
        label_ar: "لا",
      },
      {
        id: 2,
        label_en: "Occasionally",
        label_fr: "Occasionnellement",
        label_ar: "أحياناً",
      },
      {
        id: 3,
        label_en: "Yes, but discreetly",
        label_fr: "Oui, mais discrètement",
        label_ar: "نعم، ولكن بتكتم",
      },
      {
        id: 4,
        label_en: "Indifferent",
        label_fr: "Indifférent.e",
        label_ar: "لا مبالي(ة)",
      },
    ],
  },
  {
    id: 12,
    question_en: "How do you feel about having pets ?",
    question_fr: "Accepteriez-vous d'avoir des animaux de compagnie ?",
    question_ar: "كيف يشعر شريكك حيال امتلاك حيوانات أليفة؟",
    type: "text",
    partner: false,
    score_calculation_type: "mixed",
    max_answers: 1,
    answers: [
      {
        id: 0,
        matched_answer: [0, 1, 2],
        label_en: "I do love pets",
        label_fr: "J'adore les animaux de compagnie",
        label_ar: "أنا أحب الحيوانات الأليفة",
      },
      {
        id: 1,
        matched_answer: [0, 1, 2],
        label_en: "I can accept but I will not take care of it",
        label_fr: "Je peux accepter, mais je ne m'en occuperai pas",
        label_ar: "يمكنني القبول ولكني لن أعتني به",
      },
      {
        id: 2,
        matched_answer: [0, 1, 2],
        label_en: "No problem, I do love pets but not inside the house",
        label_fr:
          "Aucun problème, j'aime les animaux de compagnie, mais je n'aime pas qu'ils soient à l'intérieur de la maison",
        label_ar:
          "لا مشكلة، أنا أحب الحيوانات الأليفة ولكن لا أحبها داخل المنزل",
      },
      {
        id: 3,
        matched_answer: [3, 4],
        label_en: "I am not pet at all. I am scared to death!",
        label_fr:
          "Je suis contre l'idée d'avoir des animaux de compagnie. J'en ai une peur terrible!",
        label_ar: "أنا ضد فكرة امتلاك حيوانات أليفة. أنا أخاف منهم!",
      },
      {
        id: 4,
        matched_answer: [3, 4],
        label_en:
          "I'm not afraid of animals, but I don't particularly like the idea of having them at home.",
        label_fr:
          "Je n'ai pas peur des animaux mais je n'aime pas particulièrement l'idée d'en avoir chez moi",
        label_ar:
          "أنا لا أخاف من الحيوانات، لكني لا أحب بشكل خاص فكرة وجودهم في المنزل",
      },
    ],
  },
  {
    id: 13,
    question_en:
      "At the end of the daywork, you have two hours off, how do you spend them ?",
    question_fr:
      "En fin de journée de travail, vous avez deux heures de temps libre, comment les passez-vous ?",
    question_ar: "في نهاية يوم العمل لديك ساعتان راحة، كيف تقضيانهما ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "On my phone, watching reels and chatting with friends",
        label_fr:
          "Sur mon téléphone, regarder des reels et discuter avec des amis",
        label_ar: "على هاتفي، أشاهد مقاطع الفيديو وأتحدث مع الأصدقاء",
      },
      {
        id: 1,
        label_en: "Reading my book",
        label_fr: "En lisant mon livre",
        label_ar: "قراءة الكتب",
      },
      {
        id: 2,
        label_en: "Watching Netflix",
        label_fr: "En regardant Netflix",
        label_ar: "مشاهدة الأفلام والمسلسلات",
      },
      {
        id: 3,
        label_en: "Going to gym",
        label_fr: "En allant à la salle de sport",
        label_ar: "الذهاب إلى صالة الألعاب الرياضية",
      },
      {
        id: 4,
        label_en: "Trying a new recipe",
        label_fr: "En essayant une nouvelle recette",
        label_ar: "تجربة وصفات جديدة",
      },
      {
        id: 5,
        label_en: "Hanging with friends",
        label_fr: "En passant du temps avec des amis.es",
        label_ar: "قضاء الوقت مع الأصدقاء",
      },
      {
        id: 6,
        label_en: "Playing video games",
        label_fr: "En jouant à des jeux vidéo",
        label_ar: "لعب العاب الفيديو",
      },
      {
        id: 7,
        label_en: "Visiting my family",
        label_fr: "En rendant visite à ma famille",
        label_ar: "زيارة العائلة",
      },
      {
        id: 8,
        label_en: "Enjoying quiet moment",
        label_fr: "En profitant d'un moment de calme",
        label_ar: "الاستمتاع بلحظة هدوء",
      },
      {
        id: 9,
        label_en: "Doing hometasks",
        label_fr: "En faisant des tâches ménagères",
        label_ar: "القيام بالمهام المنزلية",
      },
    ],
  },
  {
    id: 14,
    question_en:
      "What would your most important weekly routine look like once you are married ?",
    question_fr:
      "Quelle serait votre routine hebdomadaire la plus importante une fois que vous serez marié.e ?",
    question_ar: "ما هو أهم شيء ستفعله في عطلة نهاية الأسبوع بمجرد الزواج ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 2,
    answers: [
      {
        id: 0,
        label_en: "Have my own time for personal hobbies or interests",
        label_fr: "Prendre du temps pour mes hobbies",
        label_ar:
          "سيكون لدي وقت خاص لهواياتي الشخصية واهتماماتي، وأجتمع مع الأصدقاء",
      },
      {
        id: 1,
        label_en: "Allocate specific days to visit relatives",
        label_fr:
          "Allouer des jours spécifiques pour rendre visite à la famille",
        label_ar: "سأخصص أيامًا محددة لزيارة الأقارب",
      },
      {
        id: 2,
        label_en:
          "Shedule regular exercice sessions together: gym, taking walks, biking...",
        label_fr:
          "Planifier en couple des activités régulières: aller à la salle de sport, faire des promenades, du vélo...",
        label_ar:
          "سأقوم بجدولة جلسات تمرين منتظمة مع شريكي في الصالة الرياضية، المشي، ركوب الدراجات...",
      },
      {
        id: 3,
        label_en:
          "Dedicate time for relaxation and self-care and enjoing quiet evenings at home",
        label_fr:
          "Consacrer du temps à la détente et à mon bien-être et profiter de soirées calmes à la maison",
        label_ar:
          "سأخصص وقتًا للاسترخاء والاهتمام بالنفس والاستمتاع بالأمسيات الهادئة في المنزل",
      },
      {
        id: 4,
        label_en:
          "Make time for socializing and mantaining friendships: going out with friends or attending social events",
        label_fr:
          "Accorder du temps aux amis.es et participer à des événements sociaux",
        label_ar:
          "سأخصص وقتًا للتواصل الاجتماعي والحفاظ على الصداقات: الخروج مع الأصدقاء أو المشاركة في الفعاليات الاجتماعية",
      },
      {
        id: 5,
        label_en:
          "Set aside moments for open communication and discussing any important matters or decisions that need attention",
        label_fr:
          "Réserver des moments en couple pour communiquer ouvertement et discuter des sujets importants ou de décisions qui nécessitent une attention particulière",
        label_ar:
          "سأخصص أوقاتًا للتواصل المفتوح ومناقشة أي مسائل أو قرارات هامة تحتاج إلى الاهتمام",
      },
      {
        id: 6,
        label_en:
          "Plan occasional date nights: movie nights, cooking together or weekend getaways to keep the romance alive and explore new experiences together",
        label_fr:
          "Planifier des soirées occasionnelles en couple : soirées cinéma, soirées cinéma,  escapades en week-end pour se retrouver et explorer de nouvelles expériences ensemble",
        label_ar:
          "سأخطط لجلسات عشوائية مع شريكي: ليالي المشاهدة، الطبخ معًا، أو قضاء عطلات نهاية الأسبوع للحفاظ على الرومانسية واستكشاف تجارب جديدة معًا",
      },
    ],
  },
  {
    id: 15,
    question_en: "For the first date, what do you prefer ?",
    question_fr: "Selon vous, qui doit initier la première rencontre ?",
    question_ar: "في أول موعد غرامي، ماذا تفضل ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en:
          "To create a comfortable atmosphere, it is up to the lady to initiate the first move",
        label_fr:
          "Pour ne pas avoir d'ambuiguité, c'est à la femme d'initier le premier rendez-vous ",
        label_ar: "خلق جو مريح، الأمر متروك للسيدة لبدء الخطوة الأولى",
      },
      {
        id: 1,
        label_en: "Man should initiate the first move",
        label_fr: "Classique, l'homme devrait initier le premier rendez-vous",
        label_ar: "يجب على الرجل أن يبدأ الخطوة الأولى",
      },
      {
        id: 2,
        label_en: "Whatever, the one who feels more comfortable with that",
        label_fr:
          "Peu importe, celui ou celle qui se sent le plus à l'aise avec ça",
        label_ar:
          "أيا كان الشخص الذي يشعر براحة أكبر يمكنه البدأ بالخطوة الأولى",
      },
    ],
  },
  {
    id: 16,
    question_en: "What about your biggest turnoff on a first date ?",
    question_fr:
      "Qu'est-ce qui vous déplaît le plus lors d'un premier rendez-vous ?",
    question_ar: "ماذا عن أكبر شيئ يجعلك تتراجع  في الموعد الغرامي الأول ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 2,
    answers: [
      {
        id: 0,
        label_en: "Flat discussion and awkward silences",
        label_fr: "Une discussion vide et des silences gênants",
        label_ar: "مناقشة فارغة وصمت محرج معظم الوقت",
      },
      {
        id: 1,
        label_en: "Split bills",
        label_fr: "Diviser l'addition",
        label_ar: "فواتير مقسمة",
      },
      {
        id: 2,
        label_en: "Spending time on phone",
        label_fr: "Passer du temps sur son téléphone",
        label_ar: "قضاء الوقت على الهاتف",
      },
      {
        id: 3,
        label_en: "A place that doesn't suit me",
        label_fr: "Un endroit qui ne me convient pas",
        label_ar: "مكان لا يناسبني",
      },
      {
        id: 4,
        label_en: "A person constantly talks about themselves",
        label_fr: "Une personne qui parle uniquement d'elle-même",
        label_ar: "شخص يتحدث فقط عن نفسه",
      },
    ],
  },
  {
    id: 17,
    question_en: "How do you imagine your wedding party ?",
    question_fr: "Comment imaginez-vous votre fête de mariage ?",
    question_ar: "كيف تتخيل حفل زفافك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "A big one to enjoy with friends and family",
        label_fr: "Une grande fête pour profiter avec amis.es et famille",
        label_ar: "حفلة كبيرة للاستمتاع بها مع الأصدقاء والعائلة",
      },
      {
        id: 1,
        label_en:
          "A private one in an exotic place with the closest friends and family",
        label_fr:
          "Une cérémonie privée dans un endroit exotique avec les amis.es et la famille les plus proches",
        label_ar: "حفلة خاصة في مكان فريد مع أقرب الأصدقاء والعائلة",
      },
      {
        id: 2,
        label_en: "Smaller, more intimate, and equally meaningful ceremony",
        label_fr: "Une célébration plus intime",
        label_ar: "حفل صغير و أكثر حميمية",
      },
      {
        id: 3,
        label_en:
          "Weddings parties are waste of money, I prefer invest for both of us",
        label_fr:
          "Les fêtes de mariage sont une perte d'argent, je préfère investir pour notre vie à nous deux",
        label_ar: "حفلات الزفاف مضيعة للمال، أفضل الاستثمار لكلينا",
      },
    ],
  },
  {
    id: 18,
    question_en: "Do you believe in friendship between women and men ?",
    question_fr: "Croyez-vous à l'amitié entre femmes et hommes ?",
    question_ar: "هل تؤمن بالصداقة بين النساء والرجال ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "Yes, friendship transcends gender boundaries",
        label_fr: "Oui, l'amitié transcende les frontières de genre",
        label_ar: "نعم، الصداقة تتجاوز الحدود بين الجنسين",
      },
      {
        id: 1,
        label_en:
          "No, I don't believe in true friendships between women and men",
        label_fr:
          "Non, je ne crois pas en de vraies amitiés entre femmes et hommes",
        label_ar: "لا أؤمن بالصداقات الحقيقية بين النساء والرجال",
      },
      {
        id: 2,
        label_en:
          "It's possible, the approach may differ compared to same-gender friendships",
        label_fr:
          "C'est possible, l'approche peut être différente par rapport aux amitiés du même genre",
        label_ar: "من الممكن، قد تختلف الطريقة مقارنة بالصداقات من نفس الجنس",
      },
      {
        id: 3,
        label_en: "It's possible, but it varies on a case-by-case basis",
        label_fr: "C'est possible, mais cela dépend des cas",
        label_ar: "صحيح، من الممكن ذلك، ولكن يختلف من حالة لأخرى",
      },
    ],
  },
  {
    id: 19,
    question_en: "What type of travel experience do you prefer ?",
    question_fr: "Quel type d'expérience de voyage préférez-vous ?",
    question_ar: "ما نوع تجربة السفر التي تفضلها ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 2,
    answers: [
      {
        id: 0,
        label_en: "Relaxing beach getaway",
        label_fr: "Évasion relaxante à la plage",
        label_ar: "السفر إلى الشاطئ للاسترخاء",
      },
      {
        id: 1,
        label_en: "Adventurous hiking and camping trip",
        label_fr: "Aventure de randonnée et de camping",
        label_ar: "رحلة مغامرة للتسلق والتخييم",
      },
      {
        id: 2,
        label_en: "Cultural exploration in historic cities",
        label_fr: "Exploration culturelle dans des villes historiques",
        label_ar: "استكشاف ثقافي في المدن التاريخية",
      },
      {
        id: 3,
        label_en: "Immersive nature retreat",
        label_fr: "Retraite immersive en pleine nature",
        label_ar: "رحلة في أحضان الطبيعة",
      },
      {
        id: 4,
        label_en: "Food and culinary tour",
        label_fr: "Tour gastronomique et culinaire",
        label_ar:
          " جولة سياحية حول اكلات عالمية و اكتشاف ثقافة الطهي من مختلف مطابخ العالم  ",
      },
      {
        id: 5,
        label_en: "Spiritual and wellness retreat",
        label_fr: "Retraite spirituelle et bien-être",
        label_ar: "رحلة روحية لإيجاد الذات",
      },
      {
        id: 6,
        label_en: "Road trip to explore multiple destinations",
        label_fr: "Road trip pour explorer plusieurs destinations",
        label_ar: "رحلة  لاستكشاف عدة وجهات مختلفة",
      },
    ],
  },
];

export const QuestionsTest3: MatchTestType = [
  {
    id: 0,
    question_en: "What kind of music do you enjoy listening to ?",
    question_fr: "Quel genre de musique appréciez-vous écouter ?",
    question_ar: "ما نوع الموسيقى التي تستمتع بالاستماع إليها ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Traditional Arabic",
        label_fr: "Musique traditionnelle Arabe",
        label_ar: "موسيقى عربية",
      },
      {
        id: 1,
        label_en: "Jazz",
        label_fr: "Jazz",
        label_ar: "موسيقى الجاز",
      },
      {
        id: 2,
        label_en: "Classical music",
        label_fr: "Musique classique",
        label_ar: "الموسيقى الكلاسيكية",
      },
      {
        id: 3,
        label_en: "Pop ",
        label_fr: "Pop",
        label_ar: "موسيقى البوب",
      },
      {
        id: 4,
        label_en: "Chaabi ",
        label_fr: "Chaabi",
        label_ar: "موسيقى شعبية",
      },
      {
        id: 5,
        label_en: "Rai",
        label_fr: "Rai",
        label_ar: "موسيقى الراي",
      },
      {
        id: 6,
        label_en: "Andalusian ",
        label_fr: "Musique andalouse",
        label_ar: "الموسيقى الأندلسية",
      },
      {
        id: 7,
        label_en: "Dabke",
        label_fr: "Dabke",
        label_ar: "الدبكة",
      },
      {
        id: 8,
        label_en: "Rock and Metal",
        label_fr: "Rock et Metal",
        label_ar: "موسيقى الروك و الميتال",
      },
      {
        id: 9,
        label_en: "Rap and Hip Hop",
        label_fr: "Rap et Hip Hop",
        label_ar: "الراب والهيب هوب",
      },
      {
        id: 10,
        label_en: "French music",
        label_fr: "Musique française",
        label_ar: "موسيقى فرنسية",
      },
    ],
  },
  {
    id: 1,
    question_en: "What kind of foodie are you ?",
    question_fr: "Par quelle type de cuisine êtes-vous passionnés.es ?",
    question_ar: "ما نوع المطبخ الذي تحبه ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Gourmet",
        label_fr: "Gastronomie",
        label_ar: "الطبخ الراقي",
      },
      {
        id: 1,
        label_en: "Street Food",
        label_fr: "Street food",
        label_ar: "أكل الشوارع",
      },
      {
        id: 2,
        label_en: "Healthy",
        label_fr: "Repas équilibré et sain",
        label_ar: "أكل صحي",
      },
      {
        id: 3,
        label_en: "Vegan",
        label_fr: "Cuisine vegan",
        label_ar: "أكل نباتي",
      },
      {
        id: 4,
        label_en: "Cultural Food Explorers",
        label_fr: "Découverte cuisine du monde",
        label_ar: "إكتشاف ثقافة الطبخ حول العالم",
      },
      {
        id: 5,
        label_en: "Bakers and Dessert Lovers",
        label_fr: "Pâtisserie et desserts",
        label_ar: "كل ما يتعلق بالمخابز والحلويات",
      },
      {
        id: 6,
        label_en: "Farm-to-Table",
        label_fr: "De la ferme à la table",
        label_ar: "طعام عضوي",
      },
      {
        id: 7,
        label_en: "Homemade",
        label_fr: "Fait maison",
        label_ar: "اكل محضر في المنزل",
      },
    ],
  },
  {
    id: 2,
    question_en: "What type of shopping do you prefer ?",
    question_fr: "Quel genre de shopping préférez-vous faire ?",
    question_ar: "ما هي طريقة التسوق التي تفضل ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "E-commerce",
        label_fr: "E-commerce",
        label_ar: "التسوق عبر الإنترنت",
      },
      {
        id: 1,
        label_en: "Window Shopping",
        label_fr: "Faire du lèche-vitrine",
        label_ar: "التسوق في المحالات التجارية",
      },
      {
        id: 2,
        label_en: "Deals and sales",
        label_fr: "Les bons plans et les soldes",
        label_ar: "التسوق في موسم التخفيضات",
      },
      {
        id: 3,
        label_en: "Markets and fairs",
        label_fr: "Les marchés et les foires",
        label_ar: "الشراء من مراكز التسوق و المعارض",
      },
      {
        id: 4,
        label_en: "Special occasions",
        label_fr: "Les occasions spéciales",
        label_ar: "التسوق في مناسبات خاصة",
      },
      {
        id: 5,
        label_en: "Second-hand purchases",
        label_fr: "Les achats de seconde main",
        label_ar: "شراء الأغراض المستعملة",
      },
      {
        id: 6,
        label_en: "Eco-friendly shopping",
        label_fr: "Les achats éco-responsables",
        label_ar: "التسوق الصديق للبيئة",
      },
    ],
  },
  {
    id: 3,
    question_en: "What items do you buy most often ?",
    question_fr: "Quels articles achetez-vous le plus souvent ?",
    question_ar: "ما هي الأغراض التي تشتريها في أغلب الأحيان ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Fashion and Apparel Shopping",
        label_fr: "Fashion et articles de mode",
        label_ar: " الأزياء والموضة",
      },
      {
        id: 1,
        label_en: "Electronics and Gadgets Shopping",
        label_fr: "Les appareils électroniques et les gadgets",
        label_ar: "الالكترونيات",
      },
      {
        id: 2,
        label_en: "Antique and Vintage Shopping",
        label_fr: "Articles d'antiquités et de vintage",
        label_ar: "الأشياء القديمة والعتيقة",
      },
      {
        id: 3,
        label_en: "Hobby Shopping",
        label_fr: "Achat lié à mes loisirs",
        label_ar: "كل ما هو متعلق بهواياتي",
      },
      {
        id: 4,
        label_en: "Cosmetics Shopping",
        label_fr: "Cosmétiques et produits de beauté",
        label_ar: "مستحضرات التجميل",
      },
      {
        id: 5,
        label_en: "DIY and Home Improvement Shopping",
        label_fr: "Matériaux de bricolage et de rénovation",
        label_ar: "تحسينات المنزل ",
      },
      {
        id: 6,
        label_en: "Books, music and movies Shopping",
        label_fr: "Livres, musique et films",
        label_ar: "الكتب، الموسيقى والأفلام",
      },
      {
        id: 7,
        label_en: "Pets and accessory Shopping",
        label_fr: "Les accessoires de mes animaux de compagnie",
        label_ar: "مستلزمات الحيوانات الأليفة",
      },
      {
        id: 8,
        label_en: "Watches Enthusiasts Shopping",
        label_fr: "Les montres",
        label_ar: "السّاعات",
      },
    ],
  },
  {
    id: 4,
    question_en: "What does real estate purchase represent for you ?",
    question_fr: "Que représente l'achat immobilier pour vous ?",
    question_ar: "ما رأيك في  شراء العقارات ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "An investment",
        label_fr: "Un investissement",
        label_ar: "استثمار",
      },
      {
        id: 1,
        label_en: "Anxiety",
        label_fr: "Une source de stress",
        label_ar: "مصدر قلق",
      },
      {
        id: 2,
        label_en: "Security for my loved ones",
        label_fr: "Une sécurité pour mes proches",
        label_ar: "مصدر أمان للناس القريبة مني",
      },
      {
        id: 3,
        label_en: "I'm not thinking about it at the moment",
        label_fr: "Je n'y pense pas pour l'instant",
        label_ar: "أنا لا أفكر في ذلك في الوقت الحالي",
      },
    ],
  },
  {
    id: 5,
    question_en:
      "For an ideal travel destination, what would be your selection criteria ?",
    question_fr:
      "Pour une destination de voyage idéale, quels seront vos critères de choix ?",
    question_ar: "لسفر مثالي و أكثر متعة، ماذا تحب أن تختار ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "Wherever, as long as I feel good there",
        label_fr: "Au bout du monde, tant que je m'y sens bien",
        label_ar: "أينما كنت، ما دمت أشعر أنني بحالة جيدة هناك",
      },
      {
        id: 1,
        label_en: "No matter where if there's shopping nearby",
        label_fr: "Peu importe tant qu'il y a du shopping à faire",
        label_ar:
          "لا يهم المكان اين أتواجد، ما دامت هنالك أماكن للتسوق قريبة مني",
      },
      {
        id: 2,
        label_en: "Mountains it's the better",
        label_fr: "Plus il y a de la verdure, mieux c'est",
        label_ar: "لا يوجد أفضل من الجبال والمرتفعات",
      },
      {
        id: 3,
        label_en: "Vamos a la Playa ! That's what I'm looking for the most",
        label_fr: "Vamos a la Playa ! C'est ce que je cherche le plus",
        label_ar: "الذهاب إلى الشاطئ! هذا ما أبحث عنه",
      },
      {
        id: 4,
        label_en: "Imprerial and historical cities",
        label_fr: "Des villes impériales et historiques",
        label_ar: "السفر إلى المدن والتاريخية ومهد الإمبراطوريات",
      },
    ],
  },
  {
    id: 6,
    question_en: "What is your ideal location ?",
    question_fr: "Quelle est votre localisation idéale ?",
    question_ar: "ما هو موقعك المثالي ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "In the largest cities in the world",
        label_fr: "Dans les plus grandes villes du monde",
        label_ar: "في أكبر مدن العالم",
      },
      {
        id: 1,
        label_en: "On a fishing village",
        label_fr: "Sur une ville de pêcheur",
        label_ar: "في قرية صيد",
      },
      {
        id: 2,
        label_en: "The essential thing is to be away from noice and traffic",
        label_fr: "L'essentiel c'est d'être loin du bruit et du trafic",
        label_ar: "الشيء الأساسي هو الابتعاد عن الضوضاء وحركة المرور",
      },
      {
        id: 3,
        label_en: "The essential thing is to be close to my family",
        label_fr: "L'essentiel est d'être proche de ma famille",
        label_ar: "الأساس هو أن أكون قريبًا من عائلتي",
      },
    ],
  },
  {
    id: 7,
    question_en: "If you had to choose a quote, what would it be ?",
    question_fr: "Si vous deviez choisir une citation, quelle serait-elle ?",
    question_ar: "إذا كان عليك اختيار مقولة، فماذا ستكون ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: '"Love is a friendship set to music" - Joseph Campbell',
        label_fr:
          '"L\'amour est une amitié harmonisée en musique." - Joseph Campbell',
        label_ar:
          "اجتماع مشاعر الحب والصداقة بذات الشخص تبني علاقة من الصعب أن تنتهي - فيرديناند كون",
      },
      {
        id: 1,
        label_en:
          '"I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love." - Mother Teresa',
        label_fr:
          "\"J'ai trouvé le paradoxe, que si vous aimez jusqu'à en souffrir, il ne peut plus y avoir de mal, seulement plus d'amour.\" - Mère Teresa",
        label_ar:
          "لقد وجدت المفارقة، أنه إذا كنت تحب حتى تتألم، فلن يكون هناك المزيد من الأذى، فقط المزيد من الحب - الأم تيريزا ",
      },
      {
        id: 2,
        label_en:
          '"The best thing to hold onto in life is each other." - Audrey Hepburn',
        label_fr:
          "\"La meilleure chose à laquelle s'accrocher dans la vie c'est l'un à l'autre\" - Audrey Hepburn",
        label_ar:
          "كلَّما إبتعدنا عن بَعضِنا البعض، كنَّا أقرب ما يُمكن - أوغست ستريندبرغ",
      },
      {
        id: 3,
        label_en:
          '"Love is when the other person\'s happiness is more important than your own." - H. Jackson Brown Jr.',
        label_fr:
          "L'amour c'est lorsque le bonheur d'autrui est plus important que le nôtre.\" - H. Jackson Brown Jr.",
        label_ar:
          "الحب هو الحالة التي تصبح فيها سعادتك الشخصية مرتبطة بسعادة شخص آخر - روبرت هاينلين",
      },
    ],
  },
  {
    id: 8,
    question_en: "What is your sports profile ?",
    question_fr: "Quel est votre profil sportif ?",
    question_ar: "علاقتك بالرياضة ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Professional Athlete",
        label_fr: "Athlète professionnel.le",
        label_ar: "رياضي(ة) محترف(ة)",
      },
      {
        id: 1,
        label_en: "Adventurer",
        label_fr: "Aventurier.e",
        label_ar: "مغامر(ة)",
      },
      {
        id: 2,
        label_en: "Fitness and Gym",
        label_fr: "Fitness et Gym",
        label_ar: "اللياقة البدنية والصالات الرياضية",
      },
      {
        id: 3,
        label_en: "Team Player",
        label_fr: "Amateurs de sports d'équipe",
        label_ar: "ممارس للرياضات الجماعية",
      },
      {
        id: 4,
        label_en: "Meditation and Wellness Seeker",
        label_fr: "Méditation, Yoga et bien-être",
        label_ar: "التأمل واليوغا",
      },
      {
        id: 5,
        label_en: "Sports Spectator",
        label_fr: "Supporteur.ce",
        label_ar: "متتبع(ة) للرياضات",
      },
      {
        id: 6,
        label_en: "Recreational Sport Participant",
        label_fr: "Sportif.ve occasionnel.le",
        label_ar: "الألعاب الرياضية الترفيهية",
      },
      {
        id: 7,
        label_en: "Sports Coach and Trainer",
        label_fr: "Entraîneur.e sportif.ve",
        label_ar: "مدرب(ة) رياضي(ة)",
      },
      {
        id: 8,
        label_en: "Endurance sports",
        label_fr: "Sport d'endurance",
        label_ar: "رياضات التحمل",
      },
      {
        id: 9,
        label_en: "Not for me",
        label_fr: "Ce n'est pas pour moi",
        label_ar: "لا علاقة لي بالرياضة",
      },
    ],
  },
  {
    id: 9,
    question_en: "How often do you play sports ?",
    question_fr: "À quelle fréquence pratiquez-vous le sport ?",
    question_ar: "كم مرة تمارس الرياضة ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 1,
    answers: [
      {
        id: 0,
        label_en: "Daily",
        label_fr: "Quotidiennement",
        label_ar: "يوميًا",
      },
      {
        id: 1,
        label_en: "Several times a week",
        label_fr: "Plusieurs fois par semaine",
        label_ar: "عدة مرات بالاسبوع",
      },
      {
        id: 2,
        label_en: "Once a week",
        label_fr: "Une fois par semaine",
        label_ar: "مرة في الأسبوع",
      },
      {
        id: 3,
        label_en: "As needed",
        label_fr: "Selon mes besoins",
        label_ar: "حسب الحاجة",
      },
      {
        id: 4,
        label_en: "Seasonally",
        label_fr: "Sport de saison",
        label_ar: "حسب الرياضات الموسمية",
      },
      {
        id: 5,
        label_en: "Occasionally",
        label_fr: "Occasionnellement",
        label_ar: "أحياناً",
      },
      {
        id: 6,
        label_en: "Never",
        label_fr: "Jamais",
        label_ar: "أبداً",
      },
    ],
  },
  {
    id: 10,
    question_en: "How do you invest time for your personal development ?",
    question_fr:
      "Investissez-vous du temps pour votre développement personnel ?",
    question_ar: "كيف تستثمر الوقت في التطوير الذاتي ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Skill and Educational Development",
        label_fr: "Développement des compétences et de l'éducation",
        label_ar: "تنمية المهارات والتعليم الذاتي",
      },
      {
        id: 1,
        label_en: "Physical Development",
        label_fr: "Développement physique",
        label_ar: "التطور البدني",
      },
      {
        id: 2,
        label_en: "Emotional Intelligence",
        label_fr: "Intelligence émotionnelle",
        label_ar: "الذكاء العاطفي",
      },
      {
        id: 3,
        label_en: "Mindfulness and Meditation",
        label_fr: "Pleine conscience et méditation",
        label_ar: "الوعي الذهني والتأمل",
      },
      {
        id: 4,
        label_en: "Self-Confidence and Self-Esteem",
        label_fr: "Confiance en soi et estime de soi",
        label_ar: "الثقة بالنفس واحترام الذات",
      },
      {
        id: 5,
        label_en: "Career Development",
        label_fr: "Développement de carrière",
        label_ar: "التطوير المهني",
      },
      {
        id: 6,
        label_en: "Hobbies and Personal Interests",
        label_fr: "Loisirs et intérêts personnels",
        label_ar: "الهوايات والاهتمامات الشخصية",
      },
      {
        id: 7,
        label_en: "Business development",
        label_fr: "Développement professionnel",
        label_ar: "تطوير الأعمال",
      },
      {
        id: 8,
        label_en: "No need",
        label_fr: "Ce n'est pas nécessaire",
        label_ar: "لست بحاجة لذلك",
      },
    ],
  },
  {
    id: 11,
    question_en:
      "Which methods and resources do you use to improve yourself  ?",
    question_fr:
      "Quelles méthodes et ressources utilisez-vous pour vous améliorer ?",
    question_ar: "ما الأساليب والموارد التي تستخدمها للتطوير من ذاتك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Books and Reading",
        label_fr: "Livres et lectures",
        label_ar: "قراءة الكتب و المراجع",
      },
      {
        id: 1,
        label_en: "Courses and Workshops",
        label_fr: "Cours et ateliers",
        label_ar: "الدورات التدريبية و ورشات عمل",
      },
      {
        id: 2,
        label_en: "Mentorship and Coaching",
        label_fr: "Mentorat et coaching",
        label_ar: "الإرشاد والتوجيه",
      },
      {
        id: 3,
        label_en: "Podcasts and Audiobooks",
        label_fr: "Podcasts et livres audio",
        label_ar: "بودكاست والكتب الصوتية",
      },
      {
        id: 4,
        label_en: "Physical Activities",
        label_fr: "Activités physiques",
        label_ar: "الأنشطة البدنية",
      },
      {
        id: 5,
        label_en: "Journaling and Reflection",
        label_fr: "Écriture et réflexion",
        label_ar: "تسجيل اليوميات و مناقشة الأفكار مع نفسك",
      },
      {
        id: 6,
        label_en: "Networking and Social Interaction",
        label_fr: "Réseautage et interactions sociales",
        label_ar: " بناء علاقات إجتماعية مفيدة",
      },
      {
        id: 7,
        label_en: "Volunteering",
        label_fr: "Bénévolat",
        label_ar: "التطوع",
      },
      {
        id: 8,
        label_en: "Meditation, retreats and Mindfulness Practices",
        label_fr:
          "Méditation, retraites et pratiques basées sur la pleine conscience",
        label_ar: "التأمل و تطوير اليقظه الذهنية",
      },
      {
        id: 9,
        label_en: "Attitude and Positive Thinking",
        label_fr: "Posture et pensée positive",
        label_ar: " تحسين السلوكيات التفكير الايجابي",
      },
    ],
  },
  {
    id: 12,
    question_en: "What is your fashion style ?",
    question_fr: "Quel est votre style vestimentaire ?",
    question_ar: "ما هو نوع الأزياء المفضلة لديك ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Casual",
        label_fr: "Décontracté",
        label_ar: "لباس ليس رسمي 'كاجوال'",
      },
      {
        id: 1,
        label_en: "Casual Business",
        label_fr: "Business décontracté",
        label_ar: "لباس العمل",
      },
      {
        id: 2,
        label_en: "Chic",
        label_fr: "Chic",
        label_ar: "لباس أنيق",
      },
      {
        id: 3,
        label_en: "Minimalist",
        label_fr: "Minimaliste",
        label_ar: "لباس بسيط",
      },
      {
        id: 4,
        label_en: "Streetwear",
        label_fr: "Streetwear",
        label_ar: "ملابس ستريت وير",
      },
      {
        id: 5,
        label_en: "Vintage/Retro",
        label_fr: "Vintage/Retro",
        label_ar: "ملابس عتيقة",
      },
      {
        id: 6,
        label_en: "Sporty",
        label_fr: "Sportif",
        label_ar: "لباس رياضي",
      },
      {
        id: 7,
        label_en: "Ghotic",
        label_fr: "Ghotique",
        label_ar: "أزياء قوطية",
      },
    ],
  },
  {
    id: 13,
    question_en: "Which category of film do you prefer ?",
    question_fr: "Quelle catégorie de film préférez-vous ?",
    question_ar: "أي فئة من الأفلام تفضل ؟",
    type: "text",
    partner: false,
    score_calculation_type: "direct",
    max_answers: 0,
    answers: [
      {
        id: 0,
        label_en: "Action",
        label_fr: "Action",
        label_ar: "أفلام الأكشن والحركة",
      },
      {
        id: 1,
        label_en: "Comedy",
        label_fr: "Comédie",
        label_ar: "الأفلام الكوميدية",
      },
      {
        id: 2,
        label_en: "Adventure",
        label_fr: "Aventure",
        label_ar: "أفلام المغامرات",
      },
      {
        id: 3,
        label_en: "Drama",
        label_fr: "Drame",
        label_ar: "أفلام الدراما",
      },
      {
        id: 4,
        label_en: "Science fiction",
        label_fr: "Science-fiction",
        label_ar: "أفلام الخيال العلمي",
      },
      {
        id: 5,
        label_en: "Horror",
        label_fr: "Horreur",
        label_ar: "أفلام الرعب",
      },
      {
        id: 6,
        label_en: "Thriller",
        label_fr: "Thriller",
        label_ar: "أفلام الإثارة والتشويق",
      },
      {
        id: 7,
        label_en: "Fantasy",
        label_fr: "Fantastique",
        label_ar: "أفلام خيالية",
      },
      {
        id: 8,
        label_en: "Romance",
        label_fr: "Romance",
        label_ar: "أفلام رومانسية",
      },
      {
        id: 9,
        label_en: "Musical",
        label_fr: "Comédie musicale",
        label_ar: "أفلام موسيقية/راقصة",
      },
      {
        id: 10,
        label_en: "Documentary",
        label_fr: "Documentaire",
        label_ar: "أفلام وثائقية",
      },
      {
        id: 11,
        label_en: "Historical",
        label_fr: "Historique",
        label_ar: "أفلام تاريخية",
      },
    ],
  },
];
