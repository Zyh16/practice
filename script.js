const colors = [
    "#ff6f91",
    "#ff9671",
    "#ffc75f",
    "#f9f871",
    "#ff4c4c",
    "#ffcc00"
];

const letters = "I LOVE YOU";
let letterIndex = 0;

function getRandomLetter() {
    const letter = letters.charAt(letterIndex);
    letterIndex = (letterIndex + 1) % letters.length;
    return letter;
}

function generateFirework(x, y) {
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
        createParticle(x, y);
    }
}

function createParticle(x, y) {
    const el = document.createElement('div');
    el.classList.add('particle');
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    document.body.appendChild(el);

    anime({
        targets: el,
        translateX: anime.random(-200, 200),
        translateY: anime.random(-200, 200),
        scale: [1, anime.random(0.5, 1)],
        opacity: [1, 0],
        duration: anime.random(1000, 2000),
        easing: 'easeOutCubic',
        complete: () => el.remove()
    });
}

function createSparkles(x, y) {
    const sparkleCount = 50;
    for (let i = 0; i < sparkleCount; i++) {
        const el = document.createElement('div');
        el.classList.add('sparkle');
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        document.body.appendChild(el);

        anime({
            targets: el,
            translateX: anime.random(-100, 100),
            translateY: anime.random(-100, 100),
            scale: [0.5, 1],
            opacity: [1, 0],
            duration: anime.random(800, 1500),
            easing: 'easeOutCubic',
            complete: () => el.remove()
        });
    }
}

document.addEventListener('click', (e) => {
    generateFirework(e.clientX, e.clientY);
    createSparkles(e.clientX, e.clientY);
});

const instructions = document.querySelector('.instructions');
anime({
    targets: instructions,
    opacity: [0, 1],
    duration: 3000,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate'
});
