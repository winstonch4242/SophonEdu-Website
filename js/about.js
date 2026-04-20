// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    animateStats();
});

function setupEventListeners() {
    // Mobile menu
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);

    // CTA Register button
    document.getElementById('ctaRegisterBtn')?.addEventListener('click', () => {
        window.location.href = '../index.aspx#register';
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

function toggleMobileMenu() {
    document.getElementById('navMenu')?.classList.toggle('active');
}
