import { Graphics } from "pixi.js"
import { GameObject } from "../types";

// 建立外星人圖片二維陣列
const image = [
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
];

// 建立外星人揮手的圖片
const image2 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];


let current = 0;
const images = [image, image2];

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

let timePass = 0;

export default function CrabAnima(delta: number):Graphics {
    timePass += delta;

    const image = images[current % images.length];
    if (timePass > 1000) {
        current ++;
        timePass = 0;
    }

    const graphics = new Graphics();

    for (let y = 0; y < image.length; y++) {
        for (let x = 0; x < image[y].length; x++) {
            if (image[y][x] === 0) continue;

            graphics.beginFill(0xffffff);

            graphics.drawRect(x, y, 1, 1);

            graphics.endFill();
        }
    }

    return graphics;
};

// 匯出我們的外星人
// export default CrabAnima(1);