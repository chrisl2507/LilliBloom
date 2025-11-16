// ========================================
// LilliBloom - Navigation & Core JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('nav ul a');

    if (navToggle && navMenu && navOverlay) {
        // Toggle menu
        navToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.contains('active');

            if (isOpen) {
                closeNav();
            } else {
                openNav();
            }
        });

        // Close menu when clicking overlay
        navOverlay.addEventListener('click', closeNav);

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    closeNav();
                }
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeNav();
            }
        });

        function openNav() {
            navToggle.classList.add('active');
            navMenu.classList.add('active');
            navOverlay.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeNav() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    // ========================================
    // Smooth Scrolling for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Don't prevent default for just '#' links
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                // Calculate offset for fixed nav
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Form Submission (Placeholder)
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);

            // TODO: Replace this with your actual form handler
            // For Netlify Forms, just remove e.preventDefault() and let it submit naturally
            // For Formspree or other services, add your endpoint here

            // Temporary success message
            alert('Thank you for your inquiry! We\'ll be in touch soon.');
            this.reset();

            // For production with Netlify Forms:
            // Just remove the e.preventDefault() and alert above
            // The form will submit naturally to Netlify
        });
    }
});