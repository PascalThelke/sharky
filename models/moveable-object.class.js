class MoveableObject extends DrawableObject {
    speed = 0.5;
    health = 100;
    mirroredSideways = false;
    mirroredUpways = false;
    lastHit = 0;

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;

    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
        // return(this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
        //     (this.y + this.offsetY + this.height) >= mo.y &&
        //     (this.y + this.offsetY) <= (mo.y + mo.height);
        // mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    getHit() {
        this.health -= 5;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.health == 0;
    }

    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;

    }

    moveUP() {
        this.y -= this.speed;

    }

    moveDown() {
        this.y += this.speed;
    }

}