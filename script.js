document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const body = document.body;

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', 
            menuToggle.classList.contains('active')
        );
    }

    // Toggle menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isMenuOpen = nav.classList.contains('active');
        const clickedInsideNav = nav.contains(event.target);
        const clickedOnToggle = menuToggle.contains(event.target);

        if (isMenuOpen && !clickedInsideNav && !clickedOnToggle) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Prevent scrolling when menu is open on mobile
    nav.addEventListener('touchmove', (e) => {
        if (nav.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && nav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }, 250);
    });
});}