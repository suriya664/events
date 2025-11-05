/**
 * ========================================
 * MAIN JAVASCRIPT - VANILLA JS
 * Mobile menu, smooth scroll, lazy loading
 * ========================================
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    initActiveNav();
  }

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      
      // Change icon
      const icon = toggle.querySelector('i') || toggle;
      if (menu.classList.contains('active')) {
        icon.textContent = '✕';
      } else {
        icon.textContent = '☰';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
        const icon = toggle.querySelector('i') || toggle;
        icon.textContent = '☰';
      }
    });

    // Close menu when clicking a link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
        const icon = toggle.querySelector('i') || toggle;
        icon.textContent = '☰';
      });
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const navbarHeight = 70;
          const targetPosition = target.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Lazy Loading Images
   */
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px'
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Set Active Navigation Link
   */
  function initActiveNav() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    
    menuLinks.forEach(function(link) {
      const linkPath = link.getAttribute('href');
      
      if (currentPath.includes(linkPath) || 
          (currentPath === '/' && linkPath === 'index.html') ||
          (currentPath.endsWith('/') && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Back to Top Button
   */
  function initBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 999;
      font-size: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        button.style.opacity = '1';
      } else {
        button.style.opacity = '0';
      }
    });
    
    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize back to top if needed
  if (document.querySelector('.back-to-top')) {
    initBackToTop();
  } else {
    initBackToTop();
  }

})();

