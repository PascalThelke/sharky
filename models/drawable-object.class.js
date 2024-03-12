/**
 * Represents a drawable object with properties and methods for drawing on a canvas.
 * 
 */
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

    /**
    * Loads an image from the specified path and assigns it to the DrawableObject's img property.
    * @param {string} path - The path to the image file.
    */
    loadIMG(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
    * Loads multiple images from an array of image paths and caches them.
    * @param {string[]} array - An array of image paths to load.
    */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }

    /**
     * Loads a random image from the provided array of image paths.
     * @param {string[]} imagePaths - An array of image paths to choose from.
     */
    loadRandomImage(imagePaths) {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const randomImagePath = imagePaths[randomIndex];
        this.loadIMG(randomImagePath);
    }

    /**
     * Draws the image of the DrawableObject onto the canvas context at the specified position and dimensions.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a frame around the DrawableObject's boundaries on the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
     */
    drawFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        const offsetX = this.offset.left;
        const offsetY = this.offset.top;
        const width = this.width - this.offset.left - this.offset.right;
        const height = this.height - this.offset.top - this.offset.bottom;
        ctx.rect(this.x + offsetX, this.y + offsetY, width, height);
        ctx.stroke();
    }
}

