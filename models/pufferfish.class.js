class Pufferfish extends MoveableObject {

    height = 100;
    width = 150;

    IMAGES_WALKING = [
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim2.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim3.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim4.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim5.png'
    ]

    currentImage = 0;

    constructor() {
        super().loadIMG('../img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.y = Math.random() * (this.resulutionheight - this.height);
        this.speed = 0.2 + Math.random() * 0.75;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
       
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 144);
    }
}