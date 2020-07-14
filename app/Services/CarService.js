import _store from "../store.js"
import Car from "../Models/Car.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})

class CarService {
  constructor() {

  }

  getCars() {
    _api.get("cars").then(res => {
      console.log(res);
      let cars = res.data.data.map(rawCarData => new Car(rawCarData))
      _store.commit("cars", cars)
    }).catch(err => console.error(err))
  }

  addCar(rawCarData) {
    _api.post("cars", rawCarData).then(res => {
      console.log(res);
      this.getCars()
    }).catch(err => console.error(err))
  }
  deleteCar(carId) {
    _api.delete("cars/" + carId).then(res => {
      this.getCars()
    }).catch(err => console.error(err))
  }

}



const SERVICE = new CarService()

export default SERVICE