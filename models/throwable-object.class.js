class ThrowableObject extends MoveableObject {
    height = 48;
    width = 48;
    speed = 10;


    offset = {
        top: 0,
        left: 10,
        right: 10,
        bottom: 20
    }


    constructor() {
        super().loadIMG('img/1_sharkie/4_attack/1_bubble_trap/Bubble.png');
        this.x = 100;
        this.y = 100;
        this.throw(100, 100);
      
    }

    throw(x, y){ 
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.moveRight();
            setTimeout(() =>{
                this.applyUpwardTrend();
            }, 300);
        }, 1000 / 60);

    }

    animate() {
        setInterval(() => {
            this.moveRight();
            setTimeout(() =>{
                applyUpwardTrend();
            }, 10);
        }, 1000 / 60);
    }
}