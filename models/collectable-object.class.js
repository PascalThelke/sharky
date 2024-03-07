class CollecteableOject extends MoveableObject {
    height = 40;
    width = 40;
    currentImages;
    intervalCount = 0;

    IMAGES_COINS = [
        'img/4_markers/1_coins/1.png',
        'img/4_markers/1_coins/2.png',
        'img/4_markers/1_coins/3.png',
        'img/4_markers/1_coins/4.png'
    ];

    IMAGES_POISON = [
        'img/4_markers/4_poison/animations/1.png',
        'img/4_markers/4_poison/animations/2.png',
        'img/4_markers/4_poison/animations/3.png',
        'img/4_markers/4_poison/animations/4.png',
        'img/4_markers/4_poison/animations/5.png',
        'img/4_markers/4_poison/animations/6.png',
        'img/4_markers/4_poison/animations/7.png',
        'img/4_markers/4_poison/animations/8.png'
    ];

    constructor(type){
        super(); this.loadIMG('img/4_markers/1_coins/1.png');
        this.type = type;
        if (type == 1){
          this.currentImages = this.IMAGES_COINS;
          this.x = 500 + Math.random() * 1500;
          this.y = Math.random() * (this.resulutionheight - this.height);
        }else if (type == 2){
          this.currentImages = this.IMAGES_POISON;
          this.x = 500 + Math.random() * 1500;
          this.y = 400;
          this.height = 60;

        }
        
          this.loadImages(this.currentImages);
   
          this.animate();
        
    }

    animate() {
        setInterval(() => {
      if (this.intervalCount <= 1) {
        this.moveDown();
        this.intervalCount += 1;
      } else {
        this.moveUP();
        this.intervalCount -= 1;
        if (this.intervalCount == 0) {
          this.intervalCount = 0;
        }
      }
    }, 1000 / 3);
    
    
        setInterval(() => {
            this.playAnimation(this.currentImages);
        }, 144);
    }


}