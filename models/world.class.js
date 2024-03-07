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
        this.deSpawnforPerformance();
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

    deSpawnforPerformance(){
        setTimeout(() => {
            this.level.enemies.splice(0, 3)
        }, 45000);
    }

    checkThorwObject(){
        if(this.keyboard.E && !this.character.mirroredSideways && this.character.poison != 0){
            let bubble = new ThrowableObject(this.character.x + 220, this.character.y + 120, this.character);
            this.throwableObjects.push(bubble);
            this.character.poison -= 20;
            console.log('poisonlevel is', this.character.poison)
            this.poisonBar.setPercentage(this.character.poison);
            setTimeout(() => {
                this.throwableObjects.splice(0, 1);
            },5000);
        }
        if(this.keyboard.E && this.character.mirroredSideways && this.character.poison != 0){
            let bubble = new ThrowableObject(this.character.x + 10, this.character.y + 120, this.character);
            this.throwableObjects.push(bubble);
            this.character.poison -= 20;
            console.log('poisonlevel is', this.character.poison)
            this.poisonBar.setPercentage(this.character.poison);
            setTimeout(() => {
                this.throwableObjects.splice(0, 1);
            },5000);
        }
        
    }

    checkCollisions() {
        // Kollisionen mit den Gegnern überprüfen
        this.level.enemies.forEach((e) => {
            if (this.character.isColliding(e)) {
                this.character.getHit();
                this.statusBar.setPercentage(this.character.health);
            }
        });
    
        // Kollisionen von ThrowableObjects mit Gegnern überprüfen
        this.throwableObjects.forEach((to) => {
            this.level.enemies.forEach((e) => {
                if (to.isColliding(e)) {
                    e.getHit();
                    console.log('outch!', e);
                }
            });
        });
    
        // Kollisionen mit Collectables überprüfen
        this.level.collectables.forEach((co) => {
            if (this.character.isColliding(co)) {
                if (co.type === 1) { // Coin
                    console.log('coin counter up by 1');
                    this.character.coins += 20;
                    this.coinBar.setPercentage(this.character.coins);
                } else if (co.type === 2) { // Poison
                    
                    this.character.poison += 20;
                    console.log('poison counter up by 20', this.character.poison);
                    this.poisonBar.setPercentage(this.character.poison);
                }
                this.level.collectables.splice(this.level.collectables.indexOf(co), 1);
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
        mo.drawFrame(this.ctx);
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