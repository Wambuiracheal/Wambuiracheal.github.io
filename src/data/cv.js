// Single source of truth for all portfolio content.
// Edit values here and every section updates automatically.

export const personal = {
  name: 'Racheal Wambui Njuguna',
  title: 'Software Engineer',
  subtitle: 'Fullstack Developer specializing in Frontend Development',
  location: 'Nairobi, Kenya',
  phone: '0707813711',
  email: 'rachealnjugush@gmail.com',
  address: 'P.O. Box 454, Kalimoni',
  linkedin: 'https://linkedin.com/in/rachealnjugunatech',
  github: 'https://github.com/Wambuiracheal',
}

export const summary =
  'Fullstack Software Engineer with a strong specialization in Frontend Development, and hands-on experience across backend development, IT support, network administration, and technical documentation. Skilled in building responsive, production-grade web applications with React, Vue, JavaScript/TypeScript, and Tailwind CSS, integrating REST APIs and WebSockets, and working across PHP/Laravel, Node.js/Express.js, and Python/Flask on the backend. Experienced in Agile teams, code reviews, CI/CD, and cross-functional collaboration with design, product, QA, and engineering stakeholders. Brings additional depth from IT support, networking, and cybersecurity awareness, and a consistent record of quickly learning new languages, frameworks, and tools.'

// Compact highlight stats shown under the hero.
export const stats = [
  { value: '2+', label: 'Years in tech' },
  { value: '7', label: 'Shipped projects' },
  { value: '6', label: 'Roles across the stack' },
  { value: '1', label: 'Best Female Innovator award' },
]

export const skills = [
  {
    group: 'Languages',
    icon: 'code',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Go', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    group: 'Frontend',
    icon: 'layout',
    items: [
      'React',
      'Vue',
      'Nuxt',
      'Tailwind CSS',
      'Flexbox / Grid',
      'Responsive & cross-browser design',
    ],
  },
  {
    group: 'Backend',
    icon: 'server',
    items: ['Laravel (PHP)', 'Express.js (Node.js)', 'Flask (Python)'],
  },
  {
    group: 'APIs & Realtime',
    icon: 'bolt',
    items: ['REST API design & integration', 'WebSockets', 'PASETO authentication'],
  },
  {
    group: 'Databases & State',
    icon: 'database',
    items: [
      'MySQL',
      'MySQL Workbench',
      'PostgreSQL',
      'SQLite',
      'Redis',
      'Zustand (state management)',
    ],
  },
  {
    group: 'Testing & Tooling',
    icon: 'wrench',
    items: ['Postman', 'Git', 'GitHub', 'GitLab', 'Agile / SDLC', 'CI/CD', 'Code reviews'],
  },
  {
    group: 'Design & Prototyping',
    icon: 'pen',
    items: [
      'Figma (Dev Mode, Auto Layout, design tokens, component libraries, responsive breakpoints, interactive prototyping)',
      'Canva (design & video editing)',
    ],
  },
  {
    group: 'IT Support & Networking',
    icon: 'network',
    items: [
      'Hardware / software installation & troubleshooting',
      'Printer / peripheral maintenance',
      'Wi-Fi access points, routers, switches',
      'Linux & Windows administration',
      'POS system installation, configuration & troubleshooting',
    ],
  },
  {
    group: 'Documentation',
    icon: 'doc',
    items: ['Docusaurus', 'Markdown', 'Technical / API documentation', 'Admin & user guides'],
  },
  {
    group: 'Security',
    icon: 'shield',
    items: ['Cybersecurity awareness', 'IT policy compliance', 'Data backup & recovery'],
  },
]

export const experience = [
  {
    role: 'Junior Frontend Developer & Support Engineer',
    company: 'Roamtech Solutions Limited',
    location: 'Nairobi, Kenya',
    start: 'Sep 2025',
    end: 'Present',
    type: 'Full-time',
    note: 'Promoted to full-time following a 6-month internship (Mar 2025 – Aug 2025).',
    highlights: [
      'Translate complex UI/UX designs into responsive, pixel-perfect frontend code using React, JavaScript, and Tailwind CSS, delivering seamless experiences across desktop and mobile.',
      'Provide first-line and tier-2/3 technical support, troubleshooting client-facing systems and resolving queries promptly to maintain high availability and service satisfaction.',
      'Integrate and maintain multi-channel messaging solutions across SMS, WhatsApp, Email, Bots, and interactive surveys, including Kannel gateway configuration and Sender ID mapping.',
      'Build and consume REST APIs to integrate frontend interfaces with backend and third-party messaging services.',
      'Installed and configured POS terminals and software, set up POS integrations (payments, printers), troubleshot hardware/software issues, and trained staff and clients on POS system use.',
      'Contribute to CI/CD-supported deployments and on-prem to Google Cloud Platform (GCP) migrations, working with Docker and Kubernetes to support scalable infrastructure.',
      'Collaborate cross-functionally with product, operations, and engineering teams within an Agile workflow, participating in code reviews, sprint planning, stand-ups, and retrospectives.',
      'Document technical issues, resolutions, and support activity to maintain accurate records and consistent service quality.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Roamtech Solutions Limited',
    location: 'Nairobi, Kenya',
    start: 'Mar 2025',
    end: 'Aug 2025',
    type: 'Internship',
    note: null,
    highlights: [
      "Onboarded onto the engineering team, learning the company's frontend codebase, messaging product suite, and support processes.",
      'Assisted with translating UI/UX designs into frontend code and provided early-stage tier-1/2 client technical support under senior guidance.',
    ],
  },
  {
    role: 'Software Documentation & Product Marketing Intern',
    company: 'Clinical Data Management Solutions',
    location: null,
    start: 'Jun 2024',
    end: 'Sep 2024',
    type: 'Internship',
    note: null,
    highlights: [
      'Authored and organized technical software documentation over a 4-month internship using Docusaurus and Markdown, improving content readability and navigation for end-users.',
      'Supported product marketing initiatives by crafting clear, accessible written materials to bridge technical concepts with user-facing communication.',
      'Collaborated with engineering and marketing teams to ensure documentation was accurate, up to date, and aligned with product messaging goals.',
    ],
  },
  {
    role: 'Backend & Frontend Developer, IT Support Assistant',
    company: 'Qwarqo Properties',
    location: null,
    start: 'May 2023',
    end: 'Aug 2023',
    type: 'Attachment',
    note: null,
    highlights: [
      'Engineered and developed backend logic and web applications using PHP and the Laravel framework.',
      'Maintained web systems by upgrading UI elements, refining layout designs, and optimizing backend performance for faster load times.',
      'Refactored existing PHP/Laravel codebases to improve readability, application architecture, and long-term maintainability.',
    ],
  },
  {
    role: 'Clerk',
    company: 'Independent Electoral and Boundaries Commission',
    location: 'Kenya',
    start: 'Aug 2022',
    end: 'Aug 2022',
    type: 'Temporary',
    note: null,
    highlights: [
      'Verified voter identities and assigned polling stations using KIEMS kits.',
      'Maintained security and chain of custody for critical election materials.',
      'Conducted accurate sorting, counting, and reconciliation of cast votes to uphold electoral integrity.',
    ],
  },
  {
    role: 'Cyber Manager (IT & Network Support)',
    company: 'Sadik Networks',
    location: null,
    start: 'Mar 2020',
    end: 'Sep 2020',
    type: 'Full-time',
    note: null,
    highlights: [
      'Provided comprehensive technical support to end-users, managing Linux and Windows OS environments and configuring workstation peripherals (printers / scanners).',
      'Configured, deployed, and maintained local network infrastructure, including Wi-Fi access points, routers, switches, and network hardware setup.',
      'Independently assembled, configured, and maintained custom PC hardware, conducting routine diagnostics, component upgrades, and hardware repairs.',
      'Applied systematic diagnostic techniques to identify and resolve complex OS, hardware, and network connectivity problems, maintaining high user satisfaction.',
    ],
  },
]

export const projects = [
  {
    name: 'PayKit Merchant Portal',
    description:
      'Frontend for a fintech merchant payments dashboard — dashboard analytics, transaction history, funds transfer, bill payments (Lipa Bidhaa), bulk payments, company profile management, and role-based user access with a developer / API tools section.',
    url: 'https://merchant-portal.paykit.africa',
    tech: ['React', 'REST APIs'],
    status: null,
    featured: true,
  },
  {
    name: 'Betiwa',
    description:
      'React / TypeScript frontend for a betting platform with real-time WebSocket updates and authentication. Adopted TypeScript specifically for this project.',
    url: 'https://uat.betiwa.com',
    tech: ['React', 'TypeScript', 'WebSockets'],
    status: null,
    featured: true,
  },
  {
    name: 'Emalify Business',
    description: 'Frontend for a communication / messaging platform for businesses.',
    url: 'https://business.emalify.com/',
    tech: ['React'],
    status: null,
    featured: true,
  },
  {
    name: 'Laundry App',
    description: 'On-demand laundry service platform.',
    url: 'https://github.com/Wambuiracheal/laundry-app',
    tech: ['React', 'Express.js', 'Redis'],
    status: 'In progress',
    featured: false,
  },
  {
    name: 'Art Gallery Management System',
    description:
      'Fullstack artwork / CRUD management system with database flexibility across multiple relational databases; APIs tested via Postman.',
    url: null,
    tech: ['Flask', 'React', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'MySQL', 'SQLite'],
    status: null,
    featured: false,
  },
  {
    name: 'Grief Support Management System',
    description:
      'Compass Through Grief — articles, counsellor booking, and an online community for people navigating grief.',
    url: null,
    tech: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript'],
    status: null,
    featured: false,
  },
  {
    name: 'Tiketi Tamasha',
    description:
      'Event management system streamlining event operations. Recognized with the Best Female Innovator award (ICT Authority of Kenya & Co-operative University, Mar 2024).',
    url: null,
    tech: ['Event platform'],
    status: 'Award-winning',
    featured: false,
  },
]

export const education = [
  {
    degree: 'Certificate in Software Engineering (Full-Stack)',
    institution: 'Moringa School',
    start: '2024',
    end: '2025',
    details:
      'Frontend Development: HTML, CSS, JavaScript, React. Backend Development: Python, Flask, database management.',
  },
  {
    degree: 'B.Sc. Information Technology',
    institution: 'The Co-operative University of Kenya',
    start: '2019',
    end: '2024',
    details:
      'Foundation in software development, databases, networking, cybersecurity, data science, and information systems.',
  },
]

export const certifications = [
  { name: 'Cybersecurity and Emerging Technologies Awareness Training', issuer: null, status: 'Completed' },
  { name: 'AI for Business', issuer: 'Udemy', status: 'Completed' },
]

// Certificate documents shown as viewable cards in the Certificates section.
// Files live in /public — image certs render as thumbnails, PDFs as a doc card.
export const certificates = [
  { title: 'AI for Business', issuer: 'Udemy', file: 'ai-for-business-udemy.pdf', type: 'pdf' },
  { title: 'Go (Golang) Programming', issuer: 'Udemy', file: 'golang-cert-udemy.jpg', type: 'image' },
  { title: 'Linux Commands', issuer: null, file: 'linux-commands.jpg', type: 'image' },
  { title: 'RabbitMQ', issuer: null, file: 'rabbitmq-cert.jpg', type: 'image' },
  { title: 'Site Reliability Engineering (SRE)', issuer: null, file: 'sre-cert.jpg', type: 'image' },
]

export const awards = [
  {
    name: 'Best Female Innovator',
    issuer: 'ICT Authority of Kenya & Co-operative University',
    date: 'Mar 2024',
    context: 'Awarded for contributions to Tiketi Tamasha, an event management system.',
  },
]

export const references = [
  {
    name: "Edwin Ng'ang'a Ruhiu",
    role: 'Head of Development, Payless',
    email: 'ruhiuedwin1@gmail.com',
    phone: '0725122088',
  },
  {
    name: 'Zablon Gakere',
    role: 'Senior Infrastructure Engineer, Gravity Africa Limited',
    email: 'zablongakere@gmail.com',
    phone: '0704376062',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]
