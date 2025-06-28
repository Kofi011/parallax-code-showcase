
// Typing animation for hero section

class TypingAnimation {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.typeSpeed = options.typeSpeed || 150;
        this.deleteSpeed = options.deleteSpeed || 100;
        this.pauseDuration = options.pauseDuration || 2000;
        this.currentPhraseIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        
        if (this.isDeleting) {
            this.currentText = currentPhrase.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = currentPhrase.substring(0, this.currentText.length + 1);
        }
        
        this.element.textContent = this.currentText;
        
        let typeSpeed = this.typeSpeed;
        
        if (this.isDeleting) {
            typeSpeed = this.deleteSpeed;
        }
        
        if (!this.isDeleting && this.currentText === currentPhrase) {
            typeSpeed = this.pauseDuration;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-text');
    
    if (typingElement) {
        const phrases = [
            'IT Student',
            'Code Enthusiast',
            'Future Developer',
            'Problem Solver',
            'Tech Innovator'
        ];
        
        new TypingAnimation(typingElement, phrases, {
            typeSpeed: 120,
            deleteSpeed: 80,
            pauseDuration: 2000
        });
    }
});
