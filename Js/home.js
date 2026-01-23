// Initialize ScrollReveal with shared premium settings
const sr = ScrollReveal({
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false,
    easing: 'cubic-bezier(0.5, 0, 0, 1)' // Professional easing for a smooth feel
});

// --- Landing Page Specific Logic ---
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right', delay: 400 });

// Footer column staggered reveal
sr.reveal('.footer-col', { interval: 150, origin: 'bottom' });