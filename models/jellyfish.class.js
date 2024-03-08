class Jellyfish extends MoveableObject {
    height = 150;
    width = 100;

    offset = {
        top: 20,
        left: 10,
        right: 10,
        bottom: 20
    }

    IMAGES_WALKING = [
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_2.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_3.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_4.png'

    ]

    DEAD_ANIMATION = [
        'img/2_enemys/2_jellyfish/1_dead/2_lila/L1.png',
        'img/2_enemys/2_jellyfish/1_dead/2_lila/L2.png',
        'img/2_enemys/2_jellyfish/1_dead/2_lila/L3.png',
        'img/2_enemys/2_jellyfish/1_dead/2_lila/L4.png'
    ];



    constructor() {
        super().loadIMG('img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.DEAD_ANIMATION);
        this.x = 500 + Math.random() * 1500;
        this.y = Math.random() * (this.resulutionheight - this.height);
        this.speed = 2 + Math.random() * 0.75;
        this.animate();
    }

    animate() {
        let movingDown = false; 

        setInterval(() => {
            if (movingDown) {
                if (this.y < this.resulutionheight - this.height) {
                    this.moveDown();
                } else {
                    movingDown = false; 
                }
            } else {
                if (this.y > 0) {
                    this.moveUP();
                } else {
                    movingDown = true; 
                }
            }
            if (this.isDead()){
                this.moveUP();
                movingDown =false;
            };


        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DEAD_ANIMATION);
            }else{
                this.playAnimation(this.IMAGES_WALKING);
            }
       
        }, 144);
    }

}