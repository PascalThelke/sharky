/**
 * Represents a background object.
 * @extends MoveableObject
 */
class BackgroundObject extends MoveableObject {
    height = 300;
    width = this.resulutionwidth;

/**
 * Constructs a new BackgroundObject.
 * @param {string} imagePath - The path to the image for the background object.
 * @param {number} x - The initial x-coordinate of the background object.
 */
    constructor(imagePath, x) {
        super().loadIMG(imagePath);
        this.x = x;
        this.y = this.resulutionheight - this.height;
    }
}