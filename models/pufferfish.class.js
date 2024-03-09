class Pufferfish extends MoveableObject {
    height = 75;
    width = 125;

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

    animate() {

        let blowed = false;
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DEAD_ANIMATION);
                this.applyUpwardTrend();
            } else {
                this.moveLeft();
            }

            
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

        }, 350);


        setInterval(() => {
            if (!blowed && !this.isDead() && !this.isHurt()) {
                this.playAnimation(this.IMAGES_WALKING);
                setTimeout(() => {
                    blowed = true;
                }, 3000);
            } else if (blowed && !this.isDead() && !this.isHurt()) {
                this.playAnimation(this.IMAGES_BLOWED);
                setTimeout(() => {
                    blowed = false;
                }, 1000);
            }

        }, 200);

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

         //Interval for checking hurt animation
         setInterval(() => {
            if (this.isHurt() && !this.isDead()) {
                this.playAnimation(this.IS_HURT);
            }
        
        }, 50);


    }
}