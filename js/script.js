// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger toggle for mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // open/close menu
    });

    // Mobile dropdown toggle
    const dropdownLinks = document.querySelectorAll('.dropdown > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // only on mobile
                e.preventDefault(); // prevent page jump
                const submenu = link.nextElementSibling; // the .dropdown-menu
                submenu.classList.toggle('active'); // open/close submenu
            }
        });
    });
});
