import students from "./data.js";
import renderToDom from "./renderToDom.js";

// // HTML for all cards
const cardsOnDom = (array) => {
  let domString = "";
  let domString2= "";
  for (const item of students) {
    if (item.expelled === false) {
      domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.studentImg}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
        </div>
        <div class="card-footer">${item.house}</div>
      </div>
    </div>
  </div>`
  } else {
    domString2 += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${item.studentImg}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
          </div>
          <div class="card-footer">Death Eater</div>
        </div>
      </div>
    </div>`;;
  }
    }
    renderToDom("#studentContainer", domString)
    renderToDom("#expelledContainer", domString2);
  };

export default cardsOnDom;
