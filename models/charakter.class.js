class Character extends MoveableObject {

    width = 300;
    height = 250;
    speed = 10;
    IMAGES_WALKING = [
        'img/1_sharkie/3_swim/1.png',
        'img/1_sharkie/3_swim/2.png',
        'img/1_sharkie/3_swim/3.png',
        'img/1_sharkie/3_swim/5.png',
        'img/1_sharkie/3_swim/6.png'
    ];
    world;

    constructor() {
        super().loadIMG('../img/1_sharkie/1_idle/1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.y = 200;
        this.x = 150;
        this.animate();
    }

    animate(){
        setInterval(() =>{
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.x += this.speed;
                this.mirroredSideways = false;
            }
            if(this.world.keyboard.LEFT && this.x > 0){
                this.x -= this.speed;
                this.mirroredSideways = true;
            }
            if(this.world.keyboard.UP && this.y > this.world.level.level_end_y_top){
                console.log('maxheight of this level: ',this.world.level.level_end_y_top);
                console.log('actual height',this.y);
                this.y -= this.speed;
                this. mirroredUpways = true;
                this.mirroredDownways = false;
            }
            if(this.world.keyboard.DOWN && this.y < this.world.level.level_end_y_bottom){
                console.log('maxdeph of this level: ',this.world.level.level_end_y_bottom);
                console.log('actual height',this.y);
                this.y += this.speed;
                this. mirroredDownways = true;
                this. mirroredUpways = false;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000/60);
        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN ){
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            }
        }, 144);
    }


}