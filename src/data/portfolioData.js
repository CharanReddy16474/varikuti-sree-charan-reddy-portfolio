// ============================================================
// portfolioData.js
// This file controls ALL the text, links, and content for the portfolio.
// ============================================================

export const personalInfo = {
  name: "Varikuti Sree Charan Reddy",
  firstName: "Varikuti Sree Charan Reddy",
  brandName: "Varikuti Sree Charan Reddy",
  title: "Java Full Stack Developer",
  location: "Nellore, India",
  phone: "+917674866214",
  emails: {
    primary: "vscreddy16@gmail.com",
    secondary: "",
  },
  summary:
    "I’m a Passionate Full Stack Web Developer skilled in Java, Spring Boot, React.js, and MySQL, dedicated to building responsive web applications and efficient backend solutions.",
  resumeUrl: "/Resume.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/CharanReddy16474",
  linkedin: "https://www.linkedin.com/in/varikuti-sree-charan-reddy-2b8821266/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Varikuti Sree Charan Reddy",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate Full Stack Developer specializing in Java, Spring Boot, React.js, and MySQL, building responsive web apps and scalable backends.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:vscreddy16@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: {
    text: "Request Resume",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=vscreddy16@gmail.com&su=Resume%20Request%20%E2%80%93%20Varikuti%20Sree%20Charan%20Reddy&body=Hello%20Charan,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20request%20a%20copy%20of%20your%20latest%20resume.%0D%0A%0D%0AThank%20you,%0D%0A",
  },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Varikuti Sree Charan Reddy</span>, a passionate Full Stack Web Developer based in Nellore, India, currently sharpening my skills through the placement training program at TAP Academy. I specialize in building responsive web applications with React.js and developing robust backend services using Java, Spring Boot, and MySQL. Driven by problem-solving, logical thinking, and adaptability, my goal is to engineer high-impact software solutions and continuously grow my technical expertise.`,
  techStack: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured, end-to-end engineering approach to deliver robust and scalable software solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze project requirements, study user workflows, and outline technical architecture and data schemas.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect clean database structures in MySQL, design secure RESTful APIs, and plan intuitive UI components.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Build modern frontends with React and robust, maintainable backend services with Java and Spring Boot.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test API endpoints thoroughly with Postman, manage version control via Git/GitHub, and ship production builds.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "SQL" }],
    },
    {
      title: "Frameworks & Web",
      skills: [
        { name: "Spring Boot" },
        { name: "Hibernate" },
        { name: "React.js" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "IntelliJ IDEA" },
        { name: "Postman" },
        { name: "MySQL Workbench" },
        { name: "Agile / Scrum" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "PESCE Technical Symposium & Coding Forum",
    role: "Technical Coordinator",
    badge: "Campus Leadership",
    description:
      "Organized technical workshops and coding competitions on Java and web technologies for over 150+ students.",
  },
  {
    title: "Full Stack Peer Mentorship Community",
    role: "Lead Peer Mentor",
    badge: "Mentorship",
    description:
      "Conducted hands-on sessions guiding junior peers in object-oriented programming, Spring Boot REST APIs, and frontend development.",
  },
];

export const internshipsList = [
  {
    organization: "EduSkills",
    role: "Java Full Stack Developer Intern",
    duration: "January 2026 - March 2026",
    skills: [
      "Frontend, backend, database, and full-stack web application development",
      "Object-oriented programming and core Java concepts applied to backend systems",
      "REST API design, MVC architecture, debugging, and application testing",
    ],
    tech: ["Java", "Spring Boot", "JavaScript", "HTML", "CSS", "SQL", "REST APIs"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Deconstruct complex business requirements into logical, efficient algorithmic solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Examine system architectures, data flows, and database queries for maximum performance.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Rapidly master emerging frameworks, tools, and technologies in fast-paced environments.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritize features, plan development sprints, and deliver quality code within deadlines.",
  },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "NearBuy – Hyperlocal E-Commerce Web Platform",
    description:
      "A location-based e-commerce platform connecting customers with nearby retail clothing stores. Features shop management, categorized catalogs (Men, Women, Kids), and Spring Boot REST APIs with MySQL integration for cart operations.",
    techTags: ["React.js", "Java", "Spring Boot", "MySQL", "JavaScript", "HTML5", "CSS3"],
    links: { github: "https://github.com/CharanReddy16474", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Expense Management System",
    description:
      "A personal finance application to record, categorize, update, and track expenditures. Includes REST APIs for CRUD operations, date-range filtering, interactive summary dashboards, and JWT authentication with Spring Security.",
    techTags: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "REST APIs",
    ],
    links: { github: "https://github.com/CharanReddy16474", demo: "" },
    isFlagship: false,
  },
  {
    id: "project-three",
    number: "03",
    badge: null,
    title: "StudentHub – Secure Student Management System",
    description:
      "A secure student management and course enrollment platform featuring role-based dashboards, BCrypt password hashing, CSRF protection with Spring Security, and validation for semester eligibility.",
    techTags: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
    ],
    links: { github: "https://github.com/CharanReddy16474", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/varikuti-sree-charan-reddy-2b8821266/",
};

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "PES College of Engineering, Mandya",
  cgpa: "9.1 CGPA",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · React.js · MySQL",
    "Engineering scalable and responsive web applications",
  ],
  credential: "B.E. Computer Science — PES College of Engineering",
  copyright: `© ${new Date().getFullYear()} Varikuti Sree Charan Reddy | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

