class PasoDead extends Moveableobject {
    x = 790;
    height = 80;
    width = 70;
    y = 350;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'

    ];
    /**
     * 
     * constructor with all called functions
     * @param()
     */
    constructor() {
            super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png');
            this.loadImages(this.IMAGES_WALKING);
            this.animate();
        }
        /**
         * 
         * animate fucntion to make images moveable
         * @param()
         */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

}