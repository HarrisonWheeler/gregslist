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
                    <label for="">Job Type</label>
                    <input type="text" name="jobType" id="" class="form-control" placeholder="Enter Job Type...">
                </div>
                <div class="form-group">
                    <label for="">Pay Rate</label>
                    <input type="number" max="100" min="0" name="payRate" id="" class="form-control"
                    placeholder="Enter Pay Rate...">
                </div>
                <div class="form-group">
                    <label for="">City</label>
                    <input type="text" name="city" id="" class="form-control" placeholder="Enter City...">
                </div>
                <div class="form-group">
                    <label for="">Description</label>
                    <input type="text" name="description" id="" class="form-control"
                    placeholder="Enter Description...">
                </div>
                <div class="form-group">
                    <label for="">Start Date</label>
                    <input type="text" name="startDate" min="0" id="" class="form-control"
                    placeholder="Enter Start Date....">
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
    console.log("job submitted", formData.jobType.value)
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
}