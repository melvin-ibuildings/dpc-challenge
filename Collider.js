export class Collider {
    collide(state, sound) {
        const {player, objects} = state;
        state.collidesLeft = false;
        state.collidesLeftWith = undefined;

        state.collidesRight = false;
        state.collidesLeftRight = undefined;

        state.collidesUp = false;
        state.collidesUpWith = undefined;

        state.collidesDown = false;
        state.collidesDownWith = undefined;

        objects.forEach(object => {
            if (
                player.x < (object.x + object.w)
                && (player.x + player.w) > object.x
                && player.y < (object.y + object.h)
                && (player.y + player.h) > object.y
            ) {
                sound.play();
                if (player.velocity.x < 0 && object.x <= player.x) {
                    state.collidesLeft = true;
                    state.collidesLeftWith = object;
                }
                if (player.velocity.x > 0 && object.x >= player.x) {
                    state.collidesRight = true;
                    state.collidesRightWith = object;
                }

                if (player.velocity.y > 0 && object.y >= player.y) {
                    state.collidesDown = true;
                    state.collidesDownWith = object;
                }

                if (player.velocity.y < 0 && object.y <= player.y) {
                    state.collidesUp = true;
                    state.collidesUpWith = object;
                }
            }
        })
    };

}