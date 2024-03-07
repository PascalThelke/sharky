class Pufferfish extends MoveableObject {

    height = 100;
    width = 150;

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

    DEAD_ANIMATION = [
        'img/2_enemys/1_pufferfish_3_colored_options/4_dead/1.Dead 1 (can animate by going up).png'
    ];



    constructor() {
        super().loadIMG('../img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_BLOWED);
        this.loadImages(this.DEAD_ANIMATION);
        this.x = 500 + Math.random() * 1500;
        this.y = Math.random() * (this.resulutionheight - this.height);
        this.speed = 0.2 + Math.random() * 0.75;
        this.animate();
    }

    animate() {
        let blowed = false;
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DEAD_ANIMATION);
                this.applyUpwardTrend();
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 144);


        setInterval(() => {
            if (!blowed && !this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
                setTimeout(() => {
                    blowed = true;
                }, 3000);
            } else if (blowed && !this.isDead()) {
                this.playAnimation(this.IMAGES_BLOWED);
                setTimeout(() => {
                    blowed = false;
                }, 1000);
            }

        }, 144);

    }
}