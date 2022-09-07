import { Graphics } from "pixi.js"

// 建立圖片二維陣列
const image = [
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  ];

// 建立一個圖型物件
const graphics = new Graphics;

// 遍歷 image 陣列繪製圖型。
for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[y].length; x++) {
        if (image[y][x] === 0) continue;// 如果是 0 就跳過這格的繪製。

        // 其他的就畫上顏色
        graphics.beginFill(0xffffff);

        graphics.drawRect(x, y, 1, 1);

        graphics.endFill();
    }
}

// 匯出
export default graphics;