class EndbossHurt extends Moveableobject {
    height = 500;
    width = 300;
    y = -35;
    x = 1800;
    speed = 5;

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
        //     'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        //     'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        //     'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];
    /**
     * 
     * constructor of the class with all clled functions
     * @param()
     */
    constructor() {
            super();
            this.loadImage(this.IMAGES_HURT[0]);
            this.loadImages(this.IMAGES_HURT);
            this.animate();
        }
        /**
         * 
         * Animate function to make endboss injured
         * @param()
         */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HURT);

        }, 200);
    }

}