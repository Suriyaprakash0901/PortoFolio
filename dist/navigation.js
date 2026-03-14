export class Navigator {
    constructor() {
        this.transition = {
            from: "",
            to: "",
            duration: 500,
        };
    }
    init() {
        document.querySelectorAll("a[data-nav]").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = link.href;
                this.navigateTo(target);
            });
        });
    }
    navigateTo(url) {
        this.transition.to = url;
        document.body.style.opacity = "0";
        document.body.style.transform = "translateY(20px)";
        document.body.style.transition = `all ${this.transition.duration}ms ease`;
        setTimeout(() => {
            window.location.href = url;
        }, this.transition.duration);
    }
    static fadeIn() {
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
