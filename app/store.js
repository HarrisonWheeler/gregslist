import Value from "./Models/Value.js";
import House from "./Models/House.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {House[]} */
  houses: []
};


class Store {
  deleteHouse(houseId) {
    let indexToRemove = _state.houses.findIndex(house => house.id == houseId)
    if (indexToRemove < 0) {
      console.error("INVALID HOUSE ID")
    }
    _state.houses.splice(indexToRemove, 1)
  }

  addHouse(newHouse) {
    _state.houses.push(newHouse)
  }
  get State() {
    return _state;
  }
}


const STORE = new Store();
export default STORE;
