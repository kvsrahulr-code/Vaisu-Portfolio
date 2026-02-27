export interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'International';
  description: string;
  heroImage: string;
  concept: string;
  gallery: string[];
  drawings: string[];
  execution: string[];
  videoUrl?: string;
  vrUrl?: string;
  testimonial?: {
    text: string;
    author: string;
  };
}

export interface Expertise {
  title: string;
  description: string;
  expandedDescription: string;
  previews: string[];
  icon: string;
}
