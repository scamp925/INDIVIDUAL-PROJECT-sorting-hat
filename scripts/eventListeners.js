import cardsOnDom from "./cardsOnDom.js";
import students from "./data.js";

const eventListeners = () => {
  //RAMDONIZER FOR SORTING HAT

  // FILTER HOUSE BUTTONS
  document.querySelector("#housesBtnContainer").addEventListener("click", (e) => {
    // console.log("You clicked", e.target.id); // Double checking that the btns work; THEY WORK!!
    if (e.target.id === "allStudents") {
      const allStudents = students.filter(allHogwartStudents => allHogwartStudents.expelled === false)
      console.log(allStudents);
      cardsOnDom(allStudents);
      console.log(cardsOnDom(allStudents));
    } else if (e.target.id) {
      const filterHouses = students.filter(hogwartsHouse => hogwartsHouse.expelled === false && hogwartsHouse.house === e.target.id);
      console.log(filterHouses);
      cardsOnDom(filterHouses);
      console.log(cardsOnDom(filterHouses));
    }
  });
}

export default eventListeners;
