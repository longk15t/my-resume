export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Tool {
  name: string;
  icon: string;
  category: string;
}

export const personalInfo = {
  name: 'Long (Goldie) Tran',
  title: 'Senior QA Engineer',
  tagline: 'Crafting quality through automation, one test at a time.',
  summary: `Dedicated Senior QA Engineer with 7+ years of experience in designing and implementing robust test automation frameworks across web, mobile, and API platforms. Passionate about building scalable CI/CD pipelines, improving release quality, and mentoring engineering teams on best QA practices. Proven track record of reducing regression cycles by 70%+ and achieving 95%+ test coverage on critical business flows.`,
  email: 'longk15t@gmail.com',
  phone: '+84916356243',
  location: 'Ho Chi Minh City, Vietnam',
  github: 'https://github.com/longk15t',
  linkedin: 'https://www.linkedin.com/in/longk15t/',
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TechVista Solutions',
    role: 'Senior QA Automation Engineer',
    duration: 'Jan 2022 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Led QA automation initiatives for a SaaS platform serving 2M+ users, building comprehensive E2E and API testing frameworks.',
    highlights: [
      'Architected a Playwright-based E2E framework from scratch, achieving 95% coverage across 200+ critical user flows',
      'Reduced regression test execution time from 4 hours to 45 minutes through parallel test execution and smart test selection',
      'Implemented visual regression testing with Percy, catching 150+ UI bugs before production release',
      'Mentored a team of 5 junior QA engineers, establishing coding standards and review processes',
      'Integrated automated tests into CI/CD pipeline using GitHub Actions, reducing release cycle from 2 weeks to 3 days',
    ],
    technologies: ['Playwright', 'TypeScript', 'GitHub Actions', 'Percy', 'Jest', 'Docker', 'AWS'],
  },
  {
    id: 2,
    company: 'DataStream Analytics',
    role: 'QA Automation Engineer',
    duration: 'Mar 2020 – Dec 2021',
    location: 'Singapore (Remote)',
    description: 'Built and maintained test automation suites for a real-time data analytics platform handling 50M+ events daily.',
    highlights: [
      'Developed Cypress-based testing framework for React/Next.js web application with 85% code coverage',
      'Created API automation suite using Supertest and Axios covering 300+ REST endpoints',
      'Designed performance testing strategy using k6, identifying 12 critical bottlenecks pre-launch',
      'Built custom test data generation tools reducing test setup time by 60%',
      'Established BDD practices using Cucumber.js, improving collaboration between QA and product teams',
    ],
    technologies: ['Cypress', 'TypeScript', 'Supertest', 'k6', 'Cucumber.js', 'Jenkins', 'PostgreSQL'],
  },
  {
    id: 3,
    company: 'MobileFirst Inc.',
    role: 'QA Engineer',
    duration: 'Jun 2018 – Feb 2020',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Managed quality assurance for cross-platform mobile applications used by 500K+ active users.',
    highlights: [
      'Implemented Appium-based mobile automation framework supporting iOS and Android platforms',
      'Reduced manual regression testing effort by 70% through strategic test automation',
      'Built Selenium WebDriver framework for web admin portal with Page Object Model pattern',
      'Created comprehensive test plans and test cases for 15+ feature releases',
      'Collaborated with DevOps team to set up automated test execution in GitLab CI pipeline',
    ],
    technologies: ['Appium', 'Selenium', 'Java', 'TestNG', 'GitLab CI', 'Postman', 'Jira'],
  },
  {
    id: 4,
    company: 'WebCraft Studio',
    role: 'Junior QA Engineer',
    duration: 'Aug 2016 – May 2018',
    location: 'Da Nang, Vietnam',
    description: 'Started QA career performing manual and exploratory testing for e-commerce web applications.',
    highlights: [
      'Executed 1000+ manual test cases across 3 concurrent projects',
      'Transitioned team from manual to automated testing, building first Selenium test suite',
      'Developed Postman collections for API testing covering 100+ endpoints',
      'Created detailed bug reports and collaborated with developers on issue resolution',
      'Earned ISTQB Foundation Level certification within first year',
    ],
    technologies: ['Selenium', 'Python', 'Postman', 'MySQL', 'Jira', 'TestRail'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AutoFrame Pro',
    description: 'Open-source test automation framework combining Playwright with custom reporting, parallel execution, and smart retry mechanisms. Used by 50+ companies worldwide.',
    technologies: ['Playwright', 'TypeScript', 'Node.js', 'Allure Reports', 'Docker'],
    highlights: [
      '1.2K+ GitHub stars',
      'Custom HTML report generator',
      'Parallel execution across browsers',
      'Slack/Teams integration for alerts',
    ],
    category: 'Framework',
  },
  {
    id: 2,
    title: 'API Guardian',
    description: 'Comprehensive API testing toolkit with schema validation, contract testing, and automated documentation verification. Supports REST and GraphQL.',
    technologies: ['TypeScript', 'Supertest', 'Ajv', 'GraphQL', 'Pact'],
    highlights: [
      'Contract testing with Pact',
      'Auto-generated API coverage reports',
      'Schema drift detection',
      'Performance baseline tracking',
    ],
    category: 'API Testing',
  },
  {
    id: 3,
    title: 'Visual Sentinel',
    description: 'AI-powered visual regression testing tool that detects UI inconsistencies across browsers, devices, and themes with smart diff algorithms.',
    technologies: ['Python', 'OpenCV', 'Playwright', 'React', 'FastAPI'],
    highlights: [
      'AI-based diff detection',
      'Multi-browser comparison',
      'Responsive design validation',
      'Dashboard for review workflows',
    ],
    category: 'Visual Testing',
  },
  {
    id: 4,
    title: 'PerfPulse',
    description: 'Real-time performance monitoring and load testing platform with customizable dashboards and automated alerting for web application performance metrics.',
    technologies: ['k6', 'Grafana', 'InfluxDB', 'Node.js', 'React'],
    highlights: [
      'Real-time performance dashboards',
      'Automated load test scheduling',
      'Historical trend analysis',
      'Custom threshold alerting',
    ],
    category: 'Performance',
  },
  {
    id: 5,
    title: 'TestData Factory',
    description: 'Intelligent test data generation engine that creates realistic, consistent test datasets with relationship awareness and GDPR-compliant masking.',
    technologies: ['TypeScript', 'Faker.js', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      'Relationship-aware data generation',
      'GDPR-compliant data masking',
      'Seed-based reproducibility',
      'Multi-database support',
    ],
    category: 'Test Data',
  },
  {
    id: 6,
    title: 'CI/CD Quality Gate',
    description: 'GitHub Actions workflow templates and quality gate configurations that enforce test coverage, code quality, and security checks before deployment.',
    technologies: ['GitHub Actions', 'Docker', 'SonarQube', 'Trivy', 'Bash'],
    highlights: [
      'Reusable workflow templates',
      'Coverage threshold enforcement',
      'Security scanning integration',
      'Deployment approval gates',
    ],
    category: 'DevOps',
  },
];

export const skills: Skill[] = [
  // Test Automation
  { name: 'Playwright', level: 95, category: 'Test Automation' },
  { name: 'Cypress', level: 90, category: 'Test Automation' },
  { name: 'Selenium WebDriver', level: 85, category: 'Test Automation' },
  { name: 'Appium', level: 75, category: 'Test Automation' },
  { name: 'TestCafe', level: 70, category: 'Test Automation' },

  // Programming
  { name: 'TypeScript', level: 92, category: 'Programming' },
  { name: 'JavaScript', level: 90, category: 'Programming' },
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'Java', level: 72, category: 'Programming' },
  { name: 'SQL', level: 78, category: 'Programming' },

  // API & Performance
  { name: 'REST API Testing', level: 93, category: 'API & Performance' },
  { name: 'GraphQL Testing', level: 78, category: 'API & Performance' },
  { name: 'k6 Load Testing', level: 82, category: 'API & Performance' },
  { name: 'Postman/Newman', level: 90, category: 'API & Performance' },

  // CI/CD & DevOps
  { name: 'GitHub Actions', level: 88, category: 'CI/CD & DevOps' },
  { name: 'Jenkins', level: 80, category: 'CI/CD & DevOps' },
  { name: 'Docker', level: 82, category: 'CI/CD & DevOps' },
  { name: 'GitLab CI', level: 78, category: 'CI/CD & DevOps' },
];

export const tools: Tool[] = [
  { name: 'VS Code', icon: '💻', category: 'IDE' },
  { name: 'Git', icon: '🔀', category: 'Version Control' },
  { name: 'Jira', icon: '📋', category: 'Project Management' },
  { name: 'Confluence', icon: '📝', category: 'Documentation' },
  { name: 'Slack', icon: '💬', category: 'Communication' },
  { name: 'Docker', icon: '🐳', category: 'Containerization' },
  { name: 'Postman', icon: '📮', category: 'API Testing' },
  { name: 'Charles Proxy', icon: '🔍', category: 'Network Debugging' },
  { name: 'BrowserStack', icon: '🌐', category: 'Cross-Browser Testing' },
  { name: 'Allure', icon: '📊', category: 'Reporting' },
  { name: 'Grafana', icon: '📈', category: 'Monitoring' },
  { name: 'SonarQube', icon: '🛡️', category: 'Code Quality' },
  { name: 'TestRail', icon: '🧪', category: 'Test Management' },
  { name: 'Figma', icon: '🎨', category: 'Design Reference' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
];

export const certifications = [
  'ISTQB Foundation Level',
  'ISTQB Advanced Level - Test Automation Engineer',
];

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Science, VNU-HCM',
  year: '2012 – 2016',
  gpa: '3.6 / 4.0',
};
