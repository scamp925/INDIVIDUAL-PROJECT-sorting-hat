import renderToDom from "./renderToDom.js";

const schoolSong = () => {
  const domString = `<ul>
  <li>"Hogwarts, Hogwarts, Hoggy Warty Hogwarts,</li>
  <li>Teach us something please,</li>
  <li>Whether we be old and bald,</li>
  <li>Or young with scabby knees,</li>
  <li>Our heads could do with filling,</li>
  <li>With some interesting stuff,</li>
  <li>For now they're bare and full of air,</li>
  <li>Dead flies and bits of fluff,</li>
  <li>So teach us things worth knowing,</li>
  <li>Bring back what we've forgot,</li>
  <li>Just do your best, we'll do the rest,</li>
  <li>And learn until our brains all rot."</li>
  </ul>
  <div class="float-right">~Official School Song</div>`;
  renderToDom("#schoolSongContainer", domString);
}

export default schoolSong;
