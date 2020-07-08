import _houseService from "../Services/HouseService.js"
import _store from "../store.js"


function _draw() {
  let template = ""
  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("Hello from house controller");
    _draw()
  }
  addHouse(event) {
    // debugger
    event.preventDefault();
    let formData = event.target
    console.log("house submitted", formData.yearBuilt.value)
    let rawHouseData = {
      yearBuilt: formData.yearBuilt.value,
      homeSize: formData.homeSize.value,
      lotSize: formData.lotSize.value,
      garageBays: formData.garageBays.value,
      imgUrl: formData.imgUrl.value,
      price: formData.price.value
    }
    _houseService.addHouse(rawHouseData)
    formData.reset()
    _draw()
  }

  deleteHouse(houseId) {
    _houseService.deleteHouse(houseId)
    _draw()
  }

}