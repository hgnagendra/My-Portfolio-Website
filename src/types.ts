export interface Project {
  id: string;
  title: string;
  category: 'E-Governance' | 'Cybersecurity' | 'Cloud & Systems' | 'AI & Community';
  tagline: string;
  description: string;
  longDescription: string;
  impact: string[];
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  architecture?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'full-time' | 'contract' | 'contributor';
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  field: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  skills: string[];
  badgeColor?: string;
  credentialId?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    category: string;
    isTop?: boolean;
    years?: string;
  }[];
}

export interface ProfileData {
  name: string;
  headline: string;
  subheadline: string;
  email: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  photoUrl?: string;
  phone?: string;
  about: {
    bio: string[];
    mission: string;
    yearsOfExperience: number;
    keyMetrics: { label: string; value: string; helper: string }[];
  };
}
