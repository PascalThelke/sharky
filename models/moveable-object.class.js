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

    moveRight() {
        setInterval(() => {
            this.x += this.speed
        }, 1000/60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed
        }, 1000/60);
    }

    moveUP() {


    }

    moveDown() {

    }

}