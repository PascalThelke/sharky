class CollecteableOject extends MoveableObject {
    height = 40;
    width = 40;

    IMAGES_SHINING = [
        'img/4_markers/1_coins/1.png',
        'img/4_markers/1_coins/2.png',
        'img/4_markers/1_coins/3.png',
        'img/4_markers/1_coins/4.png'
    ];

    constructor(){
        super().loadIMG('img/4_markers/1_coins/1.png');
        this.loadImages(this.IMAGES_SHINING);
        this.x = 500 + Math.random() * 1500;
        this.y = 400;
        this.animate();
    }


    intervalCount = 0;

    animate() {
        setInterval(() => {
      if (this.intervalCount <= 1) {
        this.y += 10;
        this.intervalCount += 1;
      } else {
        this.y -= 10;
        this.intervalCount -= 1;
        if (this.intervalCount == 0) {
          this.intervalCount = 0;
        }
      }
    }, 1000 / 3);
    
    
        setInterval(() => {
            this.playAnimation(this.IMAGES_SHINING);
        }, 144);
    }


}