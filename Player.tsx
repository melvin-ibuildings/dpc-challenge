import * as React from "react";
import * as PixiFibre from "react-pixi-fiber"
import * as PIXI from "pixi.js"
import {GameState} from "./State";

const idle = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/player-idle.png";

const {Sprite} = PixiFibre;
const {Component} = React;
const {Texture} = PIXI;

export default class Player extends Component {
    private x: number;
    private y: number;
    private state: { x: number; y: number };
    private velocity: { x: number; y: number };
    private limit: { x: number; y: number };
    private acceleration: { x: number; y: number };
    private friction: { x: number; y: number };
    private base: PIXI.Texture;
    private rec: PIXI.Rectangle;
    private idle: PIXI.Texture;
    private delta: number;

    constructor(...params) {
        this.delta = 0;
        super(...params);

        this.x = this.props.x;
        this.y = this.props.y;
        this.state = {
            x: this.props.x,
            y: this.props.y,
        };

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

        this.base = PIXI.Texture.fromImage('./Images/walkSeparated.png');
        this.rec = new PIXI.Rectangle(0, 0, 510, 887);
        this.walkCycle = [
            new PIXI.Rectangle(0, 0, 510, 887),
            new PIXI.Rectangle(510, 0, 530, 887),
            new PIXI.Rectangle(1040, 0, 530, 887),
        ];
        this.idle = new PIXI.Texture(this.base.baseTexture, this.rec, this.rec, this.rec);
    }

    componentWillReceiveProps(props) {
        this.x = this.props.x;
        this.y = this.props.y;
    }

    animate(state: GameState): void {
        const {w, h} = this.props;

        this.delta++;
        if (this.delta = )
        if (state.keys[65] && state.keys[68]) {
            // do nothing
        }
        else if (state.keys[65]) {
            this.velocity.x = Math.max(
                this.velocity.x - this.acceleration.x,
                this.limit.x * -1,
            )
        }
        else if (state.keys[68]) {
            this.velocity.x = Math.min(
                this.velocity.x + this.acceleration.x,
                this.limit.x * 1,
            )
        }

        if (state.keys[87] && state.keys[83]) {
            // do nothing
        }
        else if (state.keys[87]) {
            console.log('2');
            this.velocity.y = Math.max(
                this.velocity.y - this.acceleration.y,
                this.limit.y * -1,
            )
        }
        else if (state.keys[83]) {
            this.velocity.y = Math.min(
                this.velocity.y + this.acceleration.y,
                this.limit.y * 1,
            )
        }

        this.velocity.x *= this.friction.x;
        this.x += this.velocity.x;

        this.velocity.y *= this.friction.y;
        this.y += this.velocity.y;

        this.setState({
            x: this.x,
            y: this.y,
        });
    }

    render(): any {
        const {x, y} = this.state;

        return (
            <Sprite
                texture={this.idle}
                x={x}
                y={y}
                width={64}
                height={76}
            />
        )
    }
}
