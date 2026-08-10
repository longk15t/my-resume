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
  categories: string[];
  liveDemoUrl?: string;
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
  summary: `Dedicated Senior QA Engineer with 10+ years of experience in designing and implementing robust test automation frameworks across web, mobile, and API platforms. Passionate about building scalable CI/CD pipelines, improving release quality, and mentoring engineering teams on best QA practices. Proven track record of reducing regression cycles by 70%+ and achieving 95%+ test coverage on critical business flows.`,
  email: 'longk15t@gmail.com',
  phone: '+84916356243',
  location: 'Ho Chi Minh City, Vietnam',
  github: 'https://github.com/longk15t',
  linkedin: 'https://www.linkedin.com/in/longk15t/',
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Mantel Group',
    role: 'Senior QA Engineer',
    duration: 'June 2025 – Present',
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
    company: 'Capgemini',
    role: 'Senior Consultant',
    duration: 'March 2021 – May 2025',
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
    id: 3,
    company: 'PYCOGroup',
    role: 'Senior Automation Engineer',
    duration: 'March 2019 – December 2020',
    location: 'Ho Chi Minh City, Vietnam',
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
    id: 4,
    company: 'FPT Software',
    role: 'Automation Test Engineer',
    duration: 'May 2018 – March 2019',
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
    id: 5,
    company: 'Personify Inc',
    role: 'Junior QA Engineer',
    duration: 'February 2014 – May 2018',
    location: 'Ho Chi Minh City, Vietnam',
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
    title: 'Oktopi',
    description: 'Built API & database automation testing for an AI-informed ecosystem connecting knowledge, workflows, and community to democratize medicine development.',
    technologies: ['TypeScript', 'Supertest', 'MongoDB'],
    highlights: [
      'Automated REST API validation for critical business workflows',
      'Built database-backed regression checks for data integrity and consistency',
      'Improved confidence in release validation for complex AI-enabled services',
    ],
    categories: ['API Testing', 'Database', 'CI/CD'],
    liveDemoUrl: 'https://www.oktopi.com/',
  },
  {
    id: 2,
    title: 'Pepperstone OTR',
    description: 'Built and maintained E2E automation test framework for the new onboarding process of Pepperstone.',
    technologies: ['TypeScript', 'Playwright', 'MySQL'],
    highlights: [
      'Automated end-to-end web journeys for onboarding flows and critical user actions',
      'Validated API responses and backend integrations across onboarding scenarios',
      'Verified database-backed workflows to ensure data consistency and release readiness',
    ],
    categories: ['Web Testing', 'API Testing', 'Database', 'CI/CD'],
    liveDemoUrl: 'https://pepperstone.com/',
  },
  {
    id: 3,
    title: 'NAB - IB, MIB',
    description: 'Maintained web, API, and mobile automation test frameworks for the NAB ecosystem.',
    technologies: ['Cypress', 'Axios', 'WebdriverIO', 'Perfecto'],
    highlights: [
      'Implemented and maintained web automation tests by Cypress for core banking journeys and regression coverage',
      'Implemented API validation with Axios for service-level regression and contract checks',
      'Executed mobile test runs on Perfecto for cross-device coverage and release confidence',
    ],
    categories: ['Web Testing', 'API Testing', 'Mobile Testing'],
    liveDemoUrl: 'https://www.nab.com.au/',
  },
  {
    id: 4,
    title: 'Pension',
    description: 'Built and maintained web regression testing for the Netherlands government pension system on the Salesforce platform, supporting critical citizen-facing digital services.',
    technologies: ['Selenium', 'Cucumber', 'Extent Report', 'Salesforce'],
    highlights: [
      'Implemented Java Selenium automation for core web journeys and regression scenarios',
      'Used Cucumber to structure business-readable acceptance tests for complex workflows',
      'Generated detailed Extent Reports to improve visibility for release validation and defect triage',
    ],
    categories: ['Web Testing'],
    liveDemoUrl: 'https://pensioenfondsdetailhandel.nl/',
  },
  {
    id: 5,
    title: 'Stellantis',
    description: 'Supported heavy web regression testing for a France-based used car warranty service built on the Guidewire platform, covering critical customer journeys and policy workflows.',
    technologies: ['Guidewire', 'Selenium', 'Gradle', 'Jenkins'],
    highlights: [
      'Performed both manual and automated web testing for high-impact warranty and claim scenarios',
      'Maintained Java Selenium automation suites and supported daily regression execution through Gradle-based builds',
      'Upheld Jenkins-driven test build maintenance to keep release validation stable and predictable',
    ],
    categories: ['Web Testing'],
    liveDemoUrl: 'https://www.stellantis.com/en',
  },
  {
    id: 6,
    title: 'HSBC FX Lifestyle',
    description: 'Build and develop e2e testing framework for both web + API testing of a foreign exchange conversion system of HSBC, covering core customer-facing currency workflows.',
    technologies: ['Selenium', 'RestAssured', 'Cucumber', 'JMeter'],
    highlights: [
      'Automated web journeys with Selenium and Cucumber for FX conversion and validation flows',
      'Executed API regression and contract checks with Postman and RestAssured',
      'Conducted performance testing with JMeter to validate stability under peak user demand',
    ],
    categories: ['Web Testing', 'API Testing', 'Performance'],
    liveDemoUrl: 'https://www.hsbc.com.vn/foreign-exchange/rate/',
  },
  {
    id: 7,
    title: 'SPIN of MNC Group',
    description: 'Built API testing coverage for a loyalty engagement engine and admin interface that enabled SPIN Pay administrators to create and publish loyalty campaigns for users of the SPIN Pay mobile application.',
    technologies: ['Postman', 'Newman', 'MongoDB'],
    highlights: [
      'Worked primarily as a manual test engineer while focusing heavily on API validation for loyalty workflows',
      'Executed end-to-end API testing with Postman and Newman for campaign creation and publishing scenarios',
      'Coached team members on API testing practices and helped expand automation coverage for critical services',
    ],
    categories: ['API Testing', 'Database', 'Training/Coaching'],
    liveDemoUrl: 'https://www.mncfinancialservices.com/',
  },
  {
    id: 8,
    title: 'Indigo - Financial Service of Jago',
    description: 'Worked as a full-stack test engineer for an e2e financial service platform that included online banking and beyond, offering a seamless registration journey for new accounts through self-KYC, online transfers, and finance management features.',
    technologies: ['Flutter', 'Katalon', 'Groovy', 'Cucumber', 'MongoDB'],
    highlights: [
      'Served as a full-stack test engineer covering end-to-end functional validation across banking journeys',
      'Automated backend scenarios using Katalon and BDD-style test flows for critical business processes',
      'Supported mobile app testing for Flutter-based experiences and validated cross-platform quality',
    ],
    categories: ['API Testing'],
    liveDemoUrl: 'https://www.jago.com',
  },
  {
    id: 9,
    title: 'Ignition Advice',
    description: 'Worked as a senior test engineer on an Australia-based self-service and adviser-assisted platform for retirement and insurance services, focusing on API validation and exploratory web testing for critical user journeys.',
    technologies: ['Postman', 'Cypress', 'JavaScript'],
    highlights: [
      'Maintained and extended the existing API test framework to support business-critical workflows',
      'Performed exploratory web testing for retirement and insurance scenarios with strong attention to user experience',
      'Supported release confidence through structured regression checks and API-focused defect investigation',
    ],
    categories: ['Web Testing', 'API Testing'],
    liveDemoUrl: 'https://discoverignition.com/',
  },
  {
    id: 10,
    title: 'Shahid',
    description: 'Worked as a senior automation QA engineer building an end-to-end test framework for a video-on-demand and leading TV catch-up service with a rich library of Arabic content, supporting both mobile and API quality validation.',
    technologies: ['Katalon', 'Karate BDD', 'Groovy', 'Jenkins', 'Postman'],
    highlights: [
      'Built mobile automation coverage for streaming app journeys using Katalon',
      'Developed API testing frameworks with Karate BDD for backend validation and regression support',
      'Maintained Jenkins-driven test execution workflows to improve release confidence and stability',
    ],
    categories: ['Mobile Testing', 'API Testing'],
    liveDemoUrl: 'https://shahid.mbc.net/en',
  },
  {
    id: 11,
    title: 'MBC.net Back Office',
    description: 'Worked as a full-stack QA engineer on a system that provided free-to-air satellite broadcasting services, delivering the right content to the right audience through content distribution channels and targeted audience management.',
    technologies: ['Selenium', 'Appium', 'Katalon', 'Maven', 'Cucumber', 'TestNG'],
    highlights: [
      'Covered both manual and automated testing across web, mobile, and responsive interfaces',
      'Supported cross-platform and cross-device validation for content management and audience targeting workflows',
      'Built and maintained automation suites to improve reliability for frequent release cycles',
    ],
    categories: ['Web Testing', 'Mobile Testing', 'API Testing'],
    liveDemoUrl: 'https://www.mbc.net/',
  },
];

export const skills: Skill[] = [
  // Test Automation
  { name: 'Playwright', level: 95, category: 'Test Automation' },
  { name: 'Selenium WebDriver', level: 85, category: 'Test Automation' },
  { name: 'Appium', level: 75, category: 'Test Automation' },

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
  { name: 'BDD', level: 84, category: 'API & Performance' },
  { name: 'RestAssured', level: 80, category: 'API & Performance' },

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
  { name: 'BrowserStack', icon: '🌐', category: 'Cross-Browser Testing' },
  { name: 'Allure', icon: '📊', category: 'Reporting' },
  { name: 'Grafana', icon: '📈', category: 'Monitoring' },
  { name: 'TestRail', icon: '🧪', category: 'Test Management' },
  { name: 'Figma', icon: '🎨', category: 'Design Reference' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Copilot', icon: '🤖', category: 'AI Assistant' },
  { name: 'Claude Code', icon: '🧠', category: 'AI Assistant' },
  { name: 'AI Agent', icon: '⚙️', category: 'AI Assistant' },
];

export const certifications = [
  'ISTQB Foundation Level',
  'ISTQB Advanced Level - Test Automation Engineer',
];

export const education = {
  degree: 'Bachelor of IT in Software Engineer',
  university: 'Van Lang University, VLU-HCM',
  year: 'September 2009 - Jan 2014',
  gpa: 'N/A',
};
