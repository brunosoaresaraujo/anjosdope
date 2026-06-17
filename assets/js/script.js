document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    const video = document.getElementById('parallax-video');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        if (scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        if (scrollY < window.innerHeight && video) {
            video.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
        }
    });

    const words = ["cuidado.", "saúde.", "bem-estar."];
    let wordIndex = 0;
    const dynamicWord = document.getElementById('dynamic-word');

    function rotateWord() {
        if (!dynamicWord) return;
        dynamicWord.classList.add('word-out');
        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            dynamicWord.textContent = words[wordIndex];
            dynamicWord.classList.remove('word-out');
            dynamicWord.classList.add('word-in');
            setTimeout(() => { dynamicWord.classList.remove('word-in'); }, 800);
        }, 800);
    }
    setInterval(rotateWord, 4000);

    // Scroll Reveal for Professionals
    const profRows = document.querySelectorAll('.prof-row');
    const revealOnScroll = () => {
        profRows.forEach(row => {
            const rowTop = row.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.85;
            if (rowTop < triggerBottom) {
                row.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            
            // Prevent body scroll when menu is active
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Close menu when clicking on links
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }
});
