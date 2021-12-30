class EndbossDead extends Moveableobject {
    height = 500;
    width = 300;
    y = 85;
    x = 1800;
    speed = 5;

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
    ];
    /**
     * 
     * constructor of the class with all clled functions
     * @param()
     */
    constructor() {
            super();
            this.loadImage(this.IMAGES_DEAD[0]);
            this.loadImages(this.IMAGES_DEAD);
            this.animate();
        }
        /**
         * 
         * Animate function to make endboss dead
         * @param()
         */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);

        }, 200);
    }

}