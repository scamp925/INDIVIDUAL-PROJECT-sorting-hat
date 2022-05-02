import renderToDom from "./renderToDom.js";

const housesBtn = () => {
  const domString = `<button type="button" class="btn btn-outline-danger">Gryffindor</button>
  <button type="button" class="btn btn-outline-warning">Hufflepuff</button>
  <button type="button" class="btn btn-outline-primary">Ravenclaw</button>
  <button type="button" class="btn btn-outline-success">Slytherin</button>
  <button type="button" class="btn btn-outline-secondary">All Students</button>`;
  renderToDom("#housesBtnContainer", domString);
}

export default housesBtn;
