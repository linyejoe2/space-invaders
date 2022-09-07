import { Application } from "pixi.js";
import { CharacterType } from "../types";
import { GameObject } from "./prototype/GameObject";

export class EnemyLaser extends GameObject {
    graph;
    size;
    type:CharacterType = "enemy";

    constructor(position: { x: number, y: number }) {
        super(position)
        this.graph = this._drawGraph(this._imageArr[0]);
        this.size = this._takeSize(this._imageArr[0]);
    }

    /**
     * 覆寫 render 方法，讓 EnemyLaser 每次更新都可以往下飛，然後撞到地板就給自己 dead 的旗標。
     * @param stage1 
     * @returns 
     */
    render(stage1: Application): void {
        // console.log(stage1.stage.height);
        if (this.position.y > 256) {
            this.dead = true;
            return;
        }

        stage1.stage.addChild(this.graph);

        this.position.y += 2;

        this.graph.position.set(this.position.x, this.position.y);
    }

    // 定義圖片來源
    _imageArr = [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        [
            [1, 1, 1],
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ]
    ];
};