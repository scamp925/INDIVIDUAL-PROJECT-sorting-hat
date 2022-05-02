import students from "./data.js";
import renderToDom from "./renderToDom.js";

const deathEaters = (array) => {
  let domString = "";
  for (const item of students) {
        domString += `<div class="card mb-3" style="max-width: 540px;">
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
      </div>`;
    }
    renderToDom("#expelledContainer", domString);
  };

export default deathEaters;
