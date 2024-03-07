class Endboss extends MoveableObject {
    health = 300;
    height = 300;
    width = 350;

    offset = {
        top: 130,
        left: 30,
        right: 30,
        bottom: 50
    }

    IMAGES_FLOATING = [
        'img/2_enemys/3_final_enemy/2_floating/1.png',
        'img/2_enemys/3_final_enemy/2_floating/2.png',
        'img/2_enemys/3_final_enemy/2_floating/3.png',
        'img/2_enemys/3_final_enemy/2_floating/4.png',
        'img/2_enemys/3_final_enemy/2_floating/5.png',
        'img/2_enemys/3_final_enemy/2_floating/6.png',
        'img/2_enemys/3_final_enemy/2_floating/7.png',
        'img/2_enemys/3_final_enemy/2_floating/8.png',
        'img/2_enemys/3_final_enemy/2_floating/9.png',
        'img/2_enemys/3_final_enemy/2_floating/10.png',
        'img/2_enemys/3_final_enemy/2_floating/11.png',
        'img/2_enemys/3_final_enemy/2_floating/12.png',
        'img/2_enemys/3_final_enemy/2_floating/13.png'
    ];

    DEAD_ANIMATION = [
        'img/2_enemys/3_final_enemy/4_dead/Mesa de trabajo 2 copia 6.png',
        'img/2_enemys/3_final_enemy/4_dead/Mesa de trabajo 2 copia 7.png',
        'img/2_enemys/3_final_enemy/4_dead/Mesa de trabajo 2 copia 8.png',
        'img/2_enemys/3_final_enemy/4_dead/Mesa de trabajo 2 copia 9.png',
        'img/2_enemys/3_final_enemy/4_dead/Mesa de trabajo 2 copia 10.png'
    ];
    
    currentImage = 0;
    constructor() {
        super().loadIMG(this.IMAGES_FLOATING[0]);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.DEAD_ANIMATION);
        this.x = 700*3;
        this.y = 1;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DEAD_ANIMATION);
                this.applyUpwardTrend();
            }else{
                this.playAnimation(this.IMAGES_FLOATING);
            }
        }, 350);
    }
}