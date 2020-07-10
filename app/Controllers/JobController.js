import _jobService from "../Services/JobService.js"
import _store from "../store.js"

function _draw() {
  let template = ""
  let jobs = _store.State.jobs
  jobs.forEach(job => template += job.Template)
  document.getElementById("jobs").innerHTML = template
}

export default class JobController {
  constructor() {
    console.log("hello from the job controller");
    _draw()
  }
  addJob(event) {
    event.preventDefault();
    let formData = event.target
    console.log("job submitted", formData.jobType.value)
    let rawJobData = {
      jobType: formData.jobType.value,
      payRate: formData.payRate.value,
      city: formData.city.value,
      description: formData.description.value,
      startDate: formData.startDate.value
    }
    _jobService.addJob(rawJobData)
    formData.reset()
    _draw()
  }
}