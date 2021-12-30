class Coins extends Moveableobject {
    height = 100;
    width = 50;

    /**
     * 
     * constructor function with passed variables
     * @param(string, string, string)
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

}