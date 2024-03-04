class DrawableObject {
    img;
    imageChache = {};
    currentImage = 0;
    x = 40;
    y = 250;
    width = 200;
    height = 150;
    resulutionwidth = 720;
    resulutionheight = 480;

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof Endboss || this instanceof Jellyfish) {
            // ctx.beginPath();
            // ctx.lineWidth = '5';
            // ctx.strokeStyle = 'blue'; // Blauer Rahmen
            // ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.stroke();
    
            // Zeichne den roten Rahmen mit Berücksichtigung des Offsets
            ctx.beginPath();
            ctx.strokeStyle = 'red'; // Roter Rahmen
            const offsetX = this.offset.left;
            const offsetY = this.offset.top;
            const width = this.width - this.offset.left - this.offset.right;
            const height = this.height - this.offset.top - this.offset.bottom;
            ctx.rect(this.x + offsetX, this.y + offsetY, width, height);
            ctx.stroke();
        }
    }
    
    

}

