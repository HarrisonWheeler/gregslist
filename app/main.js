import ValuesController from "./Controllers/ValuesController.js";
import HouseController from "./Controllers/HouseController.js"
class App {

  valuesController = new ValuesController();
  houseController = new HouseController()
}

window["app"] = new App();

console.log("hello from main");