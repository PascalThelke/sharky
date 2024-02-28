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