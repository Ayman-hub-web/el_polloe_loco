class Cloud extends Moveableobject {
    height = 250;
    y = 20;
    width = 500;
    /**
     * 
     * constructor function with passed variables
     * @param(string, string, string)
     */
    constructor(path, x, y) {
            super();
            this.loadImage('img/5.Fondo/Capas/4.nubes/1.png', 600, 20);
            this.x = x;
            this.y = y;
            this.x = this.x + Math.random() * 500;
            this.animate();
        }
        /**
         * 
         * the animate function to make chicken walking
         * @param()
         */
    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }

}