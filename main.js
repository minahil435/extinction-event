const dinoTop = document.querySelectorAll('.cross-it');
for (const dino of dinoTop) {
    dino.addEventListener('click', function (event) {
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.textDecoration = 'line-through';
    });
}

const dinoMid = document.querySelectorAll('.fade');
for (const dino of dinoMid) {
    dino.addEventListener('click', function (event) {
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = '0';
    });
}

const dinoBottom = document.querySelectorAll('.obscurity');
for (const dino of dinoBottom) {
    dino.addEventListener('click', function (event) {
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.width = '0px'
    });
}

const all = document.querySelector('#destroy-all');
all.addEventListener('click', All);

function All() {
    for (const dino of dinoTop) {
        dino.style.textDecoration = 'line-through';
    }
    for (const dino of dinoMid) {
        dino.style.opacity = '0';
    }
    for (const dino of dinoBottom) {
        dino.style.width = '0px'
    }
}