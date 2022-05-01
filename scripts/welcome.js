import renderToDom from "./renderToDom.js"

const welcomeToHogwarts = () => {
  const domString = `<div class="hogwarts">
  <h1>Welcome to Hogwarts School of Witchcraft and Wizardry</h1>
  </div>`;
  renderToDom("#welcomeContainer", domString);
}

export default welcomeToHogwarts;
