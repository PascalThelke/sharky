class MoveableObject {
    x = 40;
    y = 250;
    width = 200;
    height = 150;
    img;
    resulutionwidth = 720;
    resulutionheight = 480;
    imageChache = {};
    currentImage = 0;
    speed = 0.5;
    mirroredSideways = false;
    mirroredUpways = false;

    loadIMG(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });

    }

    loadRandomImage(imagePaths) {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const randomImagePath = imagePaths[randomIndex];
        this.loadIMG(randomImagePath);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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