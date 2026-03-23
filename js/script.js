document.addEventListener("DOMContentLoaded", () => {

    const hamburger  = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBack   = document.getElementById("menuBack");
    const dropdowns  = document.querySelectorAll(".m-dropdown");

    // OPEN MENU
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    // CLOSE MENU
    menuBack.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    // ACCORDION
    dropdowns.forEach(drop => {

        const link = drop.querySelector(".m-link");

        link.addEventListener("click", () => {

            dropdowns.forEach(item => {
                if (item !== drop) {
                    item.classList.remove("active");
                }
            });

            drop.classList.toggle("active");
        });
    });

});
document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    // Targeting specifically elements inside our scoped section
    document.querySelectorAll('.dbm-skill-page .reveal-left, .dbm-skill-page .reveal-right, .dbm-skill-page .reveal-up').forEach(el => observer.observe(el));
});