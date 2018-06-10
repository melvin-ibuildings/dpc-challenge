export class GameState {
    public keys: Array = [];
    public left: boolean = false;
    public right: boolean = false;
    public up: boolean = false;
    public down: boolean = false;
    public shoot: boolean = false;
    public player: any = null;
    public collidesLeft: boolean = false;
    public collidesLeftWith: boolean = false;
    public collidesRight: boolean = false;
    public collidesRightWith: boolean = false;
    public collidesUp: boolean = false;
    public collidesUpWith: boolean = false;
    public collidesDown: boolean = false;
    public collidesDownWith: boolean = false;
    public objects: Array = [];
}