import { Graphics, Application } from "pixi.js"
import { Game } from "../scenes/Game";
import { Vector, Key } from "../types";

export interface IGameObject {
    graph: Graphics;// 這個物件應該會有一個圖片
    dead: Boolean;// 他有沒有死了
    size: Vector;
    position: Vector;// 物件的位置
    render(stage1: Application): void;// 自己處理渲染自己的事件，就不用寫在 main.ts 了
    update?(frameTime: number): void;// 傳入一個這偵的時間，物件會判斷是否更新 graph
    handleInput?(pressed: Key[], scene: Game): void;// 確認使用者目前輸入什麼按鈕，只有雷射砲要用
}