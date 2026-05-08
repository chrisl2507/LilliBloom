// ========================================
// LilliBloom — Navigation & Core JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // ----- Mobile navigation -----
    const navToggle = document.querySelector('.nav-toggle');
    const navPanel = document.querySelector('.nav-panel');
    const navOverlay = document.querySelector('.nav-overlay');
    const panelLinks = navPanel ? navPanel.querySelectorAll('a') : [];

    function openNav() {
        navToggle.classList.add('active');
        navPanel.classList.add('active');
        navOverlay.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        if (!navToggle) return;
        navToggle.classList.remove('active');
        navPanel.classList.remove('active');
        navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (navToggle && navPanel && navOverlay) {
        navToggle.addEventListener('click', function () {
            if (navPanel.classList.contains('active')) {
                closeNav();
            } else {
                openNav();
            }
        });

        navOverlay.addEventListener('click', closeNav);

        panelLinks.forEach(link => {
            link.addEventListener('click', closeNav);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navPanel.classList.contains('active')) {
                closeNav();
            }
        });
    }

    // ----- Smooth scrolling for in-page anchors -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const nav = document.querySelector('nav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - navHeight - 16,
                behavior: 'smooth'
            });
        });
    });

    // Netlify handles form submission natively. No JS interception.
});
