import cardsOnDom from "./cardsOnDom.js";
import students from "./data.js";

const eventListeners = () => {
  //RAMDONIZER FOR SORTING HAT

  // FILTER HOUSE BUTTONS
  document.querySelector("#housesBtnContainer").addEventListener("click", (e) => {
    // console.log("You clicked", e.target.id); // Double checking that the btns work; THEY WORK!!
    if (e.target.id === "allStudents") {
      const allStudents = students.filter(allHogwartStudents => allHogwartStudents.expelled === false)
      cardsOnDom(allStudents);
    } else if (e.target.id) {
      const filterHouses = students.filter(hogwartsHouse => hogwartsHouse.expelled === false && hogwartsHouse.house === e.target.id);
      cardsOnDom(filterHouses);
    }
  });

  //EXPEL A STUDENT BUTTON
  document.querySelector("#studentContainer").addEventListener("click", (e) => {
    console.log(e.target.id) //Checked to see if e.target.id is NOT empty; CONSOLE SHOWS expel--false!!
    if (e.target.id) {
      const [method, expelled] = e.target.id.split("--");
      console.log(expelled);
      if (e.target.id.includes("false")) {
      students.expelled = true;
      }
    }
  });
}

export default eventListeners;
