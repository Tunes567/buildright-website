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
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
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
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            // Here you would typically send this to your backend
            alert('Thank you for subscribing! We\'ll keep you updated with our latest news.');
            emailInput.value = '';
        }
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
    const popup = document.querySelector('.popup-offer');
    const overlay = document.querySelector('.overlay');

    // Show popup after 5 seconds
    setTimeout(() => {
        if (!localStorage.getItem('popupShown')) {
            showPopup();
        }
    }, 5000);

    // Show/Hide popup functions
    function showPopup() {
        popup.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function hidePopup() {
        popup.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
        localStorage.setItem('popupShown', 'true');
    }

    // Close popup
    document.querySelector('.close-popup').addEventListener('click', hidePopup);
    overlay.addEventListener('click', hidePopup);

    // Before/After Slider
    const sliders = document.querySelectorAll('.before-after-slider');
    sliders.forEach(slider => {
        const handle = slider.querySelector('.slider-handle');
        const beforeImage = slider.querySelector('.before-image');
        
        let isResizing = false;

        const resize = (e) => {
            if (!isResizing) return;
            
            const rect = slider.getBoundingClientRect();
            let x;
            
            if (e.type.includes('touch')) {
                x = e.touches[0].pageX - rect.left;
            } else {
                x = e.pageX - rect.left;
            }
            
            x = Math.min(Math.max(x, 0), rect.width);
            const percent = (x / rect.width) * 100;
            
            handle.style.left = `${percent}%`;
            beforeImage.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
        };

        // Mouse events
        handle.addEventListener('mousedown', () => {
            isResizing = true;
            slider.classList.add('resizing');
        });
        
        window.addEventListener('mousemove', resize);
        
        window.addEventListener('mouseup', () => {
            isResizing = false;
            slider.classList.remove('resizing');
        });
        
        // Touch events
        handle.addEventListener('touchstart', (e) => {
            isResizing = true;
            slider.classList.add('resizing');
            e.preventDefault(); // Prevent scrolling while dragging
        });
        
        window.addEventListener('touchmove', (e) => {
            resize(e);
        });
        
        window.addEventListener('touchend', () => {
            isResizing = false;
            slider.classList.remove('resizing');
        });

        // Set initial position
        setTimeout(() => {
            handle.style.left = '50%';
            beforeImage.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
        }, 100);
    });

    // Project Filters
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projects = document.querySelectorAll('[data-category]');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                    setTimeout(() => project.style.opacity = '1', 0);
                } else {
                    project.style.opacity = '0';
                    setTimeout(() => project.style.display = 'none', 300);
                }
            });
        });
    });

    // Form Submission
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                button.textContent = 'Success!';
                button.style.backgroundColor = '#28a745';
                
                if (form.closest('.popup-offer')) {
                    setTimeout(hidePopup, 1500);
                }
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
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

// Emergency Service Form Handler
const emergencyForm = document.getElementById('emergencyForm');
if (emergencyForm) {
    emergencyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send this to your backend
        const modal = bootstrap.Modal.getInstance(document.getElementById('emergencyModal'));
        modal.hide();
        alert('Your emergency service request has been received. We\'ll contact you shortly.');
    });
}

// Virtual Consultation Form Handler
document.getElementById('consultationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Consultation request received. You will receive a confirmation email with the Zoom link.');
    document.getElementById('consultationModal').querySelector('.btn-close').click();
});

// Set minimum date for consultation booking
document.querySelector('input[type="date"]')?.addEventListener('focus', function(e) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.min = tomorrow.toISOString().split('T')[0];
});

// Animate trust indicators on scroll
const trustIndicators = document.querySelectorAll('.trust-indicator');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

trustIndicators.forEach(indicator => {
    observer.observe(indicator);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    }
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Service card hover effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('hover');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });
});

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img)); 