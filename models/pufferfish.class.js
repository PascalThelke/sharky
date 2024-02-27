class Pufferfish extends MoveableObject{

    constructor(){
        super().loadIMG('../img/2_enemys/1_pufferfish_3_colored_options/1_swim/1.swim1.png')
        this.x = 200 + Math.random() * 500;
        this.y = Math.random() * (this.resulutionheight - this.height);
    }
}