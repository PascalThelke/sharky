let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My character ist', world.character)
}

window.addEventListener('keyup', (event) => {
    if (event.keyCode === 87) { // Taste W
        keyboard.UP = false;
    } else if (event.keyCode === 65) { // Taste A
        keyboard.LEFT = false;
    } else if (event.keyCode === 83) { // Taste S
        keyboard.DOWN = false;
    } else if (event.keyCode === 68) { // Taste D
        keyboard.RIGHT = false;
    } else if (event.keyCode === 32) { // Leertaste
        keyboard.SPACE = false;
    }
});

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 87) { // Taste W
        keyboard.UP = true;
    } else if (event.keyCode === 65) { // Taste A
        keyboard.LEFT = true;
    } else if (event.keyCode === 83) { // Taste S
        keyboard.DOWN = true;
    } else if (event.keyCode === 68) { // Taste D
        keyboard.RIGHT = true;
    } else if (event.keyCode === 32) { // Leertaste
        keyboard.SPACE = true;
    }
});
