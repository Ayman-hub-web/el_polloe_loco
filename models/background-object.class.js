class Backgroundobject extends Moveableobject {
    width = 720;
    height = 480;
    /**
     * 
     * constructor of the class with 3 passed variables
     * @param(string, string, string)
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}