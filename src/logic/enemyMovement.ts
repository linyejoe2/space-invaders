import { Enemy } from "../character/prototype/Enemy";
import { EnemyStateType } from "../types";

export default function (enemyArr: Enemy[], enemyState: EnemyStateType) {
    // 先跑一次迴圈檢查是不是有敵人撞牆了
    for (const enemy of enemyArr) {
        if (enemyState.moveY) {
            enemyState.moveY = false;
            break;
        };
        if (enemy.position.x < 5 || enemy.position.x > 205) {
            enemyState.moveY = true;
            enemyState.moveDirection *= -1;
            break;
        }
    }

    // 移動敵人
    for (const enemy of enemyArr) {
        if (enemyState.moveY) {
            enemy.position.y += 2;
        } else {
            enemy.position.x += enemyState.moveDirection;
        }
    }
}