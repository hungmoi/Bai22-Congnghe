function check(button, correct){
    let result = document.getElementById("result");
    if(correct){
        result.innerHTML = "Đúng!";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "Sai rồi!";
        result.style.color = "red";
    }
}
// Toggle mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// Smooth scroll effect
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// Fade in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".feature-card, .hero-content").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
