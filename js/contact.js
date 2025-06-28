
// Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    // Only run on contact page
    if (!document.querySelector('.contact-section')) return;
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });
    }
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const formData = new FormData(contactForm);
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            displayErrors(errors);
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            showSuccessMessage();
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    function validateForm(formData) {
        const errors = [];
        
        // Validate name
        const name = formData.get('name');
        if (!name || name.trim().length < 2) {
            errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
        }
        
        // Validate email
        const email = formData.get('email');
        if (!email || !isValidEmail(email)) {
            errors.push({ field: 'email', message: 'Please enter a valid email address' });
        }
        
        // Validate subject
        const subject = formData.get('subject');
        if (!subject || subject.trim().length < 3) {
            errors.push({ field: 'subject', message: 'Subject must be at least 3 characters long' });
        }
        
        // Validate message
        const message = formData.get('message');
        if (!message || message.trim().length < 10) {
            errors.push({ field: 'message', message: 'Message must be at least 10 characters long' });
        }
        
        return errors;
    }
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        let error = null;
        
        switch(field.name) {
            case 'name':
                if (value.length < 2) {
                    error = 'Name must be at least 2 characters long';
                }
                break;
            case 'email':
                if (!isValidEmail(value)) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'subject':
                if (value.length < 3) {
                    error = 'Subject must be at least 3 characters long';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    error = 'Message must be at least 10 characters long';
                }
                break;
        }
        
        if (error) {
            showFieldError(field, error);
        } else {
            clearFieldError(field);
        }
    }
    
    function clearErrors(e) {
        const field = e.target;
        clearFieldError(field);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function displayErrors(errors) {
        errors.forEach(error => {
            const field = contactForm.querySelector(`[name="${error.field}"]`);
            if (field) {
                showFieldError(field, error.message);
            }
        });
    }
    
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.style.borderColor = '#FF6B35';
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#FF6B35';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(field) {
        field.style.borderColor = '';
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="
                background: #10B981;
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                text-align: center;
                margin-bottom: 2rem;
                animation: slideDown 0.3s ease-out;
            ">
                ✓ Message sent successfully! I'll get back to you soon.
            </div>
        `;
        
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    // Add animation for success message
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
