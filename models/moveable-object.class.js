class Moveableobject extends DrawableObject {


    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    walk = true;


    /**
     * 
     * make garavity
     * @param()
     */
    applayGravity() {
            setInterval(() => {
                if (this.isAboveGround() || this.speedY > 0) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }, 1000 / 25);
        }
        /**
         * 
         * when object above
         * @param()
         */
    isAboveGround() {
            if (this instanceof Throwableobject) { //Throwableobject should always fall
                return true;
            } else {
                return this.y < 130;
            }
        }
        /**
         * 
         * return true when there are collision
         * @param(string)
         */
    isColliding(mo) {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height
        }
        /**
         * 
         * Object move right
         * @param()
         */
    moveRight() {
        if (this.walk) {
            this.x += this.speed;
            this.walking_sound.play();
        }
    }

    /**
     * 
     * Object move left
     * @param()
     */
    moveLeft() {
            if (this.walk) {
                this.x -= this.speed;
            }
        }
        /**
         * 
         * make animation with images
         * @param(array)
         */
    playAnimation(images) {
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
        /**
         * 
         * object can jump
         * @param()
         */
    jump() {
            this.speedY = 30;
        }
        /**
         * 
         * change energy of object
         * @param()
         */
    hit() {
            this.energy -= 5; // von der Energy 5 abziehen, bis die Enrgy null iwrd
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHit = new Date().getTime(); // Zeitpunkt speichern an dem character verletzt wurde

            }

        }
        /**
         * 
         * change energy when object killed
         * @param()
         */
    kill() {
        this.energy += 5; // von der Energy 5 abziehen, bis die Enrgy null iwrd
        if (this.energy > 100) {
            this.energy = 100;
        } else {
            this.lastHit = new Date().getTime(); // Zeitpunkt speichern an dem character paso getötet hat

        }

    }

    /**
     * 
     * return true when object killed
     * @param()
     */
    isDead() {
            return this.energy == 0;
        }
        /**
         * 
         * return true when object injured
         * @param()
         */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // die Zeit berechnen von der Collision bis jetzt// Differenz in Mileseconden
        timepassed = timepassed / 1000; // Die Differenz in seconden
        return timepassed < 1;
    }
}