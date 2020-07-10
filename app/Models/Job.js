let id = 1


export default class Job {
  constructor(rawJobData) {
    console.log("hello from job model");
    this.id = id++
    this.jobType = rawJobData.jobType
    this.payRate = rawJobData.payRate
    this.city = rawJobData.city
    this.description = rawJobData.description
    this.startDate = rawJobData.startDate

  }
  get Template() {
    return  /*html*/ `
      <div class="col-3 border rounded shadow bg-dark text-light pb-2 pt-2">
                  <h2>Job Type: ${this.jobType}</h2>
                  <h2>Pay Rate: ${this.payRate}</h2>
                  <h2>City: ${this.city}</h2>
                  <h2>Description: ${this.description}</h2>
                  <h2>Start Date: ${this.startDate}</h2>
                   <button class="btn btn-danger btn-block" onclick="app.jobController.deleteHouse()">Delete</button>
              </div>
      `
  }
}
