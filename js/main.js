// Enhanced Mobile menu toggle with transition
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuItems = document.querySelectorAll('#mobile-menu .nav-link');

// Initialize mobile menu
if (mobileMenu) {
    // Set initial state - ensure it's hidden
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
    // Set initial styles
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-20px)';
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.overflow = 'hidden';
    
    // Initialize menu items for staggered animation
    mobileMenuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
    });
}

// Enhanced mobile menu toggle animation
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        // Toggle the open class for the button animation
        menuBtn.classList.toggle('open');
        
        if (mobileMenu.classList.contains('hidden')) {
            // Show menu with enhanced animation
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('show');
            mobileMenu.classList.remove('hide');
            
            // Apply styles with a slight delay for smooth transition
            setTimeout(() => {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateY(0)';
                mobileMenu.style.maxHeight = '300px'; // Adjust based on content
                
                // Animate menu items with staggered delay
                mobileMenuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 80);
                });
            }, 10);
        } else {
            // Hide menu with enhanced animation
            mobileMenu.classList.add('hide');
            mobileMenu.classList.remove('show');
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-20px)';
            mobileMenu.style.maxHeight = '0';
            
            // Reset menu items animation
            mobileMenuItems.forEach((item) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-10px)';
            });
            
            // Add hidden class after animation completes
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 400); // Match the CSS transition duration
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
