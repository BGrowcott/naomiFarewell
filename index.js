const orbitContainer = document.querySelector(".orbit-item-container");
const centerImage = document.querySelector(".pentagon");
const containerSpinButton = document.querySelector("#containerSpinButton");
//const orbitSpinButton = document.querySelector('#orbitSpinButton');
//const orbitItems = document.querySelectorAll('.orbit-item');
const orbitItems = document.querySelectorAll(".dot");

let centralSpinSpeed = 15;
let orbitSpinSpeed = 15;

let centralClicks = 0;
let orbitClicks = 0;
let startSize = 400;

const pastelColors = [
	"#F6C1C1",
	"#F7D6E0",
	"#FAD4C0",
	"#FFF1BA",
	"#D7F3C2",
	"#C2F0E8",
	"#BFD7FF",
	"#D6C2FF",
	"#E8C7FF",
	"#FFC7E8",
	"#FFD6A5",
	"#CDE7B0",
	"#B5EAD7",
	"#C7CEEA",
	"#FFDAC1",
	"#E2F0CB",
	"#F1F1F1",
	"#BEE3DB",
	"#FDD5B1",
	"#E0BBE4",
];

const messages = [
	{
		person: "Dan Wood",
		letter: "D",
		message: "So sad you're leaving Naomi! Who else is going to wind up Ben?! Thanks so much for your work and support to the team over the last 3 years. I hope all that you've learned stands you in good stead in your new role, and I hope you don't miss Cakes and Bakes too much! Keep in touch!",
	},
    {
		person: "Ben G",
		letter: "B",
		message: "Naomi, we are gonna miss you! You've been great, and it's always fun having a laugh at all the silly students and requests we get. I know you like to make out like Shoaib and I are the main troublemakers, but you are a bad influence, and the team won't be the same without you and your mischief! Wish you the best of luck with everything, and hopefully we'll see you around!",
	},
    {
		person: "Sho",
		letter: "S",
		message: "Thanks for being part of our wonderful team of Spidermen and Spiderwomen. We’re sad to see you leave, but also excited for your new chapter ahead. Wishing you all the best, and please keep in touch! P.S. You’re definitely going to miss Cakes & Bakes!",
	},
    {
		person: "Evie Ingold",
		letter: "E",
		message: "I hope you've enjoyed your time at UCB, and good luck in your future endeavours.",
	},
    {
		person: "Humairah Ahmed",
		letter: "H",
		message: "Good luck with the new job Naomi! I've only known you a short time but it's been really nice chatting with you in the office. Severn Trent are lucky to have you!",
	},
    {
		person: "Nadine G",
		letter: "N",
		message: "It's been a joy! You'll be missed. Thanks for your help with the weights at the gym and for the many interesting conversations we've had about weird and wonderful topics... as well as indulging my 'office treats' choices! 🤪 All the best for the next chapter xx",
	},
    {
		person: "Garima Khakurel",
		letter: "G",
		message: "Naomi, best wishes for your new role as a data analyst🍀🥳 So happy for you but will miss you at the same time! Even though we've known each other for a short time, it doesn't really feel like that. I appreciate your kind and friendly nature. Severn Trent is lucky to have you:) Let's catch up when you're in Brum or maybe in one of the Women In Tech meetups?😉",
	},
    {
		person: "Luke D",
		letter: "L",
		message: "Sad you're leaving Naomi, hopefully UCB has been useful for you and you've enjoyed parts of it at least :P. You've always been really friendly and helpful so thanks for that. Wish you all the best at the new role. We'll always be at and around the Shakey if you fancy.",
	},
    {
		person: "Victoria Grey",
		letter: "V",
		message: "Congratulations on the new role! Enjoy the new challenges ahead Naomi! Thank you for all you have contributed to the team and to UCB! Best wishes, Victoria",
	},
    {
		person: "Ruth",
		letter: "R",
		message: "Good luck in your new role. We will miss you!",
	},
    {
		person: "Fran",
		letter: "F",
		message: "Congratulations in your new role Naomi! Severn Trent are incredibly lucky to have someone as lovely as you. Please make sure you pop by and see us, especially at the Christmas party ;-) All the best - we'll miss you!",
	},
    {
		person: "Andy G",
		letter: "A",
		message: "All the best for the future Naomi, happy to see you got out before being fully corrupted by the developers!",
	},
    {
		person: "Jonathan Burden",
		letter: "J",
		message: "Naomi, thank you for your presence in the world of UCB. Hope you can find all the data on ST's leaky pipes 😁 Good Luck, see you in the Shakespeare when you have trips back to Peaky Blinders land.",
	},
    {
		person: "Alice Hewitt",
		letter: "A",
		message: "It's been lovely to have you as a colleague Naomi! I know you will be really missed by the team and me but I know you will smash your next role :) I hope you will come back and see us at the Shakey and keep contributing your fantastic music to the league as well 🩷 Wishing you all the luck in your next chapter! Alice xx",
	},
    {
		person: "Gemma Woolley",
		letter: "G",
		message: "Sad to here that you're leaving Naomi! Wishing you all the best with your new job and please keep in touch - you know where to find us!",
	},
    {
		person: "Arti",
		letter: "A",
		message: "Congratulations on the new role Naomi! The new team are lucky to have you, you're going to smash it 🤗 All the very best for this new adventure! 🍀",
	},
    {
		person: "Rich Dudley",
		letter: "R",
		message: "Wishing you happiness and success in your new role Naomi! You'll be fantastic I'm sure. All the very best, keep in touch!",
	},
    {
		person: "Kitty Colmaine",
		letter: "K",
		message: "Good luck Naomi! I know the Web Devs wont be the same without you - and Severn Trent will be super lucky to have you! ☘️",
	},
];

const messageContainer = $("#messageContainer");
const messageContainerA = $("#containerA");
const messageContainerB = $("#containerB");



messages.forEach((message, index) => {

    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

	const messageTemplate = $(`
        <div class="mb-3">
            <div class="border border-3 shadow rounded p-2 px-3 bg-white">
                <div class="d-flex align-items-center">
                    <div class="align-self-start me-2">
                        <div class="d-flex justify-content-center align-items-center border border-black border-3 text-center fs-2 fw-bold pb-1 rounded-circle" style="height: 65px; width: 65px; background: ${randomColor}">
                            ${message.letter}
                        </div>
                    </div>
                    <figure class="m-0">
                        <blockquote class="blockquote">
                            <p>
                                ${message.message}
                            </p>
                        </blockquote>
                        <figcaption class="blockquote-footer"><em>${message.person}</em></figcaption>
                    </figure>
                </div>
            </div>
        </div>
    `);

    if (index % 2) {
        messageContainerA.append(messageTemplate);
    } else {
        messageContainerB.append(messageTemplate);
    }

	
});

const increaseCentralSpin = () => {
	centralClicks++;
	// startSize += centralClicks;
	// centerImage.style.width = `${startSize}px`
	// centerImage.style.height = `${startSize}px`

	if (centralClicks % 10 === 0) {
		fireConfetti();
	}

	containerSpinButton.innerHTML = "Again!";
    if (centralSpinSpeed > 5) {
		centralSpinSpeed = centralSpinSpeed - 4;
    } else if (centralSpinSpeed > 2) {
        containerSpinButton.innerHTML = "Faster!";
		centralSpinSpeed = centralSpinSpeed - 2;
	} else if (centralSpinSpeed > 0.2) {
		containerSpinButton.innerHTML = "More!";
		centralSpinSpeed = centralSpinSpeed - 0.1;
	} else {
		fireConfetti();
		containerSpinButton.innerHTML = "Yeea boiii!!";
	}

	orbitItems.forEach((item) => {
		item.style.animationDuration = `${centralSpinSpeed}s`;
	});

	//orbitContainer.style.animationDuration = `${centralSpinSpeed}s`;
};

const increaseOrbitSpin = () => {
	orbitClicks++;

	if (orbitClicks % 10 === 0) {
		fireConfetti();
	}

	orbitSpinButton.innerHTML = "Again!";
	if (orbitSpinSpeed > 2) {
		orbitSpinSpeed = orbitSpinSpeed - 2;
	} else if (orbitSpinSpeed > 0.2) {
		orbitSpinButton.innerHTML = "Again I said!";
		orbitSpinSpeed = orbitSpinSpeed - 0.1;
	} else {
		fireConfetti();
		orbitSpinButton.innerHTML = "boiiii!!!";
	}

	orbitItems.forEach((item) => {
		item.style.animationDuration = `${orbitSpinSpeed}s`;
	});
};

containerSpinButton.addEventListener("click", increaseCentralSpin);
//orbitSpinButton.addEventListener("click", increaseOrbitSpin)

const fireConfetti = () => {
	const duration = 1200;
	const end = Date.now() + duration;

	(function frame() {
		const edge = Math.floor(Math.random() * 4);

		let origin;

		switch (edge) {
			case 0:
				origin = { x: Math.random(), y: 0 };
				break;
			case 1:
				origin = { x: Math.random(), y: 1 };
				break;
			case 2:
				origin = { x: 0, y: Math.random() };
				break;
			case 3:
				origin = { x: 1, y: Math.random() };
				break;
		}

		confetti({
			particleCount: 12,
			spread: 120,
			origin,
		});

		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	})();
};
