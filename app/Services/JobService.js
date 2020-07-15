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

  getJobs() {
    _api.get("jobs").then(res => {
      console.log(res);
      let jobs = res.data.data.map(rawJobData => new Job(rawJobData))
      _store.commit("jobs", jobs)
    }).catch(err => console.error(err))
  }
  addJob(rawJobData) {
    _api.post("jobs", rawJobData).then(res => {
      console.log(res);
      this.getJobs()
    }).catch(err => console.error(err))
  }
  deleteJob(jobId) {
    _api.delete("jobs/" + jobId).then(res => {
      console.log(res);
      this.getJobs()
    }).catch(err => console.error(err))
  }

}

const SERVICE = new JobService()

export default SERVICE