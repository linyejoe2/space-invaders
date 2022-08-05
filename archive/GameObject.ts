import { IgameObject } from "../interface/IGameObject";
import { Application, Graphics } from "pixi.js"
import { Vector } from "../types";

export class Crab implements IgameObject {
    public graph: Graphics;
    public position: Vector;

    constructor(imageArr: number[][]) {
        this.graph = this._drawGraph(this._imageArr[0]);
        this.position = {
            x: 0,
            y: 0
        }
        this._imageArr = imageArr;
    }

    // 判斷要不要更新
    // public update(frameTime: number): void {
    //     // 先把當前偵的時間加上去
    //     this._timeOut += frameTime;

    //     // 如果到 1 秒了
    //     if (this._timeOut > 1000) {
    //         // 換一張圖
    //         this._currentImageIndex++;

    //         // 重新繪圖
    //         this.graph = this._drawGraph(
    //             this._imageArr[this._currentImageIndex %
    //             this._imageArr.length]);

    //         // 重新計時
    //         this._timeOut = 0;
    //     }
    // }

    // 自己 render 自己，這樣就不用在 main.ts 多寫 render 了
    public render(stage1: Application): void {
        stage1.stage.removeChildren();
        stage1.stage.addChild(this.graph);

        this.graph.position.set(
            this.position.x, this.position.y);
    }

    // 目前播到的動畫 _imageArr[_imageIndex]
    private _currentImageIndex = 0;

    // 切換動畫的時間
    private _timeOut = 0;

    // 定義圖片來源
    private _imageArr: number[][];

    // 畫圖的 mathods
    private _drawGraph(image: number[][]): Graphics {
        const graphics = new Graphics();

        for (let y = 0; y < image.length; y++) {
            for (let x = 0; x < image[y].length; x++) {
                if (image[y][x] === 0) continue;// 如果是 0 就跳過這格的繪製。

                // 其他的就畫上顏色
                graphics.beginFill(0xffffff);

                graphics.drawRect(x, y, 1, 1);

                graphics.endFill();
            }
        }

        return graphics;
    }
}