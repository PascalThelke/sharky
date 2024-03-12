/**
 * Represents a background object in the game.
 * @extends MoveableObject
 * 
 */
class Background extends MoveableObject{
    height = this.resulutionheight;
    width = this.resulutionwidth;

/**
 * Represents a background object in the game.
 * @param {string} imagePath - The path to the image file for the background.
 * @param {number} x - The x-coordinate of the background's initial position.
 */
    constructor(imagePath, x) {
        super().loadIMG(imagePath);
        this.x = x;
        this.y = this.resulutionheight - this.height;
    }
}