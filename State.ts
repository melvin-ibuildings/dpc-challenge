import Player from "./Player";

export interface GameState {
    keys: Array;
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    shoot: boolean;
    player: Player;
    collidesLeft: boolean;
    collidesLeftWith: boolean;
    collidesRight: boolean;
    collidesRightWith: boolean;
    collidesUp: boolean;
    collidesUpWith: boolean;
    collidesDown: boolean;
    collidesDownWith: boolean;
    objects: Array;
}