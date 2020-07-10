import _store from "../store.js"
import Car from "../Models/Car.js"


class CarService {
  constructor() {
    console.log("hello from the car service");
  }

  addCar(rawCarData) {
    let newCar = new Car(rawCarData)
    _store.addCar(newCar)
  }
}



const SERVICE = new CarService()

export default SERVICE