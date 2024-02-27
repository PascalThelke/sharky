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
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.environment);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }

}