import cardsOnDom from './cardsOnDom.js';
import students from './data.js';
import schoolSong from './schoolSong.js';
import welcomeToHogwarts from './welcome.js';


const startApp = () => {
  welcomeToHogwarts();
  schoolSong();
  cardsOnDom(students);
}

startApp();
