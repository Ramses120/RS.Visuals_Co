// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();

    const rotatingWord = document.querySelector('.rotating-word');
    if (rotatingWord && rotatingWord.dataset.rotatingWords) {
        const words = rotatingWord.dataset.rotatingWords.split('|').map(word => word.trim()).filter(Boolean);
        const prefixText = (rotatingWord.dataset.rotatingPrefix || '').trim();
        let index = 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const maxLength = words.reduce((max, word) => {
            const fullLength = prefixText ? prefixText.length + 1 + word.length : word.length;
            return Math.max(max, fullLength);
        }, 0);
        rotatingWord.style.minWidth = `${maxLength}ch`;

        const setWord = (word) => {
            rotatingWord.innerHTML = '';
            if (prefixText) {
                const prefix = document.createElement('span');
                prefix.className = 'rotating-prefix';
                prefix.textContent = prefixText;
                const suffix = document.createElement('span');
                suffix.className = 'rotating-suffix';
                suffix.textContent = ` ${word}`;
                rotatingWord.append(prefix, suffix);
            } else {
                rotatingWord.textContent = word;
            }
        };

        if (words.length > 0) {
            setWord(words[index]);
        }

        if (!prefersReducedMotion && words.length > 1) {
            setInterval(() => {
                index = (index + 1) % words.length;
                setWord(words[index]);
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


    // Disable image dragging
    document.addEventListener('dragstart', (event) => {
        if (event.target && event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    });
    // Disable right-click context menu
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
});
