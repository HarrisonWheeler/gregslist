import Value from "./Models/Value.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {House[]} */
  houses: [],
  /** @type {Job[]} */
  jobs: []
};


class Store {
  deleteHouse(houseId) {
    let indexToRemove = _state.houses.findIndex(house => house.id == houseId)
    if (indexToRemove < 0) {
      console.error("INVALID HOUSE ID")
    }
    _state.jobs.splice(indexToRemove, 1)
  }

  deleteJob(jobId) {
    let indexToRemove = _state.jobs.findIndex(job => job.id == jobId)
    if (indexToRemove < 0) {
      console.error("INVALID CAR ID")
    }
    _state.jobs.splice(indexToRemove, 1)
  }
  addJob(newJob) {
    _state.jobs.push(newJob)
  }

  addHouse(newHouse) {
    _state.houses.push(newHouse)
  }
  get State() {
    return _state;
  }
}


const STORE = new Store();
export default STORE;
