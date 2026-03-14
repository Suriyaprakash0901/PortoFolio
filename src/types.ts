export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tag: "education" | "experience" | "achievement";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "core";
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  type: "final" | "mini" | "personal";
}

export interface PageTransition {
  from: string;
  to: string;
  duration: number;
}
