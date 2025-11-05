/**
 * ========================================
 * AJAX FORM HANDLING
 * Contact, Registration, Login forms
 * ========================================
 */

(function() {
  'use strict';

  // Wait for jQuery to load
  if (typeof jQuery === 'undefined') {
    console.error('jQuery is required for AJAX functionality');
    return;
  }

  /**
   * Form Validation
   */
  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(function(input) {
      const errorEl = input.parentElement.querySelector('.form-error');
      
      if (!input.value.trim()) {
        isValid = false;
        if (errorEl) {
          errorEl.textContent = 'This field is required';
          errorEl.classList.add('show');
        }
        input.style.borderColor = '#ec4899';
      } else {
        if (errorEl) {
          errorEl.classList.remove('show');
        }
        input.style.borderColor = '';
        
        // Email validation
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid email address';
              errorEl.classList.add('show');
            }
            input.style.borderColor = '#ec4899';
          }
        }
        
        // Phone validation (Indian format)
        if (input.type === 'tel' && input.value) {
          const phoneRegex = /^(\+91)?[\s]?[6-9]\d{9}$/;
          const cleanPhone = input.value.replace(/\s+/g, '');
          if (!phoneRegex.test(cleanPhone)) {
            isValid = false;
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid phone number (+91 format)';
              errorEl.classList.add('show');
            }
            input.style.borderColor = '#ec4899';
          }
        }
      }
    });
    
    return isValid;
  }

  /**
   * Show Success/Error Message
   */
  function showMessage(form, message, isError) {
    const existing = form.querySelector('.form-success, .form-error');
    if (existing) {
      existing.remove();
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = isError ? 'form-error show' : 'form-success show';
    messageEl.textContent = message;
    
    form.insertBefore(messageEl, form.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(function() {
      messageEl.remove();
    }, 5000);
  }

  /**
   * Contact Form Handler
   */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!validateForm(this)) {
        showMessage(this, 'Please fill in all required fields correctly.', true);
        return;
      }
      
      const formData = new FormData(this);
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Simulate AJAX call (replace with actual endpoint)
      jQuery.ajax({
        url: '/api/contact', // Replace with your endpoint
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          showMessage(contactForm, 'Thank you! Your message has been sent successfully.', false);
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        },
        error: function() {
          showMessage(contactForm, 'Something went wrong. Please try again.', true);
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    });
  }

  /**
   * Registration Form Handler
   */
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!validateForm(this)) {
        showMessage(this, 'Please fill in all required fields correctly.', true);
        return;
      }
      
      const formData = new FormData(this);
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';
      
      // Simulate AJAX call (replace with actual endpoint)
      jQuery.ajax({
        url: '/api/register', // Replace with your endpoint
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          showMessage(registerForm, 'Registration successful! Check your email for confirmation.', false);
          setTimeout(function() {
            window.location.href = 'pages/login.html';
          }, 2000);
        },
        error: function() {
          showMessage(registerForm, 'Registration failed. Please try again.', true);
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    });
  }

  /**
   * Login Form Handler
   */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!validateForm(this)) {
        showMessage(this, 'Please fill in all fields.', true);
        return;
      }
      
      const formData = new FormData(this);
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Logging in...';
      
      // Simulate AJAX call (replace with actual endpoint)
      jQuery.ajax({
        url: '/api/login', // Replace with your endpoint
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          showMessage(loginForm, 'Login successful! Redirecting...', false);
          setTimeout(function() {
            window.location.href = 'pages/dashboard.html';
          }, 1500);
        },
        error: function() {
          showMessage(loginForm, 'Invalid credentials. Please try again.', true);
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    });
  }

  /**
   * Newsletter Form Handler
   */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!email || !emailRegex.test(email)) {
        showMessage(this, 'Please enter a valid email address.', true);
        return;
      }
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
      
      // Simulate AJAX call
      jQuery.ajax({
        url: '/api/newsletter', // Replace with your endpoint
        method: 'POST',
        data: { email: email },
        success: function(response) {
          showMessage(newsletterForm, 'Thank you for subscribing!', false);
          newsletterForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        },
        error: function() {
          showMessage(newsletterForm, 'Subscription failed. Please try again.', true);
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    });
  }

})();

