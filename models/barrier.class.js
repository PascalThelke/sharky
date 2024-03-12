/**
 * Represents a barrier object, extending MoveableObject.
 * @extends MoveableObject
 */
class Barrier extends MoveableObject {
    height = this.resulutionheight;

    /**
    * Constructs a new Barrier object.
    */
    constructor() {
        super();
        this.loadRandomImage(['img/3_backgrounds/1_barrier/2.png', 'img/3_backgrounds/1_barrier/3.png']);
        this.x = Math.random() * 500;
        this.y = 300;
    }
}
