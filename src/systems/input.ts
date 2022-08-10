import { Key } from "../types";

let pressed : Set<Key> = new Set();

// 監聽 keydown
document.addEventListener("keydown", (event) =>{
    if (event.code === "ArrowLeft") {
        pressed.add(Key.Left);
    }
    if (event.code === "ArrowRight") {
        pressed.add(Key.Right);
    }
    if (event.code === "Space") pressed.add(Key.Space);
});

// 監聽 keyup
document.addEventListener("keyup", (event) =>{
    if (event.code === "ArrowLeft") {
        pressed.delete(Key.Left);
    }
    if (event.code === "ArrowRight") {
        pressed.delete(Key.Right);
    }
    if (event.code === "Space") pressed.delete(Key.Space);
});

/**
 * @returns 使用者目前按下了什麼按鈕
 */
export function getKeyPressed(){
    return Array.from(pressed);
}