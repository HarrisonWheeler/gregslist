import _store from "../store.js"
import House from "../Models/House.js"


class HouseService {
  constructor() {
    console.log("hello from house service");
    let newHouse = new House()
  }
}

const SERVICE = new HouseService()

export default SERVICE