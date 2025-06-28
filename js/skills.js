
// Skills page animations

document.addEventListener('DOMContentLoaded', function() {
    // Only run on skills page
    if (!document.querySelector('.skills-section')) return;
    
    // Animate skill bars
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        progressBar.style.width = width + '%';
                    }, 200);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    };
    
    // Animate circular skills
    const animateCircularSkills = () => {
        const skillItems = document.querySelectorAll('.skill-item');
        const centerX = 150; // Half of container width
        const centerY = 150; // Half of container height
        const radius = 100;
        
        skillItems.forEach((item, index) => {
            const angle = (index / skillItems.length) * 360;
            const radian = (angle - 90) * (Math.PI / 180);
            const x = centerX + Math.cos(radian) * radius;
            const y = centerY + Math.sin(radian) * radius;
            
            item.style.position = 'absolute';
            item.style.left = x + 'px';
            item.style.top = y + 'px';
            item.style.transform = 'translate(-50%, -50%)';
            
            // Animate in with delay
            item.style.opacity = '0';
            item.style.transform += ' scale(0)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translate(-50%, -50%) scale(1)';
            }, index * 200 + 500);
        });
    };
    
    // Initialize animations
    setTimeout(() => {
        animateSkillBars();
        animateCircularSkills();
    }, 300);
    
    // Add hover effects to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.1)';
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.1)', '');
            this.style.zIndex = '1';
        });
    });
});
