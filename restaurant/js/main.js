/**
 * Cuisine Restaurant - Main JavaScript
 * Author: Cuisine Restaurant Team
 * Version: 1.0.0
 * Description: Core functionality for the Cuisine Restaurant website
 */

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Mobile Menu Toggle
     * Handles the mobile menu button click event to show/hide navigation
     */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
    
    /**
     * Lazy Loading Images
     * Loads images only when they enter the viewport to improve page load performance
     */
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
    
    /**
     * Menu Filter Functionality
     * Filters menu items based on selected category
     */
    const menuNavItems = document.querySelectorAll('.menu-nav-item');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuNavItems.length > 0 && menuItems.length > 0) {
        menuNavItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all nav items
                menuNavItems.forEach(navItem => navItem.classList.remove('active'));
                
                // Add active class to clicked nav item
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show all items if 'all' is selected, otherwise filter by category
                if (category === 'all') {
                    menuItems.forEach(menuItem => menuItem.style.display = 'block');
                } else {
                    menuItems.forEach(menuItem => {
                        if (menuItem.getAttribute('data-category') === category) {
                            menuItem.style.display = 'block';
                        } else {
                            menuItem.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    /**
     * Testimonial Slider
     * Creates an interactive slider for customer testimonials
     */
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (testimonialItems.length > 0) {
        let currentSlide = 0;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            testimonialItems.forEach(item => item.style.display = 'none');
            
            // Remove active class from all dots
            if (sliderDots.length > 0) {
                sliderDots.forEach(dot => dot.classList.remove('active'));
            }
            
            // Show the current slide
            testimonialItems[index].style.display = 'block';
            
            // Add active class to current dot
            if (sliderDots.length > 0) {
                sliderDots[index].classList.add('active');
            }
            
            currentSlide = index;
        }
        
        // Initialize the slider
        showSlide(currentSlide);
        
        // Event listeners for dots
        if (sliderDots.length > 0) {
            sliderDots.forEach((dot, index) => {
                dot.addEventListener('click', () => showSlide(index));
            });
        }
        
        // Event listeners for prev/next buttons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
                showSlide(currentSlide);
            });
            
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % testimonialItems.length;
                showSlide(currentSlide);
            });
        }
    }
    
    /**
     * Scroll Animations
     * Adds animation classes to elements when they enter the viewport
     */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => animationObserver.observe(el));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animatedElements.forEach(el => el.classList.add('animate-fade-in'));
    }
});