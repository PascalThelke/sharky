/**
 * Represents the character object that extends the MoveableObject class.
 *  @extends MoveableObject
 */
class Character extends MoveableObject {
    world;
    width = 300;
    height = 250;
    speed = 10;
    coins = 0;
    poison = 0;
    originOffset;
    isAttacking = false;
    intervalIds = [];
    movementInterval;
    sleepAnimationPlayed = false;
    animationInterval;
    emoteInterval;
    mirroredMeeleOffset = {
        top: 120,
        left: -20,
        right: 180,
        bottom: 55
    }
    meeleOffset = {
        top: 120,
        left: 180,
        right: -20,
        bottom: 55
    };
    offset = {
        top: 120,
        left: 60,
        right: 60,
        bottom: 55
    };

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
        'img/1_sharkie/1_idle/18.png'
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
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/1.png',
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/2.png',
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/3.png',
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/4.png',
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/5.png',
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/6.png',
        'img/1_sharkie/4_attack/1_bubble_trap/3_op2_without_bubbles/7.png'
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


    /**
    * Initializes a new instance of the Character class.
    */
    constructor() {
        super().loadIMG('img/1_sharkie/1_idle/1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.MEELE_ATTACK);
        this.loadImages(this.RANGE_ATTACK);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.IS_HURT_POISON);
        this.loadImages(this.SLEEP_ANIMATION);
        this.y = 200;
        this.x = 150;
        this.originOffset = this.offset;
        this.animate();
    };

    /**
    * Initiates various animation intervals.
    */
    animate() {
        this.movementsInterval();
        this.sleepAnimationInterval();
        this.deadAnimationInterval();
        this.hurtAnimationInterval();
        this.attackAnimationInterval();
    };

    /**
     * Initiates the interval for attack animations.
     */
    attackAnimationInterval() {
        this.emoteInterval = setInterval(() => this.playAttackAnimation(), 50);
        this.intervalIds.push(this.emoteInterval);
    };

    /**
     * Initiates the interval for sleep animations.
     */
    sleepAnimationInterval() {
        this.animationInterval = setInterval(() => this.playSleepAnimation(), 350);
        this.intervalIds.push(this.animationInterval);
    };


    /**
     * Initiates the interval for movement animations.
     */
    movementsInterval() {
        this.movementInterval = setInterval(() => this.playMovementAnimation(), 1000 / 60);
        this.intervalIds.push(this.movementInterval);
    };

    /**
     * Initiates the interval for hurt animations.
     */
    hurtAnimationInterval() {
        setInterval(() => this.playHurtAnimation(), 50);
    };

    /**
     * Initiates the interval for death animations.
     */
    deadAnimationInterval() {
        setInterval(() => this.playDeathAnimation(), 200);
    };


    /**
     * Plays attack animations based on keyboard input.
     */
    playAttackAnimation() {
        if (this.world.keyboard.SPACE && !this.sleepAnimationPlayed) {
            if (!this.mirroredSideways) {
                this.attacking();
            } else {
                this.mirroredAttacking();
            }
        }
        if (this.world.keyboard.E && !this.sleepAnimationPlayed) {
            this.playAnimation(this.RANGE_ATTACK);
        }
    };

    /**
    * Initiates melee attack animation.
    */
    attacking() {
        this.isAttacking = true;
        this.playAnimation(this.MEELE_ATTACK);
        this.world.meele_sound.play();
        this.offset = this.meeleOffset;
        this.resetOffset();
    };

    /**
    * Initiates mirrored melee attack animation.
    */
    mirroredAttacking() {
        this.isAttacking = true;
        this.playAnimation(this.MEELE_ATTACK);
        this.world.meele_sound.play();
        this.offset = this.mirroredMeeleOffset;
        this.resetOffset();
    };

    /**
    * Reset the offset after attacking.
    */
    resetOffset() {
        setTimeout(() => {
            this.offset = this.originOffset;
            this.isAttacking = false;
        }, 350);
    };


    /**
    * Plays hurt animation.
    */
    playHurtAnimation() {
        if (this.isDead()) {
            this.animateEndGame();
        } else if (this.isHurt()) {
            this.playAnimation(this.IS_HURT_POISON);
            this.world.hurt_sound.play();
        }
    };

    /**
    * Initiates the End animation.
    */
    animateEndGame() {
        this.applyUpwardTrend();
        this.stopMovement();
        this.world.hurt_sound.pause();
        this.world.snore_sound.pause();
    }

    /**
    * Plays death animation.
    */
    playDeathAnimation() {
        if (this.isDead() && this.currentImage < this.DEAD_ANIMATION.length) {
            this.playAnimation(this.DEAD_ANIMATION);
        } else if (this.deadAnimationPlayed) {
            const lastImage = this.DEAD_ANIMATION.slice(this.DEAD_ANIMATION.length - 1);
            this.playAnimation(lastImage);
        }
        this.currentImage++
        this.setEndgameSound();
    };

    /**
    * End the game and frezzes the Screen.
    */
    endGame() {
        setTimeout(() => {
            clearAllIntervals();
            showGameOverScreen();
        }, 3000);
    };

    /**
     * Sets endgame sounds and triggers endgame actions if character is dead.
     */
    setEndgameSound() {
        if (this.isDead() && !this.deadAnimationPlayed) {
            this.deadAnimationPlayed = true;
            this.world.background_music.pause();
            setTimeout(() => {
                this.world.death_sound.play();
            }, 500);
            this.world.game_over_sound.play();
            this.endGame();
        }
    };

    /**
    * Plays sleep animation.
    */
    playSleepAnimation() {
        const currentTime = new Date().getTime();
        const timePassed = (currentTime - this.lastActionTime) / 1000;
        if (timePassed >= 5) {
            if (!this.sleepAnimationPlayed) {
                this.sleep();
            } else {
                this.getLastSleepImage();
            }
        } else {
            this.noSleep();
        }
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    };

    /**
     * Retrieves the last four images from the sleep animation array and plays them.
     */
    getLastSleepImage() {
        const lastIndex = this.SLEEP_ANIMATION.length - 1;
        const lastFourImages = this.SLEEP_ANIMATION.slice(lastIndex - 3, lastIndex + 1);
        this.playAnimation(lastFourImages);
    }

    /**
     * Initiates the sleep animation and plays associated sounds.
     */
    sleep() {
        this.playAnimation(this.SLEEP_ANIMATION);
        this.world.snore_sound.play();
        this.sleepAnimationPlayed = true;
    }

    /**
    * Cancels the sleep animation and plays associated sounds.
    */
    noSleep() {
        this.sleepAnimationPlayed = false;
        this.playAnimation(this.IMAGES_FLOATING);
        this.world.snore_sound.pause();
    }

    /**
    * Plays movement animations based on keyboard input and updates camera position.
    */
    playMovementAnimation() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.movementRight();
        }
        if (this.world.keyboard.LEFT && this.x > this.world.level.level_end_y) {
            this.movementLeft();
        }
        if (this.world.keyboard.UP && this.y > this.world.level.level_end_top) {
            this.movementUP();
        }
        if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_bottom) {
            this.movementDown();
        }
        this.world.camera_x = -this.x + 100;
    };

    /**
    * Initiates movement to the right, updates action time, plays swim sound, and sets mirrored sideways flag.
    */
    movementRight() {
        this.moveRight();
        this.getLastActionTime();
        this.world.swim_sound.play();
        this.mirroredSideways = false;
    };

    /**
     * Initiates movement to the left, updates action time, plays swim sound, and sets mirrored sideways flag.
    */
    movementLeft() {
        this.moveLeft();
        this.getLastActionTime();
        this.world.swim_sound.play();
        this.mirroredSideways = true;
    };

    /**
     * Initiates movement upward, updates action time, plays swim sound, and sets mirrored upward and downward flags.
     */
    movementUP() {
        this.moveUP();
        this.getLastActionTime();
        this.world.swim_sound.play();
        this.mirroredUpways = true;
        this.mirroredDownways = false;
    };

    /**
     * Initiates movement downward, updates action time, plays swim sound, and sets mirrored downward and upward flags.
     */
    movementDown() {
        this.moveDown();
        this.getLastActionTime();
        this.world.swim_sound.play();
        this.mirroredDownways = true;
        this.mirroredUpways = false;
    };

    /**
    * Stops all movement intervals.
    */
    stopMovement() {
        this.intervalIds.forEach(clearInterval);
    };

};

/**
 * Displays the game over screen with appropriate message and buttons.
 */
function showGameOverScreen() {
    document.getElementById('wintext').innerHTML = 'YOU LOOSE';
    document.getElementById('winscreen_overlay').style.display = 'unset';
    document.getElementById('try_again_button').style.display = 'unset';
    setTimeout(() => {
        document.getElementById('wintext').style.transform = 'translateY(0%)';
        document.getElementById('try_again_button').style.transform = 'translateY(0%)';
    }, 125);
}