/**
 * Represents a game level.
 * @constructor
 * @param {Array} enemies - Array of enemy objects.
 * @param {Array} environment - Array of environment objects.
 * @param {Array} backgroundObjects - Array of background object.
 * @param {string} background - Background image URL.
 * @param {Array} collectables - Array of collectable objects.
 */
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