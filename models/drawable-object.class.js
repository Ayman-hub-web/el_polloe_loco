class DrawableObject {
    x = 100;
    y = 280;
    width = 100;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;
    energy = 100;

    /**
     * 
     * load one Image to draw in ctx
     * @param(string)
     */
    loadImage(path) {
            this.img = new Image();
            this.img.src = path;
        }
        /**
         * 
         * draw image on ctx
         * @param(string)
         */
    draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        /**
         * 
         * load an array of images to draw in ctx
         * @param(array)
         */
    loadImages(arr) {
            arr.forEach(path => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            });

        }
        /**
         * 
         * create frame around an object
         * @param(string)
         */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Coins || this instanceof Bottles || this instanceof Endboss || this instanceof Throwableobject || this instanceof EndbossHurt || this instanceof Paso) {
            ctx.beginPath();
            ctx.lineWidth = "10";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}