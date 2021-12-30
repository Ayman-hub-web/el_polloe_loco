class Bottles extends Moveableobject {
    height = 100;
    width = 50;

    /**
     * 
     *Constructor of the class with 3 passed variables
     * @param(<string, string, string)
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}