import renderToDom from "./renderToDom.js";

const sortingHat = () => {
  const domString = `<div>
  <p>Now, dear first year student, the time has come for you to be sorted into your Hogwarts house. Let the magic begin!</p>
  <form class="row g-3">
  <div class="col-12">
    <label for="studentName" class="form-label">Student's Name</label>
    <input type="text" class="form-control" id="studentName" placeholder="E.g. Oliver Wood">
  </div>
  <div class="col-12">
    <label for="studentImg" class="form-label">URL of Student's Photograph</label>
    <input type="text" class="form-control" id="studentImg" placeholder="E.g. https://static.wikia.nocookie.net/a15db0b6-6731-4c46-99d8-a70a476c7ee6">
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-success">Sort Me!</button>
  </div>
</form>
<div id="error" class="error"></div>
</div>`;
  renderToDom("#sortingHatContainer", domString);
}

export default sortingHat;
