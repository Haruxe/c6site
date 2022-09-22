import * as THREE from "three";
import { proxy } from "valtio";

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: ["board1", "board2", "board3", "board4", "board5"].map(
    (u) => `/${u}.png`
  ),
});
