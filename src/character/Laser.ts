import { Application } from "pixi.js";
import { CharacterType, Vector } from "../types";
import { GameObject } from "./prototype/GameObject";

export class Laser extends GameObject {
    graph;
    size;
    type: CharacterType = "laser";

    constructor(position: { x: number, y: number }) {
        super(position)
        this.graph = this._drawGraph(this._imageArr[0]);
        this.size = this._takeSize(this._imageArr[0]);
    }


    public get position(): Vector {
        if (this._position.y < 0) this.dead = true;
        this._position.y -= 1;
        return this._position;
    }


    /**
     * 覆寫 render 方法，讓 Laser 每次更新都可以往上飛，然後撞到天花板就給自己 dead 的旗標。
     * @param stage1 
     * @returns 
     */
    render(stage1: Application): void {
        if (this.position.y < 0) {
            this.dead = true;
            return;
        }

        stage1.stage.addChild(this.graph);

        this.position.y -= 3;

        this.graph.position.set(this.position.x, this.position.y);
    }

    // 定義圖片來源
    _imageArr = [
        [[1], [1], [1], [1]]
    ];
};