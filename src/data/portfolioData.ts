import {
  ProfileData,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillCategory,
} from '../types';
import profilePhoto from '../assets/images/nagnew.png';

export const profileData: ProfileData = {
  name: 'Nagendra H G',
  headline: 'Senior Programmer & E-Governance Specialist | Google Certified GenAI Leader',
  subheadline: 'Cybersecurity Analyst & Systems Infrastructure Engineer with 20+ years of expertise in campus-scale networks, enterprise security, cloud administration, and Generative AI strategy.',
  email: 'hgnagendra@gmail.com',
  location: 'Mysuru, Karnataka, India',
  linkedinUrl: 'https://www.linkedin.com/in/nagendrahg',
  githubUrl: 'https://github.com/nagendrahg',
  photoUrl: profilePhoto,
  about: {
    bio: [
      'Experienced IT professional with over 20 years of expertise in system administration, cybersecurity, and network management. Currently serving as a Programmer at The National Institute of Engineering (NIE), Mysuru, I specialize in maintaining critical campus IT infrastructure, managing high-throughput networks, and implementing robust zero-trust cybersecurity protocols.',
      'Certified as a Google Generative AI Leader, I integrate modern generative AI frameworks, ethical AI governance, and cloud automation into enterprise workflows. My background spans hands-on penetration testing, web application security auditing, and large-scale E-Governance systems designed for educational autonomy.',
      'As a Level 20 Contributor to Google Crowdsource and top contributor to the Kannada Vocalize initiative, I am deeply committed to open-source knowledge sharing, regional language computing, and mentoring the next generation of cybersecurity and IT specialists.'
    ],
    mission: 'To build resilient, secure, and accessible digital governance architectures that safeguard institutional data while accelerating academic innovation and generative AI adoption.',
    yearsOfExperience: 20,
    keyMetrics: [
      { label: 'Years Experience', value: '20+', helper: 'Continuous IT & Systems Engineering' },
      { label: 'Campus Users Served', value: '5,000+', helper: 'Students, Faculty & Administration' },
      { label: 'Google Crowdsource', value: 'Level 20', helper: 'Top Contributor (Kannada Vocalize)' },
      { label: 'Professional Certifications', value: '8+', helper: 'Google GenAI Leader, Cloud, TCS & CNSS' },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: 'campus-egovernance-portal',
    title: 'NIE Campus E-Governance & Academic Lifecycle Portal',
    category: 'E-Governance',
    tagline: 'Centralized institutional management system supporting academic operations, admissions, and faculty workflow.',
    description: 'Spearheaded the development and maintenance of an institutional E-Governance portal at The National Institute of Engineering, handling student information lifecycles, faculty records, course registrations, and automated compliance reporting.',
    longDescription: 'Designed to replace fragmented departmental silos with a unified, role-based access management portal. The system coordinates academic records, course allocation, fee clearance verification, and institutional audit trails for thousands of concurrent active campus users while strictly enforcing access control policies.',
    impact: [
      'Eliminated 85% of physical paper processing for semester registrations and clearance forms.',
      'Automated real-time attendance aggregation and internal marks calculation across all departments.',
      'Implemented robust Role-Based Access Control (RBAC) preventing unauthorized privilege escalation.'
    ],
    technologies: ['PHP / Python', 'MySQL / PostgreSQL', 'Linux (Ubuntu/RHEL)', 'Apache/Nginx', 'E-Governance Architecture', 'REST APIs'],
    featured: true,
    metrics: [
      { label: 'Active Users', value: '5,000+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Paper Reduction', value: '85%' }
    ],
    architecture: [
      'Multi-tier architectural design with dedicated application and database security partitions.',
      'Automated daily encrypted offsite backups with disaster recovery failover protocols.',
      'Session token management with strict CSRF, XSS, and SQL injection sanitization filters.'
    ]
  },
  {
    id: 'campus-cybersecurity-firewall',
    title: 'Campus-Wide Network Infrastructure & Zero-Trust UTM Firewall',
    category: 'Cybersecurity',
    tagline: 'Multi-tiered enterprise network architecture with Unified Threat Management and intrusion prevention.',
    description: 'Architected and managed NIE’s campus-wide networking backbone, deploying high-availability UTM firewalls, VLAN segmentations, bandwidth throttling, and Intrusion Detection/Prevention Systems (IDS/IPS).',
    longDescription: 'Managed end-to-end network reliability for computer labs, research centers, administrative offices, and hostel Wi-Fi. Implemented perimeter defense strategies to proactively identify rogue network anomalies, DDoS attempts, and unauthorized endpoint connections.',
    impact: [
      'Protected campus network against external brute force attacks and malicious port scanning attempts.',
      'Optimized bandwidth distribution ensuring uninterrupted connectivity for high-stakes online examinations.',
      'Configured 802.1X enterprise authentication with WPA3 security protocols.'
    ],
    technologies: ['Cisco / Fortinet UTM', 'PFSense', 'Wireshark', 'VLAN Segmentation', 'Snort IDS/IPS', 'Radius / 802.1X'],
    featured: true,
    metrics: [
      { label: 'Endpoints Managed', value: '1,500+' },
      { label: 'VLAN Segments', value: '16+' },
      { label: 'Threat Mitigation', value: '100% Core' }
    ],
    architecture: [
      'Hierarchical core-distribution-access network topology with redundant fiber backbones.',
      'Strict DMZ separation for public-facing servers versus internal academic databases.',
      'Automated syslog aggregation and anomaly alerting for instant incident response.'
    ]
  },
  {
    id: 'webapp-security-pentest-suite',
    title: 'Institutional Web Application Security & Pen-Testing Workflow',
    category: 'Cybersecurity',
    tagline: 'Automated vulnerability scanning, OWASP Top 10 auditing, and penetration testing protocol.',
    description: 'Developed an internal security auditing framework to conduct periodic vulnerability assessments, penetration tests, and SSL/TLS cipher hardening on institutional web properties.',
    longDescription: 'Combining automated vulnerability scanning with manual ethical hacking verification. The protocol inspects web endpoints for authentication bypasses, broken object-level authorizations, insecure direct object references (IDOR), and cross-site scripting vulnerabilities before major academic cycles.',
    impact: [
      'Identified and patched 30+ critical/high web vulnerabilities before production deployments.',
      'Achieved A+ SSL Labs rating across all public institutional subdomains.',
      'Conducted security awareness sessions and code-hardening guidelines for junior developers and students.'
    ],
    technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Metasploit', 'Python Security Scripts', 'SSL/TLS Hardening'],
    featured: true,
    metrics: [
      { label: 'Vulnerabilities Remediated', value: '100%' },
      { label: 'SSL Labs Rating', value: 'A+' },
      { label: 'Pen-Test Audits', value: 'Quarterly' }
    ],
    architecture: [
      'Automated baseline scan pipelines triggered prior to deployment cycles.',
      'Structured vulnerability scoring (CVSS v3.1) and risk remediation prioritization matrix.',
      'Comprehensive reporting templates aligning with educational governance compliance standards.'
    ]
  },
  {
    id: 'google-workspace-provisioning',
    title: 'Automated Google Cloud Workspace & Identity Provisioning Engine',
    category: 'Cloud & Systems',
    tagline: 'Zero-touch identity synchronization and single sign-on (SSO) governance for 5,000+ institutional accounts.',
    description: 'Designed automated batch scripts and Google Cloud Workspace administrative policies to provision, manage, and archive student and faculty enterprise identities smoothly across academic batches.',
    longDescription: 'Leveraged Google Cloud Workspace APIs and Directory Sync tools to automate lifecycle changes from admission to graduation. Enforced 2-Factor Authentication (2FA), customized Organisational Unit (OU) security policies, and drive loss-prevention rules.',
    impact: [
      'Reduced new student onboarding time from 2 weeks of manual labor to under 30 minutes of automated batch execution.',
      'Enforced MFA policies resulting in zero compromised institutional credentials.',
      'Streamlined cloud storage quotas and shared drive administration compliant with Google policies.'
    ],
    technologies: ['Google Cloud Workspace', 'GAM (Google Apps Manager)', 'Python / Bash', 'OAuth 2.0', 'REST APIs', 'SAML 2.0 / SSO'],
    featured: false,
    metrics: [
      { label: 'Accounts Managed', value: '5,000+' },
      { label: 'Setup Time Reduction', value: '95%' },
      { label: 'Identity Accuracy', value: '100%' }
    ],
    architecture: [
      'CSV/Database sync script with delta change detection and rollback capabilities.',
      'Granular OU role mapping granting specialized permissions to department heads vs general students.'
    ]
  },
  {
    id: 'kannada-ai-voice-corpus',
    title: 'Kannada Language AI Speech Corpus & Vocalize Initiative',
    category: 'AI & Community',
    tagline: 'High-volume regional speech data validation and acoustic modeling as a Google Crowdsource Level 20 contributor.',
    description: 'Actively participated and led contributions in the Google Crowdsource Kannada Vocalize campaign, annotating audio transcriptions, validating acoustic samples, and enhancing regional language AI representation.',
    longDescription: 'As a top contributor recognized by Google Crowdsource India, contributed to training datasets that empower speech recognition, machine translation, and text-to-speech algorithms for Kannada, preserving cultural heritage through modern AI technologies.',
    impact: [
      'Recognized as Level 20 Contributor at Google Crowdsource and Top Contributor in Kannada Vocalize Campaign.',
      'Validated and annotated thousands of speech corpus records and semantic translations.',
      'Advocated for linguistic inclusion in AI datasets across regional academic forums.'
    ],
    technologies: ['Google Crowdsource', 'Audio Annotation Tools', 'Kannada NLP / Speech Corpus', 'AI Data Validation'],
    featured: false,
    metrics: [
      { label: 'Crowdsource Level', value: 'Level 20' },
      { label: 'Top Contributor', value: 'Kannada' },
      { label: 'Campaigns Led', value: 'Multi-year' }
    ]
  },
  {
    id: 'k8s-cloud-computing-lab',
    title: 'Google Cloud & Kubernetes Hybrid Academic Testing Infrastructure',
    category: 'Cloud & Systems',
    tagline: 'Containerized Kubernetes sandbox for modern cloud computing practicals and server virtualization.',
    description: 'Built a containerized multi-node Kubernetes lab platform utilizing Google Cloud Computing Foundation principles, providing students and research teams with isolated container environments.',
    longDescription: 'Configured local microk8s and GKE clusters allowing students to deploy microservices, practice declarative YAML deployments, ingress controllers, and explore modern cloud-native architectures in a controlled sandbox.',
    impact: [
      'Enabled hands-on container training for 300+ engineering students annually.',
      'Reduced server resource consumption by 60% compared to heavy monolithic virtual machines.'
    ],
    technologies: ['Kubernetes (K8s)', 'Google Cloud Platform (GCP)', 'Docker', 'Linux KVM', 'Helm', 'YAML / Bash'],
    featured: false,
    metrics: [
      { label: 'Trained Students', value: '300+/yr' },
      { label: 'Resource Savings', value: '60%' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'nie-programmer',
    role: 'Programmer & E-Governance Lead',
    organization: 'The National Institute of Engineering (NIE)',
    location: 'Mysuru, Karnataka, India',
    period: 'May 2009 – Present (17+ years)',
    type: 'full-time',
    summary: 'Lead IT Programmer responsible for managing campus-wide IT infrastructure, web application security, E-Governance systems, and university network security policies.',
    highlights: [
      'Architected and continuously maintained the institutional E-Governance portals catering to 5,000+ students and faculty members.',
      'Spearheaded campus-wide cybersecurity monitoring, threat hunting, and vulnerability remediation across multi-tier servers and networks.',
      'Administered campus enterprise networks, core routing, VLAN switching, and UTM firewalls with 99.9% operational uptime.',
      'Managed Google Cloud Workspace ecosystem, automating user onboarding, multi-factor authentication, and institutional domain policies.',
      'Mentored junior staff, lab technicians, and engineering students in web application security, ethical hacking, and systems administration.'
    ],
    technologies: ['E-Governance', 'Cybersecurity', 'Web App Security', 'Penetration Testing', 'Google Workspace', 'Linux/Unix', 'Network Administration', 'MySQL/PostgreSQL']
  },
  {
    id: 'google-crowdsource',
    role: 'Individual Contributor (Level 20 Contributor)',
    organization: 'Crowdsource by Google India',
    location: 'Mysore, Karnataka, India',
    period: 'November 2022 – Present (3+ years)',
    type: 'contributor',
    summary: 'High-impact contributor recognized by Google for significant contributions to Kannada acoustic speech datasets and AI language modeling.',
    highlights: [
      'Achieved Level 20 Contributor status — the highest tier within the global Google Crowdsource community.',
      'Named Top Contributor in the Kannada Vocalize Campaign by Google Crowdsource, validating regional voice datasets.',
      'Helped enhance machine learning models for low-resource Indian languages through continuous verification of optical, speech, and textual data.'
    ],
    technologies: ['Google Crowdsource', 'Artificial Intelligence', 'Speech Corpus', 'Kannada NLP', 'Data Validation']
  },
  {
    id: 'mahajana-college',
    role: 'System Administrator',
    organization: 'SBRR Mahajana First Grade College',
    location: 'Jayalakshmipuram, Mysuru, Karnataka, India',
    period: 'July 2004 – July 2009 (5 years 1 month)',
    type: 'full-time',
    summary: 'Managed end-to-end computer laboratories, local area network infrastructure, system maintenance, and campus software installations.',
    highlights: [
      'Managed 200+ lab computers, servers, and multi-subnet LAN configurations across college departments.',
      'Implemented automated system cloning, patch deployment, antivirus definitions, and user quota management.',
      'Assisted faculty and students in conducting computer science practicals and online university examinations.'
    ],
    technologies: ['System Administration', 'Windows Server', 'Linux RedHat', 'LAN/WAN', 'Hardware Maintenance', 'Lab Management']
  },
  {
    id: 'compage-it',
    role: 'Technical Team Lead',
    organization: 'Compage IT Solutions Pvt. Ltd.',
    location: 'Mysuru, Karnataka, India',
    period: 'January 2003 – August 2003 (8 months)',
    type: 'full-time',
    summary: 'Led technical implementation team delivering client software solutions, network installations, and hardware infrastructure deployments.',
    highlights: [
      'Supervised a team of junior engineers executing network installations and client hardware rollouts.',
      'Resolved critical server performance bottlenecks and conducted client training on deployed systems.'
    ],
    technologies: ['Team Leadership', 'Network Deployments', 'Client Infrastructure', 'Server Setup']
  },
  {
    id: 'nie-instructor',
    role: 'Technical Instructor',
    organization: 'The National Institute of Engineering (NIE)',
    location: 'Mysuru, Karnataka, India',
    period: 'December 1999 – January 2003 (3 years 2 months)',
    type: 'full-time',
    summary: 'Instructed engineering students in computer science fundamentals, programming languages, operating systems, and computer hardware.',
    highlights: [
      'Delivered hands-on laboratory lectures in C programming, data structures, and computer organization.',
      'Maintained lab equipment and assisted in designing practical examination evaluations.'
    ],
    technologies: ['C Programming', 'Data Structures', 'Operating Systems', 'Instructional Design']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'uom-pgd-egov',
    degree: 'Post Graduate Diploma (PGD)',
    institution: 'University of Mysore',
    period: '2007 – 2009',
    field: 'E-Governance',
    details: 'Specialized in electronic governance frameworks, public administrative computing, data security standards, and institutional automation.'
  },
  {
    id: 'ksou-bsc-it',
    degree: 'Bachelor of Science (B.Sc)',
    institution: 'Karnataka State Open University',
    period: '2003 – 2006',
    field: 'Information Technology',
    details: 'Comprehensive study of computer software engineering, database management systems, algorithms, and network protocols.'
  },
  {
    id: 'srimath-polytechnic',
    degree: 'Diploma',
    institution: 'Srimath Polytechnic',
    period: '1995 – 1998',
    field: 'Computer Science & Engineering',
    details: 'Practical foundation in digital electronics, microprocessors, operating system concepts, and systems programming.'
  },
  {
    id: 'sharada-vilas',
    degree: 'High School Diploma',
    institution: 'Sharada Vilas Boys High School',
    period: '1991 – 1994',
    field: 'English Medium Secondary Education',
    details: 'Secondary education with high distinction in mathematics and science.'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-google-genai-leader',
    name: 'Google Cloud Certified - Generative AI Leader',
    issuer: 'Google Cloud',
    skills: ['Generative AI Strategy', 'Large Language Models (LLMs)', 'AI Governance & Ethics', 'Gemini & Prompt Design', 'Enterprise AI Transformation'],
    badgeColor: 'sky',
    featured: true
  },
  {
    id: 'cert-tcs-cybersecurity',
    name: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata Consultancy Services (TCS)',
    skills: ['Cybersecurity Analysis', 'Threat Assessment', 'Security Incident Management', 'Vulnerability Assessment'],
    badgeColor: 'emerald',
    featured: true
  },
  {
    id: 'cert-google-workspace',
    name: 'Google Cloud Professional Workspace Administrator',
    issuer: 'Google Cloud',
    skills: ['Workspace Enterprise', 'Zero Trust Access', 'Identity & Access Management (IAM)', 'Domain Governance'],
    badgeColor: 'cyan',
    featured: true
  },
  {
    id: 'cert-google-k8s',
    name: 'Google Cloud Computing Foundation with Kubernetes',
    issuer: 'Google Cloud',
    skills: ['Kubernetes (K8s)', 'Google Cloud Platform', 'Container Orchestration', 'Microservices'],
    badgeColor: 'blue',
    featured: true
  },
  {
    id: 'cert-google-it-support',
    name: 'Google IT Support Professional',
    issuer: 'Google',
    skills: ['Network Protocols', 'Systems Administration', 'Security Fundamentals', 'Troubleshooting'],
    badgeColor: 'indigo',
    featured: true
  },
  {
    id: 'cert-ai-foundation',
    name: 'Artificial Intelligence Foundations',
    issuer: 'Google / Specialized Program',
    skills: ['Machine Learning Basics', 'Speech Corpus Annotation', 'NLP Foundations', 'Data Validation'],
    badgeColor: 'amber',
    featured: true
  },
  {
    id: 'cert-cnss',
    name: 'CNSS Certification (National Security Systems)',
    issuer: 'Committee on National Security Systems',
    skills: ['Information Assurance', 'Federal Security Standards', 'Cryptographic Controls', 'Risk Management'],
    badgeColor: 'rose',
    featured: true
  },
  {
    id: 'cert-webapp-sec',
    name: 'Web Application Security & Penetration Testing',
    issuer: 'Professional Cybersecurity Credential',
    skills: ['Ethical Hacking', 'OWASP Top 10', 'Penetration Testing', 'Burp Suite', 'Web Vulnerabilities'],
    badgeColor: 'violet',
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'security',
    title: 'Cybersecurity & Penetration Testing',
    description: 'Hands-on offensive and defensive cybersecurity methodologies, vulnerability analysis, and zero-trust perimeter defenses.',
    skills: [
      { name: 'Web Application Security (OWASP)', level: 95, category: 'security', isTop: true, years: '15+ yrs' },
      { name: 'Penetration Testing & Auditing', level: 92, category: 'security', isTop: true, years: '12+ yrs' },
      { name: 'Ethical Hacking & Threat Analysis', level: 90, category: 'security', isTop: true, years: '12+ yrs' },
      { name: 'Vulnerability Assessment & Remediation', level: 94, category: 'security', isTop: true, years: '15+ yrs' },
      { name: 'UTM Firewall Policies & IDS/IPS', level: 95, category: 'security', isTop: false, years: '18+ yrs' },
      { name: 'SSL/TLS Encryption & Ciphers', level: 96, category: 'security', isTop: false, years: '16+ yrs' },
      { name: 'CNSS & Information Assurance Protocols', level: 88, category: 'security', isTop: false, years: '10+ yrs' }
    ]
  },
  {
    id: 'systems-networks',
    title: 'Systems & Campus Network Architecture',
    description: 'Enterprise-grade Linux/Windows server administration, campus network backbones, and high-availability systems.',
    skills: [
      { name: 'Linux / Unix System Administration', level: 96, category: 'systems-networks', isTop: true, years: '20+ yrs' },
      { name: 'Campus LAN/WAN & VLAN Architecture', level: 95, category: 'systems-networks', isTop: true, years: '20+ yrs' },
      { name: 'Windows Server & Active Directory', level: 90, category: 'systems-networks', isTop: false, years: '18+ yrs' },
      { name: 'DNS, DHCP, Radius & 802.1X Auth', level: 94, category: 'systems-networks', isTop: false, years: '17+ yrs' },
      { name: 'Disaster Recovery & Encrypted Backups', level: 92, category: 'systems-networks', isTop: false, years: '16+ yrs' },
      { name: 'Hardware Diagnostic & Lab Infrastructure', level: 95, category: 'systems-networks', isTop: false, years: '20+ yrs' }
    ]
  },
  {
    id: 'cloud-governance',
    title: 'Cloud, Workspace & E-Governance',
    description: 'Institutional electronic governance platforms, Google Cloud infrastructure, Kubernetes, and enterprise identity governance.',
    skills: [
      { name: 'E-Governance Architectures & ERPs', level: 96, category: 'cloud-governance', isTop: true, years: '16+ yrs' },
      { name: 'Google Cloud Professional Workspace Admin', level: 95, category: 'cloud-governance', isTop: true, years: '10+ yrs' },
      { name: 'Google Cloud Platform (GCP) Fundamentals', level: 88, category: 'cloud-governance', isTop: false, years: '6+ yrs' },
      { name: 'Kubernetes (K8s) & Container Basics', level: 85, category: 'cloud-governance', isTop: false, years: '5+ yrs' },
      { name: 'Identity & Access Management (IAM / SSO)', level: 92, category: 'cloud-governance', isTop: false, years: '12+ yrs' },
      { name: 'Academic ERP & Database Management', level: 94, category: 'cloud-governance', isTop: false, years: '17+ yrs' }
    ]
  },
  {
    id: 'programming-ai',
    title: 'Generative AI, Scripting & AI Data',
    description: 'Generative AI strategy, LLM integration, automation scripting, database querying, and regional language AI speech dataset engineering.',
    skills: [
      { name: 'Generative AI Strategy & LLMs (Google Certified)', level: 94, category: 'programming-ai', isTop: true, years: '2+ yrs' },
      { name: 'Kannada AI Speech Corpus & Annotation', level: 98, category: 'programming-ai', isTop: true, years: '4+ yrs' },
      { name: 'AI Governance, Ethics & Prompt Design', level: 91, category: 'programming-ai', isTop: false, years: '2+ yrs' },
      { name: 'Bash Shell & Linux Scripting', level: 94, category: 'programming-ai', isTop: false, years: '18+ yrs' },
      { name: 'Python Automation & Security Tools', level: 88, category: 'programming-ai', isTop: false, years: '10+ yrs' },
      { name: 'SQL & Relational Databases (MySQL/PgSQL)', level: 92, category: 'programming-ai', isTop: false, years: '18+ yrs' },
      { name: 'Web Technologies (HTML5, PHP, REST APIs)', level: 90, category: 'programming-ai', isTop: false, years: '16+ yrs' },
      { name: 'Technical Mentorship & Team Training', level: 95, category: 'programming-ai', isTop: false, years: '20+ yrs' }
    ]
  }
];
