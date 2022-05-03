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
    console.log(e.target.id) //Check to see if e.target.id is NOT empty; CONSOLE SHOWS expel--1!!
      if (e.target.id.includes(`expel`)) {
          const [method, id] = e.target.id.split("--");
          const expelledStudent = students.find(student => student.id === parseInt(id));
          expelledStudent.expelled = true;
          cardsOnDom(students); //Why 'students' and not 'expelledStudent'?
      }
    });
}

export default eventListeners;
