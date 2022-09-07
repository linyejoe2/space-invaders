import { Graphics } from "pixi.js"

// 建立雷射炮圖片二維陣列
const laserCannon = [
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

// 建立一個圖型物件
const graphics = new Graphics;

// 遍歷 laserCannon 陣列繪製圖型。
for (let y = 0; y < laserCannon.length; y++) {
    for (let x = 0; x < laserCannon[y].length; x++) {
        if (laserCannon[y][x] === 0) continue;// 如果是 0 就跳過這格的繪製。

        // 其他的就畫上顏色
        graphics.beginFill(0xffffff);

        graphics.drawRect(x, y, 1, 1);

        graphics.endFill();
    }
}

// 匯出雷射炮
export default graphics;