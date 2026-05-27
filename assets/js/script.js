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
});
