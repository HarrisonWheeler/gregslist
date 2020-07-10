let id = 1

console.log("hello from the car model");
export default class Car {
  constructor(rawCarData) {
    this.id = id++
    this.year = rawCarData.year
    this.make = rawCarData.make
    this.model = rawCarData.model
    this.imgUrl = rawCarData.imgUrl
    this.price = rawCarData.price
  }

  get Template() {


    return /*html*/ `
    <div class="col-4 border rounded shadow bg-dark text-light pb-2 pt-2 mx-auto">
                  <h2>Year: ${this.year}</h2>
                  <h2>Make: ${this.make}</h2>
                  <h2>Model: ${this.model}</h2>
                  <h2>Image: ${this.imgUrl}</h2>
                  <h2>Price: ${this.price}</h2>
                   <button class="btn btn-danger btn-block" onclick="app.jobController.deleteCar()">Delete</button>
              </div>
    `
  }


}