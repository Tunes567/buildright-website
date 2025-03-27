// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-transparent');
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        // For now, we'll just show a success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .project-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation setup
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .project-card, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    // Trigger initial animation
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.project-info').style.transform = 'translateY(0)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.project-info').style.transform = 'translateY(100%)';
    });
});

// Mobile menu toggle
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('show');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbar.contains(e.target) && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}); 