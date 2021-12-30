class Endboss extends Moveableobject {
    height = 500;
    width = 300;
    y = -35;
    x = 1800;
    energy = 100;
    speed = 5;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];
    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];
    /**
     * 
     * constructor of the class with all clled functions
     * @param()
     */
    constructor() {
            super();
            this.loadImage(this.IMAGES_WALKING[0]);
            this.loadImages(this.IMAGES_WALKING);
            this.loadImages(this.IMAGES_HURT);
            this.animate();
        }
        /**
         * 
         * Animate function to make endboss moved
         * @param()
         */
    animate() {
            setInterval(() => {
                this.playAnimation(this.IMAGES_WALKING);
                //this.x -= this.speed; //Endboss bewegt sich von rechts nach links
            }, 200);
        }
        /**
         * 
         * Animate function to show endboss when injured
         * @param()
         */
    animateHurt() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HURT);
        }, 200);
    }

}