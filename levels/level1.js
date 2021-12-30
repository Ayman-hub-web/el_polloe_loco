const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ], [
        new Paso(),
        new Paso(),
        new Paso(),
    ], [new PasoDead()], [
        new Endboss(),
    ], [
        new EndbossHurt(),
    ], [new EndbossDead()], [
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 500, 20),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 900, 20),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1800, 20),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 2800, 20),
    ], [
        new Coins('img/7.Marcadores/Icono/Monedas.png', 600, 150),
        new Coins('img/7.Marcadores/Icono/Monedas.png', 800, 250),
        new Coins('img/7.Marcadores/Icono/Monedas.png', 1000, 300),
        new Coins('img/7.Marcadores/Icono/Monedas.png', 1200, 32800),
        new Coins('img/7.Marcadores/Icono/Monedas.png', 1400, 200),
        new Coins('img/7.Marcadores/Icono/Monedas.png', 1600, 150)
    ], [
        new Bottles('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png', 400, 150),
        new Bottles('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png', 500, 100),
        new Bottles('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png', 700, 200),
        new Bottles('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png', 900, 250),
        new Bottles('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png', 1500, 150),
    ], [
        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719 * 2),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/1.png', -719 * 2),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/1.png', -719 * 2),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', -719 * 2),

        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

        new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
        new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
        new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
        new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),
    ]
);
// this.throwableObjects.forEach((bottles) => {
//     this.level.enemies.forEach((enemy) => {
//         this.level.endboss.forEach((boss) => {
//             if (bottles.isColliding(boss)) {
//                 console.log("Zusammenstoß");
//             }
//         });
//     });
// });