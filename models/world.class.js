class World {

    character = new Character();
    endb = new Endboss();
    endbh = new EndbossHurt();
    throw = new Throwableobject();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusCoins = new StatusCoins();
    statusBottles = new StatusBottles();
    statusEndboss = new StatusEndboss();
    // bottleExplosion = new Explosion();
    throwableObjects = [];
    collision = false;
    dead = false;
    changePaso = false;
    explosion = false;
    /**
     * 
     * constructor function for the class with all called fucntions
     * @param(string, string)
     */
    constructor(canvas, keyboard) {
            this.ctx = canvas.getContext('2d');
            this.canvas = canvas;
            this.keyboard = keyboard;
            this.draw();
            this.setWorld();
            this.run();
        }
        /**
         * 
         * set character in world
         * @param()
         */
    setWorld() {
            this.character.world = this;
            this.level.enemies.world = this;
            this.level.pasos.world = this;
            //this.throw.world = this;
        }
        /**
         * 
         * run follow functions
         * @param()
         */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkWinGame();
        }, 200);
    }
    i = 0;
    /**
     * 
     * check if there are any collisions
     * @param()
     */
    checkCollisions() {
            this.throwableObjects.forEach((bottle) => {
                this.level.endboss.forEach((boss, index) => {
                    if (bottle.isColliding(boss)) {
                        console.log("Flasche trifft Endboss", this.i);
                        this.throw.explosion = true;
                        console.log("Explosion", this.throw.explosion);
                        this.throw.animate();
                        this.i++;
                        if (this.i > 1) {
                            this.level.endboss.splice(index, 1);
                            this.endb.energy -= 100;
                            this.statusEndboss.setPercentage(this.endb.energy);
                            this.level.endboss.splice(index, 1);
                            this.collision = true;
                            this.character.energy = 100;
                            this.statusBar.setPercentage(this.character.energy);
                        }
                    }
                });
            });
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    console.log('Collision with Character Energy', this.character.energy);
                }
            });

            this.level.pasos.forEach((paso, index) => {
                this.changePaso = false;
                if (this.character.isColliding(paso)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    console.log('Collision with Paso');
                }
            });

            this.level.endboss.forEach((endb) => {
                if (this.character.isColliding(endb) && !this.collision) {
                    this.character.energy = 0;
                    this.statusBar.setPercentage(this.character.energy);
                    console.log('Collision with Endboss');
                }
            });
            this.level.coins.forEach((coin, index) => {
                if (this.character.isColliding(coin)) {
                    console.log('collision');
                    this.level.coins.splice(index, 1);
                    this.statusCoins.setPercentage(100 - (this.level.coins.length - 1) * 20);
                    console.log('Länge vom array', this.level.coins.length);
                }
            });
            this.level.bottles.forEach((bottle, index) => {
                if (this.character.isColliding(bottle)) {
                    console.log('collision');
                    this.level.bottles.splice(index, 1);
                    this.statusBottles.setPercentage(100 - this.level.bottles.length * 20);
                    console.log('Länge vom array', this.level.bottles.length);
                }
            });

        }
        /**
         * 
         * check if there are throwed objects
         * @param()
         */
    checkThrowObjects() {
            if (this.character.walk && this.keyboard.D && this.statusBottles.resolveImageIndex() > 0) {
                let bottleThrow = new Throwableobject(this.character.x + 100, this.character.y + 100);
                console.log("X ACHSE Endboss", this.endb.x);
                console.log("X ACHSE thrwo", this.character.x + 100);
                this.throwableObjects.push(bottleThrow);

            }
        }
        /**
         * 
         * check if character won game
         * @param()
         */
    checkWinGame() {
            if (this.character.x > 2400 && !this.character.isAboveGround()) {
                this.character.jump();
                this.character.walk = false;
                setTimeout(() => {
                    this.character.winGameOver();
                }, 5000);
            }
        }
        /**
         * 
         * draw objects on ctx
         * @param()
         */
    draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.translate(this.camera_x, 0);

            this.objectsToMap(this.level.backgroundobjects);

            this.ctx.translate(-this.camera_x, 0); //Back
            this.addToMap(this.statusBar);
            this.addToMap(this.statusCoins);
            this.addToMap(this.statusBottles);
            this.addToMap(this.statusEndboss);
            this.ctx.translate(this.camera_x, 0); //Forward

            this.objectsToMap(this.level.enemies);
            this.objectsToMap(this.level.pasos);
            // if (this.changePaso) {
            //     this.objectsToMap(this.level.pasosdead);
            // }
            this.objectsToMap(this.level.clouds);
            this.objectsToMap(this.level.coins);
            this.objectsToMap(this.level.bottles);
            this.addToMap(this.character);
            this.objectsToMap(this.level.endboss);
            // if (this.collision) {
            //     this.objectsToMap(this.level.endbossDead);
            // }
            // if (this.explosion) {
            //     this.addToMap(this.bottleExplosion);
            // }
            this.objectsToMap(this.throwableObjects);

            this.ctx.translate(-this.camera_x, 0);

            let self = this;
            requestAnimationFrame(function() {
                self.draw();
            });
        }
        /**
         * 
         * insert many objects to ctx
         * @param(string)
         */
    objectsToMap(objects) {
            objects.forEach(o => {
                this.addToMap(o);
            })
        }
        /**
         * 
         * insert object to ctx
         * @param(string)
         */
    addToMap(mo) {
            if (mo.otherDirection) {
                this.flipImage(mo);
            }
            mo.draw(this.ctx);
            mo.drawFrame(this.ctx);

            if (mo.otherDirection) {
                this.flipImageBack(mo);
            }
        }
        /**
         * 
         * reflect image
         * @param(string)
         */
    flipImage(mo) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        /**
         * 
         * reflect iamge back
         * @param(string)
         */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

}