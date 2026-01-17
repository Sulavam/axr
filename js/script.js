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
