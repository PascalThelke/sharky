/**
 * Class representing a movable object that can be drawn on the screen.
 * @extends DrawableObject
 */
class MoveableObject extends DrawableObject {
    speed = 0.5;
    health = 100;
    mirroredSideways = false;
    mirroredUpways = false;
    lastHit = 0;
    speedY = 0;
    acceleration = 0.5;
    lastActionTime = new Date().getTime();
    timeOfDeath;
    deadAnimationPlayed = false;
    attackAnimationPlayed = false;
    currentImage = 0;
    firstContact = false;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
    * Plays the animation by updating the current image.
    * @param {string[]} images - Array of image paths for the animation.
    * 
    */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }


    /**
    * Checks if the object is colliding with another MoveableObject.
    * @param {MoveableObject} mo - The other MoveableObject for collision detection.
    * @returns {boolean} - True if colliding, otherwise false.
    */
    isColliding(mo) {
        const thisLeft = this.x + this.offset.left;
        const thisRight = this.x + this.width - this.offset.right;
        const thisTop = this.y + this.offset.top;
        const thisBottom = this.y + this.height - this.offset.bottom;
        const moLeft = mo.x + mo.offset.left;
        const moRight = mo.x + mo.width - mo.offset.right;
        const moTop = mo.y + mo.offset.top;
        const moBottom = mo.y + mo.height - mo.offset.bottom;
        return thisRight >= moLeft && thisLeft <= moRight &&
            thisBottom >= moTop && thisTop <= moBottom &&
            thisRight > moLeft && moRight > thisLeft &&
            thisBottom > moTop && moBottom > thisTop;
    }

    /**
     * Applies an upward trend to the object's position by adjusting its vertical position and speed.
    */
    applyUpwardTrend() {
        this.y += this.speedY;
        this.speedY -= this.acceleration;
    }

    /**
     * Updates the last action time of the object to the current time.
     */
    getLastActionTime() {
        this.lastActionTime = new Date().getTime();
    }

    /**
     * Decreases the health points of the object when hit.
     * If the object is an instance of Jellyfish or Endboss, it decreases health by 100, otherwise by 5.
     * Updates the last hit time if the object's health is greater than or equal to 0.
     */
    getHit() {
        if (this instanceof Jellyfish || this instanceof Endboss) {
            this.health -= 100;
            if (this.health < 0) {
                this.health = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        } else {
            this.health -= 10;
            if (this.health < 0) {
                this.health = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }

    /**
     * Decreases the health points of the object by 100 when hit in melee combat.
     * Updates the last hit time if the object's health is greater than or equal to 0.
     */
    getHitMeele() {
        this.health -= 100;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is hurt based on the time elapsed since the last hit.
     * @returns {boolean} - True if the object is hurt (last hit occurred less than 1 second ago), otherwise false.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Checks if the object is currently in an attack state based on the time elapsed since the last action.
     * @returns {boolean} - True if the object is in an attack state (last action occurred less than 1 second ago), otherwise false.
     */
    inAttack() {
        let timepassed = new Date().getTime() - this.lastActionTime;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean} - True if the object's health is zero, indicating death; otherwise false.
     */
    isDead() {
        return this.health == 0;
    }

    /**
     * Moves the object to the right based on its speed.
     */
    moveRight() {
        this.x += this.speed;

    }

    /**
     * Moves the object to the left based on its speed.
     */
    moveLeft() {
        this.x -= this.speed;

    }

    /**
     * Moves the object upward based on its speed.
     */
    moveUP() {
        this.y -= this.speed;

    }

    /**
    * Moves the object downward based on its speed.
    */
    moveDown() {
        this.y += this.speed;
    }

    /**
     * Gets the flag indicating whether the object is mirrored sideways.
     * @returns {boolean} - True if the object is mirrored sideways, otherwise false.
     */
    getMirroredSideways() {
        return this.mirroredSideways;
    }

}