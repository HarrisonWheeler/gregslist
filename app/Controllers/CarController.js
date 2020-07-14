import _carService from "../Services/CarService.js"
import _store from "../store.js"
import store from "../store.js"


function _draw() {
  let template = ""
  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarController {
  constructor() {
    console.log("hello from the car controller");
    store.subscribe("cars", _draw)
  }

  addCar(event) {
    event.preventDefault()
    let formData = event.target
    console.log("car submit worked")
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
