// main.js

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-toggle';
    mobileMenuButton.setAttribute('aria-label', 'Toggle navigation menu');
    mobileMenuButton.innerHTML = `
        <span class="menu-icon"></span>
    `;

    const nav = document.querySelector('.main-nav');
    nav.insertBefore(mobileMenuButton, nav.firstChild);

    mobileMenuButton.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    });
});

// Smooth Scrolling for Anchor Links
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

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        
        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            // Here you would typically send the data to your backend
            // For demonstration, we'll simulate a response
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success';
            successMessage.textContent = 'Thank you for subscribing!';
            newsletterForm.replaceWith(successMessage);
        } catch (error) {
            console.error('Subscription error:', error);
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
            
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'alert alert-error';
            errorMessage.textContent = 'Something went wrong. Please try again.';
            newsletterForm.insertBefore(errorMessage, newsletterForm.firstChild);
        }
    });
}

// Intersection Observer for Animations
const observeElements = document.querySelectorAll('.card, .grid > *, .featured-advisor');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

observeElements.forEach(element => {
    observer.observe(element);
});

// Donation Amount Selection
const donationButtons = document.querySelectorAll('.donation-option button');
const customAmountInput = document.querySelector('input[type="number"]');

if (donationButtons && customAmountInput) {
    donationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            donationButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Clear custom amount
            customAmountInput.value = '';
        });
    });

    customAmountInput.addEventListener('input', () => {
        // Remove active class from all buttons when custom amount is entered
        donationButtons.forEach(btn => btn.classList.remove('active'));
    });
}

// Image Lazy Loading with Blur-up Technique
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Accessibility Improvements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        document.querySelector('.mobile-menu-toggle').setAttribute('aria-expanded', 'false');
    }
});

// Handle form validation and error states
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('invalid', (e) => {
        e.preventDefault();
        const field = e.target;
        field.classList.add('error');
        
        // Create or update error message
        let errorMessage = field.nextElementSibling;
        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
        }
        errorMessage.textContent = field.validationMessage;
    }, true);

    // Remove error states on input
    form.addEventListener('input', (e) => {
        const field = e.target;
        if (field.classList.contains('error')) {
            field.classList.remove('error');
            const errorMessage = field.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        }
    });
});