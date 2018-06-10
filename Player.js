import {Bullet} from "./Bullet";

export class Player {

    constructor(element, x, y, w, h, shot) {
        this.h = h;
        this.w = w;
        this.shot = shot;

        this.bulletTimeout = 10;
        this.bulletTime = 0;


        this.element = element;
        this.x = x;
        this.y = y;
        this.velocity = {
            x: 0,
            y: 0,
        };

        this.limit = {
            x: 8,
            y: 8,
        };

        this.acceleration = {
            x: 2,
            y: 2,
        };

        this.friction = {
            x: 0.9,
            y: 0.9,
        };

        this.bullets = [];
    }

    shoot() {
        this.shot.play();
        let bulletElement = document.createElement("div");
        bulletElement.style.background = "green";
        bulletElement.style.position = "absolute";
        bulletElement.style.width = "12";
        bulletElement.style.height = "12px";
        bulletElement.style.borderRadius = "100%";
        this.element.parentNode.appendChild(bulletElement);

        this.bullets.push(new Bullet(bulletElement, this.x, this.y));
    }

    animate(state) {

        const {
            keys,
            collidesLeft,
            collidesLeftWith,
            collidesRight,
            collidesRightWith,
            collidesUp,
            collidesUpWith,
            collidesDown,
            collidesDownWith,
        } = state;

        if (this.bullets.length > 0) {
            this.bullets.forEach((object, idx) => {
                    object.animate(state);
                    if (object.shouldDestroy()) {
                        object.destroy();
                        this.bullets.splice(idx, 1);
                    }
                }
            )
        }

        if (this.bulletTime > 0) {
            this.bulletTime--;
        }
        if ((keys[32] || state.shoot) && this.bulletTime === 0) {
            this.bulletTime = this.bulletTimeout;
            this.shoot();
        }

        if (keys[37] && state.keys[39]) {

        }
        else if (keys[37] || state.left) {
            this.velocity.x = Math.max(
                this.velocity.x - this.acceleration.x,
                this.limit.x * -1,
            );
        }
        else if (keys[39] || state.right) {
            this.velocity.x = Math.min(
                this.velocity.x + this.acceleration.x,
                this.limit.x * 1,
            );
        }

        if (keys[38] && state.keys[40]) {

        }
        else if (keys[38] || state.up) {
            this.velocity.y = Math.max(
                this.velocity.y - this.acceleration.y,
                this.limit.y * -1,
            );
        }
        else if (keys[40] || state.down) {
            this.velocity.y = Math.min(
                this.velocity.y + this.acceleration.y,
                this.limit.y * 1,
            );
        }

        if (this.velocity.x < 0 && collidesLeft || this.velocity.x > 0 && collidesRight) {
            if (collidesLeftWith && this.y <= collidesLeftWith.y || collidesRightWith && this.y < collidesRightWith.y) {
                this.velocity.y -= this.friction.y;
            } else {
                this.velocity.y += this.friction.y;
            }
        } else {
            this.velocity.x *= this.friction.x;
            this.x += this.velocity.x;
        }

        if (this.velocity.y < 0 && collidesUp || this.velocity.y > 0 && collidesDown) {
            if (collidesUpWith && this.x <= collidesUpWith.x || collidesDownWith && this.x < collidesDownWith.x) {
                this.velocity.x -= this.friction.x;
            } else {
                this.velocity.x += this.friction.x;
            }
        } else {
            this.velocity.y *= this.friction.y;
            this.y += this.velocity.y;
        }

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";
    }

}