import { IGameObject } from "../character/interface/IGameObject";
import { MainGameScenes } from "../scenes/MainGameScenes";
import { EnemyLaser } from "../character/EnemyLaser";
import { Squid } from "../character/Squid";

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function throttle(ms: number, fn: Function) {
    let duration = ms;

    return function (delta: number, ...args: any[]) {
        duration -= delta;

        if (duration > 0) return;

        fn(delta, ...args);
        duration = ms;
    };
}

export default function randomShoot(character: IGameObject, scenes: MainGameScenes) {
    if (character instanceof Squid) {
        if (Math.random() > 0.95) {
            character.shooting = true;
            scenes.addCharacter(new EnemyLaser({
                x: character.position.x + (character.size.x / 2),
                y: character.position.y + (character.size.y / 2)
            }));
        }
    }
}