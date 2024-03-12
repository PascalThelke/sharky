/**
 * Represents a pufferfish object that extends MoveableObject.
 * @extends MoveableObject
 */
class Pufferfish extends MoveableObject {
    height = 75;
    width = 125;
    blowed = false;

    offset = {
        top: 0,
        left: 10,
        right: 10,
        bottom: 20
    }

    IMAGES_WALKING = [
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim2.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim3.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim4.png',
        'img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim5.png'
    ]

    IMAGES_BLOWED = [
        'img/2_enemys/1_pufferfish_3_colored_options/2_transition/1.transition1.png',
        'img/2_enemys/1_pufferfish_3_colored_options/2_transition/1.transition2.png',
        'img/2_enemys/1_pufferfish_3_colored_options/2_transition/1.transition3.png',
        'img/2_enemys/1_pufferfish_3_colored_options/2_transition/1.transition4.png',
        'img/2_enemys/1_pufferfish_3_colored_options/2_transition/1.transition5.png',

    ];

    IS_HURT = [
        'img/2_enemys/1_pufferfish_3_colored_options/3_bubbleeswim/1.bubbleswim1.png',
        'img/2_enemys/1_pufferfish_3_colored_options/3_bubbleeswim/1.bubbleswim2.png',
        'img/2_enemys/1_pufferfish_3_colored_options/3_bubbleeswim/1.bubbleswim3.png',
        'img/2_enemys/1_pufferfish_3_colored_options/3_bubbleeswim/1.bubbleswim4.png',
        'img/2_enemys/1_pufferfish_3_colored_options/3_bubbleeswim/1.bubbleswim5.png'
    ];

    DEAD_ANIMATION = [
        'img/2_enemys/1_pufferfish_3_colored_options/4_dead/deadanimation1.png'
    ];


    /**
     * Constructs a new Pufferfish object.
     * Loads initial images and sets initial position, speed, and animation.
     */
    constructor() {
        super().loadIMG('img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_BLOWED);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.IS_HURT);
        this.x = 500 + Math.random() * 1500;
        this.y = Math.random() * (this.resulutionheight - this.height);
        this.speed = 0.2 + Math.random() * 0.75;
        this.animate();
    }

    /**
     * Starts the animations for the pufferfish.
     * Sets intervals for various animation functions.
     */
    animate() {
        setInterval(() => this.deathAnimation(), 1000 / 60);
        setInterval(() => this.playAnimation(this.IMAGES_WALKING), 350);
        setInterval(() => this.pufferfishBehavior(), 200);
        setInterval(() => this.hurtAnimation(), 50);
    }

    /**
     * Controls the behavior of the pufferfish based on its current state.
     * If not already inflated, dead, or hurt, the pufferfish inflates.
     * If already inflated, dead, or hurt, the pufferfish deflates.
     */
    pufferfishBehavior() {
        if (!this.blowed && !this.isDead() && !this.isHurt()) {
            this.blowUp();
        } else if (this.blowed && !this.isDead() && !this.isHurt()) {
            this.deflate();
        }
    }

    /**
    * Inflates the pufferfish, playing the walking animation and setting the 'blowed' flag to true after a delay.
    */
    blowUp() {
        this.playAnimation(this.IMAGES_WALKING);
        setTimeout(() => {
            this.blowed = true;
        }, 3000);
    }

    /**
     * Deflates the pufferfish, playing the deflating animation and setting the 'blowed' flag to false after a delay.
     */
    deflate() {
        this.playAnimation(this.IMAGES_BLOWED);
        setTimeout(() => {
            this.blowed = false;
        }, 1000);
    }

    /**
     * Plays the hurt animation if the pufferfish is hurt and not dead.
     */
    hurtAnimation() {
        if (this.isHurt() && !this.isDead()) {
            this.playAnimation(this.IS_HURT);
        }
    }

    /**
     * Manages the death animation of the pufferfish.
     * If the pufferfish is dead and there are more images to display in the death animation,
     * it plays the next image in the sequence. If all images in the death animation have been played,
     * it performs the final image of the death animation and applies an upward trend.
     */
    deathAnimation() {
        if (this.isDead() && this.currentImage < this.DEAD_ANIMATION.length) {
            this.playAnimation(this.DEAD_ANIMATION);
        } else if (this.deadAnimationPlayed) {
            this.lastImageDeath();
        }
        this.currentImage++
        if (this.isDead() && !this.deadAnimationPlayed) {
            this.deadAnimationPlayed = true;
        }
        else {
            this.moveLeft();
        }
    }
    
    /**
     * Plays the last image of the death animation and applies an upward trend.
     */
    lastImageDeath() {
        const lastImage = this.DEAD_ANIMATION.slice(this.DEAD_ANIMATION.length - 1);
        this.playAnimation(lastImage);
        this.applyUpwardTrend();
    }
}