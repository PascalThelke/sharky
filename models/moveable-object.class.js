class MoveableObject{
    x = 40;
    y = 250;
    width = 200;
    height = 150;
    img;

    loadIMG(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadRandomImage(imagePaths) {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const randomImagePath = imagePaths[randomIndex];
        this.loadIMG(randomImagePath);
    }

    moveRight(){
        console.log('moving right')
    }

    moveLeft(){


    }

    moveUP(){

    
    }

    moveDown(){
        
    }

}