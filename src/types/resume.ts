export interface ContactInfo {
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Competency {
  category: string;
  items: string[];
}

export interface Strength {
  title: string;
  description: string;
  icon: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  bullets: string[];
  tech: string[];
  logo?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  skills: SkillGroup[];
  competencies: Competency[];
  strengths: Strength[];
  experience: WorkExperience[];
  achievements: Achievement[];
  education: Education;
}

export interface ResumeProfile {
  id: string;
  label: string;
  templateId: string;
  data: ResumeData;
}

export interface ProfileStore {
  profiles: ResumeProfile[];
  activeId: string;
}
