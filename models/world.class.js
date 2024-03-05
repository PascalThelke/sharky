class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.throwableObjects.world = this;
    }

    run() {
        setInterval(() => {
            this.checkThorwObject();
            this.checkCollisions();
        }, 200);
    }

    checkThorwObject(){
        if(this.keyboard.E && !this.character.mirroredSideways){
            let bottle = new ThrowableObject(this.character.x + 220, this.character.y + 120, this.character);
            this.throwableObjects.push(bottle);
        }
        if(this.keyboard.E && this.character.mirroredSideways){
            let bottle = new ThrowableObject(this.character.x + 10, this.character.y + 120, this.character);
            this.throwableObjects.push(bottle);
        }
        
    }

    checkCollisions() {
        this.level.enemies.forEach((e) => {
            if (this.character.isColliding(e)) {
                this.character.getHit();
                this.statusBar.setPercentage(this.character.health)
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
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        //draw() wird immer wieder abgerufen
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
        // if (mo.mirroredUpways){
        //     this.mirrorUpwards(mo);
        // }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.mirroredSideways) {
            this.mirrorBackwards(mo);
        }
        // if (mo.mirroredUpways){
        //     this.mirrorUpwards(mo);
        // }

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

    // mirrorUpwards(mo){
    //     this.ctx.save(); // Aktuellen Zustand des Canvas-Kontextes speichern
    //     this.ctx.translate(mo.x + mo.width / 2, mo.y + mo.height / 2); // Kontext wird zum Mittelpunkt des Objekts verschoben
    //     this.ctx.rotate(Math.PI / -2); // Das Bild um 90 Grad drehen
    //     this.ctx.drawImage(mo.img, -mo.width / 2, -mo.height / 2, mo.width, mo.height); // Charakter zeichnen
    //     this.ctx.restore(); // Gespeicherten Zustand des Canvas-Kontextes wiederherstellen

    // }



}