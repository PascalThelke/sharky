let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My character ist', world.character)
}

document.getElementById('buttonLeft').addEventListener('touchstart' , (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
});

document.getElementById('buttonRight').addEventListener('touchstart' , (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
});

document.getElementById('buttonSpace').addEventListener('touchstart' , (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
});

document.getElementById('buttonLeft').addEventListener('touchend' , (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
});

document.getElementById('buttonRight').addEventListener('touchend' , (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
});

document.getElementById('buttonSpace').addEventListener('touchend' , (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
});

// Umwandlung der Touch-Ereignis-Listener in if-else-Anweisungen
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        keyboard.UP = true;
    } else if (event.key === 'a') {
        keyboard.LEFT = true;
    } else if (event.key === 's') {
        keyboard.DOWN = true;
    } else if (event.key === 'd') {
        keyboard.RIGHT = true;
    } else if (event.key === ' ') {
        keyboard.SPACE = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        keyboard.UP = false;
    } else if (event.key === 'a') {
        keyboard.LEFT = false;
    } else if (event.key === 's') {
        keyboard.DOWN = false;
    } else if (event.key === 'd') {
        keyboard.RIGHT = false;
    } else if (event.key === ' ') {
        keyboard.SPACE = false;
    }
});
