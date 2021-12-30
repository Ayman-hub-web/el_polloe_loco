class Explosion extends Moveableobject {
    IMAGES = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 111.png',
    ];
    /**
     * 
     * constructor function for the class
     * @param(string, string)
     */
    constructor(x, y) {
            super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 7.png');
            this.loadImages(this.IMAGES);
            this.x = x;
            this.y = y;
            this.width = 50;
            this.height = 60;
            this.animate();
            this.throw();

        }
        /**
         * 
         * function to throw objects
         * @param()
         */
    throw () {
        this.speedY = 30;
        this.applayGravity();
        setInterval(() => {
            this.playAnimation(this.IMAGES);
            this.x += 10;
        }, 30);
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
            //this.x += this.speed;
        }, 200);
    }
}