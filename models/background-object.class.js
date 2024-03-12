class BackgroundObject extends MoveableObject {
    height = 300;
    width = this.resulutionwidth;

    constructor(imagePath, x) {
        super().loadIMG(imagePath);
        this.x = x;
        this.y = this.resulutionheight - this.height;
    }
}