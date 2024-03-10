class Endboss extends MoveableObject {
    health = 300;
    height = 250;
    width = 300;
    speed = 5;
    currentImageAttacking;

    offset = {
        top: 130,
        left: 30,
        right: 30,
        bottom: 50
    }

    IMAGES_SPAWNING = [
        'img/2_enemys/3_final_enemy/1_introduce/1.png',
        'img/2_enemys/3_final_enemy/1_introduce/2.png',
        'img/2_enemys/3_final_enemy/1_introduce/3.png',
        'img/2_enemys/3_final_enemy/1_introduce/4.png',
        'img/2_enemys/3_final_enemy/1_introduce/5.png',
        'img/2_enemys/3_final_enemy/1_introduce/6.png',
        'img/2_enemys/3_final_enemy/1_introduce/7.png',
        'img/2_enemys/3_final_enemy/1_introduce/8.png',
        'img/2_enemys/3_final_enemy/1_introduce/9.png',
        'img/2_enemys/3_final_enemy/1_introduce/10.png'
    ];

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

    IS_HURT = [
        'img/2_enemys/3_final_enemy/5_hurt/1.png',
        'img/2_enemys/3_final_enemy/5_hurt/2.png',
        'img/2_enemys/3_final_enemy/5_hurt/3.png',
        'img/2_enemys/3_final_enemy/5_hurt/4.png'
    ];

    DEAD_ANIMATION = [
        'img/2_enemys/3_final_enemy/4_dead/deadanimation1.png',
        'img/2_enemys/3_final_enemy/4_dead/deadanimation2.png',
        'img/2_enemys/3_final_enemy/4_dead/deadanimation3.png',
        'img/2_enemys/3_final_enemy/4_dead/deadanimation4.png',
        'img/2_enemys/3_final_enemy/4_dead/deadanimation5.png'
    ];

    MEELE_ATTACK = [
        'img/2_enemys/3_final_enemy/3_attack/1.png',
        'img/2_enemys/3_final_enemy/3_attack/2.png',
        'img/2_enemys/3_final_enemy/3_attack/3.png',
        'img/2_enemys/3_final_enemy/3_attack/4.png',
        'img/2_enemys/3_final_enemy/3_attack/5.png',
        'img/2_enemys/3_final_enemy/3_attack/6.png'
    ];


    constructor() {
        super().loadIMG(this.IMAGES_FLOATING[0]);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IS_HURT);
        this.loadImages(this.MEELE_ATTACK);
        this.x = 700 * 10;
        this.y = 1;
        this.animate();
    }


    animate() {
        // interval for checking dead animation
        setInterval(() => {
            if (this.isDead() && this.currentImage < this.DEAD_ANIMATION.length) {
                this.playAnimation(this.DEAD_ANIMATION);
            } else if (this.deadAnimationPlayed) {
                const lastImage = this.DEAD_ANIMATION.slice(this.DEAD_ANIMATION.length - 1);
                this.playAnimation(lastImage);
            }
            this.currentImage++
            if (this.isDead() && !this.deadAnimationPlayed) {
                this.deadAnimationPlayed = true;
            }

        }, 200);

        //interval for checking spawnanimation
        setInterval(() => {
            if (this.currentImage < this.IMAGES_SPAWNING.length && this.firstContact) {
                this.x = 2400;
                this.y = 1;
                this.playAnimation(this.IMAGES_SPAWNING);

            } else if (this.firstContact && !this.isDead()) {
                this.playAnimation(this.IMAGES_FLOATING);
            }
            this.currentImage++;
            if (this.world.character.x > 1800 && !this.firstContact) {
                this.currentImage = 0;
                this.firstContact = true;


            }

        }, 250);

        //Interval for checking hurt animation
        setInterval(() => {
            if (!this.isDead() && this.isHurt()) {
                this.playAnimation(this.IS_HURT);
            } else if (this.isDead()) {
                this.applyUpwardTrend();
            }
        }, 50);

        //interval für moveset
        let movingDown = false;

        setInterval(() => {
            if (movingDown && this.firstContact && !this.isDead()) {
                if (this.y < this.resulutionheight - this.height && this.firstContact) {
                    this.moveDown();
                } else {
                    movingDown = false;
                }
            } else {
                if (this.y > -100 && this.firstContact && !this.isDead()) {
                    this.moveUP();
                } else {
                    movingDown = true;
                }
            }
            if (this.isDead()) {
                this.speed = 0.5;
                this.moveUP();
                movingDown = false;
            };


        }, 1000 / 60);


        let movingForward = false;

        setInterval(() => {
            if (movingForward && this.firstContact && !this.isHurt() && !this.isDead() && !this.attackAnimationPlayed) {
                if (this.x < this.resolutionwidth - this.width) {
                    this.moveRight();
                } else {
                    movingForward = false;
                }
            } else if (!movingForward && this.firstContact && !this.isHurt() && !this.isDead() && this.attackAnimationPlayed) {
                if (this.x > 0) {
                    this.moveLeft();
                } else {
                    movingForward = true;
                }
            }

        }, 1000 / 60);

        
        // setInterval(() => {
        //     if (movingDown){
        //         movingDown = false;
        //     }else if (!movingDown){
        //         movingDown = true;
        //     }
        // }, 3000);
        


        setInterval(() => {
            if (!this.isDead() && !this.isHurt() && this.firstContact && !this.attackAnimationPlayed) {
                setTimeout(() => {
                    if (!this.isDead() && this.currentImageAttacking < this.MEELE_ATTACK.length - 1) {
                        this.playAnimation(this.MEELE_ATTACK);
                        this.currentImageAttacking++;
                    } else if (!this.isDead()) {
                        this.currentImageAttacking = 0;
                        this.attackAnimationPlayed = true;
                        setTimeout(() => {
                            this.attackAnimationPlayed = false;
                        }, 4000);
                    }
                }, 4000);
            }
        }, 200);



    }
}