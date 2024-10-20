import * as wasm from "./wasmhello_bg.wasm";
export * from "./wasmhello_bg.js";
import { __wbg_set_wasm } from "./wasmhello_bg.js";
__wbg_set_wasm(wasm);