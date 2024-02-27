class BackgroundObject extends MoveableObject {

    height = 300;
    width = 720;
    constructor(imagePath, x, y) {
        super().loadIMG(imagePath);
        this.x = x;
        this.y = y;


    }
}