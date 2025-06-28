
// Parallax scrolling effects for homepage

class ParallaxController {
    constructor() {
        this.scrollY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        // Only run on homepage
        if (!document.querySelector('.hero-section')) return;
        
        this.bindEvents();
        this.createFloatingElements();
        this.startAnimationLoop();
    }
    
    bindEvents() {
        window.addEventListener('scroll', () => {
            this.scrollY = window.pageYOffset;
            this.requestTick();
        });
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }
    
    requestTick() {
        if (!this.ticking) {
            requestAnimationFrame(() => this.updateParallax());
            this.ticking = true;
        }
    }
    
    updateParallax() {
        const scrolled = this.scrollY;
        
        // Update parallax layers
        const bgLayer = document.querySelector('.bg-layer');
        const midLayer = document.querySelector('.mid-layer');
        const fgLayer = document.querySelector('.fg-layer');
        
        if (bgLayer) {
            bgLayer.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (midLayer) {
            midLayer.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (fgLayer) {
            fgLayer.style.transform = `translateY(${scrolled * -0.2}px)`;
        }
        
        // Update floating elements
        this.updateFloatingElements();
        
        this.ticking = false;
    }
    
    createFloatingElements() {
        const container = document.getElementById('floating-elements');
        if (!container) return;
        
        const elements = [
            { content: 'function hello() { return "IT Student"; }', delay: 0 },
            { content: 'const skills = ["Python", "Java", "MySQL"];', delay: 2000 },
            { content: 'while(learning) { knowledge++; }', delay: 4000 },
            { content: 'SELECT * FROM opportunities;', delay: 6000 },
            { content: 'git commit -m "Building the future"', delay: 8000 }
        ];
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                this.createFloatingCode(element.content, container);
            }, element.delay);
        });
    }
    
    createFloatingCode(content, container) {
        const element = document.createElement('div');
        element.className = 'floating-code';
        element.textContent = content;
        
        // Random starting position
        element.style.top = Math.random() * 80 + 10 + '%';
        element.style.left = '-20%';
        element.style.animationDuration = (15 + Math.random() * 10) + 's';
        element.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(element);
        
        // Remove element after animation
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, 25000);
    }
    
    updateFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-code');
        floatingElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;
            
            const deltaX = this.mouseX - elementX;
            const deltaY = this.mouseY - elementY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                const moveX = (deltaX / distance) * force * 10;
                const moveY = (deltaY / distance) * force * 10;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                element.style.transform = 'translate(0, 0)';
            }
        });
    }
    
    startAnimationLoop() {
        setInterval(() => {
            if (document.getElementById('floating-elements')) {
                this.createFloatingCode(
                    this.getRandomCode(),
                    document.getElementById('floating-elements')
                );
            }
        }, 8000);
    }
    
    getRandomCode() {
        const codes = [
            'const portfolio = new Website();',
            'function calculateGPA() { return 3.8; }',
            'if (motivated) { keepLearning(); }',
            'class ITStudent extends Person {}',
            'npm install awesome-skills',
            'docker run -d future-ready',
            'git push origin success',
            'const dream = "Full Stack Developer";'
        ];
        
        return codes[Math.floor(Math.random() * codes.length)];
    }
}

// Initialize parallax controller
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxController();
});
