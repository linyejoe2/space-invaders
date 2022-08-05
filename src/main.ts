import "./style.css";
import { Application } from "pixi.js";
import { Crab } from "./character/Crab";
import { LaserCannon } from "./character/LaserCannon";
import { Squid } from "./character/Squid";
import { Octopus } from "./character/Octopus";
import { Game } from "./scenes/Game";

const app = new Application({
  width: 70,// 寬度
  height: 50,// 高度
  resolution: 10// 放大倍數
})

document.querySelector("#app")?.append(app.view);

// 建立各個角色
const crab1 = new Crab({ x: 0, y: 0 });
const squid1 = new Squid({ x: 20, y: 0 });
const octopus1 = new Octopus({ x: 40, y: 0 });
const laserCannon = new LaserCannon({ x: 0, y: 20 });

// 建立場景
const Game1 = new Game(crab1);

// 把其他角色塞進去
Game1.addcharacter(squid1)
Game1.addcharacter(octopus1)
Game1.addcharacter(laserCannon)

// GameLoop
app.ticker.add(() => {
  // 把所有角色在場景裡移除
  app.stage.removeChildren();

  // 把角色重新渲染出來
  Game1.rander(app);
});
