let id = 1

export default class House {
  constructor(rawHouseData) {
    this.id = id++
    this.yearBuilt = rawHouseData.yearBuilt
    this.homeSize = rawHouseData.homeSize
    this.garageBays = rawHouseData.garageBays
    this.imgUrl = rawHouseData.imgUrl
    this.price = rawHouseData.price
  }

  get Template() {
    return  /*html*/ `
    <div class="col-3 border rounded shadow bg-dark text-light pb-2 pt-2">
                <h2>Year: ${this.yearBuilt}</h2>
                <h2>Size(Sq Ft): ${this.homeSize}</h2>
                <h2>Garage Bays: ${this.garageBays}</h2>
                <img class="img-fluid" src="${this.imgUrl}"/>
                <h2>Price: $ ${this.price}</h2>
                 <button class="btn btn-danger btn-block" onclick="app.houseController.deleteHouse(${this.id})">Delete</button>
            </div>
    `
  }
}