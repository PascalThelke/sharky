const level1 = new Level(
    [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
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
        
        new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 720*2),
        new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L1.png', 720*2),
        new BackgroundObject('img/3_backgrounds/3_layers/3_background/L1.png', 720*2),
        new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L1.png', 720*2),
        new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', 720*3),
        new BackgroundObject('img/3_backgrounds/3_layers/4_background_2/L2.png', 720*3),
        new BackgroundObject('img/3_backgrounds/3_layers/3_background/L2.png', 720*3),
        new BackgroundObject('img/3_backgrounds/3_layers/2_floor/L2.png', 720*3), 
    ],
    [
        new Background('img/3_backgrounds/3_layers/5_water/L2.png', -720),
        // new Background('img/3_backgrounds/3_layers/1_light/2.png', -720),
        new Background('img/3_backgrounds/3_layers/5_water/L1.png', 0),
        new Background('img/3_backgrounds/3_layers/1_light/1.png', 0),
        new Background('img/3_backgrounds/3_layers/5_water/L2.png', 720),
        new Background('img/3_backgrounds/3_layers/1_light/2.png', 720),

        new Background('img/3_backgrounds/3_layers/5_water/L2.png', 720*2),
        new Background('img/3_backgrounds/3_layers/5_water/L2.png', 720*3),
    ]

);

