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
    role: "Lead Full-Stack Engineer",
    roleAr: "مهندس تطوير متكامل رئيسي",
    bio: "Full-stack engineer with 3+ years of experience architecting scalable web platforms using React, Node.js, Python, and Django. Passionate about delivering high-performance digital solutions.",
    bioAr: "مهندس تطوير متكامل بخبرة تتجاوز 3 سنوات في بناء منصات ويب قابلة للتوسع باستخدام React و Node.js و Python و Django. شغوف بتقديم حلول رقمية عالية الأداء.",
    image: AchrafImage,
    github: "https://github.com/AchrafLarbi",
    linkedin: "https://www.linkedin.com/in/larbi-achraf-01902a283/",
    email: "larbiachraf03@gmail.com",
  },
  {
    id: "3",
    name: "Ouddane Youcef Fahd",
    nameAr: "ودان يوسف فهد",
    role: "Senior Mobile Engineer",
    roleAr: "مهندس تطبيقات جوال أول",
    bio: "Senior mobile engineer with 3+ years of experience building cross-platform applications with Flutter, Django, and Firebase. Focused on seamless user experiences and robust backend architecture.",
    bioAr: "مهندس تطبيقات جوال أول بخبرة تتجاوز 3 سنوات في بناء تطبيقات متعددة المنصات باستخدام Flutter و Django و Firebase. يركّز على تجربة مستخدم سلسة وبنية خلفية متينة.",
    image: YoucefImage,
    github: "https://github.com/yousef391",
    linkedin: "https://www.linkedin.com/in/ouddane-youcef-fahed-75842b283/",
    email: "yf.ouddan@esi-sba.dz",
  },
  {
    id: "4",
    name: "Ourred Islem Charaf Eddine",
    nameAr: "وراد اسلام شراف الدين",
    role: "UI/UX Designer & Frontend Engineer",
    roleAr: "مصمم تجربة المستخدم ومهندس واجهات",
    bio: "Creative designer and frontend engineer specializing in crafting intuitive, pixel-perfect interfaces. Transforms complex requirements into elegant, user-centered digital experiences.",
    bioAr: "مصمم مبدع ومهندس واجهات متخصص في صياغة واجهات بديهية ودقيقة. يحوّل المتطلبات المعقدة إلى تجارب رقمية أنيقة تركّز على المستخدم.",
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
      "We helped Harfan launch their brand with a complete visual identity and a comprehensive EdTech platform — combining Arabic language learning with Quran memorization, real-time progress analytics, and an intuitive management dashboard.",
    descriptionAr:
      "ساعدنا حرفان في إطلاق علامتهم التجارية بهوية بصرية متكاملة ومنصة تعليمية شاملة — تجمع بين تعلّم اللغة العربية وحفظ القرآن الكريم مع تحليلات تقدّم فورية ولوحة إدارة بديهية.",
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
      "A premium full-stack e-commerce experience for luxury artisan products — featuring secure authentication, seamless PayPal checkout, and a powerful admin management system.",
    descriptionAr:
      "تجربة تجارة إلكترونية متكاملة وفاخرة لمنتجات الحرفيين — مع مصادقة آمنة ودفع سلس عبر PayPal ونظام إدارة متقدم.",
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
    description: "We helped Gamesooq launch their brand with a complete visual identity and Algeria's premier gaming marketplace — a scalable platform enabling gamers to buy, sell, and trade video games and consoles with built-in security and real-time notifications.",
    descriptionAr: "ساعدنا Gamesooq في إطلاق علامتهم التجارية بهوية بصرية متكاملة وسوق الألعاب الرائد في الجزائر — منصة قابلة للتوسع تمكّن اللاعبين من شراء وبيع وتبادل ألعاب الفيديو وأجهزة التحكم بأمان مدمج وإشعارات فورية.",
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
    description: "A visually stunning portfolio platform for a professional photography studio — designed to showcase creative work and convert visitors into clients.",
    descriptionAr: "منصة عرض بصرية مذهلة لاستوديو تصوير احترافي — مصمّمة لإبراز الأعمال الإبداعية وتحويل الزوار إلى عملاء.",
    image: Studio,
    category: "Web",
    technologies: ["React", "Tailwind css", "Javascript", "Supabase"],
    date: "2024",
    github: "https://studiohouari.netlify.app/",
  },
  {
    id: 3,
    title: "Anonyto ",
    titleAr: "Anonyto ",
    description: "An intelligent privacy-first platform that automatically detects and anonymizes sensitive data before transmission — ensuring compliance and protecting user information at scale.",
    descriptionAr: "منصة ذكية تعتمد الخصوصية أولاً، تكتشف وتخفي البيانات الحساسة تلقائياً قبل الإرسال — لضمان الامتثال وحماية معلومات المستخدمين على نطاق واسع.",
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
      "A customized e-commerce platform for the fitness industry — built around the client's brand identity and product catalog, featuring personalized workout plans, smart dietary recommendations, and comprehensive progress analytics.",
    descriptionAr: "منصة تجارة إلكترونية مخصصة لقطاع اللياقة البدنية — مبنية حول هوية العميل التجارية وكتالوج منتجاته، مع خطط تمارين مخصصة وتوصيات غذائية ذكية وتحليلات تقدم شاملة.",
    image: MuscleUp,
    category: "Mobile",
    technologies: ["React", "Tailwind css", "Django","Python", "SQLite", "RESTful APIs"],
    date: "2025",
    github: "https://gym-website-7avc.vercel.app/?store=youcefnut/",
  },
  {
    id: 6,
    title: "CAC de Batna",
    titleAr: "CAC de Batna",
    description: "A comprehensive UI/UX design system for Algeria's Centre Anti-Cancer de Batna — crafting patient-centered digital interfaces that streamline diagnosis workflows and enhance the care experience.",
    descriptionAr: "نظام تصميم واجهات شامل لمركز مكافحة السرطان في باتنة — تصميم واجهات رقمية تتمحور حول المريض لتسهيل سير عمل التشخيص وتحسين تجربة الرعاية.",
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
    titleAr: "تطوير مواقع الويب",
    description: "We architect and build scalable, high-performance web platforms tailored to your business — from landing pages to complex enterprise applications.",
    descriptionAr: "نصمم ونبني منصات ويب قابلة للتوسع وعالية الأداء مصممة خصيصاً لعملك — من صفحات الهبوط إلى التطبيقات المؤسسية المعقدة.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "API Integration"],
    featuresAr: ["تصميم متجاوب", "تحسين محركات البحث", "ضبط الأداء", "تكامل API"],
    color: "blue",
  },
  {
    id: "2",
    icon: "Smartphone",
    title: "Mobile Development",
    titleAr: "تطوير تطبيقات الجوال",
    description: "We craft native and cross-platform mobile experiences for iOS and Android — built for speed, reliability, and seamless user engagement.",
    descriptionAr: "نصنع تجارب جوال أصلية ومتعددة المنصات لنظامي iOS و Android — مصممة للسرعة والموثوقية والتفاعل السلس مع المستخدم.",
    features: ["Native Apps", "Cross-Platform", "Push Notifications", "Offline Support"],
    featuresAr: ["تطبيقات أصلية", "متعدد المنصات", "إشعارات فورية", "دعم وضع عدم الاتصال"],
    color: "green",
  },
  {
    id: "3",
    icon: "Globe",
    title: "Digital Presence",
    titleAr: "التواجد الرقمي",
    description: "We establish and amplify your online presence through strategic digital infrastructure — from domain architecture to analytics-driven growth.",
    descriptionAr: "نؤسس ونعزز تواجدك الرقمي من خلال بنية رقمية استراتيجية — من هندسة النطاقات إلى النمو القائم على التحليلات.",
    features: ["Domain Setup", "Hosting Solutions", "Email Services", "Analytics"],
    featuresAr: ["إعداد النطاق", "حلول الاستضافة", "خدمات البريد الإلكتروني", "التحليلات"],
    color: "purple",
  },
  {
    id: "4",
    icon: "Palette",
    title: "UI/UX Design",
    titleAr: "تصميم واجهات المستخدم",
    description: "We design intuitive, visually exceptional interfaces grounded in user research — every pixel serves a purpose, every interaction tells a story.",
    descriptionAr: "نصمم واجهات بديهية واستثنائية بصرياً مبنية على أبحاث المستخدم — كل بكسل له هدف وكل تفاعل يروي قصة.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    featuresAr: ["أبحاث المستخدم", "التخطيط الهيكلي", "النماذج الأولية", "اختبار قابلية الاستخدام"],
    color: "pink",
  },
  {
    id: "5",
    icon: "Brain",
    title: "AI Solutions",
    titleAr: "حلول الذكاء الاصطناعي",
    description: "We integrate intelligent AI systems that transform your operations — from predictive analytics and NLP to computer vision and custom ML models.",
    descriptionAr: "ندمج أنظمة ذكاء اصطناعي متقدمة تحوّل عملياتك — من التحليلات التنبؤية ومعالجة اللغة الطبيعية إلى الرؤية الحاسوبية ونماذج التعلم الآلي المخصصة.",
    features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
    featuresAr: ["التعلم الآلي", "معالجة اللغة الطبيعية", "التحليلات التنبؤية", "رؤية الكمبيوتر"],
    color: "indigo",
  },
  {
    id: "6",
    icon: "Zap",
    title: "AI Automation",
    titleAr: "أتمتة الذكاء الاصطناعي",
    description: "We engineer AI-driven automation that eliminates bottlenecks — intelligent chatbots, document processing, and end-to-end business workflow optimization.",
    descriptionAr: "نهندس أتمتة مدفوعة بالذكاء الاصطناعي تزيل العوائق — روبوتات محادثة ذكية ومعالجة مستندات وتحسين شامل لسير العمل التجاري.",
    features: ["Workflow Automation", "Chatbots & Virtual Assistants", "Document Processing", "Business Process Automation"],
    featuresAr: ["أتمتة سير العمل", "روبوتات الدردشة والمساعدين الافتراضيين", "معالجة المستندات", "أتمتة العمليات التجارية"],
    color: "orange",
  },
];