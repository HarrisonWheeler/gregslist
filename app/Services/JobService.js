import _store from "../store.js"
import Job from "../Models/Job.js"


// @ts-ignore
const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})

class JobService {
  constructor() {
  }
  addJob(rawJobData) {
    let newJob = new Job(rawJobData)
    _store.addJob(newJob)
  }
}

const SERVICE = new JobService()

export default SERVICE