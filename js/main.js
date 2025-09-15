// Mobile menu toggle with transition
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Add transition styles programmatically if not already in CSS
if (mobileMenu) {
    mobileMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease';
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-10px)';
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.overflow = 'hidden';
    
    // Initial state - ensure it's hidden
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// animate mobile button
if (menuBtn) {
    menuBtn.style.transition = 'transform 0.3s ease';
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        if (menuBtn.classList.contains('open')) {
            menuBtn.style.transform = 'rotate(90deg)';
        } else {
            menuBtn.style.transform = 'rotate(0deg)';
        }
    });
}


// Toggle menu with animation
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            // Show menu with animation
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateY(0)';
                mobileMenu.style.maxHeight = '500px'; // Adjust based on content
            }, 10);
        } else {
            // Hide menu with animation
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-10px)';
            mobileMenu.style.maxHeight = '0';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Match transition duration
        }
    });
}

// Animation for elements when scrolling into view
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkIfInView = () => {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on initial load
});
