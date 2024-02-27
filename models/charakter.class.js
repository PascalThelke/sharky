class Character extends MoveableObject {

    width = 300;
    height = 250;

    IMAGES_WALKING = [
        'img/1_sharkie/3_swim/1.png',
        'img/1_sharkie/3_swim/2.png',
        'img/1_sharkie/3_swim/3.png',
        'img/1_sharkie/3_swim/5.png',
        'img/1_sharkie/3_swim/6.png'
    ];


    constructor() {
        super().loadIMG('../img/1_sharkie/1_idle/1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.y = 200;
        this.x = -50;
        this.animate();
    }

    animate(){
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 144);
    }


}