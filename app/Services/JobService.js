import _JobStore from "../JobStore.js"
import Job from "../Models/Job.js"


class JobService {
  constructor() {
    console.log("hello from the job service");
  }
  addJob(rawJobData) {
    let newJob = new Job(rawJobData)
    _JobStore.addJob(newJob)
  }
}

const SERVICE = new JobService()

export default SERVICE