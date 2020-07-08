

export default class House {
  constructor() {
    console.log("Hello from the house model");

  }

  get Template() {
    return  /*html*/ `
    <div class="col-3 border rounded shadow bg-dark text-light pb-2 pt-2">
                <h2>Year Built:</h2>
                <h2>Home Size:</h2>
                <h2>Lot Size:</h2>
                <h2>Garages:</h2>
                <h2>Image:</h2>
                <button class="btn btn-danger btn-block" onclick="app.houseController">Delete</button>
            </div>
    `
  }
}