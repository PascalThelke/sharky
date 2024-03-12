let canvas;
let world;
let keyboard = new Keyboard();

function init() {

}

function initGame() {

    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    document.getElementById('footer').style.display = "none";
}

function tryAgain() {
    pauseAllAudios();
    document.getElementById('winscreen_overlay').style.display = 'none';
    document.getElementById('try_again_button').style.display = 'none';
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

function startAllIntervals() {
    for (let i = 1; i < 9999; i++) window.setInterval(i);
}

function pauseAllAudios() {
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}


function showKeys() {
    renderKeys();
    document.getElementById('overlay_container').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('option_overlay').style.transform = 'translateX(0%)';
    }, 125);

}

function renderKeys() {
    document.getElementById('option_overlay').innerHTML = '';
    document.getElementById('option_overlay').innerHTML += `
    <div class="column g20">
            <h2>How to move:</h2>
            <div class="movement_row">
                <span class="button_indicator">W</span>
                <span class ="unfill_font">UP</span>
            </div>
            <div class="movement_row">
                <span class="button_indicator">A</span>
                <span class ="unfill_font">LEFT</span>
            </div>
            <div class="movement_row">
                <span class="button_indicator">S</span>
                <span class ="unfill_font">DOWN</span>
            </div>
            <div class="movement_row">
                <span class="button_indicator">D</span>
                <span class ="unfill_font">RIGHT</span>
            </div>
        </div>
        <div class="column g20 mt40">
            <h2>How to attack:</h2>
            <div class="movement_row">
                <span class="button_indicator">E</span>
                <span class ="unfill_font">RANGE</span>
            </div>
            <div class="movement_row">
                <span class="button_indicator_space">SPACE</span>
                <span class ="unfill_font">MEELE</span>
            </div>
        </div>         
    `;
}

function showAbout() {
    renderAbout();
    document.getElementById('overlay_container').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('option_overlay').style.transform = 'translateY(0%)';
    }, 125);
}

function renderAbout() {

    document.getElementById('option_overlay').innerHTML = '';
    document.getElementById('option_overlay').innerHTML += ` 
    <div class="column g20 w84">
    <h2>Enemies</h2>
    <div class="movement_row">
        <h3>Pufferfisch</h3>
        <img src="./img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png" alt="">
    </div>
    <span class="enemy_explanation">
        Watch out! They will hurt you if you get too close, so try to stay away. Poison doesn't seem to be effective against them, and with their spines, they can resist any form of bubbly things. Maybe a hard slap could do it?
    </span>
    <div class="movement_row">
        <h3>Jellyfish</h3>
        <img src="./img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png" alt="">
    </div>
    <span class="enemy_explanation">
        Be cautious around these jellyfish enemies as they often remain stationary and should not be approached too closely. However, they are susceptible to poison, and if poisoned, they would be defenseless against the influences of their surroundings.
    </span>
    <div class="movement_row">
        <h3>Orca</h3>
        <img src="./img/2_enemys/3_final_enemy/2_floating/1.png" alt="">
    </div>
    <span class="enemy_explanation">
        Beware of these orca as they often emerge unexpectedly and hunt alone. It's best not to cross paths with them. Further information is rare as there are few survivors who have lived through an encounter with this monstrous creature.
    </span>
</div>
<div class="column g20 w84 mt40">
    <h2>Collectables</h2>
    <div class="movement_row">
        <h3>Coins</h3>
        <img src="./img/4_markers//2_green/coin.png" alt="">
    </div>
    <span class="enemy_explanation">
        In this test level, 10 coins are hidden. Can you find them all?
    </span>
    <div class="movement_row">
        <h3>Poison</h3>
        <img src="./img/4_markers/2_green/poison.png" alt="">
    </div>
    <span class="enemy_explanation">
        Refillable resource. As long as you have some of it, you can generate bubbles to inflict damage on your enemies. Awesome!
    </span>
</div>                 
    `;
}

function closeOverlay() {
    document.getElementById('option_overlay').style.transform = 'translateY(200%)';
    setTimeout(() => {
        document.getElementById('overlay_container').style.display = 'none';
    }, 125);

}

function noClose(event) {
    event.stopPropagation();
}

document.getElementById('buttonLeft').addEventListener('touchstart', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.LEFT = true;
});

document.getElementById('buttonRight').addEventListener('touchstart', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.RIGHT = true;
});

document.getElementById('buttonUP').addEventListener('touchstart', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.UP = true;
});

document.getElementById('buttonDown').addEventListener('touchstart', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.DOWN = true;
});

document.getElementById('buttonSpace').addEventListener('touchstart', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.SPACE = true;
});


//keine funktion?
document.getElementById('buttonE').addEventListener('touchstart', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.E = true;
});

document.getElementById('buttonLeft').addEventListener('touchend', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.LEFT = false;
});

document.getElementById('buttonRight').addEventListener('touchend', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.RIGHT = false;
});

document.getElementById('buttonUP').addEventListener('touchend', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.UP = false;
});

document.getElementById('buttonDown').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
});

document.getElementById('buttonSpace').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
});

//keine funktion?
document.getElementById('buttonE').addEventListener('touchend', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.E = false;
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
    } else if (event.key === 'e') {
        keyboard.E = true;
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
    } else if (event.key === 'e') {
        keyboard.E = false;
    } else if (event.key === ' ') {
        keyboard.SPACE = false;
    }
});
