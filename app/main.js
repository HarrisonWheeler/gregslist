import ValuesController from "./Controllers/ValuesController.js";
import HouseController from "./Controllers/HouseController.js"
import JobController from "./Controllers/JobController.js"
import CarController from "./Controllers/CarController.js"
class App {

  valuesController = new ValuesController();
  houseController = new HouseController()
  jobController = new JobController()
  carController = new CarController()
}

window["app"] = new App();

