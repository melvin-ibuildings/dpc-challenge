import {GameState} from "./State";

export class Box {
    private element: HTMLDivElement;
    private x: number;
    private y: number;
    private w: number;
    private h: number;

    constructor(element: HTMLDivElement, x: number, y: number, w: number, h: number) {
        this.element = element;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    animate(state: GameState) {
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }
}
