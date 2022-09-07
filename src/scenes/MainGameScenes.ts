import { Application } from "pixi.js";
import { Crab } from "../character/Crab";
import { EnemyLaser } from "../character/EnemyLaser";
import { Octopus } from "../character/Octopus";
import { Squid } from "../character/Squid";
import { IGameObject } from "../character/interface/IGameObject";
import { collisionDetect } from "../logic/collisionDetect";
import { getKeyPressed } from "../systems/input";
import randomShoot from "../logic/randomShoot";
import { EnemyTypes, Vector, EnemyStateType } from "../types";
import renderer from "../systems/renderer";
import { Enemy } from "../character/prototype/Enemy";
import enemyMovement from "../logic/enemyMovement";

/**
 * 主要遊戲場景的 class
 * 之後如果有多個場景，也會再把共用方法拉出來做 ScenesObject
 */
export class MainGameScenes {
    public characterArr: IGameObject[];
    public enemyArr?: Enemy[];

    // declear enemy movement state.
    public enemyArrState: EnemyStateType = {
        moveTimeIntevel: 3000,
        moveTimeNow: 0,
        moveDirection: 1,
        moveY: false,
        shootTimeIntevel: 300,
        shootTimeNow: 0
    }

    constructor(character: IGameObject) {
        // 實例化時就要加入第一個角色，避免錯誤
        this.characterArr = [character];
        this.enemyArr = [new Crab({ x: 30, y: 30 })];
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
                let character: Enemy;
                switch (ele) {// 看是什麼敵人就實例化那個敵人
                    case "crab":
                        character = new Crab({ x: xNow, y: yNow });
                        break;
                    case "octopus":
                        character = new Octopus({ x: xNow, y: yNow });
                        break;
                    case "squid":
                        character = new Squid({ x: xNow, y: yNow });
                        break;
                }
                this.addCharacter(character);
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
        // 偵測碰撞
        for (let i = 0; i < this.characterArr.length; i++) {
            for (let j = i + 1; j < this.characterArr.length; j++) {
                if (collisionDetect(this.characterArr[i], this.characterArr[j])
                    && this.characterArr[i].type != this.characterArr[j].type
                ) {
                    this.characterArr[i].dead = true;
                    this.characterArr[j].dead = true;
                };
            }
        }
        for (let i = 0; i < this.characterArr.length; i++) {
            let character = this.characterArr[i];

            // 如果他死了，就把他刪掉
            if (character.dead) {
                this.characterArr.splice(i, 1);
                return;
            }

            // 處理敵人移動
            if ((this.enemyArrState.moveTimeNow += app.ticker.deltaMS) >
                this.enemyArrState.moveTimeIntevel) {
                enemyMovement(this.enemyArr!, this.enemyArrState);

                this.enemyArrState.moveTimeNow = 0;
            }

            // 處理敵人射擊
            if ((this.enemyArrState.shootTimeNow += app.ticker.deltaMS) >
                this.enemyArrState.shootTimeIntevel) {
                randomShoot(character, this);

                this.enemyArrState.shootTimeNow = 0;
            }

            // 處理使用者輸入值
            character.handleInput?.(getKeyPressed(), this);

            // 把場景裡所有的角色都重畫
            // if ((this.enemyArrState.moveTimeNow == 0) {
            renderer(app, character);
            // character.render(app);

            // 更新角色圖片
            character.update?.(app.ticker.deltaMS);
        }
    }

    /**
     * 傳入角色
     * @param character 角色
     */
    public addCharacter(character: IGameObject) {
        this.characterArr.push(character);

        if (character instanceof Enemy) {
            this.enemyArr?.push(character);
        }
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