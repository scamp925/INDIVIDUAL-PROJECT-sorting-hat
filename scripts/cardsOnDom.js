import renderToDom from "./renderToDom.js";

// // HTML for all cards
const cardsOnDom = (array) => {
  let domString = "<p>First Year Students</p>";
  let domString2= `<img src="https://images.squarespace-cdn.com/content/v1/56c8ab73d51cd438176bca48/1481412298088-P6SN3DJWBFMZKFQ1CMRG/image-asset.jpeg?format=1000w" alt="Death Eater Sign" class="deathEaterPic">
  <p>Death Eaters</p>`;
  for (const item of array) {
    if (item.expelled === false) {
      domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.studentImg}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
      <button type="button" class="btn btn-danger float-right expel" id="expel--${item.id}">Expel</button>
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
