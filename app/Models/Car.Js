
export default class Car {
  constructor(data) {
    this.id = data._id
    this.year = data.year
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.price = data.price
  }

  get Template() {


    return /*html*/ `

    <div class="col-4 border rounded shadow bg-dark text-light p-2 mx-auto">
                  <h3>Year: ${this.year}</h3>
                  <h3>Make: ${this.make}</h3>
                  <h3>Model: ${this.model}</h3>
                  <img src="${this.imgUrl}" class="img-fluid" alt=""/>
                  <h3>Price: ${this.price}</h3>
                   <button class="btn btn-danger btn-block" onclick="app.carController.deleteCar('${this.id}')">Delete</button>
              </div>
    `
  }


}