// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();

    const rotatingWord = document.querySelector('.rotating-word');
    if (rotatingWord && rotatingWord.dataset.rotatingWords) {
        const words = rotatingWord.dataset.rotatingWords.split('|').map(word => word.trim()).filter(Boolean);
        let index = 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);
        rotatingWord.style.minWidth = `${maxLength}ch`;

        if (!prefersReducedMotion && words.length > 1) {
            setInterval(() => {
                index = (index + 1) % words.length;
                rotatingWord.textContent = words[index];
                rotatingWord.classList.remove('is-anim');
                void rotatingWord.offsetWidth;
                rotatingWord.classList.add('is-anim');
            }, 1100);
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
