import _store from "../store.js"
import House from "../Models/House.js"


class HouseService {
  constructor() {
  }

  deleteHouse(houseId) {
    _store.deleteHouse(houseId)
  }
  addHouse(rawHouseData) {
    let newHouse = new House(rawHouseData)
    _store.addHouse(newHouse)
  }

}

const SERVICE = new HouseService()

export default SERVICE