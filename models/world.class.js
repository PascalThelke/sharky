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
    };

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
        this.boss_encounter_sound.volume = 0.09;
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies[this.level.enemies.length - 1].world = this;
    };

    run() {
        setInterval(() => {
            this.checkThorwObject();
            this.checkCollisions();
            this.checkPositionsForDespawn();

        }, 150);
        setInterval(() => {
            this.checkBossCollisions();
        }, 1);

    };

    checkCollisions() {
        this.checkCharacterCollisions();
        this.checkThrowedObjectCollisions();
        this.checkCollectableCollisions();

    }

    checkPositionsForDespawn() {
        this.checkDeadEnemyPosition();
        this.checkBubblePosition();
    }

    checkThorwObject() {
        if (this.keyboard.E && !this.character.mirroredSideways && this.character.poison != 0) {
            let bubble = new ThrowableObject(this.character.x + 220, this.character.y + 120, this.character);
            this.createBubble(bubble);
        }
        if (this.keyboard.E && this.character.mirroredSideways && this.character.poison != 0) {
            let bubble = new ThrowableObject(this.character.x + 10, this.character.y + 120, this.character);
            this.createBubble(bubble);
        }

    };

    createBubble(bubble) {
        this.throwableObjects.push(bubble);
        bubble.timeOfDeath = Date.now() + 6000;
        this.character.poison -= 20;
        this.ranged_sound.play();
        this.poisonBar.setPercentage(this.character.poison);
    }

    checkThrowedObjectCollisions() {
        this.throwableObjects.forEach((to) => {
            this.level.enemies.forEach((e) => {
                if (to.isColliding(e) && (e instanceof Jellyfish || e instanceof Endboss || e instanceof Pufferfish)) {
                    this.throwableObjects.splice(this.throwableObjects.indexOf(to), 1);
                    e.getHit();
                    console.log('outch!', e);
                    if (e.health == 0) {
                        console.log('me dead', e);
                        e.timeOfDeath = Date.now() + 6000;
                        if(e.y < 0){
                            this.world.death_sound.play();
                        }
                    }
                }
            });
        });
    };

    checkCharacterCollisions() {
        this.level.enemies.forEach((e) => {
            if (this.character.isColliding(e) && !e.isDead()) {
                if (this.character.isAttacking && (e instanceof Pufferfish || e instanceof Endboss)) {
                    e.getHitMeele();
                    console.log('oouf!', e);
                    if (e.health == 0) {
                        console.log('me dead', e);
                        e.timeOfDeath = Date.now() + 6000;
                    }
                } else {
                    this.character.getHit();
                    this.statusBar.setPercentage(this.character.health);
                }
            }
        });
    };

    checkBossCollisions() {
        this.level.enemies.forEach((e) => {
            if (this.level.enemies[this.level.enemies.length - 1].isColliding(e) && (e instanceof Jellyfish || e instanceof Pufferfish)) {
                e.getHitMeele();
                console.log('oouf!', e);
                if (e.health == 0) {
                    console.log('me dead', e);
                    e.timeOfDeath = Date.now() + 6000;
                }

            }
        });
    };

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
        });
    }


    checkDeadEnemyPosition() {
        this.level.enemies.forEach((e) => {
            if (e.timeOfDeath && Date.now() > e.timeOfDeath && e.y > 0) {
                this.level.enemies.splice(this.level.enemies.indexOf(e), 1);
            }
        });
    }

    checkBubblePosition() {
        this.throwableObjects.forEach((to) => {
            if (to.timeOfDeath && Date.now() > to.timeOfDeath && to.y < 0) {
                this.throwableObjects.splice(this.throwableObjects.indexOf(to), 1);
            }
        });
    }



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
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.mirroredSideways) {
            this.mirrorSideways(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.mirroredSideways) {
            this.mirrorBackwards(mo);
        }
    }

    mirrorSideways(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0); // wird um die eigene Breite verschoben
        this.ctx.scale(-1, 1);  // kontext wird gespiegelt
        mo.x = mo.x * -1;  // x koordinate spiegeln
    }

    mirrorBackwards(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}