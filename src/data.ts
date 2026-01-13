import { TeamMember, Project, Service } from './types';
import AchrafImage from "./assets/teams/Achraf.JPG";
import IslemImage from "./assets/teams/Islem.jpg";
import YoucefImage from "./assets/teams/Youcef.JPG";

import Stockkeep from "./assets/projects/stock.png"
import EsiCheck from "./assets/projects/esicheck.png"
import Studio from "./assets/projects/Studio_houari.png"
import Needy from "./assets/projects/Needy.png"
import Gamesooq from "./assets/projects/gamesooq2.png"
import CAC from "./assets/projects/CAC.png"
import portfolioWork09 from "./assets/projects/SmartCity.png";
import portfolioWork10 from "./assets/projects/Book(1).png";
import portfolioWork11 from "./assets/projects/RAG.png";
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
    link: "https://harfan-pi.vercel.app/",
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
    link: "https://maisonsyra.vercel.app/",
    github: "https://maisonsyra.vercel.app/",
    date: "2024",
  },

  {
    id: 9,
    title: "RAG Chatbot",
    titleAr: "روبوت محادثة ذكي",
    description:
      "Retrieval Augmented Generation (RAG) chatbot that answers questions from user documents using LLMs and vector databases.",
    descriptionAr:
      "روبوت محادثة ذكي يعتمد على RAG للإجابة عن الأسئلة انطلاقًا من مستندات المستخدم باستخدام نماذج لغوية متقدمة.",
    image: portfolioWork11,
    category: "AI",
    technologies: [
      "Python",
      "Transformers",
      "LangChain",
      "Gradio",
      "LLMs",
      "ChromaDB",
    ],
    link: "https://huggingface.co/spaces/achraf2203/RAG-Chatbot",
    github: "https://huggingface.co/spaces/achraf2203/RAG-Chatbot",
    date: "2024",
  },

  {
    id: 10,
    title: "Book Recommender",
    titleAr: "نظام توصية الكتب",
    description:
      "Semantic book recommendation system using LLMs with emotion-based filtering and natural language search.",
    descriptionAr:
      "نظام توصية كتب دلالي يعتمد على النماذج اللغوية مع بحث لغوي وتصفية حسب المشاعر.",
    image: portfolioWork10,
    category: "AI",
    technologies: [
      "Python",
      "Transformers",
      "LangChain",
      "Gradio",
      "Semantic Search",
      "Sentiment Analysis",
    ],
    link: "https://huggingface.co/spaces/achraf2203/Book-recommonder",
    github: "https://huggingface.co/spaces/achraf2203/Book-recommonder",
    date: "2024",
  },

  {
    id: 11,
    title: "Smart City",
    titleAr: "المدينة الذكية",
    description:
      "AI-powered smart city platform for traffic monitoring, vehicle detection, speed violation analysis, and intelligent dashboards.",
    descriptionAr:
      "منصة مدينة ذكية تعتمد على الذكاء الاصطناعي لمراقبة المرور، كشف المركبات، وتحليل مخالفات السرعة.",
    image: portfolioWork09,
    category: "AI",
    technologies: [
      "React",
      "YOLO",
      "OpenCV",
      "TensorFlow",
      "DQN",
      "FastAPI",
    ],
    link: "https://github.com/AchrafLarbi/Project_2sc",
    github: "https://github.com/AchrafLarbi/Project_2sc",
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
    link: "https://play.google.com/store/apps/details?id=com.gamesooq.dz",
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
    link: "https://studiohouariwahrani.store/",
    date: "2024",
    github: "https://studiohouariwahrani.store/",
  },
  {
    id: 3,
    title: "Stockkeep",
    titleAr: "ستوكيب",
    description: "User-friendly web and mobile application, 'Stockkeep,' It includes an Admin Panel for managing users and settings, a Consumer App for handling orders and profiles, and a Purchasing Service Agent App for procurement tasks. ",
    descriptionAr: "منتج يمكن التحكم فيه من خلال بوابة الادمن وتقديم خدمة موظفي التسويق وتقديم خدمة موظفي التسويق للمستخدمين.",
    image: Stockkeep,
    category: "Web",
    technologies: ["React", "Tailwind css", "Django","Python", "SQLite", "RESTful APIs"],
    link: "https://github.com/AchrafLarbi/Stockkeep",
    github: "https://github.com/AchrafLarbi/Stockkeep",
    date: "2024",
  },
  {
    id: 4,
    title: "ESI-Check",
    titleAr: "ESI-Check",
    description:
      " Esi-Check A game-changing solution that provides real-timeassessment tools, fosters student engagement, andcreates a personalized learning environment",
    descriptionAr: "ESI-Check هي حلة مبدعة تقدم ادوات تقييم في الوقت الفعلي، وتزيد الاتصال بالطلاب، وتقديم محيط تعليمي شخصي.",
    image: EsiCheck,
    category: "Mobile",
    technologies: ["Flutter", "NodeJS",  "GraphQL", "Dart", "ExperessJS", "Apollo GraphQL"],
    link: "https://github.com/Benbakreti0Amine/Esi-Check",
    date: "2023",
    github: "https://github.com/Benbakreti0Amine/Esi-Check",
  },
  {
    id: 5,
    title: "Needy",
    titleAr: "Needy",
    description: "A user-friendly App for fostering community generosity, Needy empowers users to easily offer or find items they need, promoting a culture of sharing and support. Whether it's books, clothes, or household items.",
    descriptionAr: "تطبيق سهل الاستخدام لتعزيز كرم المجتمع، يُمكّن Needy المستخدمين من تقديم أو العثور بسهولة على ما يحتاجونه، مما يعزز ثقافة المشاركة والدعم. سواءً كانت كتبًا أو ملابس أو أدوات منزلية.",
    image: Needy,
    category: "Mobile",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/yousef391/needyapp",
    github: "https://github.com/yousef391/needyapp",
    date: "2023",
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
    link: "https://www.figma.com/design/sCKL4k5BH6ggLQ0LXWkuOJ/Blog-anti-cancer?node-id=3-510&t=KWFOafgkQfEogpQm-0",
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