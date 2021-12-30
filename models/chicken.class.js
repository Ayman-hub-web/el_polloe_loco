class Chicken extends Moveableobject {
    x = 290;
    height = 80;
    width = 70;
    y = 350;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_COLLISION = [
            'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
        ]
        /**
         * 
         * Constructor of the class with all function which called when instance created
         * @param()
         */
    constructor() {
            super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
            this.x = 300 + Math.random() * 300;
            this.speed = 0.15 + Math.random() * 1;
            this.loadImages(this.IMAGES_WALKING);
            this.animate();
        }
        /**
         * 
         * make chicken walking with the animate fuction
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