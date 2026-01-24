import {
    Code2,
    GraduationCap,
    Briefcase,
    Rocket,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    BrainCircuit,
    FolderCode,
    Toolbox,
    MessageSquare,
    CheckCircle,
    Target,
    Users,
    Sparkles
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
    SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap,
    SiNodedotjs, SiExpress, SiPython, SiDjango, SiFirebase, SiMysql,
    SiMongodb, SiSupabase, SiGithubactions, SiGooglecloud, SiDocker,
    SiVercel, SiJavascript, SiPhp, SiOpenjdk, SiGooglegemini,
    SiAndroidstudio, SiPostman, SiAdobexd, SiFigma,
    SiArduino, SiRaspberrypi, SiAdobephotoshop, SiAdobeaftereffects,
    SiPerplexity, SiGithubcopilot, SiX, SiSharp, SiCplusplus, SiC, SiSolidity
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import PROJECT_IMG1 from "../assets/project1.jpg";
import PROJECT_IMG2 from "../assets/project1.jpg";
import PROJECT_IMG3 from "../assets/project1.jpg";
import PROJECT_IMG4 from "../assets/project1.jpg";
import PROJECT_IMG5 from "../assets/project1.jpg";
import PROJECT_IMG6 from "../assets/project1.jpg";
//import PROJECT_IMG1 from "../assets/project1.jpg";
//import PROJECT_IMG2 from "../assets/project1.jpg";
//import PROJECT_IMG3 from "../assets/project1.jpg";  
//import { describe } from "node:test";

export const SKILLS_CATEGORIES = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Building visually appealing and user-friendly interfaces using modern frontend technologies.",
        skills: [
            { name: "React", icon: SiReact, color: "text-blue-500" },
            { name: "Typescript", icon: SiTypescript, color: "text-blue-600" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
            { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
            { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Developing robust and scalable server-side applications and APIs.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "Python", icon: SiPython, color: "text-yellow-600" },
            { name: "Django", icon: SiDjango, color: "text-green-800" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Designing and managing efficient database systems for data storage and retrieval.",
        skills: [
            { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-800" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
            { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployments.",
        skills: [
            { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-400" },
            { name: "Docker", icon: SiDocker, color: "text-blue-600" },
            { name: "Vercel", icon: SiVercel, color: "text-white" },
        ],
    },
    {
        title: "AI Tools",
        icon: BrainCircuit,
        description: "Leveraging advanced AI tools and models for intelligent application development.",
        skills: [
            { name: "Google Antigravity", icon: SiGooglegemini, color: "text-blue-400" },
            { name: "Perplexity AI", icon: SiPerplexity, color: "text-cyan-400" },
            { name: "Grok", icon: SiX, color: "text-white" },
            { name: "GitHub Copilot", icon: SiGithubcopilot, color: "text-blue-500" },
        ],
    },
    {
        title: "Programming Languages",
        icon: FolderCode,
        description: "Proficient in multiple programming languages for diverse application needs.",
        skills: [
            { name: "Python", icon: SiPython, color: "text-yellow-600" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
            { name: "Java", icon: SiOpenjdk, color: "text-red-500" },
            { name: "C#", icon: SiSharp, color: "text-purple-600" },
            { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
            { name: "C", icon: SiC, color: "text-blue-500" },
            { name: "Solidity", icon: SiSolidity, color: "text-gray-400" },
        ],
    },
    {
        title: "Other Tools & Hardware",
        icon: Toolbox,
        description: "Tools and hardware used for development, design, and IoT projects.",
        isFullWidth: true,
        skills: [
            { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
            { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-500" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "Adobe XD", icon: SiAdobexd, color: "text-purple-500" },
            { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-800" },
            { name: "After Effects", icon: SiAdobeaftereffects, color: "text-purple-800" },
            { name: "Figma", icon: SiFigma, color: "text-pink-500" },
            { name: "Arduino", icon: SiArduino, color: "text-teal-500" },
            { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-red-500" },
            { name: "IoT", icon: Zap, color: "text-yellow-500" },
        ],
    },
];

export const TECH_STACK = [
    "Javascript",
    "Typescript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Kubernetes",
    "Azure"
];

export const PROJECTS = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG1,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        githubURL: "#",
        featured: true,
        category: "Web Development",
    },
    {
        id: 2,
        title: "Project One",
        description: "A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG2,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        githubURL: "#",
        featured: true,
        category: "Web Development",
    },
    {
        id: 3,
        title: "Project One",
        description: "A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG3,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        githubURL: "#",
        featured: true,
        category: "Web Development",
    },
    {
        id: 4,
        title: "Project One",
        description: "A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG4,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        githubURL: "#",
        featured: true,
        category: "Web Development",
    },
    {
        id: 5,
        title: "Project One",
        description: "A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG5,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        githubURL: "#",
        featured: true,
        category: "Web Development",
    },
    {
        id: 6,
        title: "Project One",
        description: "A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG6,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        githubURL: "#",
        featured: true,
        cwategory: "Web Development",
    }

];

export const JOURNEY_DATA = [
    {
        year: "2018 - 2019",
        title: "Diploma in Software Engineering",
        company: "National Institute of Business Management",
        points: [
            "Completed my Diploma in Software Engineering with a Distinction Pass from National Institute of Business Management."
        ],
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "2019 - 2020",
        title: "Higher National Diploma in Software Engineering",
        company: "National Institute of Business Management",
        points: [
            "Completed my Higher National Diploma in Software Engineering with a Merit Pass from National Institute of Business Management."
        ],
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "2018 - 2021",
        title: "Freelance Web Developer",
        company: "Freelance & Fiverr",
        points: [
            "Worked as a freelance web developer, building and maintaining websites for clients."
        ],
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2020 - 2021",
        title: "Intern Software Engineer",
        company: "Agaya Holdings (Pvt) Ltd",
        points: [
            "Worked as an intern software engineer, learning the fundamentals of programming."
        ],
        icon: Briefcase,
        color: "bg-blue-500",
    },
    {
        year: "2021 - Present",
        title: "Co-Founder & Director",
        company: "LUXN (PVT) LTD",
        points: [
            "Architected, led, and directly contributed to the end-to-end design, development, and deployment of **Sri Lanka’s first NFC-based smart business card platform**, delivering individual digital profiles and enterprise-grade corporate management solutions.",
            "**Working directly with corporate clients**, conducting technical discussions to understand business requirements and delivering customized NFC smart business card solution aligned with their organizational needs.",
            "Designed and implemented corporate admin dashboards enabling organizations to centrally manage users, profiles, permissions, and NFC-linked data at scale.",
            "Delivered **on-premise and cloud deployments**, including: **Google Cloud Platform (GCP) environments** and **Client-managed internal Windows Server infrastructures.**"
        ],
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: "2022-2023",
        title: "BSc (Hons) Computer Science and Software Engineering",
        company: "University of Bedfordshire",
        points: [
            "Completed my BSc (Hons) Computer Science and Software Engineering with a **First Class** from University of Bedfordshire."
        ],
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "2026",
        title: "MSc in Artificial Intelligence",
        company: "London Metropolitan University",
        points: [
            "Currently pursuing a Master’s degree focused on advanced AI concepts and real-world applications."
        ],
        icon: GraduationCap,
        color: "bg-blue-500",
    }
];

export const MISSION = {
    title: "Introduction",
    description: "Motivated and adaptable software engineering professional with hands-on experience building digital products, solving real-world problems, and contributing across the full development lifecycle. With a background in a fast-paced startup, I bring solid technical skills, practical project experience, and an entrepreneurial mindset that supports innovation and continuous improvement. Skilled in teamwork, quick learning, and delivering reliable solutions.",
};

export const HOW_I_WORK = [
    {
        icon: MessageSquare,
        title: "Client-Focused Communication",
        description: "I work closely with clients to understand their needs, clarify requirements, and translate ideas into practical, well-defined solutions.",
    },
    {
        icon: CheckCircle,
        title: "End-to-End Ownership",
        description: "I take responsibility across the full lifecycle planning, development, deployment, and iteration ensuring reliability and quality at every stage.",
    },
    {
        icon: Target,
        title: "Structured & Solution Driven",
        description: "I approach problems methodically, balancing technical decisions with real-world constraints to deliver stable, maintainable products.",
    },
    {
        icon: Users,
        title: "Collaborative by Nature",
        description: "I enjoy working with cross-functional teams, sharing context clearly, reviewing ideas openly, and moving together toward the best solution.",
    },
];

export const PASSIONS = [
    {
        icon: Zap,
        title: "Vibe Coding",
        description: "I enjoy getting into a focused rhythm where ideas turn into clean, functional code and progress feels natural and intentional.",
    },
    {
        icon: Toolbox,
        title: "Builder’s Mindset",
        description: "I’m driven by the satisfaction of shaping ideas into working systems through thoughtful, focused development.",
    },
    {
        icon: Server,
        title: "Building Real-World Systems",
        description: "I’m driven by building production-ready systems that handle real users, real data, and real constraints.",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Staying updated with the latest industry trends and continuously improving my skills.",
    },
];

export const CURRENTLY_EXPLORING = {
    title: "Currently Exploring",
    icon: Sparkles,
    description: "I’m getting into artificial intelligence and machine learning, exploring core concepts such as intelligent systems, data-driven models, and practical AI applications. My focus is on understanding how these technologies can be applied thoughtfully to real-world products and production-ready systems",
};

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: FiGithub,
        color: "bg-gray-800",
        bgColor: "text-white",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: FiLinkedin,
        color: "bg-gray-800",
        bgColor: "text-white",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: FiTwitter,
        color: "bg-gray-800",
        bgColor: "text-white",
    },
];

export const CONTACT_INFO = {
    location: "Matara, Sri Lanka",
    phone: "+94 70 390 4967",
    email: "navindukalhara@gmail.com",
};