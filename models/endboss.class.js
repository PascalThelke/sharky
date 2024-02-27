class Endboss extends MoveableObject{

    IMAGES_WALKING = [
        'img/2_enemys/3_final_enemy/1_introduce/1.png',
        'img/2_enemys/3_final_enemy/1_introduce/2.png',
        'img/2_enemys/3_final_enemy/1_introduce/3.png',
        'img/2_enemys/3_final_enemy/1_introduce/4.png',
        'img/2_enemys/3_final_enemy/1_introduce/5.png',
        'img/2_enemys/3_final_enemy/1_introduce/6.png',
        'img/2_enemys/3_final_enemy/1_introduce/7.png',
        'img/2_enemys/3_final_enemy/1_introduce/8.png',
        'img/2_enemys/3_final_enemy/1_introduce/9.png',
        'img/2_enemys/3_final_enemy/1_introduce/10.png',
    ];

    constructor(){
        super().loadIMG(IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700;
    }
}