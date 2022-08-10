import { IGameObject } from "../interface/IGameObject";

export function collisionDetect(character1: IGameObject,character2: IGameObject){
    return [
        character1.position.x <= character2.position.x + character2.size.x,
        character1.position.x + character1.size.x >= character2.position.x,
        character1.position.y <= character2.position.y + character2.size.y,
        character1.position.y + character1.size.y >= character2.position.y
      ].every(Boolean);
}