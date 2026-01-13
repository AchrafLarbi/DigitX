import {
  PortfolioPage,
  PortfolioPageProps,
} from "@/components/ui/starfall-portfolio-landing";
import { Brain, Sparkles, Zap } from "lucide-react";

const digitxPortfolioData: PortfolioPageProps = {
  logo: {
    initials: "DX",
    name: "DIGITX",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#skills" },
  ],
  resume: {
    label: "Contact Us",
    onClick: () => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
  hero: {
    titleLine1: "Transform Your Ideas Into",
    titleLine2Gradient: "Digital Reality",
    subtitle:
      "A digital agency specialized in web, mobile development, AI automation and AI solutions in Algeria",
  },
  ctaButtons: {
    primary: {
      label: "View Our Work",
      onClick: () => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      },
    },
    secondary: {
      label: "Get In Touch",
      onClick: () => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      },
    },
  },
  projects: [
    {
      title: "AI-Powered Business Automation",
      description:
        "Intelligent workflow automation solutions that streamline business processes and boost productivity.",
      tags: ["AI Automation", "Machine Learning", "Python"],
      imageContent: <Brain className="w-12 h-12 text-purple-400" />,
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Full-featured mobile shopping experience with real-time inventory and secure payment integration.",
      tags: ["React Native", "Firebase", "Stripe"],
      imageContent: <div className="text-3xl">📱</div>,
    },
    {
      title: "AI Chatbot Solutions",
      description:
        "Custom conversational AI assistants for customer support and lead generation.",
      tags: ["NLP", "OpenAI", "Node.js"],
      imageContent: <Sparkles className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Custom Web Applications",
      description:
        "Scalable web platforms built with modern technologies for optimal performance.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      imageContent: <div className="text-3xl">🌐</div>,
    },
    {
      title: "AI Data Analytics Platform",
      description:
        "Transform raw data into actionable insights with AI-powered analytics and visualization.",
      tags: ["Python", "TensorFlow", "D3.js"],
      imageContent: <Zap className="w-12 h-12 text-yellow-400" />,
    },
    {
      title: "Corporate Website Design",
      description:
        "Professional, responsive websites that showcase your brand and drive conversions.",
      tags: ["Next.js", "SEO", "UI/UX"],
      imageContent: <div className="text-3xl">💼</div>,
    },
  ],
  stats: [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years of Innovation" },
  ],
  showAnimatedBackground: true,
};

const DigitxPortfolioDemo = () => {
  return <PortfolioPage {...digitxPortfolioData} />;
};

export { DigitxPortfolioDemo };
