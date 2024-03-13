/**
 * Represents the game world containing characters, levels, and game logic.
 */
class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar(20, 10, 0, 100);
    coinBar = new StatusBar(20, 50, 1, 0);
    poisonBar = new StatusBar(20, 90, 2, 0);
    throwableObjects = [];
    allAudios = [];
    SOUNDS = [
        'audio/1movement_sound.mp3',
        'audio/1bubbles_ranged.mp3',
        'audio/1snore.mp3',
        'audio/1meele.mp3',
        'audio/1hurt.mp3',
        'audio/1death.mp3',
        'audio/1game-over.mp3',
        'audio/1background_music.mp3',
        'audio/1background_sound.mp3',
        'audio/1coin.mp3',
        'audio/1poison.mp3',
        'audio/1orca.mp3',
        'audio/1boss_encounter.mp3'
    ];

    swim_sound = new Audio(this.SOUNDS[0]);
    ranged_sound = new Audio(this.SOUNDS[1]);
    snore_sound = new Audio(this.SOUNDS[2]);
    meele_sound = new Audio(this.SOUNDS[3]);
    hurt_sound = new Audio(this.SOUNDS[4]);
    death_sound = new Audio(this.SOUNDS[5]);
    game_over_sound = new Audio(this.SOUNDS[6]);
    background_music = new Audio(this.SOUNDS[7]);
    background_sound = new Audio(this.SOUNDS[8]);
    coin_sound = new Audio(this.SOUNDS[9]);
    poison_sound = new Audio(this.SOUNDS[10]);
    boss_spawn_sound = new Audio(this.SOUNDS[11]);
    boss_encounter_sound = new Audio(this.SOUNDS[12]);

    /**
     * Constructs a new World instance.
     * @param {HTMLCanvasElement} canvas - The HTML canvas element to render the game on.
     * @param {Keyboard} keyboard - The keyboard input handler for controlling the game.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setVolume();
        this.draw();
        this.setWorld();
        this.run();
        this.background_music.play();
        this.background_sound.play();
    }

    /**
     * Sets the volume levels for various audio elements in the game.
     */
    setVolume() {
        this.swim_sound.volume = 0.05;
        this.meele_sound.volume = 0.2;
        this.ranged_sound.volume = 0.1;
        this.snore_sound.volume = 0.3;
        this.hurt_sound.volume = 0.05;
        this.death_sound.volume = 0.05;
        this.game_over_sound.volume = 0.09;
        this.background_music.volume = 0.09;
        this.background_sound.volume = 0.4;
        this.poison_sound.volume = 0.09;
        this.coin_sound.volume = 0.09;
        this.boss_spawn_sound.volume = 0.5;
        this.boss_encounter_sound.volume = 0.09;
    }

    /**
     * Sets the world reference for the character and the last enemy in the level.
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies[this.level.enemies.length - 1].world = this;
    }

    /**
     * Runs the main game loop, checking for various game events and collisions periodically.
     */
    run() {
        setInterval(() => {
            this.checkThorwObject();
            this.checkCollisions();
            this.checkPositionsForDespawn();

        }, 150);
        setInterval(() => {
            this.checkBossCollisions();
        }, 1);
    }

    /**
     * Checks for collisions between various game entities.
     */
    checkCollisions() {
        this.checkCharacterCollisions();
        this.checkThrowedObjectCollisions();
        this.checkCollectableCollisions();
    }

    /**
     * Checks positions of entities for despawning conditions.
     */
    checkPositionsForDespawn() {
        this.checkDeadEnemyPosition();
        this.checkBubblePosition();
    }

    /**
     * Checks conditions for throwing a throwable object (bubble) based on keyboard input and character state.
     */
    checkThorwObject() {
        if (this.keyboard.E && !this.character.mirroredSideways && this.character.poison != 0) {
            let bubble = new ThrowableObject(this.character.x + 220, this.character.y + 120, this.character);
            this.createBubble(bubble);
        }
        if (this.keyboard.E && this.character.mirroredSideways && this.character.poison != 0) {
            let bubble = new ThrowableObject(this.character.x + 10, this.character.y + 120, this.character);
            this.createBubble(bubble);
        }
    }

    /**
     * Creates a new throwable object (bubble) and adds it to the list of throwable objects.
     * @param {ThrowableObject} bubble - The throwable object (bubble) to create.
     */
    createBubble(bubble) {
        this.throwableObjects.push(bubble);
        bubble.timeOfDeath = Date.now() + 6000;
        this.character.poison -= 20;
        this.ranged_sound.play();
        this.poisonBar.setPercentage(this.character.poison);
    }

    /**
     * Checks for collisions between throwable objects and enemies, and updates game state accordingly.
     * @param {ThrowableObject} to - The throwable object being checked for collisions.
     * @param {Enemy} e - The enemy being checked for collisions with the throwable object.
     */
    checkThrowedObjectCollisions() {
        this.throwableObjects.forEach((to) => {
            this.level.enemies.forEach((e) => {
                if (to.isColliding(e) && (e instanceof Jellyfish || e instanceof Endboss || e instanceof Pufferfish)) {
                    this.throwableObjects.splice(this.throwableObjects.indexOf(to), 1);
                    e.getHit();
                    if (e.health == 0) {
                        e.timeOfDeath = Date.now() + 6000;
                        if (e.y < 0) {
                            this.world.death_sound.play();
                        }
                    }
                }
            });
        });
    }

    /**
     * Checks for collisions between the character and enemies, and updates game state accordingly.
     * @param {Enemy} e - The enemy being checked for collision with the character.
     */
    checkCharacterCollisions() {
        this.level.enemies.forEach((e) => {
            if (this.character.isColliding(e) && !e.isDead()) {
                if (this.character.isAttacking && (e instanceof Pufferfish || e instanceof Endboss)) {
                    e.getHitMeele();
                    if (e.health == 0) {
                        e.timeOfDeath = Date.now() + 6000;
                    }
                } else {
                    this.character.getHit();
                    this.statusBar.setPercentage(this.character.health);
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and boss enemies, and updates game state accordingly.
     * @param {Enemy} e - The boss enemy being checked for collision with the character.
     */
    checkBossCollisions() {
        this.level.enemies.forEach((e) => {
            if (this.level.enemies[this.level.enemies.length - 1].isColliding(e) && (e instanceof Jellyfish || e instanceof Pufferfish)) {
                e.getHitMeele();
                if (e.health == 0) {
                    e.timeOfDeath = Date.now() + 6000;
                }

            }
        });
    }

    /**
     * Checks for collisions between the character and collectable objects, and updates game state accordingly.
     * @param {Collectable} co - The collectable object being checked for collision with the character.
     */
    checkCollectableCollisions() {
        this.level.collectables.forEach((co) => {
            if (this.character.isColliding(co)) {
                if (co.type === 1) { // Coin
                    this.character.coins += 10;
                    this.coinBar.setPercentage(this.character.coins);
                    this.coin_sound.play();
                } else if (co.type === 2) { // Poison
                    this.character.poison += 20;
                    this.poisonBar.setPercentage(this.character.poison);
                    this.poison_sound.play();
                }
                this.level.collectables.splice(this.level.collectables.indexOf(co), 1);
            }
        })
    }

    /**
     * Checks positions of dead enemies for despawning conditions.
     * @param {Enemy} e - The dead enemy being checked for despawning conditions.
     */
    checkDeadEnemyPosition() {
        this.level.enemies.forEach((e) => {
            if (e.timeOfDeath && Date.now() > e.timeOfDeath && e.y > 0) {
                this.level.enemies.splice(this.level.enemies.indexOf(e), 1);
            }
        })
    }

    /**
     * Checks positions of bubbles (throwable objects) for despawning conditions.
     * @param {ThrowableObject} to - The bubble (throwable object) being checked for despawning conditions.
     */
    checkBubblePosition() {
        this.throwableObjects.forEach((to) => {
            if (to.timeOfDeath && Date.now() > to.timeOfDeath && to.y < 0) {
                this.throwableObjects.splice(this.throwableObjects.indexOf(to), 1);
            }
        })
    }

    /**
     * Draws all game objects on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.level.environment);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.collectables);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    /**
     * Adds an array of objects to the map.
     * @param {Array} objects - The array of objects to be added to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * Adds a map object to the game map and handles mirroring if necessary.
     * @param {MapObject} mo - The map object to be added to the map.
     */
    addToMap(mo) {
        if (mo.mirroredSideways) {
            this.mirrorSideways(mo);
        }
        mo.draw(this.ctx);
        if (mo.mirroredSideways) {
            this.mirrorBackwards(mo);
        }
    }

    /**
     * Mirrors a map object sideways.
     * @param {MapObject} mo - The map object to be mirrored.
     */
    mirrorSideways(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the canvas state and reverses the mirroring of a map object.
     * @param {MapObject} mo - The map object to reverse the mirroring for.
     */
    mirrorBackwards(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
    
    /**
     * Mutes or unmutes all sounds in the game.
     * @param {boolean} mute - True to mute all sounds, false to unmute.
     */
    muteAllSounds(mute) {
        this.swim_sound.muted = mute;
        this.ranged_sound.muted = mute;
        this.snore_sound.muted = mute;
        this.meele_sound.muted = mute;
        this.hurt_sound.muted = mute;
        this.death_sound.muted = mute;
        this.game_over_sound.muted = mute;
        this.background_music.muted = mute;
        this.background_sound.muted = mute;
        this.poison_sound.muted = mute;
        this.coin_sound.muted = mute;
        this.boss_spawn_sound.muted = mute;
        this.boss_encounter_sound.muted = mute;
    }

}

