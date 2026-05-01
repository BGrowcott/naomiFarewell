const orbitContainer = document.querySelector('.orbit-item-container');
const centerImage = document.querySelector('.center-image');
const containerSpinButton = document.querySelector('#containerSpinButton');
const orbitSpinButton = document.querySelector('#orbitSpinButton');
const orbitItems = document.querySelectorAll('.orbit-item');

let centralSpinSpeed = 15;
let orbitSpinSpeed = 15;

let centralClicks = 0;
let orbitClicks = 0;

const increaseCentralSpin = () => {
    centralClicks++;

    centerImage.style.width = `${centerImage.width + centralClicks}px`
    centerImage.style.height = `${centerImage.width + centralClicks}px`

    if (centralClicks % 10 === 0) {
        fireConfetti();
    }

    containerSpinButton.innerHTML = "Again!"
    if (centralSpinSpeed > 2) {
        centralSpinSpeed = centralSpinSpeed - 2
    } else if (centralSpinSpeed > 0.2) {
        containerSpinButton.innerHTML = "More!"
        centralSpinSpeed = centralSpinSpeed - 0.1
    } else {
        fireConfetti();
        containerSpinButton.innerHTML = "Yeea!"
    }  

    orbitContainer.style.animationDuration = `${centralSpinSpeed}s`;    
};

const increaseOrbitSpin = () => {
    orbitClicks++;

    if (orbitClicks % 10 === 0) {
        fireConfetti();
    }

    orbitSpinButton.innerHTML = "Again!"
    if (orbitSpinSpeed > 2) {
        orbitSpinSpeed = orbitSpinSpeed - 2
    } else if (orbitSpinSpeed > 0.2) {
        orbitSpinButton.innerHTML = "Again I said!"
        orbitSpinSpeed = orbitSpinSpeed - 0.1
    } else {
        fireConfetti();
        orbitSpinButton.innerHTML = "boiiii!!!"
    }  

    orbitItems.forEach(item => {
        item.style.animationDuration = `${orbitSpinSpeed}s`;
    });    
};

containerSpinButton.addEventListener("click", increaseCentralSpin)
orbitSpinButton.addEventListener("click", increaseOrbitSpin)

const fireConfetti = () => {
    const duration = 1200;
    const end = Date.now() + duration;

    (function frame() {
        const edge = Math.floor(Math.random() * 4);

        let origin;

        switch (edge) {
            case 0: origin = { x: Math.random(), y: 0 }; break;
            case 1: origin = { x: Math.random(), y: 1 }; break;
            case 2: origin = { x: 0, y: Math.random() }; break;
            case 3: origin = { x: 1, y: Math.random() }; break;
        }

        confetti({
            particleCount: 12,
            spread: 120,
            origin
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};