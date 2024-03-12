let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Initializes the game.
 * @param {HTMLElement} canvas - The canvas element.
 * @param {Object} keyboard - The keyboard object.
 */
function initGame() {
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    document.getElementById('footer').style.display = "none";
}

/**
 * Returns to the main menu.
 */
function backToMenu() {
    document.getElementById('winscreen_overlay').style.display = 'none';
    document.getElementById('try_again_button').style.display = 'none';
    location.reload();
}

/**
 * Shows the keys overlay.
 */
function showKeys() {
    renderKeys();
    document.getElementById('overlay_container').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('option_overlay').style.transform = 'translateX(0%)';
    }, 125);
}

/**
 * Shows the about overlay.
 */
function showAbout() {
    renderAbout();
    document.getElementById('overlay_container').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('option_overlay').style.transform = 'translateY(0%)';
    }, 125);
}

/**
 * Shows the legal notice overlay.
 */
function showLegalNotice() {
    renderLegalNotice();
    document.getElementById('overlay_container').style.display = 'unset';
    setTimeout(() => {
        document.getElementById('option_overlay').style.transform = 'translateY(0%)';
    }, 125);
}

/**
 * Shows the privacy policy overlay.
 */
function showPrivacyPolicy() {
    renderPrivacyPolicy();
    document.getElementById('overlay_container').style.display = 'unset';
    setTimeout(() => {
        document.getElementById('option_overlay').style.transform = 'translateY(0%)';
    }, 125);
}


/**
 * Closes the overlay.
 */
function closeOverlay() {
    document.getElementById('option_overlay').style.transform = 'translateY(200%)';
    setTimeout(() => {
        document.getElementById('overlay_container').style.display = 'none';
    }, 125);
}

/**
 * Stops the close event.
 */
function noClose(event) {
    event.stopPropagation();
}


/**
 * Renders the text into the key overlay.
 */
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


/**
 * Renders the text into the about overlay.
 */
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


/**
 * Renders the text into the legal notice overlay.
 */
function renderLegalNotice() {
    document.getElementById('option_overlay').innerHTML = '';
    document.getElementById('option_overlay').innerHTML += ` 
    <h2>Legal Notice</h2>
    <p>
        This website and its content are owned and operated by:
    </p>
    <p class="mr85">
        Pascal Thelke <br>
        Talstr. 32<br>
        Hattingen, Germany<br>
        Email: <a href="mailto:p.thelke@outlook.de">p.thelke@outlook.de</a>
    </p>
    <h3>Disclaimer:</h3>
    <p>
        We strive to provide accurate and up-to-date information on this website; however, we cannot
        guarantee the accuracy, completeness, or reliability of the content. The use of the information on
        this website is at your own risk. We reserve the right to modify or discontinue any aspect of the
        website at any time without prior notice.
    </p>
    <h3>Third-Party Websites:</h3>
    <p>
        This website may contain links to third-party websites. These links are provided solely for your
        convenience and do not imply any endorsement of the content on those websites. We are not
        responsible for the content of any third-party websites linked to from this website.
    </p>
    <h3>Copyright Notice:</h3>
    <p>
        All content, including text, images, graphics, and other materials on this website, are the property
        of Pascal Thelke unless otherwise stated. Unauthorized use or reproduction of any content from this
        website is prohibited.
    </p>
    
    `;
}


/**
 * Renders the text into the privacy policy overlay.
 */
function renderPrivacyPolicy() {
    document.getElementById('option_overlay').innerHTML = '';
    document.getElementById('option_overlay').innerHTML += ` 
    <h2>Privacy policy</h2>
        <p>
            We do not collect or use any personal data of our users. Our game does not process any data
             outside of the user-generated gameplay behavior within the game.
         </p>
        <p>
            No information is gathered to be
            shared with third parties, and we do not use any analytics tools to track user behavior outside of
            the game.
        </p>
        <p>
            All data generated within the game is solely used for the gameplay experience and not for
            any other purposes.
        </p>
    `;
}


/**
 * Checks if any keys pressed.
 */
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

document.getElementById('buttonE').addEventListener('touchend', (e) => {
    if (event.cancelable) event.preventDefault();
    keyboard.E = false;
});

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
