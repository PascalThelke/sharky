class Character extends MoveableObject {

    width = 300;
    height = 250;
    speed = 10;
    lastActionTime = new Date().getTime();

    offset = {
        top: 120,
        left: 60,
        right: 60,
        bottom: 55
    }


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

    RANGE_ATTACK = [
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/1.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/2.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/3.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/4.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/5.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/6.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/7.png',
        'img/1_sharkie/4_attack/1_bubble_trap/2_op_with_bubble_formation/8.png'
    ];

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

    SLEEP_ANIMATION = [
        'img/1_sharkie/2_long_idle/I1.png',
        'img/1_sharkie/2_long_idle/I2.png',
        'img/1_sharkie/2_long_idle/I3.png',
        'img/1_sharkie/2_long_idle/I4.png',
        'img/1_sharkie/2_long_idle/I5.png',
        'img/1_sharkie/2_long_idle/I6.png',
        'img/1_sharkie/2_long_idle/I7.png',
        'img/1_sharkie/2_long_idle/I8.png',
        'img/1_sharkie/2_long_idle/I9.png',
        'img/1_sharkie/2_long_idle/I10.png',
        'img/1_sharkie/2_long_idle/I11.png',
        'img/1_sharkie/2_long_idle/I12.png',
        'img/1_sharkie/2_long_idle/I13.png',
        'img/1_sharkie/2_long_idle/I14.png'
    ];

    world;

    constructor() {
        super().loadIMG('../img/1_sharkie/1_idle/1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.MEELE_ATTACK);
        this.loadImages(this.RANGE_ATTACK);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.IS_HURT_POISON);
        this.loadImages(this.SLEEP_ANIMATION);
        this.y = 200;
        this.x = 150;
        this.animate();
    }

    animate() {
        let sleepAnimationPlayed = false;
        let deadAnimationPlayed = false;

        setInterval(() => {
            const currentTime = new Date().getTime();
            const timePassed = (currentTime - this.lastActionTime) / 1000;
            if (timePassed >= 5) {
                if (!sleepAnimationPlayed) {
                    this.playAnimation(this.SLEEP_ANIMATION);
                    sleepAnimationPlayed = true;
                }
                else {
                    const lastIndex = this.SLEEP_ANIMATION.length - 1;
                    const lastFourImages = this.SLEEP_ANIMATION.slice(lastIndex - 3, lastIndex + 1);
                    this.playAnimation(lastFourImages);
                }
            } else {
                // Wenn eine Aktion ausgeführt wird, setzen Sie sleepAnimationPlayed zurück
                sleepAnimationPlayed = false;
                this.playAnimation(this.IMAGES_FLOATING);
            }
        }, 350);

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.getLastActionTime();
                this.mirroredSideways = false;
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_end_y) {
                this.moveLeft();
                this.getLastActionTime();
                this.mirroredSideways = true;
            }
            if (this.world.keyboard.UP && this.y > this.world.level.level_end_top) {
                this.moveUP();
                this.getLastActionTime();
                this.mirroredUpways = true;
                this.mirroredDownways = false;
            }
            if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_bottom) {
                this.moveDown();
                this.getLastActionTime();
                this.mirroredDownways = true;
                this.mirroredUpways = false;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DEAD_ANIMATION);
            } else if (this.isHurt()) {
                this.playAnimation(this.IS_HURT_POISON);
            }
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
            }
            if (this.world.keyboard.SPACE) {
                this.playAnimation(this.MEELE_ATTACK);
            }
            if (this.world.keyboard.E)
                this.playAnimation(this.RANGE_ATTACK);

        }, 350);
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.playAnimation(this.MEELE_ATTACK);
            }
            if (this.world.keyboard.E) {
                this.playAnimation(this.RANGE_ATTACK);
                this.createBubbble();
            }

        }, 150);
    }

    createBubbble(){
        bubble = new ThrowableObject();
    }


}