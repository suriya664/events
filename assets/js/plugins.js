/**
 * ========================================
 * PLUGINS - VANILLA JS IMPLEMENTATIONS
 * Image slider, modal, countdown timer
 * ========================================
 */

(function() {
  'use strict';

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initCountdown();
    initImageSlider();
    initModal();
    initGalleryLightbox();
  }

  /**
   * Countdown Timer
   */
  function initCountdown() {
    const countdownEl = document.querySelector('.countdown');
    if (!countdownEl) return;

    const targetDate = new Date(countdownEl.getAttribute('data-date')).getTime();
    
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        countdownEl.innerHTML = '<h2>Event Started!</h2>';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = countdownEl.querySelector('.countdown-days');
      const hoursEl = countdownEl.querySelector('.countdown-hours');
      const minutesEl = countdownEl.querySelector('.countdown-minutes');
      const secondsEl = countdownEl.querySelector('.countdown-seconds');

      if (daysEl) daysEl.textContent = days;
      if (hoursEl) hoursEl.textContent = hours;
      if (minutesEl) minutesEl.textContent = minutes;
      if (secondsEl) secondsEl.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /**
   * Simple Image Slider
   */
  function initImageSlider() {
    const slider = document.querySelector('.image-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(function(slide, i) {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    showSlide(0);

    // Auto-play (optional)
    setInterval(nextSlide, 5000);
  }

  /**
   * Modal Popup
   */
  function initModal() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');

    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    modals.forEach(function(modal) {
      const closeBtn = modal.querySelector('.modal-close');
      
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        });
      }

      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  /**
   * Gallery Lightbox
   */
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (!img) return;

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          cursor: pointer;
        `;

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.style.cssText = `
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        `;

        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        lightbox.addEventListener('click', function() {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
        });
      });
    });
  }

  /**
   * Schedule Day Filter
   */
  function initScheduleFilter() {
    const filterBtns = document.querySelectorAll('.schedule-filter');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const day = this.getAttribute('data-day');

        filterBtns.forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        scheduleDays.forEach(function(dayEl) {
          if (dayEl.getAttribute('data-day') === day || day === 'all') {
            dayEl.style.display = 'block';
          } else {
            dayEl.style.display = 'none';
          }
        });
      });
    });
  }

  // Initialize schedule filter if exists
  if (document.querySelector('.schedule-filter')) {
    initScheduleFilter();
  }

})();

