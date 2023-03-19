import type { PluginOptions } from "../options";

interface InteralState {
  menuLevel: number;
}

let _state: InteralState;

function normalizState(option: PluginOptions): InteralState {
  return {
    menuLevel: option.menuLevel ?? 2,
  };
}

function initStore(option: PluginOptions) {
  _state = normalizState(option);
}

function getState() {
  return _state;
}

export default {
  initStore,
  getState,
};
