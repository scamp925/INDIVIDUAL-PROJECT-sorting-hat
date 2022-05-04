import cardsOnDom from "./cardsOnDom.js";
import students from "./data.js";

const eventListeners = () => {
  //FORM FOR SORTING HAT WITH RANDOMIZER
  const form = document.querySelector('form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.querySelector("#studentName").value === "" || document.querySelector("#studentImg").value === "") {
      const error = document.querySelector("#error");
      console.log(error);
      error.innerHTML = "Please fill out before you can be sorted";
    } else {
      const houseNames = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
      const randomHouse = houseNames[Math.floor(Math.random()*houseNames.length - 1)]; // -1 needed because length is '4', but array start with the 0 index, so 'Slytherin' as far as indexes go is index '3'
      
      const newStudentObj = {
        id: students.length + 1,
        name: document.querySelector("#studentName").value, // The key in this object needs to be the same as the key in the original array of objects
        studentImg: document.querySelector("#studentImg").value,
        house: randomHouse,
        expelled: false
      }
      students.push(newStudentObj);
      cardsOnDom(students);
      
      form.reset();
    }

  });

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
