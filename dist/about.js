import { Navigator } from "./navigation.js";
const timelineData = [
    {
        year: "2022",
        title: "Started B.E in ECE",
        description: "Joined Erode Sengunthar Engineering College to pursue Bachelor of Engineering in Electronics & Communication Engineering. Began exploring programming alongside core electronics.",
        tag: "education",
    },
    {
        year: "2024",
        title: "Mini Project — Voice Controlled Autonomous Vehicle",
        description: "Built an Android-based voice controlled autonomous vehicle using Arduino. The system processes wireless voice commands for precise movements — a stepping stone into embedded systems and automation.",
        tag: "achievement",
    },
    {
        year: "2025",
        title: "Internship — Full Stack Developer at Maventic Innovative Solutions",
        description: "Currently working as a Full Stack Developer intern, gaining hands-on experience building real-world web applications with modern technologies.",
        tag: "experience",
    },
    {
        year: "2026",
        title: "Final Year Project — FPGA Implementation of LDPC for 5G",
        description: "Designed and implemented an efficient LDPC Encoder & Decoder on FPGA for 5G communication systems using a custom Python-based VeCoGen tool. Achieved 22% higher throughput and 36.1% reduction in LUT utilization on Artix-7 FPGA.",
        tag: "achievement",
    },
    {
        year: "2026",
        title: "Graduating — B.E ECE",
        description: "Completing Bachelor of Engineering in Electronics & Communication Engineering from Erode Sengunthar Engineering College. Ready to take on full-time roles as a Full Stack Developer.",
        tag: "education",
    },
];
const skillsData = [
    { name: "HTML & CSS", category: "frontend", level: 85 },
    { name: "JavaScript", category: "frontend", level: 80 },
    { name: "TypeScript", category: "frontend", level: 70 },
    { name: "Python", category: "backend", level: 78 },
    { name: "Java", category: "backend", level: 72 },
    { name: "SQL", category: "backend", level: 70 },
    { name: "C / C++", category: "backend", level: 75 },
    { name: "Git & GitHub", category: "tools", level: 82 },
    { name: "MATLAB", category: "core", level: 75 },
    { name: "LabVIEW", category: "core", level: 68 },
    { name: "FPGA / Verilog", category: "core", level: 70 },
    { name: "Arduino", category: "core", level: 72 },
];
class AboutPage {
    constructor() {
        this.activeFilter = "all";
    }
    init() {
        Navigator.fadeIn();
        this.renderTimeline();
        this.renderSkills();
        this.setupFilters();
        this.setupScrollReveal();
    }
    renderTimeline() {
        const container = document.getElementById("timeline");
        if (!container)
            return;
        container.innerHTML = timelineData
            .map((item, i) => `
        <div class="timeline-item" style="animation-delay: ${i * 0.15}s">
          <div class="timeline-year">${item.year}</div>
          <div class="timeline-content">
            <span class="timeline-tag tag-${item.tag}">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </div>`)
            .join("");
    }
    renderSkills(filter = "all") {
        const container = document.getElementById("skillsContainer");
        if (!container)
            return;
        const filtered = filter === "all"
            ? skillsData
            : skillsData.filter((s) => s.category === filter);
        container.innerHTML = filtered
            .map((skill) => `
        <div class="skill-card">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" data-width="${skill.level}" style="width: 0%"></div>
          </div>
          <span class="skill-category">${skill.category}</span>
        </div>`)
            .join("");
        // Animate bars after render
        setTimeout(() => {
            document.querySelectorAll(".skill-fill").forEach((bar) => {
                const el = bar;
                el.style.width = el.dataset.width + "%";
            });
        }, 100);
    }
    setupFilters() {
        document.querySelectorAll("[data-filter]").forEach((btn) => {
            btn.addEventListener("click", () => {
                document
                    .querySelectorAll("[data-filter]")
                    .forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                this.activeFilter = btn.dataset.filter || "all";
                this.renderSkills(this.activeFilter);
            });
        });
    }
    setupScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting)
                    e.target.classList.add("visible");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }
}
const page = new AboutPage();
document.addEventListener("DOMContentLoaded", () => page.init());
