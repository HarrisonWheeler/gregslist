
console.log("hello from the car model");
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
    <div class="col-4 border rounded shadow bg-dark text-light pb-2 pt-2 mx-auto">
                  <h2>Year: ${this.year}</h2>
                  <h2>Make: ${this.make}</h2>
                  <h2>Model: ${this.model}</h2>
                  <img src="${this.imgUrl}" class="img-fluid" alt=""/>
                  <h2>Price: ${this.price}</h2>
                   <button class="btn btn-danger btn-block" onclick="app.carController.deleteCar()">Delete</button>
              </div>
    `
  }


}