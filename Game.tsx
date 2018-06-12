import * as React from "react";
import Player from "./Player";
import {GameState} from "./State";
import * as PixiFibre from "react-pixi-fiber"
import {Component} from "react";

const {Stage} = PixiFibre;
const {Component} = React;

export default class Game extends Component {
    private game: GameState;

    constructor(...params) {
        super(...params);

        this.game = {
            keys: [],
            left: false,
            right: false,
            up: false,
            down: false,
            shoot: false,
            player: null,
            collidesLeft: false,
            collidesLeftWith: false,
            collidesRight: false,
            collidesRightWith: false,
            collidesUp: false,
            collidesUpWith: false,
            collidesDown: false,
            collidesDownWith: false,
            objects: [],
        };

        this.animate = this.animate.bind(this)
    }

    componentDidMount(): void {
        window.addEventListener("keydown", e => {
            this.game = {
                ...this.game,
                keys: {
                    ...this.game.keys,
                    [e.which]: true,
                }
            }
        });

        window.addEventListener("keyup", e => {
            this.game = {
                ...this.game,
                keys: {
                    ...this.game.keys,
                    [e.which]: false,
                }
            }
        });

        this.animate()
    }

    componentDidCatch(error, info): void {
        console.error(error, info);
    }

    animate(): void {
        requestAnimationFrame(this.animate);
        if (this.game.player) {
            this.game.player.animate(this.game);
        }

        this.game.objects.forEach(
            object => object.animate(this.game)
        )
    }

    render(): Component {
        this.game.player = undefined;
        this.game.objects = [];

        return (
            <Stage
                width={this.props.w}
                height={this.props.h}
                options={{backgroundColor: 0x000000}}
            >
                <Player x={this.props.w / 2} y={this.props.h / 2} ref={player => this.game.player = player}/>
            </Stage>
        );
    }
}