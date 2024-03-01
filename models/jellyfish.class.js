class Jellyfish extends MoveableObject{
    height = 150;
    width = 100;

    IMAGES_WALKING = [
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_2.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_3.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_4.png'
       
    ]

    currentImage = 0;

    constructor() {
        super().loadIMG('../img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.random() * 1500;
        this.y = Math.random() * (this.resulutionheight - this.height);
        this.speed = 0.2 + Math.random() * 0.75;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if ( this.y > 0){
                this.moveUP();
            }
            if (this.y == 0){
                this.moveDown();
            }
           
        }, 1000 / 60);
       
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 144);
    }

}