class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish()
    ];
    environment = [
        new Barrier(),
        new Barrier(),
        new Barrier()
    ];
    backgroundObjects = [
        new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 0),
        new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L1.png', 0),
        new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 0),
        new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L1.png', 0),     
    ];
    background = [
        new Background('img/3_backgrounds/3_layers/5_water/L1.png', 0),
        new Background('img/3_backgrounds/3_layers/1_light/1.png', 0)
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.environment);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        if (mo.mirroredSideways){
            this.mirrorSideways(mo);
        }
        // if (mo.mirroredUpways){
        //     this.mirrorUpwards(mo);
        // }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
        if (mo.mirroredSideways){
            this.mirrorBackwards(mo);
        }
        // if (mo.mirroredUpways){
        //     this.mirrorUpwards(mo);
        // }
        
    }

    mirrorSideways(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0); // wird um die eigene Breite verschoben
        this.ctx.scale(-1, 1);  // kontext wird gespiegelt
        mo.x = mo.x * -1;  // x koordinate spiegeln
    }

    mirrorBackwards(mo){
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