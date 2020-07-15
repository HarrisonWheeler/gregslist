import _jobService from "../Services/JobService.js"
import _store from "../store.js"
import store from "../store.js"

function _draw() {
  let template = /*html*/ `
  <div class="col-12 text-center">
                <h5 class="pt-2">Submit a Job!</h5>
                <form onsubmit="app.jobController.addJob(event)" action=""
                class="col-6 border rounded shadow bg-dark text-light pt-2 pb-2 mx-auto">
                <div class="form-group">
                    <label for="">Company</label>
                    <input type="text" name="company" id="" class="form-control" placeholder="Enter Company...">
                </div>
                <div class="form-group">
                    <label for="">Description</label>
                    <input type="text" name="description" id="" class="form-control"
                    placeholder="Enter Description...">
                </div>
                <div class="form-group">
                    <label for="">Hours</label>
                    <input type="number" min="0" name="hours" id="" class="form-control" placeholder="Enter Hours...">
                </div>
                <div class="form-group">
                    <label for="">Job Title</label>
                    <input type="text" name="jobTitle" id="" class="form-control"
                    placeholder="Enter Job Title...">
                </div>
                <div class="form-group">
                    <label for="">Rate</label>
                    <input type="number" name="rate" min="0" id="" class="form-control"
                    placeholder="Enter Rate....">
                </div>
                <button class="btn btn-success btn-block" type="submit">Submit</button>
            </form>
        </div>

  `
  let jobs = _store.State.jobs
  jobs.forEach(job => template += job.Template)
  document.getElementById("jobs").innerHTML = template
}

export default class JobController {
  constructor() {
    store.subscribe("jobs", _draw)
  }

  showJobs() {
    _jobService.getJobs()
  }
  addJob(event) {
    event.preventDefault();
    let formData = event.target
    console.log("job submitted", formData.jobType)
    let rawJobData = {
      company: formData.company.value,
      description: formData.description.value,
      hours: formData.hours.value,
      jobTitle: formData.jobTitle.value,
      rate: formData.rate.value
    }
    _jobService.addJob(rawJobData)
    formData.reset()
  }
  deleteJob(jobId) {
    _jobService.deleteJob(jobId)
  }

}