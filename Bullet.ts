export class Bullet {
    private element: Element;
    private x: Number;
    private initalX: Number;
    private y: Number;
    constructor(element: Element, x: Number, y: Number) {
        this.x = x;
        this.y = y;
        this.initalX = x;
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
