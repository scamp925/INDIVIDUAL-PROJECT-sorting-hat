import cardsOnDom from './cardsOnDom.js';
import students from './data.js';
import sortingHat from './sortingHat.js';
import founders from './founders.js';
import schoolSong from './schoolSong.js';
import welcomeToHogwarts from './welcome.js';
import housesBtn from './housesBtn.js';
import eventListeners from './eventListeners.js';

const startApp = () => {
  welcomeToHogwarts();
  founders();
  schoolSong();
  sortingHat();
  housesBtn ();
  cardsOnDom(students);
  eventListeners();
}

startApp();
