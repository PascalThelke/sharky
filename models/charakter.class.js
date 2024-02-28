class Character extends MoveableObject {

    width = 300;
    height = 250;
    speed = 10;
    IMAGES_WALKING = [
        'img/1_sharkie/3_swim/1.png',
        'img/1_sharkie/3_swim/2.png',
        'img/1_sharkie/3_swim/3.png',
        'img/1_sharkie/3_swim/5.png',
        'img/1_sharkie/3_swim/6.png'
    ];
    IMAGES_FLOATING = [
        'img/1_sharkie/1_idle/1.png',
        'img/1_sharkie/1_idle/2.png',
        'img/1_sharkie/1_idle/3.png',
        'img/1_sharkie/1_idle/4.png',
        'img/1_sharkie/1_idle/5.png',
        'img/1_sharkie/1_idle/6.png',
        'img/1_sharkie/1_idle/7.png',
        'img/1_sharkie/1_idle/8.png',
        'img/1_sharkie/1_idle/9.png',
        'img/1_sharkie/1_idle/10.png',
        'img/1_sharkie/1_idle/11.png',
        'img/1_sharkie/1_idle/12.png',
        'img/1_sharkie/1_idle/13.png',
        'img/1_sharkie/1_idle/14.png',
        'img/1_sharkie/1_idle/15.png',
        'img/1_sharkie/1_idle/16.png',
        'img/1_sharkie/1_idle/17.png',
        'img/1_sharkie/1_idle/18.png',

        // 'img/1_sharkie/3_swim/1.png',
        // 'img/1_sharkie/3_swim/2.png',
        // 'img/1_sharkie/3_swim/3.png',
        // 'img/1_sharkie/3_swim/4.png',
        // 'img/1_sharkie/3_swim/5.png',
        // 'img/1_sharkie/3_swim/6.png'
    ];
    MEELE_ATTACK = [
        'img/1_sharkie/4_attack/2_fin_slap/1.png',
        'img/1_sharkie/4_attack/2_fin_slap/2.png',
        'img/1_sharkie/4_attack/2_fin_slap/3.png',
        'img/1_sharkie/4_attack/2_fin_slap/4.png',
        'img/1_sharkie/4_attack/2_fin_slap/5.png',
        'img/1_sharkie/4_attack/2_fin_slap/6.png',
        'img/1_sharkie/4_attack/2_fin_slap/7.png',
        'img/1_sharkie/4_attack/2_fin_slap/8.png'
    ]
    DEAD_ANIMATION = [
        'img/1_sharkie/6_dead/1_poisoned/1.png',
        'img/1_sharkie/6_dead/1_poisoned/2.png',
        'img/1_sharkie/6_dead/1_poisoned/3.png',
        'img/1_sharkie/6_dead/1_poisoned/4.png',
        'img/1_sharkie/6_dead/1_poisoned/5.png',
        'img/1_sharkie/6_dead/1_poisoned/6.png',
        'img/1_sharkie/6_dead/1_poisoned/7.png',
        'img/1_sharkie/6_dead/1_poisoned/8.png',
        'img/1_sharkie/6_dead/1_poisoned/9.png',
        'img/1_sharkie/6_dead/1_poisoned/10.png',
        'img/1_sharkie/6_dead/1_poisoned/11.png',
        'img/1_sharkie/6_dead/1_poisoned/12.png'
    ];

    IS_HURT_POISON = [
        'img/1_sharkie/5_hurt/1_poisoned/1.png',
        'img/1_sharkie/5_hurt/1_poisoned/2.png',
        'img/1_sharkie/5_hurt/1_poisoned/3.png',
        'img/1_sharkie/5_hurt/1_poisoned/4.png',
        'img/1_sharkie/5_hurt/1_poisoned/5.png',
    ];

    world;

    constructor() {
        super().loadIMG('../img/1_sharkie/1_idle/1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.MEELE_ATTACK);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.IS_HURT_POISON);
        this.y = 200;
        this.x = 150;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_FLOATING);
            if (this.world.keyboard.SPACE) {
                // const originalX = this.x;
                // this.x += 70;
                this.playAnimation(this.MEELE_ATTACK);
                // setTimeout(() => {
                //     this.x = originalX;
                // }, 250); 
            }
        }, 250);
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.mirroredSideways = false;
            }
            if (this.world.keyboard.LEFT && this.x > -480) {
                this.moveLeft();
                this.mirroredSideways = true;
            }
            if (this.world.keyboard.UP && this.y > this.world.level.level_end_y_top) {
                this.moveUP();
                this.mirroredUpways = true;
                this.mirroredDownways = false;
            }
            if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y_bottom) {
                this.moveDown();
                this.mirroredDownways = true;
                this.mirroredUpways = false;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        setInterval(() => {
            if(this.isDead()){
                this.playAnimation(this.DEAD_ANIMATION);
            }else if(this.isHurt()){
                this.playAnimation(this.IS_HURT_POISON);
            }
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 250);
    }



}