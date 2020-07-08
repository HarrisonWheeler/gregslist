

export default class House {
  constructor(rawHouseData) {
    console.log("Hello from the house model");
    this.yearBuilt = rawHouseData.yearBuilt
    this.homeSize = rawHouseData.homeSize
    this.lotSize = rawHouseData.lotSize
    this.garageBays = rawHouseData.garageBays
    this.imgUrl = rawHouseData.imgUrl
    this.description = rawHouseData.description
  }

  get Template() {
    return  /*html*/ `
    <div class="col-3 border rounded shadow bg-dark text-light pb-2 pt-2">
                <h2>${this.yearBuilt}</h2>
                <h2>${this.homeSize}</h2>
                <h2>${this.lotSize}</h2>
                <h2>${this.garageBays}</h2>
                <img class="img-fluid" src="${this.imgUrl}"/>
                <h2>${this.description}</h2>
                <button class="btn btn-danger btn-block" onclick="app.houseController">Delete</button>
            </div>
    `
  }
}