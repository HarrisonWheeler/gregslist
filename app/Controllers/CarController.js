import _carService from "../Services/CarService.js"
import _store from "../store.js"
import store from "../store.js"


function _draw() {
  let template = /*html*/ `

  <div class="col-12 text-center">
  <h5>Submit a Car!</h5>
  <form onsubmit="app.carController.addCar(event)" action=""
      class="col-6 border rounded shadow bg-dark text-light pt-2 pb-2 mx-auto">
      <div class="form-group">
          <label for="">Year</label>
          <input type="number" min="1930" max="2020" name="year" id="" class="form-control"
              placeholder="Enter Year...">
      </div>
      <div class="form-group">
          <label for="">Make</label>
          <input type="text" name="make" id="" class="form-control" placeholder="Enter Make...">
      </div>
      <div class="form-group">
          <label for="">Model</label>
          <input type="text" max="5" min="0" name="model" id="" class="form-control"
              placeholder="Enter model...">
      </div>
      <div class="form-group">
          <label for="">Image URL</label>
          <input type="text" name="imgUrl" id="" class="form-control" placeholder="Enter Image URL...">
      </div>
      <div class="form-group">
          <label for="">Price</label>
          <input type="text" name="price" min="0" id="" class="form-control" placeholder="Enter Price...">
      </div>
      <button class="btn btn-success btn-block" type="submit">Submit</button>
  </form>
</div>`

  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarController {
  constructor() {
    console.log("hello from the car controller");
    store.subscribe("cars", _draw)
  }

  showCars() {
    _carService.getCars()
  }
  addCar(event) {
    // debugger
    event.preventDefault()
    let formData = event.target
    let rawJobData = {
      year: formData.year.value,
      make: formData.make.value,
      model: formData.model.value,
      imgUrl: formData.imgUrl.value,
      price: formData.price.value,
    }
    _carService.addCar(rawJobData)
    formData.reset()
  }
  deleteCar(carId) {
    _carService.deleteCar(carId)
  }

}
