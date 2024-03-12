/**
 * Represents a collectible object that extends the MoveableObject class.
 *  @extends MoveableObject
 */
class CollecteableOject extends MoveableObject {
  height = 40;
  width = 40;
  currentImages;
  intervalCount = 0;

  IMAGES_COINS = [
    'img/4_markers/1_coins/1.png',
    'img/4_markers/1_coins/2.png',
    'img/4_markers/1_coins/3.png',
    'img/4_markers/1_coins/4.png'
  ];

  IMAGES_POISON = [
    'img/4_markers/4_poison/animations/1.png',
    'img/4_markers/4_poison/animations/2.png',
    'img/4_markers/4_poison/animations/3.png',
    'img/4_markers/4_poison/animations/4.png',
    'img/4_markers/4_poison/animations/5.png',
    'img/4_markers/4_poison/animations/6.png',
    'img/4_markers/4_poison/animations/7.png',
    'img/4_markers/4_poison/animations/8.png'
  ];


  /**
  * Constructs a CollecteableObject with the specified type, x-coordinate, and y-coordinate.
  * @param {number} type - The type of the collectible object (1 for coins, 2 for poison).
  * @param {number} x - The x-coordinate of the collectible object.
  * @param {number} y - The y-coordinate of the collectible object.
  */
  constructor(type, x, y) {
    super(); this.loadIMG('img/4_markers/1_coins/1.png');
    this.type = type;
    if (type == 1) {
      this.currentImages = this.IMAGES_COINS;
      this.x = x;
      this.y = y;
    } else if (type == 2) {
      this.currentImages = this.IMAGES_POISON;
      this.x = 500 + Math.random() * 1500;
      this.y = 400;
      this.height = 60;
    }
    this.loadImages(this.currentImages);
    this.animate();
  }

  /**
   * Initiates animation for the collectible object.
   * Bounces the object at a regular interval and plays the animation.
   */
  animate() {
    setInterval(() => this.animateItemsBouncing(), 1000 / 3);
    setInterval(() => this.playAnimation(this.currentImages), 144);
  }

  /**
   * Bounces the collectible object up and down based on the interval count.
   * Moves the object down if the interval count is less than or equal to 1,
   * otherwise moves the object up and decrements the interval count until it reaches 0.
   */
  animateItemsBouncing() {
    if (this.intervalCount <= 1) {
      this.moveDown();
      this.intervalCount += 1;
    } else {
      this.moveUP();
      this.intervalCount -= 1;
      if (this.intervalCount == 0) {
        this.intervalCount = 0;
      }
    }
  }
}