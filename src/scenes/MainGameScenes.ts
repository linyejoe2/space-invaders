import { Application } from "pixi.js";
import { Crab } from "../character/Crab";
import { Octopus } from "../character/Octopus";
import { Squid } from "../character/Squid";
import { IGameObject } from "../interface/IGameObject";
import { collisionDetect } from "../systems/collisionDetect";
import { getKeyPressed } from "../systems/input";
import { EnemyTypes, Vector } from "../types";

/**
 * 主要遊戲場景的 class
 * 之後如果有多個場景，也會再把共用方法拉出來做 ScenesObject
 */
export class MainGameScenes {
    public characterArr: IGameObject[];

    constructor(character: IGameObject) {
        // 實例化時就要加入第一個角色，避免錯誤
        this.characterArr = [character];
    }


    /**
     * 產生敵人陣列
     * @param enemyArr 敵人要怎麼排，一排有 11 個。
     * @param startVector 第一個敵人產生的位置，其他順排。
     * @returns void
     */
    public spawn(enemyArr: EnemyTypes[], startVector: Vector): void {
        let yNow = startVector.y;
        
        for (let ele of enemyArr) {// 每排的敵人型態， enemyArr 有幾個 ele 就有幾排。
            let xNow = startVector.x;
            for (let i = 0; i < 11; i++) {// 每排有 11 個，所以會跑 11 次。
                switch (ele) {// 看是什麼敵人就實例化那個敵人
                    case "crab":
                        this.addCharacter(new Crab({ x: xNow, y: yNow }));
                        break;
                    case "octopus":
                        this.addCharacter(new Octopus({ x: xNow, y: yNow }));
                        break;
                    case "squid":
                        this.addCharacter(new Squid({ x: xNow, y: yNow }));
                        break;
                }
                xNow += 16;
            }
            yNow += 16;
        }
        return;
    }

    /**
     * 負責處理所有 GameLoop 時要做的方法或函式
     * @param app 
     */
    public rander(app: Application): void {
        for (let i = 0; i < this.characterArr.length; i++) {
            for (let j = i + 1; j < this.characterArr.length; j++) {
                if (collisionDetect(this.characterArr[i], this.characterArr[j])) {
                    this.characterArr[i].dead = true;
                    this.characterArr[j].dead = true;
                };
            }
        }
        for (let i = 0; i < this.characterArr.length; i++) {
            // 如果他死了，就把他刪掉
            if (this.characterArr[i].dead) {
                this.characterArr.splice(i, 1);
                return;
            }

            // 把場景裡所有的角色都重畫
            this.characterArr[i].render(app);

            // 更新角色圖片
            this.characterArr[i].update?.(app.ticker.deltaMS);

            // 處理使用者輸入值
            this.characterArr[i].handleInput?.(getKeyPressed(), this);
        }
    }

    /**
     * 傳入角色
     * @param character 角色
     */
    public addCharacter(character: IGameObject) {
        this.characterArr.push(character);
    }

    /**
     * 檢查場景裡有沒有角色，主要給雷射炮看要不要射。
     * @param character 角色
     * @returns 場景裡有沒有這個角色
     */
    public hasCharacter(character: IGameObject) {
        for (const char of this.characterArr) {
            if (char.constructor == character.constructor) return true;
        }
        return false;
    }
}