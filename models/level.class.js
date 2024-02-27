class Level {
    enemies;
    environment;
    backgroundObjects;
    background;
    level_end_x = 720*3;
    level_end_y_top = -90;
    level_end_y_bottom = 280;

    constructor(enemies, environment, backgroundObjects, background){
        this.enemies = enemies;
        this.environment = environment;
        this.backgroundObjects = backgroundObjects;
        this.background = background;
    }
}