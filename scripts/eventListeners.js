import cardsOnDom from "./cardsOnDom.js";
import students from "./data.js";

const eventListeners = () => {
  //FORM FOR SORTING HAT WITH RANDOMIZER
  const form = document.querySelector('form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.querySelector("#studentName").value === "" || document.querySelector("#studentImg").value === "") {
      const error = document.querySelector("#error");
      error.innerHTML = "**Please fill out the form before you can be sorted";
      // Yo, this conditional statement worked and I figured it out completely by myself!! Happy dance!!
    } else {
      const houseNames = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
      const randomHouse = houseNames[Math.floor(Math.random()*houseNames.length)];
      
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

      error.style.visibility = "hidden";

      alert(`Congratulations! You've been sorted into the ${randomHouse} house!`);
    }

  });

  // FILTER HOUSE BUTTONS AND SORT STUDENTS BY NAME
  document.querySelector("#housesBtnContainer").addEventListener("click", (e) => {
    // console.log("You clicked", e.target.id); // Double checking that the btns work; THEY WORK!!
    if (e.target.id === "allStudents") {
      cardsOnDom(students);
    } else if (e.target.id) {
      const filterHouses = students.filter(hogwartsHouse => hogwartsHouse.expelled === true || hogwartsHouse.house === e.target.id);
      cardsOnDom(filterHouses);
    } else {
      const sortStudents = students.sort((a, b) => a.name.localeCompare(b.name))
      cardsOnDom(sortStudents);
    }
  });

  //EXPEL A STUDENT BUTTON
  document.querySelector("#studentContainer").addEventListener("click", (e) => {
    console.log(e.target.id) //Check to see if e.target.id is NOT empty; CONSOLE SHOWS expel--1!!
      if (e.target.id.includes(`expel`)) {
          const [method, id] = e.target.id.split("--");
          const expelledStudent = students.find(student => student.id === parseInt(id));
          expelledStudent.expelled = true;
          cardsOnDom(students);
      }
    });
}

export default eventListeners;
