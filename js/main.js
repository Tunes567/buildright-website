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

// Popup Offer
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const popup = document.getElementById('popupOffer');
        if (popup && !localStorage.getItem('popupShown')) {
            popup.classList.add('show');
        }
    }, 5000);

    const closePopup = document.querySelector('.close-popup');
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            document.getElementById('popupOffer').classList.remove('show');
            localStorage.setItem('popupShown', 'true');
        });
    }

    const offerForm = document.getElementById('offerForm');
    if (offerForm) {
        offerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            // Here you would typically send this to your server
            alert('Thank you! Your discount code has been sent to your email.');
            document.getElementById('popupOffer').classList.remove('show');
            localStorage.setItem('popupShown', 'true');
        });
    }
});

// Before/After Slider
document.querySelectorAll('.before-after-slider').forEach(slider => {
    const handle = slider.querySelector('.slider-handle');
    const beforeImage = slider.querySelector('.before-image');
    let isDragging = false;

    const updateSlider = (e) => {
        if (!isDragging) return;
        
        const rect = slider.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        
        handle.style.left = `${percent}%`;
        beforeImage.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    };

    handle.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mousemove', updateSlider);
    document.addEventListener('mouseup', () => isDragging = false);
    
    // Touch events for mobile
    handle.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        const rect = slider.getBoundingClientRect();
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        
        handle.style.left = `${percent}%`;
        beforeImage.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    });
    
    document.addEventListener('touchend', () => isDragging = false);
});

// Project Filters
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projects = document.querySelectorAll('.project-card').parentElement;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projects.forEach(project => {
                const category = project.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    project.style.display = '';
                    project.classList.add('fade-in');
                } else {
                    project.style.display = 'none';
                    project.classList.remove('fade-in');
                }
            });
        });
    });
});

// Project Modal Gallery
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${img.src}" class="img-fluid">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        new bootstrap.Modal(modal).show();
        modal.addEventListener('hidden.bs.modal', () => modal.remove());
    });
}); 