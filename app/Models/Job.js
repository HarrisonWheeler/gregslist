

export default class Job {
  constructor(data) {
    this.id = data._id
    this.company = data.company
    this.description = data.description
    this.hours = data.hours
    this.jobTitle = data.jobTitle
    this.rate = data.rate

  }
  get Template() {
    return  /*html*/ `
      <div class="col-4 border rounded shadow bg-dark text-light pb-2 pt-2">
                  <h3>Company: ${this.company}</h3>
                  <h3>Description: ${this.description}</h3>
                  <h3>Hours: ${this.hours}</h3>
                  <h3>Job Title: ${this.jobTitle}</h3>
                  <h3>Rate: ${this.rate}</h3>
                   <button class="btn btn-danger btn-block" onclick="app.jobController.deleteJob('${this.id}')">Delete</button>
              </div>
      `
  }
}
