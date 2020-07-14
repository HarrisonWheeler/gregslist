import _store from "../store.js"
import House from "../Models/House.js"

const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})

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