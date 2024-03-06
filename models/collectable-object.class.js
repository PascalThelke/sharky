class CollecteableOject extends MoveableObject {
    height = 40;
    width = 40;

    IMAGES_SHINING = [
        'img/4_markers/1_coins/1.png',
        'img/4_markers/1_coins/2.png',
        'img/4_markers/1_coins/3.png',
        'img/4_markers/1_coins/4.png'
    ];

    constructor() {
        super().loadIMG('img/4_markers/1_coins/1.png');
        this.loadImages(this.IMAGES_SHINING);
        this.x = 500 + Math.random() * 1500;
        this.y = 400;
        this.animate();
    }

    animate() {
        let movingDown = false;
        setInterval(() => {
            if (movingDown && this.y < this.y + this.height) {
                this.moveDown();
            } else {
                movingDown = false;
                if (this.y > this.y - this.height) {
                    this.moveUP();
                } else {
                    movingDown = true;
                }
            }
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_SHINING);
        }, 144);
    }


}