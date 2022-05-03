import renderToDom from "./renderToDom.js";

const housesBtn = () => {
  const domString = `<div>
  <h3>See who is in each of the houses</h3>
  <button type="button" id="Gryffindor" class="btn btn-outline-danger">Gryffindor</button>
  <button type="button" id="Hufflepuff" class="btn btn-outline-warning">Hufflepuff</button>
  <button type="button" id="Ravenclaw" class="btn btn-outline-primary">Ravenclaw</button>
  <button type="button" id="Slytherin" class="btn btn-outline-success">Slytherin</button>
  <button type="button" id="allStudents" class="btn btn-outline-secondary">All Students</button>
  </div>`;
  renderToDom("#housesBtnContainer", domString);
}

export default housesBtn;
