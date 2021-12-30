let canvas;
let world;
let keyboard = new Keyboard();

/**
 * 
 * init() function called first to start the game
 * @param()
 */
function init() {
    game_sound = new Audio('audio/gameSound.mp3');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d');
    game_sound.play();
}
/**
 * 
 * start the game with a button
 * @param()
 */
function startGame() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('round').classList.remove('d-none');
    window.onload = init();
}
/**
 * 
 * show the settings and the roles of the game
 * @param()
 */
function roles() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('roles').classList.remove('d-none');
}
/**
 * 
 * close the settings
 * @param()
 */
function closeRoles() {
    document.getElementById('roles').classList.add('d-none');
    document.getElementById('start').classList.remove('d-none');
}
/**
 * 
 * play again
 * @param()
 */
function OneMoreGame() {
    window.location.reload(true);
}
/**
 * 
 * make the screen full
 * @param()
 */
function fullScreen() {
    canvas.requestFullscreen();

}
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
    }
    console.log(event);
});
window.addEventListener('keyup', (event) => {
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
    }
    console.log(event);
});