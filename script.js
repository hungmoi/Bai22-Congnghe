document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAVBAR BLUR ================= */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    });


    /* ================= MOBILE MENU ================= */
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }


    /* ================= FADE IN (STAGGER) ================= */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".feature-card, .hero-content").forEach((el, index) => {
        el.classList.add("hidden");
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });


    /* ================= PARALLAX HERO ================= */
    const heroImage = document.querySelector(".hero-illustration img");

    window.addEventListener("scroll", () => {
        if (heroImage) {
            const offset = window.scrollY;
            heroImage.style.transform = `translateY(${offset * 0.1}px)`;
        }
    });


    /* ================= 3D CARD HOVER ================= */
    document.querySelectorAll(".feature-card").forEach(card => {

        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 15;
            const rotateY = (x - centerX) / 15;

            card.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-12px)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
        });

    });


    /* ================= SMOOTH SCROLL ================= */
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
