import { Application } from "pixi.js";
import { IGameObject } from "../interface/IGameObject";
import { getKeyPressed } from "../systems/input";

/**
 * 主要遊戲場景的 class
 * 之後如果有多個場景，也會再把共用方法拉出來做 ScenesObject
 */
export class Game {
    public characterArr: IGameObject[];

    constructor(character: IGameObject) {
        // 實例化時就要加入第一個角色，避免錯誤
        this.characterArr = [character];
    }

    /**
     * 負責處理所有 GameLoop 時要做的方法或函式
     * @param app 
     */
    public rander(app: Application) {
        for (const character of this.characterArr) {
            // 把場景裡所有的角色都重畫
            character.render(app);

            // 更新角色圖片
            character.update?.(app.ticker.deltaMS);

            // 處理使用者輸入值
            character.handleInput?.(getKeyPressed());
        }
    }

    /**
     * 傳入角色
     * @param character 角色
     */
    public addcharacter(character: IGameObject){
        this.characterArr.push(character);
    }
}