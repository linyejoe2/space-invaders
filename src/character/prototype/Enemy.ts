import { IGameObject } from "../interface/IGameObject";
import { Application, Graphics } from "pixi.js"
import { Vector, CharacterType } from "../../types";
import { GameObject } from "./GameObject";

export abstract class Enemy extends GameObject {
    type: CharacterType = "enemy";
}