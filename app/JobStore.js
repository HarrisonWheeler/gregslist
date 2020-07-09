import Value from "./Models/Value.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {House[]} */
  jobs: []
};
console.log("hello from JobStore");


class Store {
  deleteHouse(jobId) {
    let indexToRemove = _state.houses.findIndex(job => job.id == jobId)
    if (indexToRemove < 0) {
      console.error("INVALID CAR ID")
    }
    _state.jobs.splice(indexToRemove, 1)
  }

  addJob(newJob) {
    _state.jobs.push(newJob)
  }
  get State() {
    return _state;
  }
}


const JOBSTORE = new Store();
export default JOBSTORE;
