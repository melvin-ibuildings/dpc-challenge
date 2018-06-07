export class Box {
    constructor(element, x, y, w, h) {
        this.element = element;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    animate(state) {
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }
}
