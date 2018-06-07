import {Box} from "./Box";
import {Player} from "./Player";
import {Collider} from "./Collider";
import {AudioPlayer} from "./AudioPlayer";

const init = () => {
    const playerElement = document.createElement("div");
    playerElement.style.background = 'red';
    playerElement.style.position = 'absolute';
    playerElement.style.width = '64px';
    playerElement.style.height = '64px';
    playerElement.style.top = '50%';

    const boxElement1 = document.createElement("div");
    boxElement1.style.background = "green";
    boxElement1.style.position = "absolute";
    boxElement1.style.width = "64px";
    boxElement1.style.height = "64px";

    const boxElement2 = document.createElement("div");
    boxElement2.style.background = "green";
    boxElement2.style.position = "absolute";
    boxElement2.style.width = "64px";
    boxElement2.style.height = "64px";
    const appElement = document.querySelector(".app");

    appElement.appendChild(playerElement);
    appElement.appendChild(boxElement1);
    appElement.appendChild(boxElement2);

    return {
        playerElement,
        appElement,
        boxElement1,
        boxElement2
    }
};

const state = {
    keys: {},
};


const listen = () => {
    window.addEventListener("keyup", e => {
        state.keys[e.which] = false;
        console.log(e.which);
    });
    window.addEventListener("keydown", e => {
        state.keys[e.which] = true;
    });
};

const {playerElement, boxElement1, boxElement2} = init();

const shot = new AudioPlayer('laser.mp3');
const crash = new AudioPlayer('crash.mp3');
const welcome = new AudioPlayer('welcome.mp3');
welcome.play();
const player = new Player(playerElement, window.innerWidth / 2, window.innerHeight / 2, 64, 64, shot);
const box = new Box(boxElement1, 300, (window.innerHeight / 2) - 128, 64, 64);
const box2 = new Box(boxElement2, (window.innerWidth - 300), (window.innerHeight / 2) + 128, 64, 64);

const collider = new Collider();
state.player = player;
state.objects = [
    box,
    box2,
];

const animate = () => {
    requestAnimationFrame(animate);
    collider.collide(state, crash);
    player.animate(state);
    box.animate(state);
    box2.animate(state);
    // enemy.animate();
};

animate();
listen();