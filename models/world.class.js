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
    


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };

    setWorld() {
        this.character.world = this;
        this.throwableObjects.world = this;
    };

    run() {
        setInterval(() => {
            this.checkThorwObject();
            this.checkCollisions();
            this.checkPositionsForDespawn();

        }, 200);
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
        this.poisonBar.setPercentage(this.character.poison);
    }

    checkThrowedObjectCollisions() {
        this.throwableObjects.forEach((to) => {
            this.level.enemies.forEach((e) => {
                if (to.isColliding(e) && (e instanceof Jellyfish || e instanceof Endboss)) {
                    this.throwableObjects.splice(this.throwableObjects.indexOf(to), 1);
                    e.getHit();
                    console.log('outch!', e);
                    if (e.health == 0) {
                        console.log('me dead', e);
                        e.timeOfDeath = Date.now() + 6000;
                    }
                }
            });
        });
    };

    checkCharacterCollisions() {
        this.level.enemies.forEach((e) => {
            if (this.character.isColliding(e)) {
                if (this.character.isAttacking && (e instanceof Pufferfish || e instanceof Endboss)) {
                    e.getHit();
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

    checkCollectableCollisions() {
        this.level.collectables.forEach((co) => {
            if (this.character.isColliding(co)) {
                if (co.type === 1) { // Coin
                    this.character.coins += 20;
                    this.coinBar.setPercentage(this.character.coins);
                } else if (co.type === 2) { // Poison
                    this.character.poison += 20;
                    this.poisonBar.setPercentage(this.character.poison);
                }
                this.level.collectables.splice(this.level.collectables.indexOf(co), 1);
            }
        });
    }

    checkDeadEnemyPosition() {
        this.level.enemies.forEach((e) => {
            if (e.timeOfDeath && Date.now() > e.timeOfDeath && e.y < 0) {
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