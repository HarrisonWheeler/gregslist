import _houseService from "../Services/HouseService.js"
import _store from "../store.js"
import store from "../store.js"


function _draw() {
  let template = /*html*/ `
                <div class="col-12 text-center">
                    <h5 class="pt-2">Submit Your House!</h5>
                    <form onsubmit="app.houseController.addHouse(event)" action=""
                    class="col-6 border rounded shadow bg-dark text-light pt-2 pb-2 mx-auto">
                    <div class="form-group">
                        <label for="">Bedrooms</label>
                        <input type="number" min="0" max="10" name="bedrooms" id="" class="form-control"
                        placeholder="Enter Bedrooms...">
                    </div>
                    <div class="form-group">
                        <label for="">Bathrooms</label>
                        <input type="number" min="0" max="10" name="bathrooms" id="" class="form-control"
                        placeholder="Enter Bathrooms...">
                    </div>
                    <div class="form-group">
                        <label for="">Description</label>
                        <input type="text" name="description" id="" class="form-control"
                        placeholder="Enter Description...">
                    </div>
                    <div class="form-group">
                        <label for="">Image URL</label>
                        <input type="text" name="imgUrl" id="" class="form-control" placeholder="Enter Image URL...">
                    </div>
                    <div class="form-group">
                        <label for="">Levels</label>
                        <input type="number" name="levels" min="0" max="5" id="" class="form-control" placeholder="Enter Levels...">
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="number" name="price" id="" class="form-control" placeholder="Enter Price...">
                    </div>
                    <div class="form-group">
                        <label for="">Year</label>
                        <input type="number" name="year" id="" class="form-control" placeholder="Enter Year...">
                    </div>
                    <button class="btn btn-success btn-block" type="submit">Submit</button>
                </form>
              </div>
  `

  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HouseController {
  constructor() {
    store.subscribe("houses", _draw)
  }

  showHouses() {
    _houseService.getHouses()
  }
  addHouse(event) {
    event.preventDefault();
    let formData = event.target
    let rawHouseData = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
      price: formData.price.value,
      year: formData.year.value
    }
    _houseService.addHouse(rawHouseData)
    formData.reset()
  }

  deleteHouse(houseId) {
    _houseService.deleteHouse(houseId)
  }

}