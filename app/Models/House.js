
export default class House {
  constructor(data) {
    this.id = data._id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.desription = data.description
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.price = data.price
    this.year = data.year
  }

  get Template() {
    return  /*html*/ `
    <div class="col-4 border rounded shadow bg-dark text-light pb-2 pt-2">
                <h3>Bedrooms: ${this.bedrooms}</h3>
                <h3>Bathrooms: ${this.bathrooms}</h3>
                <h3>Description: ${this.desription}</h3>
                <img class="img-fluid" src="${this.imgUrl}"/>
                <h3>Levels: ${this.levels}</h3>
                <h3>Price: ${this.price}</h3>
                <h3>Year: ${this.year}</h3>
                 <button class="btn btn-danger btn-block" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
            </div>
    `
  }
}