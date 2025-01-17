console.log("hamburger.js loaded.");

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const popDownMenu = document.querySelector('.pop-down-menu');

    if (hamburgerMenu && popDownMenu) {
        hamburgerMenu.addEventListener('click', function () {
            // Toggle menu visibility
            popDownMenu.style.display = popDownMenu.style.display === 'block' ? 'none' : 'block';
        });
    } else {
        console.error('Hamburger menu or pop-down menu not found.');
    }

    // Close the menu when the user clicks outside of it
    document.addEventListener('click', function (event) {
        if (!hamburgerMenu.contains(event.target) && !popDownMenu.contains(event.target)) {
            popDownMenu.style.display = 'none';
        }
    });
});