import renderToDom from "./renderToDom.js"

const welcomeToHogwarts = () => {
  const domString = `
  <div class="hogwarts">Welcome to Hogwarts School of Witchcraft and Wizardry</div>`;
  renderToDom("#welcomeContainer", domString);
}

export default welcomeToHogwarts;
