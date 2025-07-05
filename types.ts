// types.ts
// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type_slug: 'projects';
  metadata: {
    title: string;
    description: string;
    long_description?: string;
    technologies?: Skill[];
    live_url?: string;
    github_url?: string;
    images?: {
      url: string;
      imgix_url: string;
    }[];
    featured?: boolean;
    project_status?: {
      key: string;
      value: string;
    };
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type_slug: 'skills';
  metadata: {
    name: string;
    category?: {
      key: string;
      value: string;
    };
    proficiency?: {
      key: string;
      value: string;
    };
    description?: string;
    years_experience?: number;
  };
}

// Work Experience interface
export interface WorkExperience extends CosmicObject {
  type_slug: 'work-experience';
  metadata: {
    job_title: string;
    company: string;
    company_website?: string;
    location?: string;
    employment_type?: {
      key: string;
      value: string;
    };
    start_date: string;
    end_date?: string;
    current_position?: boolean;
    description?: string;
    achievements?: string;
    technologies?: Skill[];
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type_slug: 'testimonials';
  metadata: {
    client_name: string;
    client_position?: string;
    company?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    project?: Project;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type literals for select-dropdown values
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'ai_ml';
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'freelance';
export type ProjectStatus = 'completed' | 'in_progress' | 'planned';
export type TestimonialRating = '1' | '2' | '3' | '4' | '5';

// Type guards for runtime validation
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type_slug === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type_slug === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type_slug === 'work-experience';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type_slug === 'testimonials';
}

// Utility types for common patterns
export type OptionalMetadata<T extends CosmicObject> = Partial<T['metadata']>;
export type CreateProjectData = Omit<Project, 'id' | 'created_at' | 'modified_at'>;