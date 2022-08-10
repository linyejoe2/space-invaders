import { Application } from "pixi.js";
import { MainGameScenes } from "../scenes/MainGameScenes";
import { Key } from "../types";
import { GameObject } from "./GameObject";
import { Laser } from "./Laser";

export class LaserCannon extends GameObject {
    graph;
    size;

    constructor(position: { x: number, y: number }) {
        super(position)
        this.graph = this._drawGraph(this._imageArr[0]);
        this.size = this._takeSize(this._imageArr[0]);
    }

    public handleInput(pressed: Key[], scene: MainGameScenes) {
        // 向左移動
        if (pressed.includes(Key.Left)) {
            this.position.x--
        }
        // 向右移動
        else if (pressed.includes(Key.Right)) {
            this.position.x++
        }
        // 射擊，如果畫面上沒有 Laser 才射
        if (pressed.includes(Key.Space)) {
            let laser1 = new Laser({ x: this.position.x + 5, y: this.position.y - 4 });
            if (!scene.hasCharacter(laser1)) {
                scene.addCharacter(laser1);
            }
            return;
        }
    }


    render(stage1: Application): void {
        let stageScreen = stage1.screen;

        stage1.stage.addChild(this.graph);

        this.position.x =// 複寫 x 的值
            Math.min(stageScreen.right - 11,// 再拿得出來的值跟畫面右邊比較，取最小的(要注意，由於角色本身也是有佔體積的，所以要記得加上角色寬度，也就是 11px)
                Math.max(stageScreen.left, this.position.x));// 拿 x 跟畫面最左邊比較，取最大的


        this.graph.position.set(
            this.position.x, this.position.y);
    }

    // private _canShoot = true;

    // 定義圖片來源
    _imageArr = [
        [
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
    ];
}