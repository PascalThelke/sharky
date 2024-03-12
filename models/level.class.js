class Level {
    enemies;
    environment;
    backgroundObjects;
    background;
    collectables;
    level_end_y = -480;
    level_end_x = 750*3;
    level_end_top = -90;
    level_end_bottom = 280;

    constructor(enemies, environment, backgroundObjects, background, collectables){
        this.enemies = enemies;
        this.environment = environment;
        this.backgroundObjects = backgroundObjects;
        this.background = background;
        this.collectables = collectables;
    }
}