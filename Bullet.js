export class Bullet {
    constructor(element, x, y) {
        this.x = x;
        this.initalX = x;
        this.y = y;
        this.element = element;
    }

    animate(state) {

        if (this.x - this.initalX > 2300) {

        } else {
            this.x +=5;
        }

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";
    }
    shouldDestroy() {
        return (this.x - this.initalX > 2300);
    }

    destroy() {
        this.element.parentNode.removeChild(this.element);;
    }

}
