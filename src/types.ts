// 向量位置
export type Vector = {
    x: number;
    y: number;
};

export type EnemyTypes = "squid" | "crab" | "octopus";

// 按了什麼按鍵(可以按什麼按鈕)
export enum Key {
    Left,// 雷射炮向左走
    Right,// 雷射炮向右走
    Space// 雷射炮發射
}