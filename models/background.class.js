class Background extends MoveableObject{

    height = this.resulutionheight;
    width = this.resulutionwidth;

    constructor(imagePath, x) {
        super().loadIMG(imagePath);
        this.x = x;
        this.y = this.resulutionheight - this.height;


    }

}