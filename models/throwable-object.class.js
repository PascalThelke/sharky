/**
 * Represents a throwable object.
 * @extends MoveableObject
 */
class ThrowableObject extends MoveableObject {
    height = 48;
    width = 48;
    speed = 10;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    /**
     * @param {number} x - The x-coordinate of the object.
     * @param {number} y - The y-coordinate of the object.
     * @param {Character} character - The character associated with the object.
     */
    constructor(x, y, character) {
        super().loadIMG('img/1_sharkie/4_attack/1_bubble_trap/Poisoned_bubble.png');
        this.x = x;
        this.y = y;
        this.character = character;
        this.blow();

    }

    /**
     * Function to animate the throwable object's movement.
     */
    blow() {
        setInterval(() => {
            if (this.character.mirroredSideways) {
                this.moveLeft();
                setTimeout(() => {
                    this.applyUpwardTrend();
                }, 300);
            } else {
                this.moveRight();
                setTimeout(() => {
                    this.applyUpwardTrend();
                }, 300);
            }
        }, 1000 / 60);
    }
}