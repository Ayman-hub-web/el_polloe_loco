class Level {
    enemies;
    pasos;
    pasosdead;
    endboss;
    endbosshurt;
    endbossDead;
    clouds;
    coins;
    bottles;
    backgroundobjects;
    level_end_x = 2900;
    /**
     * 
     * constructor function with all passed variables
     * @param(string,string,string,string,string,string,string,string,string,string,)
     */
    constructor(enemies, pasos, pasosdead, endboss, endbosshurt, endbossDead, clouds, coins, bottles, backgroundobjects) {
        this.enemies = enemies;
        this.pasos = pasos;
        this.pasosdead = pasosdead;
        this.endboss = endboss;
        this.endbosshurt = endbosshurt;
        this.endbossDead = endbossDead;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundobjects = backgroundobjects;
    }
}