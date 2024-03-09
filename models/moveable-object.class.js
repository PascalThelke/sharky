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
    currentImage = 0;
    firstContact = false;
    currentImageDead = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;

    }


    // isColliding(mo) {
    //     // return this.x + this.width > mo.x &&
    //     //     this.y + this.height > mo.y &&
    //     //     this.x < mo.x &&
    //     //     this.y < mo.y + mo.height;
    //     return(this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
    //         (this.y + this.offsetY + this.height) >= mo.y &&
    //         (this.y + this.offsetY) <= (mo.y + mo.height);
    //     mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // }

    isColliding(mo) {
        // Berechnung der Positionen der Kollisionsboxen unter Berücksichtigung des Offsets
        const thisLeft = this.x + this.offset.left;
        const thisRight = this.x + this.width - this.offset.right;
        const thisTop = this.y + this.offset.top;
        const thisBottom = this.y + this.height - this.offset.bottom;

        const moLeft = mo.x + mo.offset.left;
        const moRight = mo.x + mo.width - mo.offset.right;
        const moTop = mo.y + mo.offset.top;
        const moBottom = mo.y + mo.height - mo.offset.bottom;

        // Überprüfe auf Kollision
        return thisRight >= moLeft && thisLeft <= moRight &&
            thisBottom >= moTop && thisTop <= moBottom &&
            thisRight > moLeft && moRight > thisLeft &&
            thisBottom > moTop && moBottom > thisTop;
    }


    applyUpwardTrend() {
        this.y += this.speedY;
        this.speedY -= this.acceleration;
    }


    getLastActionTime() {
        this.lastActionTime = new Date().getTime();
    }


    getHit() {
        if (this instanceof Jellyfish || this instanceof Endboss) {
            this.health -= 100;
            if (this.health < 0) {
                this.health = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        } else {
            this.health -= 5;
            if (this.health < 0) {
                this.health = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }

    getHitMeele() {
        this.health -= 100;
        if(this.health < 0){
            this.health = 0;
        }else {
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

    getMirroredSideways() {
        return this.mirroredSideways;
    }

}