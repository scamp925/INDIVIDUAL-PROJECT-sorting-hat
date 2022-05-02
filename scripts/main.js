// import cardsOnDom from './cardsOnDom.js';
import students from './data.js';
import sortingHat from './sortingHat.js';
import founders from './founders.js';
import schoolSong from './schoolSong.js';
import welcomeToHogwarts from './welcome.js';
import housesBtn from './housesBtn.js';
import deathEaters from './deathEatersOnDom.js';

const expelled = students.expelled;
console.log(expelled);


const startApp = () => {
  welcomeToHogwarts();
  founders();
  schoolSong();
  sortingHat();
  housesBtn ();
  // cardsOnDom(students);
  deathEaters(students);
}

startApp();
