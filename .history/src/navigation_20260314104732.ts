import { PageTransition } from "./types.js";

export class Navigator {
  private transition: PageTransition = {
    from: "",
    to: "",
    duration: 500,
  };

  init(): void {
    document.querySelectorAll("a[data-nav]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = (link as HTMLAnchorElement).href;
        this.navigateTo(target);
      });
    });
  }

  private navigateTo(url: string): void {
    this.transition.to = url;
    document.body.style.opacity = "0";
    document.body.style.transform = "translateY(20px)";
    document.body.style.transition = `all ${this.transition.duration}ms ease`;

    setTimeout(() => {
      window.location.href = url;
    }, this.transition.duration);
  }

  static fadeIn(): void {
    document.body.style.opacity = "0";
    document.body.style.transform = "translateY(20px)";
    document.body.style.transition = "all 600ms ease";

    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transform = "translateY(0)";
      }, 50);
    });
  }
}