class StatusBar extends DrawableObject {
    currentImages;
    percentage;

    LIFE_BAR = [
        'img/4_markers/2_green/2_life/100.png',
        'img/4_markers/2_green/2_life/80.png',
        'img/4_markers/2_green/2_life/60.png',
        'img/4_markers/2_green/2_life/40.png',
        'img/4_markers/2_green/2_life/20.png',
        'img/4_markers/2_green/2_life/0.png',
    ];

    COIN_BAR =[
        'img/4_markers/2_green/1_coin/100.png',
        'img/4_markers/2_green/1_coin/80.png',
        'img/4_markers/2_green/1_coin/60.png',
        'img/4_markers/2_green/1_coin/40.png',
        'img/4_markers/2_green/1_coin/20.png',
        'img/4_markers/2_green/1_coin/0.png'
    ];
    
    POSION_BAR = [
        'img/4_markers/2_green/3_poisoned_bubbles/100.png',
        'img/4_markers/2_green/3_poisoned_bubbles/80.png',
        'img/4_markers/2_green/3_poisoned_bubbles/60.png',
        'img/4_markers/2_green/3_poisoned_bubbles/40.png',
        'img/4_markers/2_green/3_poisoned_bubbles/20.png',
        'img/4_markers/2_green/3_poisoned_bubbles/0.png'
    ];

    constructor(x, y, type, progress) {
        super();
        if (type == 0){
            this.currentImages = this.LIFE_BAR;
        }else if (type == 1){
            this.currentImages = this.COIN_BAR;
        }else if (type == 2){
            this.currentImages = this.POSION_BAR;
        }
        this.loadImages(this.currentImages);
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 50;
        this.setPercentage(progress);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.currentImages[this.resolveImageIndex()];
        this.img = this.imageChache[path];

    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 4;
        } else {
            return 5;
        }
    }
}