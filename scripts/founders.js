import renderToDom from "./renderToDom.js"

const founders = () => {
  const domString = `<div>
  <h3 class="fourPillars">The Four Pillars of Hogwarts: The Founders</h3>
   <img src="https://pbs.twimg.com/media/C4xn3rNWYAAvLIq.jpg" alt="Four Founders of Hogwarts" class="fourPillarsPic"/>
   <ul>
   <li>A thousand years or more ago</li>
   <li>When I was newly sewn,</li>
   <li>There lived four wizards of renown,</li>
   <li>Whose names are still well-known:</li>
   <li>Bold Gryffindor, from wild moor,</li>
   <li>Fair Ravenclaw, from glen,</li>
   <li>Sweet Hufflepuff, from valley broad,</li>
   <li>Shrewd Slytherin, from fen.</li>
   
   <li>They shared a wish, a hope, a dream,</li>
   <li>They hatched a daring plan</li>
   <li>To educate young sorcerers</li>
   <li>Thus HogwartsSchool began.</li>
   
   <li>Each formed their own House,</li>
   
   <li> For each valued different virtues;</li>
   <li> By Gryffindor, the bravest were</li>
   <li>Prized far beyond the rest;</li>
   <li>For Ravenclaw, the cleverest</li>
   <li>Would always be the best;</li>
   <li>For Hufflepuff, hard workers were</li>
   
   <li>Most worthy of admission;</li>
   <li>And power-hungry Slytherin</li>
   <li> Loved those of great ambition."</li>
   <li class="float-right">~The Sorting Hat</li>
   </ul>
  </div>
  `
  renderToDom("#foundersContainer", domString);
}

export default founders;
