// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project object type
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    description?: string;
    technologies?: string[];
    project_type?: {
      key: string;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    demo_url?: string;
    github_url?: string;
    status?: {
      key: string;
      value: string;
    };
  };
}

// Skill object type
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: {
      key: string;
      value: string;
    };
    proficiency?: {
      key: string;
      value: string;
    };
    years_experience?: number;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Work Experience object type
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company_name?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
    employment_type?: {
      key: string;
      value: string;
    };
    start_date?: string;
    end_date?: string | null;
    current_job?: boolean;
    description?: string;
    achievements?: string;
    technologies?: string[];
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    company_name?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    related_project?: Project;
    date_received?: string;
  };
}

// Type literals for select-dropdown values
export type ProjectStatus = 'completed' | 'in_progress' | 'maintenance';
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'design' | 'testing' | 'other';
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'freelance' | 'internship';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Component props interfaces
export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export interface WorkExperienceCardProps {
  experience: WorkExperience;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}