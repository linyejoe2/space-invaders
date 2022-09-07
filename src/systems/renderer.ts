import { Application } from "pixi.js";
import { IGameObject } from "../character/interface/IGameObject";

/**
 * 專門渲染角色的函式
 * @param app 
 * @param character 
 */
export default function renderer(app: Application, character: IGameObject) {
    app.stage.addChild(character.graph);
    character.graph.position.set(...(Object.values(character.position)));
}