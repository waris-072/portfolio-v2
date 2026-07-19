import { FaCode, FaRocket, FaLaptopCode, FaGraduationCap, FaUniversity, FaAward, FaBriefcase, FaUsers } from "react-icons/fa";

export const personalInfo = {
  logo: "Waris",
  name: "Muhammad Waris",
  role: "MERN Stack Developer",
  tagline:
    "Building responsive, scalable, and user-focused web applications with modern frontend and backend technologies.",
  description:
    "MERN Stack Developer focused on building responsive, scalable, and user-friendly web applications. I enjoy turning ideas into practical full-stack solutions using React, Node.js, Express, MongoDB, and modern web technologies while continuously improving my development skills and software engineering practices.",
  resume: "/CV - Muhammad Waris.pdf",
};

export const aboutFacts = [
  {
    icon: FaLaptopCode,
    title: "Role",
    value: "MERN Stack Developer",
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    value: "BS Software Engineering",
  },
  {
    icon: FaUniversity,
    title: "University",
    value: "University of Sindh",
  },
  {
    icon: FaAward,
    title: "CGPA",
    value: "3.04 / 4.00",
  },
  {
    icon: FaBriefcase,
    title: "Internship",
    value: "Web Development Intern",
  },
  {
    icon: FaUsers,
    title: "Leadership",
    value: "FYP Project Leader",
  },
]

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Python",
      "Flask",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];


export const projects = [
  {
    title: "AI-Powered Construction Cost Estimator (FYP)",
    image: "/projects/fyp.png",
    description:
      "A full-stack AI-powered web application for predicting construction costs and project durations with report generation features.",
    technologies: [
      "React",
      "Bootstrap",
      "Python",
      "Flask",
      "MySQL",
    ],
    features: [
      "Built responsive frontend interface using React and Bootstrap.",
      "Developed Flask backend API for prediction logic and data processing.",
      "Integrated MySQL database for managing project data.",
      "Implemented multi-input support and PDF report generation.",
    ],
    github: "https://github.com/waris-072/construction-cost-estimator-fyp",
    demo: "https://construction-estimationss.netlify.app",
  },

  {
    title: "MERN Stack Todo Application",
    image: "/projects/mern-todo.png",
    description:
      "A full-stack task management application built with the MERN stack featuring complete CRUD operations.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
    features: [
      "Implemented complete CRUD functionality.",
      "Created task filtering for All, Completed, and Pending tasks.",
      "Connected React frontend with Express and MongoDB backend.",
    ],
    github: "https://github.com/waris-072/mern-todo-app",
    demo: "https://merntodoss.netlify.app",
  },

  {
    title: "Daily News - React News Aggregator",
    image: "/projects/daily-news.png",
    description:
      "A React-based news application that fetches and displays real-time news from multiple categories.",
    technologies: [
      "React",
      "JavaScript ES6+",
      "CSS3",
      "News API",
    ],
    features: [
      "Integrated News API for dynamic content.",
      "Implemented category browsing and search functionality.",
      "Developed responsive user interface.",
    ],
    github: "https://github.com/waris-072/dailynews-react-app",
    demo: "https://dailynewsapis.netlify.app",
  },

  {
    title: "Core Boards - Task Management Dashboard",
    image: "/projects/dashboard.png",
    description:
      "A responsive task management dashboard with CRUD operations, filtering, and API integrations.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "LocalStorage",
    ],
    features: [
      "Built modular React-based dashboard architecture.",
      "Implemented task filtering and state management.",
      "Integrated weather and quote APIs.",
    ],
    github: "https://github.com/waris-072/task-dashboard-js",
    demo: "https://coreboards.netlify.app",
  },

  {
    title: "Notes Application",
    image: "/projects/notes.png",
    description:
      "A client-side notes application with persistent storage and authentication flow simulation.",
    technologies: [
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "LocalStorage",
    ],
    features: [
      "Implemented notes persistence using LocalStorage.",
      "Created clean dashboard interface.",
      "Developed login/logout simulation.",
    ],
    github: "https://github.com/waris-072/notes-app",
    demo: "https://notes-apps-js.netlify.app",
  },

  {
    title: "Portfolio Website (Version 1)",
    image: "/projects/portfolio.png",
    description:
      "My first personal portfolio website built to showcase projects, skills, and frontend development journey.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage",
    ],
    features: [
      "Built modular React components.",
      "Implemented dark/light theme preference.",
      "Created responsive portfolio layout.",
    ],
    github: "https://github.com/waris-072/my_portfolio",
    demo: "https://waris-072.github.io/my_portfolio/",
  },
];


export const certificates = [
  {
    title: "Web Development Internship",
    organization: "Digital Empowerment Network",
  },
  {
    title: "AI literacy",
    organization: "IBM SkillsBuild",
  },
  {
    title: "Web Development Fundamentals",
    organization: "IBM Skillsbuild",
  },
  {
    title: "React Essential Training",
    organization: "LinkedIn Learning",
  },
  {
    title: "HTTP Essential Training",
    organization: "LinkedIn Learning",
  },
  {
    title: "Getting Started with ReactJS Components",
    organization: "Simplilearn SkillUp",
  },
  {
    title: "Generative AI for Beginners",
    organization: "Simplilearn SkillUp",
  },
];


export const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/waris-072",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/waris-hakro-webdev",
  },
  {
    name: "Email",
    icon: "email",
    url: "mailto:warishakrow3@gmail.com",
  },
];

export const navLinks = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Certificates",
    path: "#certificates",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];