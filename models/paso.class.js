class Paso extends Moveableobject {
    x = 790;
    height = 80;
    width = 70;
    y = 350;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_COLLISION = [
            'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
        ]
        /**
         * 
         * constructor with all called functions
         * @param()
         */
    constructor() {
            super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png');
            this.x = 700 + Math.random() * 1400;
            this.speed = 0.15 + Math.random() * 0.5;
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
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            this.x -= this.speed;
        }, 200);
    }

}