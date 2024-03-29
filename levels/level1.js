let level1;

/**
 * Initiates the arrays for the level.
 */
function initLevel(){
    level1 = new Level(
        [
            new Pufferfish(),
            new Pufferfish(),
            new Pufferfish(),
            new Jellyfish(),
            new Jellyfish(),
            new Jellyfish(),
            new Endboss()
        ],
        [
            new Barrier(),
            new Barrier(),
            new Barrier()
        ],
        [
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', -720),
            new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L2.png', -720),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', -720),
            new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L2.png', -720),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 0),
            new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L1.png', 0),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 0),
            new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L1.png', 0),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', 720),
            new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L2.png', 720),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', 720),
            new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L2.png', 720),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 720 * 2),
            new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L1.png', 720 * 2),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 720 * 2),
            new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L1.png', 720 * 2),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', 720 * 3),
            new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L2.png', 720 * 3),
            new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', 720 * 3),
            new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L2.png', 720 * 3),
        ],
        [
            new Background('img/3_backgrounds/3_layers/5_water/L2.png', -720),
            new Background('img/3_backgrounds/3_layers/5_water/L1.png', 0),
            new Background('img/3_backgrounds/3_layers/1_light/1.png', 0),
            new Background('img/3_backgrounds/3_layers/5_water/L2.png', 720),
            new Background('img/3_backgrounds/3_layers/1_light/2.png', 720),
            new Background('img/3_backgrounds/3_layers/5_water/L2.png', 720 * 2),
            new Background('img/3_backgrounds/3_layers/5_water/L2.png', 720 * 3),
        ],
        [
            new CollecteableOject(1, 700, 350),
            new CollecteableOject(1, 775, 250),
            new CollecteableOject(1, 850, 200),
            new CollecteableOject(1, 925, 250),
            new CollecteableOject(1, 1000, 350),
            new CollecteableOject(1, 1075, 250),
            new CollecteableOject(1, 1150, 200),
            new CollecteableOject(1, 1225, 250),
            new CollecteableOject(1, 1300, 350),
            new CollecteableOject(1, -200, 200),
            new CollecteableOject(2),
            new CollecteableOject(2),
            new CollecteableOject(2),
            new CollecteableOject(2),
            new CollecteableOject(2)
        ],
    );
}



