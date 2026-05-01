const orbitContainer = document.querySelector('.orbit-item-container');
const containerSpinButton = document.querySelector('#containerSpinButton');
const orbitSpinButton = document.querySelector('#orbitSpinButton');
const orbitItems = document.querySelectorAll('.orbit-item');

let centralSpinSpeed = 15;
let orbitSpinSpeed = 15;

const increaseCentralSpin = () => {

    containerSpinButton.innerHTML = "Again!"
    if (centralSpinSpeed > 1) {
        centralSpinSpeed = centralSpinSpeed - 1
    } else if (centralSpinSpeed > 0.2) {
        containerSpinButton.innerHTML = "More!"
        centralSpinSpeed = centralSpinSpeed - 0.1
    } else {
        containerSpinButton.innerHTML = "Yeea!"
    }  

    orbitContainer.style.animationDuration = `${centralSpinSpeed}s`;    
};

const increaseOrbitSpin = () => {
    
    orbitSpinButton.innerHTML = "Again!"
    if (orbitSpinSpeed > 1) {
        orbitSpinSpeed = orbitSpinSpeed - 1
    } else if (orbitSpinSpeed > 0.2) {
        containerSpinButton.innerHTML = "Again I said!"
        orbitSpinSpeed = orbitSpinSpeed - 0.1
    } else {
        orbitSpinButton.innerHTML = "boiiii!!!"
    }  

    orbitItems.forEach(item => {
        item.style.animationDuration = `${orbitSpinSpeed}s`;
    });    
};

containerSpinButton.addEventListener("click", increaseCentralSpin)
orbitSpinButton.addEventListener("click", increaseOrbitSpin)