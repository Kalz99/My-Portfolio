import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    User,
    BrainCircuit,
    FolderCode,
    Toolbox
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

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
        describe: "Building visually appealing and user-friendly interfaces using modern frontend technologies.",
        skills: [
            { name: "React", level: 96, color: "bg-blue-500" },
            { name: "Typescript", level: 90, color: "bg-blue-500" },
            { name: "Tailwind CSS", level: 85, color: "bg-blue-500" },
            { name: "HTML5/CSS/BOOTSTRAP", level: 95, color: "bg-blue-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        describe: "Developing robust and scalable server-side applications and APIs.",
        skills: [
            { name: "Node.js", level: 90, color: "bg-blue-500" },
            { name: "Express", level: 85, color: "bg-blue-500" },
            { name: "Python", level: 80, color: "bg-blue-500" },
            { name: "Django", level: 75, color: "bg-blue-500" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        describe: "Designing and managing efficient database systems for data storage and retrieval.",
        skills: [
            { name: "Firebase", level: 90, color: "bg-blue-500" },
            { name: "MySQL", level: 85, color: "bg-blue-500" },
            { name: "MongoDB", level: 80, color: "bg-blue-500" },
            { name: "Supabase", level: 75, color: "bg-blue-500" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        describe: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployments.",
        skills: [
            { name: "GitHub Actions", level: 85, color: "bg-blue-500" },
            { name: "Google Cloud", level: 80, color: "bg-blue-500" },
            { name: "Docker", level: 75, color: "bg-blue-500" },
            { name: "Vercel", level: 70, color: "bg-blue-500" },
        ],
    },
    {
        title: "AI Tools",
        icon: BrainCircuit,
        describe: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployments.",
        skills: [
            { name: "Google Antigravity", level: 85, color: "bg-blue-500" },
            { name: "Github Copilot", level: 80, color: "bg-blue-500" },
            { name: "Google WiKi", level: 75, color: "bg-blue-500" },
            { name: "ChatGPT/Claude/Grok/Perplexity", level: 90, color: "bg-blue-500" },
        ],
    },
    {
        title: "Programming Languages",
        icon: FolderCode,
        describe: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployments.",
        skills: [
            { name: "Python", level: 85, color: "bg-blue-500" },
            { name: "JavaScript", level: 80, color: "bg-blue-500" },
            { name: "PHP", level: 75, color: "bg-blue-500" },
            { name: "Java", level: 70, color: "bg-blue-500" },
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
        cwategory: "Web Development",
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
        cwategory: "Web Development",
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
        cwategory: "Web Development",
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
        cwategory: "Web Development",
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
        cwategory: "Web Development",
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
        year: 2021,
        title: "Started My Journey",
        company: "Self Learning",
        description: "Embarked on my software development journey, learning the fundamentals of programming and web development.",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: 2021,
        title: "Started My Journey",
        company: "Self Learning",
        description: "Embarked on my software development journey, learning the fundamentals of programming and web development.",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: 2021,
        title: "Started My Journey",
        company: "Self Learning",
        description: "Embarked on my software development journey, learning the fundamentals of programming and web development.",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: 2021,
        title: "Started My Journey",
        company: "Self Learning",
        description: "Embarked on my software development journey, learning the fundamentals of programming and web development.",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: 2021,
        title: "Started My Journey",
        company: "Self Learning",
        description: "Embarked on my software development journey, learning the fundamentals of programming and web development.",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: 2021,
        title: "Started My Journey",
        company: "Self Learning",
        description: "Embarked on my software development journey, learning the fundamentals of programming and web development.",
        icon: Rocket,
        color: "bg-blue-500",
    }
];

const PASSIONS = [
    {
        icon: Heart,
        title: "Open Source",
        description: "Contributing to open source projects and collaborating with the developer community.",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Staying updated with the latest industry trends and continuously improving my skills.",
    },
    {
        icon: Coffee,
        title: "Tech Blogging",
        description: "Sharing knowledge and experiences through writing technical blogs and articles.",
    },
];

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