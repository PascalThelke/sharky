class Jellyfish extends MoveableObject{
    height = 150;
    width = 100;
    

    IMAGES_WALKING = [
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_2.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_3.png',
        'img/2_enemys/2_jellyfish/2_regular_damage/Lila_4.png'
       
    ]

    currentImage = 0;

    constructor() {
        super().loadIMG('../img/2_enemys/2_jellyfish/2_regular_damage/Lila_1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.random() * 1500;
        this.y = Math.random() * (this.resulutionheight - this.height);
        this.speed = 2 + Math.random() * 0.75;
        this.animate();
    }

    animate() {
        let movingDown = false; // Variable, um den Bewegungszustand zu verfolgen
    
        setInterval(() => {
            if (movingDown) {
                if (this.y < this.resulutionheight - this.height) {
                    this.moveDown();
                } else {
                    movingDown = false; // Ändere den Zustand, um die Richtung zu ändern
                }
            } else {
                if (this.y > 0) {
                    this.moveUP();
                } else {
                    movingDown = true; // Ändere den Zustand, um die Richtung zu ändern
                }
            }
        }, 1000 / 60);
    
       
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 144);
    }

}