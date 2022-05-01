import renderToDom from "./renderToDom.js";

const sortingHat = () => {
  const domString = `<p>Now, my dear first year student, the time has come for you to be sorted into your Hogwarts house. Let the magic begin!</p>
  <form class="row g-3">
  <div class="col-12">
    <label for="studentName" class="form-label">Student's Name</label>
    <input type="text" class="form-control" id="studentName" placeholder="Oliver Wood">
  </div>
  <div class="col-12">
    <label for="studentImg" class="form-label">URL of Student's Photograph</label>
    <input type="text" class="form-control" id="studentImg" placeholder="http://images6.fanpop.com/image/photos/43400000/Harry-Potter-fan-art-harry-potter-43424936-500-613.jpg">
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-success">Sort Me!</button>
  </div>
</form>
  `;
  renderToDom("#sortingHatContainer", domString);
}

export default sortingHat;
