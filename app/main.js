import ValuesController from "./Controllers/ValuesController.js";
import HouseController from "./Controllers/HouseController.js"
import JobController from "./Controllers/JobController.js"
class App {

  valuesController = new ValuesController();
  houseController = new HouseController()
  jobController = new JobController()
}

window["app"] = new App();

console.log("hello from main");