import { Graphics, Application } from "pixi.js"
import { MainGameScenes } from "../../scenes/MainGameScenes";
import { Vector, Key, CharacterType } from "../../types";

export interface IGameObject {
    graph: Graphics;// 這個物件應該會有一個圖片
    size: Vector;// 角色大小 (px)
    position: Vector;// 物件的位置
    type: CharacterType;// 物件類型
    dead: Boolean;// 他有沒有死了
    shooting?: boolean;// 看他有沒有要射擊
    render(stage1: Application): void;// 自己處理渲染自己的事件，就不用寫在 main.ts 了
    update?(frameTime: number): void;// 傳入一個這偵的時間，物件會判斷是否更新 graph
    handleInput?(pressed: Key[], scene: MainGameScenes): void;// 確認使用者目前輸入什麼按鈕，只有雷射砲要用
}