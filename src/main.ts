import "./style.css";
import { Application } from "pixi.js";
import { LaserCannon } from "./character/LaserCannon";
import { MainGameScenes } from "./scenes/MainGameScenes";

let count = 0; // Debug 用

const app = new Application({
  width: 224,// 寬度
  height: 256,// 高度
  resolution: 3// 放大倍數
})

document.querySelector("#app")?.append(app.view);

// 建立各個角色
const laserCannon = new LaserCannon({ x: 0, y: 200 });

// 建立場景
const Game1 = new MainGameScenes(laserCannon);

// 產生敵人
Game1.spawn([
  "squid",
  "crab",
  "crab",
  "octopus",
  "octopus"
], {
  x: 30,
  y: 30
})

// GameLoop
app.ticker.add(() => {
  // debug
  // count ++
  // if (count > 5) return;


  // 把所有角色在場景裡移除
  app.stage.removeChildren();

  // 把角色重新渲染出來
  Game1.rander(app);
  // console.log(Game1.characterArr);
});
