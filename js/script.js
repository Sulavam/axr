document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const dropdowns = document.querySelectorAll(".m-dropdown");

    // Open / Close menu
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    // Dropdown accordion
    dropdowns.forEach(drop => {

        const link = drop.querySelector(".m-link");

        link.addEventListener("click", () => {

            // close others
            dropdowns.forEach(item=>{
                if(item !== drop){
                    item.classList.remove("active");
                }
            });

            drop.classList.toggle("active");
        });
    });

});
