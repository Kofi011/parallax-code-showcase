
// Floating elements animations

class FloatingElementsManager {
    constructor() {
        this.elements = [];
        this.container = null;
        this.isActive = false;
        
        this.init();
    }
    
    init() {
        // Only run on homepage
        if (!document.querySelector('.hero-section')) return;
        
        this.container = document.getElementById('floating-elements');
        if (!this.container) return;
        
        this.isActive = true;
        this.createInitialElements();
        this.bindEvents();
    }
    
    createInitialElements() {
        // Create geometric shapes
        this.createGeometricShapes();
        
        setTimeout(() => {
            this.startContinuousAnimation();
        }, 2000);
    }
    
    createGeometricShapes() {
        const shapes = [
            { type: 'circle', size: 60, color: 'rgba(0, 102, 255, 0.1)' },
            { type: 'square', size: 40, color: 'rgba(16, 185, 129, 0.1)' },
            { type: 'triangle', size: 50, color: 'rgba(255, 107, 53, 0.1)' },
            { type: 'hexagon', size: 45, color: 'rgba(139, 92, 246, 0.1)' }
        ];
        
        shapes.forEach((shape, index) => {
            const element = this.createShape(shape);
            this.positionElement(element, index);
            this.container.appendChild(element);
        });
    }
    
    createShape(config) {
        const element = document.createElement('div');
        element.className = 'floating-shape';
        element.style.position = 'absolute';
        element.style.width = config.size + 'px';
        element.style.height = config.size + 'px';
        element.style.backgroundColor = config.color;
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1';
        
        switch(config.type) {
            case 'circle':
                element.style.borderRadius = '50%';
                break;
            case 'square':
                element.style.borderRadius = '8px';
                break;
            case 'triangle':
                element.style.backgroundColor = 'transparent';
                element.style.borderLeft = `${config.size/2}px solid transparent`;
                element.style.borderRight = `${config.size/2}px solid transparent`;
                element.style.borderBottom = `${config.size}px solid ${config.color}`;
                element.style.width = '0';
                element.style.height = '0';
                break;
            case 'hexagon':
                element.style.borderRadius = '10px';
                element.style.transform = 'rotate(45deg)';
                break;
        }
        
        // Add floating animation
        element.style.animation = `float ${6 + Math.random() * 4}s ease-in-out infinite`;
        element.style.animationDelay = Math.random() * 3 + 's';
        
        return element;
    }
    
    positionElement(element, index) {
        const positions = [
            { top: '20%', left: '10%' },
            { top: '60%', right: '15%' },
            { bottom: '30%', left: '20%' },
            { top: '40%', right: '25%' }
        ];
        
        const position = positions[index % positions.length];
        Object.assign(element.style, position);
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            if (!this.isActive) return;
            
            const shapes = document.querySelectorAll('.floating-shape');
            shapes.forEach(shape => {
                this.updateShapePosition(shape, e.clientX, e.clientY);
            });
        });
        
        // Pause animations when page is not visible
        document.addEventListener('visibilitychange', () => {
            this.isActive = !document.hidden;
        });
    }
    
    updateShapePosition(shape, mouseX, mouseY) {
        const rect = shape.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 150) {
            const force = (150 - distance) / 150;
            const moveX = (deltaX / distance) * force * 20;
            const moveY = (deltaY / distance) * force * 20;
            
            shape.style.transform += ` translate(${moveX}px, ${moveY}px)`;
        }
    }
    
    startContinuousAnimation() {
        if (!this.isActive) return;
        
        setInterval(() => {
            if (this.isActive && Math.random() > 0.7) {
                this.createTemporaryParticle();
            }
        }, 3000);
    }
    
    createTemporaryParticle() {
        const particle = document.createElement('div');
        particle.className = 'temp-particle';
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = 'rgba(0, 102, 255, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '2';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Animate the particle
        particle.style.animation = 'particleFade 4s ease-out forwards';
        
        this.container.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 4000);
    }
}

// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFade {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0.3) translateY(-100px);
        }
    }
    
    .floating-shape {
        transition: transform 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// Initialize floating elements manager
document.addEventListener('DOMContentLoaded', () => {
    new FloatingElementsManager();
});
