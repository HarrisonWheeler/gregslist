import _store from "../store.js"
import Job from "../Models/Job.js"


class JobService {
  constructor() {
    console.log("hello from the job service");
  }
  addJob(rawJobData) {
    let newJob = new Job(rawJobData)
    _store.addJob(newJob)
  }
}

const SERVICE = new JobService()

export default SERVICE