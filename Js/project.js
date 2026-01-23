// Initialize ScrollReveal with refined settings for a premium feel
const sr = ScrollReveal({
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false, // Keep false so animations only happen once as you scroll
    easing: 'cubic-bezier(0.5, 0, 0, 1)' // Smoother, high-end transition
});

// Reveal project cards with a staggered interval for a "waterfall" effect
sr.reveal('.project-card', {
    delay: 100,
    origin: 'bottom',
    interval: 100 // Each card reveals slightly after the previous one
});

// Reveal the Section Header and Footer columns
sr.reveal('.section-header', { origin: 'top' });
sr.reveal('.footer-col', { interval: 150, origin: 'bottom' });

// Back to Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
    const backToTopContainer = document.querySelector('.back-to-top');
    const backToTopBtn = document.querySelector('#backToTop');

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/Hide button logic based on scroll depth
    window.addEventListener('scroll', function () {
        // Show button after scrolling 400px (standard for 40+ project lists)
        if (window.scrollY > 400) {
            backToTopContainer.style.display = 'block';
            backToTopContainer.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            backToTopContainer.style.display = 'none';
        }
    });
});