import { TimelineItem, Skill } from "./types.js";
import { Navigator } from "./navigation.js";

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Started Web Development",
    description: "Began learning HTML, CSS and JavaScript. Built my first websites and fell in love with coding.",
    tag: "education",
  },
  {
    year: "2025",
    title: "Learned TypeScript & React",
    description: "Leveled up with TypeScript and React. Started building real projects and contributing to GitHub.",
    tag: "experience",
  },
  {
    year: "2026",
    title: "Launched Portfolio",
    description: "Built and deployed this portfolio. Actively looking for opportunities to grow as a developer.",
    tag: "achievement",
  },
];

const skillsData: Skill[] = [
  { name: "HTML & CSS", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 80 },
  { name: "TypeScript", category: "frontend", level: 70 },
  { name: "React", category: "frontend", level: 70 },
  { name: "Python", category: "backend", level: 75 },
  { name: "Git & GitHub", category: "tools", level: 85 },
];

class AboutPage {
  private activeFilter: string = "all";

  init(): void {
    Navigator.fadeIn();
    this.renderTimeline();
    this.renderSkills();
    this.setupFilters();
  }

  private renderTimeline(): void {
    const container = document.getElementById("timeline");
    if (!container) return;

    container.innerHTML = timelineData
      .map(
        (item, i) => `
        <div class="timeline-item reveal" style="animation-delay: ${i * 0.15}s">
          <div class="timeline-year">${item.year}</div>
          <div class="timeline-content">
            <span class="timeline-tag tag-${item.tag}">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </div>`
      )
      .join("");
  }

  private renderSkills(filter: string = "all"): void {
    const container = document.getElementById("skillsContainer");
    if (!container) return;

    const filtered = filter === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === filter);

    container.innerHTML = filtered
      .map(
        (skill) => `
        <div class="skill-card reveal">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" style="width: ${skill.level}%"></div>
          </div>
          <span class="skill-category">${skill.category}</span>
        </div>`
      )
      .join("");
  }

  private setupFilters(): void {
    document.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((b) =>
          b.classList.remove("active")
        );
        btn.classList.add("active");
        this.activeFilter = (btn as HTMLElement).dataset.filter || "all";
        this.renderSkills(this.activeFilter);
      });
    });
  }
}

const page = new AboutPage();
document.addEventListener("DOMContentLoaded", () => page.init());