import { CharacterType } from "../types";
import { Enemy } from "./prototype/Enemy";

export class Octopus extends Enemy {
    graph;
    size;

    constructor(position: { x: number, y: number }) {
        super(position)
        this.graph = this._drawGraph(this._imageArr[0]);
        this.size = this._takeSize(this._imageArr[0]);
    }

    // 定義圖片來源
    _imageArr = [
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ], [
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        ]
    ];
}