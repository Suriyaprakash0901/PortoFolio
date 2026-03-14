export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tag: "education" | "experience" | "achievement";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  level: number;
}

export interface PageTransition {
  from: string;
  to: string;
  duration: number;
}