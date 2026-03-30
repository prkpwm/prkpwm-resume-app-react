import type { ResumeData } from '../types/resume';
import logoTrue from '../assets/true.jpg';
import logoTisco from '../assets/tisco.jpg';
import logoItopplus from '../assets/logoitopplus.png';
import logoGridwhiz from '../assets/gridwhiz.png';

export const resumeData: ResumeData = {
  name: 'PAKPOOM\nSRISEN',
  title: 'SENIOR FULL-STACK\nDEVELOPER',
  contact: {
    email: 'prkpwm@gmail.com',
    phone: '(+66) 95-187-2661',
    website: 'https://resume-prkpwm.web.app',
    linkedin: 'linkedin.com/in/prkpwm',
    location: 'Ratchathewi, Bangkok, Thailand',
  },
  summary:
    'Senior Full-Stack Developer with 5 years of experience building scalable, high-performance applications using Angular, Go, and Node.js. Provides technical leadership across the software development lifecycle, from architecture and estimation to delivery execution. Skilled at aligning business objectives with technical solutions in fast-paced Agile environments.',
  skills: [
    { category: 'Programming Languages', items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Java'] },
    { category: 'Frameworks & Libraries', items: ['Angular', 'Node.js', 'NestJS', 'ReactJS', 'GraphQL', 'TailwindCSS'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Git', 'CI/CD', 'Nginx', 'Splunk', 'Rundeck', 'Robot Framework', 'Jest'] },
  ],
  competencies: [
    { category: 'Languages', items: ['Angular / TypeScript / JavaScript', 'Go / Node.js / Python', 'HTML5 / CSS3 / TailwindCSS'] },
    { category: 'Frameworks & Libraries', items: ['Angular 1, 14–20 / NestJS', 'ReactJS / GraphQL / EJS', 'Robot Framework / Jest'] },
    { category: 'Databases', items: ['MySQL / PostgreSQL / MongoDB'] },
    { category: 'DevOps & Tools', items: ['Docker / Kubernetes / Jenkins', 'AWS / Git / CI/CD / Nginx', 'Splunk / Rundeck / Jasper'] },
  ],
  strengths: [
    { title: 'Technical Leadership', description: 'Lead cross-functional teams, estimation, planning, and delivery.', icon: '👥' },
    { title: 'Scalable System Design', description: 'Build high-performance, maintainable, and secure applications.', icon: '⚡' },
    { title: 'Agile Execution', description: 'Drive development in Agile/Scrum with predictable delivery.', icon: '🔄' },
    { title: 'Ownership & Collaboration', description: 'Align business goals with technical solutions.', icon: '🤝' },
  ],
  experience: [
    {
      title: 'Senior Full-Stack Developer',
      company: 'True Corporation Public Co., Ltd.',
      location: 'Bangkok, Thailand',
      type: 'Outsource',
      period: 'May 2025 – Present',
      bullets: [
        'Lead full-stack development using Golang, Angular 1 & 18–20 for enterprise-scale applications.',
        'Architect and deliver RESTful APIs & WebSocket services; manage PostgreSQL, MySQL, MongoDB.',
        'Orchestrate containerized deployments via Docker & Kubernetes with CI/CD pipeline integration.',
        'Drive Agile ceremonies: sprint planning, stand-ups, estimation, capacity planning & code reviews.',
        'Mentor and manage developers; oversee task allocation, delivery timelines, and quality standards.',
      ],
      tech: ['Angular', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Go', 'Node.js', 'Python', 'Robot Framework', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
      logo: logoTrue,
    },
    {
      title: 'Full Stack Developer',
      company: 'TISCO Financial Group Public Co., Ltd.',
      location: 'Bangkok, Thailand',
      type: 'Outsource',
      period: 'May 2023 – Apr 2025 (2 years)',
      bullets: [
        'Built Angular 14–15 frontends with TypeScript, HTML5, CSS3; backend services in Node.js, Python, Scala, Java & Go.',
        'Integrated SQL & MongoDB; ensured quality via unit testing, security testing & performance optimization.',
        'Deployed to SIT, UAT & Production; collaborated in Agile/Scrum for on-schedule incremental delivery.',
      ],
      tech: ['Angular', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Node.js', 'NestJS', 'Scala', 'Java', 'Go', 'SQL', 'MongoDB', 'Jenkins', 'Splunk', 'Rundeck', 'Robot Framework', 'Jest', 'Jasper'],
      logo: logoTisco,
    },
    {
      title: 'Mid-Level Full Stack Web Developer',
      company: 'ITOPPLUS Co., Ltd.',
      location: 'Bangkok, Thailand',
      type: 'Permanent',
      period: 'Dec 2021 – Apr 2023 (1 Year 5 Months)',
      bullets: [
        'Developed Angular 14–15 frontend features with TypeScript & EJS; backend via Node.js & GraphQL.',
        'Managed MongoDB & MySQL data layers; enhanced scalability, security & system performance.',
        'Implemented automated testing with Robot Framework & Jest to improve code reliability.',
      ],
      tech: ['Angular', 'TypeScript', 'TailwindCSS', 'Node.js', 'GraphQL', 'EJS', 'MongoDB', 'MySQL', 'Robot Framework', 'Jest', 'Git', 'Docker', 'CI/CD', 'Nginx', 'C#', 'HTML5', 'CSS3'],
      logo: '/src/assets/logoitopplus.png',
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'GridWhiz (Thailand) Co., Ltd.',
      location: 'Bangkok, Thailand',
      type: 'Permanent',
      period: 'Jun 2021 – Nov 2021 (6 Months)',
      bullets: [
        'Built ReactJS frontends and Python/Go backends for AI, IoT & Big Data platforms.',
        'Leveraged computer vision (OpenCV, YOLO) and machine learning for intelligent web solutions.',
      ],
      tech: ['ReactJS', 'JavaScript', 'Python', 'Go', 'OpenCV', 'Yolo', 'MongoDB', 'Flask', 'Git', 'Docker', 'Nginx', 'HTML5', 'CSS3'],
      logo: '/src/assets/gridwhiz.png',
    },
  ],
  achievements: [
    { title: 'Led Cross-Functional Teams', description: 'Successfully led multiple Agile teams to deliver enterprise-level solutions on time and within scope.', icon: '👥' },
    { title: 'Built Scalable Real-Time Systems', description: 'Designed and developed high-performance applications supporting REST APIs and WebSocket communication.', icon: '⚡' },
    { title: 'Improved Delivery Efficiency', description: 'Implemented structured estimation and planning processes that increased team throughput and predictability.', icon: '📈' },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    school: "King Mongkut's University of Technology North Bangkok",
    period: '2017 – 2021',
  },
};
