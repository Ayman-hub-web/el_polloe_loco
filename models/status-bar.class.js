class StatusBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ]

    percentage = 100;
    /**
     * 
     * constructor with all called functions
     * @param()
     */
    constructor() {
            super();
            this.loadImages(this.IMAGES);
            this.x = 30;
            this.y = 0;
            this.width = 200;
            this.height = 60;
            this.setPercentage(100);
        }
        /**
         * 
         * chioce the right image 
         * @param(string)
         */
    setPercentage(percentage) {
            this.percentage = percentage;
            let path = this.IMAGES[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
        /**
         * 
         * return the index of image
         * @param()
         */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}