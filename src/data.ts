import { TeamMember, Project, Service } from './types';
import AchrafImage from "./assets/teams/Achraf.JPG";
import IslemImage from "./assets/teams/Islem.jpg";
import YoucefImage from "./assets/teams/Youcef.JPG";



import Studio from "./assets/projects/Studio_houari.png"
import CAC from "./assets/projects/CAC.png"
import MuscleUp from "./assets/projects/MuscleUp.png"
import Gamesooq from "./assets/projects/gamesooq2.png"
import Anonyto from "./assets/projects/Anonyto.png"
import portfolioWork12 from "./assets/projects/harfan.png";
import portfolioWork13 from "./assets/projects/syra.png"


export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Larbi Mohammed Achraf",
    nameAr: "العربي محمد أشرف" ,
    role: "Full-Stack Web Developer",
    roleAr: "مطور ويب متكامل",
    bio: "Full-stack developer with 3+ years of experience specializing in React and Node.js and python and django",
    bioAr: "مطور متكامل مع أكثر من 3 سنوات من الخبرة متخصص في React و Node.js و pyhthon و django.",
    image: AchrafImage,
    github: "https://github.com/AchrafLarbi",
    linkedin: "https://www.linkedin.com/in/larbi-achraf-01902a283/",
    email: "larbiachraf03@gmail.com",
  },
  {
    id: "3",
    name: "Ouddane Youcef Fahd",
    nameAr: "ودان يوسف فهد",
    role: "Full-Stack Mobile Developer",
    roleAr: "مطور تطبيقات جوال",
    bio: "Full-stack developer mobile with 3+ years of experience specializing in Flutter and Django and firebase.",
    bioAr: "خبرة مطور تطبيقات جوال متكاملة مع 3 سنوات من الخبرة متخصصة في Flutter و Django.",
    image: YoucefImage,
    github: "https://github.com/yousef391",
    linkedin: "https://www.linkedin.com/in/ouddane-youcef-fahed-75842b283/",
    email: "yf.ouddan@esi-sba.dz",
  },
  {
    id: "4",
    name: "Ourred Islem Charaf Eddine",
    nameAr: "وراد اسلام شراف الدين",
    role: "UI/UX Designer & Frontend Developer",
    roleAr: "مصمم واجهة المستخدم ومطور واجهة المستخدم",
    bio: "Creative designer with a passion for creating intuitive and beautiful user experiences & professional frontend developer",
    bioAr: "مصمم مبدع مع شغف لإنشاء تجارب مستخدم بديهية وجميلة. & مطور في تطوير واجهة المستخدم المهني",
    image: IslemImage,
    github: "https://github.com/Islemourred",
    linkedin: "https://www.linkedin.com/in/islem-ourred-02380327a/",
    email: "ic.ourred@esi-sba.dz",
  },

];

export const projects: Project[] = [


  {
    id: 7,
    title: "Harfan",
    titleAr: "حرفان",
    description:
      "Harfan is an interactive educational platform that combines Arabic language learning and Quran memorization with progress tracking and content management.",
    descriptionAr:
      "حرفان منصة تعليمية تفاعلية تجمع بين تعلم اللغة العربية وحفظ القرآن مع تتبع التقدم وإدارة المحتوى.",
    image: portfolioWork12,
    category: "Web",
    technologies: ["Django", "Python", "SQLite", "React"],
    github: "https://harfan-pi.vercel.app/",
    date: "2024",
  },

  {
    id: 8,
    title: "Maison SYRA",
    titleAr: "Maison SYRA",
    description:
      "Luxury full-stack e-commerce platform for artisan products with secure authentication, PayPal integration, and admin management.",
    descriptionAr:
      "منصة تجارة إلكترونية فاخرة متكاملة لمنتجات الحرفيين مع نظام دفع آمن ولوحة تحكم للإدارة.",
    image: portfolioWork13,
    category: "Web",
    technologies: [
      "React",
      "Tailwind CSS",
      "Django",
      "Python",
      "Django REST Framework",
      "PayPal",
    ],
    github: "https://maisonsyra.vercel.app/",
    date: "2024",
  },


  {
    id: 1,
    title: "Gamesooq",
    titleAr: "Gamesooq",
    description: "GameSooq is a marketplace dedicated to gamers in Algeria to buy, sell and trade video games and consoles with ease and security.",
    descriptionAr: "GameSooq هو سوق مخصص للاعبين في الجزائر لشراء وبيع وتبادل ألعاب الفيديو وأجهزة التحكم بكل سهولة وأمان.",
    image: Gamesooq,
    category: "Mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Javascript", "NodeJs"],
    date: "2025",
    github: "https://www.gamesooq.com/",
  },
  {
    id: 2,
    title: "Studio Houari ",
    titleAr: "ستوديو هواري ",
    description: "professional photography portfolio that show its work and services to potential clients.",
    descriptionAr: "منصة تعريفية  لعميل متخصصة لعرض عملياته وخدماتها للعملاء القادمين.",
    image: Studio,
    category: "Web",
    technologies: ["React", "Tailwind css", "Javascript", "Supabase"],
    date: "2024",
    github: "https://studiohouariwahrani.store/",
  },
  {
    id: 3,
    title: "Anonyto ",
    titleAr: "Anonyto ",
    description: "Anonyto automatically detects and anonymizes your sensitive data before it's sent anywhere.",
    descriptionAr: "Anonyto يتحقق وتحويل بياناتك السياسية قبل الارسال إلى أي مكان.",
    image: Anonyto ,
    category: "Web",
    technologies: ["React", "Tailwind css", "Django","Python", "SQLite", "RESTful APIs"],
    github: "http://anonyto.com/",
    date: "2026",
  },
  {
    id: 4,
    title: "MuscleUp",
    titleAr: "MuscleUp",
    description:
      "MuscleUp is a comprehensive fitness and nutrition tracking application that helps users achieve their health goals through personalized workout plans, dietary recommendations, and progress monitoring.",
    descriptionAr: "MuscleUp هو تطبيق شامل لتتبع اللياقة البدنية والغذاء يساعد المستخدمين على تحقيق أهدافهم الصحية من خلال خطط تمارين مخصصة، وتوصيات غذائية، ومراقبة التقدم.",
    image: MuscleUp,
    category: "Mobile",
    technologies: ["React", "Tailwind css", "Django","Python", "SQLite", "RESTful APIs"],
    date: "2025",
    github: "https://gym-website-7avc.vercel.app/",
  },
  {
    id: 6,
    title: "CAC de Batna",
    titleAr: "CAC de Batna",
    description: "The Centre Anti-Cancer de Batna is a specialized medical facility providing advanced cancer diagnosis, treatment, and care in Algeria. It integrates cutting-edge technology and a multidisciplinary team to ensure comprehensive patient support.",
    descriptionAr: "مركز مكافحة السرطان في باتنة هو منشأة طبية متخصصة تُقدم تشخيصًا وعلاجًا ورعايةً متقدمةً للسرطان في الجزائر. يجمع المركز بين أحدث التقنيات وفريق متعدد التخصصات لضمان دعم شامل للمرضى.",
    image: CAC,
    category: "UI/UX",
    technologies: ["Figma", "Sketch", "Adobe XD","Canva"],
    github: "https://www.figma.com/design/sCKL4k5BH6ggLQ0LXWkuOJ/Blog-anti-cancer?node-id=3-510&t=KWFOafgkQfEogpQm-0",
    date: "2024",
  },
];

export const services: Service[] = [
  {
    id: "1",
    icon: "Code2",
    title: "Web Development",
    titleAr: "تطوير الويب",
    description: "Custom websites and web applications built with the latest technologies.",
    descriptionAr: "مواقع ويب وتطبيقات ويب مخصصة مبنية بأحدث التقنيات.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "API Integration"],
    featuresAr: ["تصميم متجاوب", "تحسين محركات البحث", "ضبط الأداء", "تكامل API"],
    color: "blue",
  },
  {
    id: "2",
    icon: "Smartphone",
    title: "Mobile Development",
    titleAr: "تطوير تطبيقات الجوال",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    descriptionAr: "تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android.",
    features: ["Native Apps", "Cross-Platform", "Push Notifications", "Offline Support"],
    featuresAr: ["تطبيقات أصلية", "متعدد المنصات", "إشعارات فورية", "دعم وضع عدم الاتصال"],
    color: "green",
  },
  {
    id: "3",
    icon: "Globe",
    title: "Digital Presence",
    titleAr: "التواجد الرقمي",
    description: "Establish and grow your online presence with comprehensive digital solutions.",
    descriptionAr: "تأسيس وتنمية تواجدك عبر الإنترنت مع حلول رقمية شاملة.",
    features: ["Domain Setup", "Hosting Solutions", "Email Services", "Analytics"],
    featuresAr: ["إعداد النطاق", "حلول الاستضافة", "خدمات البريد الإلكتروني", "التحليلات"],
    color: "purple",
  },
  {
    id: "4",
    icon: "Palette",
    title: "UI/UX Design",
    titleAr: "تصميم واجهة المستخدم",
    description: "Beautiful and intuitive user interfaces with focus on user experience.",
    descriptionAr: "واجهات مستخدم جميلة وبديهية مع التركيز على تجربة المستخدم.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    featuresAr: ["أبحاث المستخدم", "التخطيط الهيكلي", "النماذج الأولية", "اختبار قابلية الاستخدام"],
    color: "pink",
  },
  {
    id: "5",
    icon: "Brain",
    title: "AI Solutions",
    titleAr: "حلول الذكاء الاصطناعي",
    description: "Intelligent AI-powered solutions that transform your business operations and decision-making.",
    descriptionAr: "حلول ذكية مدعومة بالذكاء الاصطناعي تحول عمليات عملك وصنع القرار.",
    features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
    featuresAr: ["التعلم الآلي", "معالجة اللغة الطبيعية", "التحليلات التنبؤية", "رؤية الكمبيوتر"],
    color: "indigo",
  },
  {
    id: "6",
    icon: "Zap",
    title: "AI Automation",
    titleAr: "أتمتة الذكاء الاصطناعي",
    description: "Automate repetitive tasks and workflows with intelligent AI-driven automation solutions.",
    descriptionAr: "أتمتة المهام والعمليات المتكررة بحلول أتمتة ذكية مدفوعة بالذكاء الاصطناعي.",
    features: ["Workflow Automation", "Chatbots & Virtual Assistants", "Document Processing", "Business Process Automation"],
    featuresAr: ["أتمتة سير العمل", "روبوتات الدردشة والمساعدين الافتراضيين", "معالجة المستندات", "أتمتة العمليات التجارية"],
    color: "orange",
  },
];