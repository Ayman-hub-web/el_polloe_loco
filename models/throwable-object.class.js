class Throwableobject extends Moveableobject {
    IMAGES = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];
    IMAGES_EXPLOSION = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 11.png',
    ];

    //world;
    explosion = false;
    /**
     * 
     * constructor function for the class
     * @param(string, string)
     */
    constructor(x, y) {
            super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
            this.loadImages(this.IMAGES);
            this.x = x;
            this.y = y;
            this.width = 50;
            this.height = 60;
            //this.animate();
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
        console.log("explosion in throwable", this.explosion);
        setInterval(() => {
            if (this.explosion) {
                this.playAnimation(this.IMAGES_EXPLOSION);

            } else {
                this.playAnimation(this.IMAGES);
            }

            this.x += 10;
        }, 30);
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_EXPLOSION);
            //this.x += this.speed;
        }, 200);
    }
}