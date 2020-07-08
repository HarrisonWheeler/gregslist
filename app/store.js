import Value from "./Models/Value.js";
import House from "./Models/House.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {House[]} */
  houses: []
};
console.log("hello from store");


class Store {
  /**
   * Provides access to application state data
   */

  addHouse(newHouse) {
    _state.houses.push(newHouse)
  }
  get State() {
    return _state;
  }
}


const STORE = new Store();
export default STORE;
