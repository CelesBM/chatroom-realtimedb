export const state = {
  data: {},
  listeners: [],
  init() {},
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    console.log("nueva data", this.data);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};
