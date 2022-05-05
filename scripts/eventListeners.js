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
      const randomHouse = houseNames[Math.floor(Math.random()*houseNames.length - 1)]; // -1 needed because length is '4', but array start with the 0 index, so 'Slytherin' as far as indexes go is index '3'

      // const assignHouseColors = () => {
      //   if (randomHouse === "Gryffindor") {
      //     students.houseImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg"
      //   } else if (randomHouse === "Hufflepuff") {
      //     students.houseImg = "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg"
      //   } else if (randomHouse === "Ravenclaw") {
      //     students.houseImg = "https://bookstr.com/wp-content/uploads/2020/03/Ravenclaw-colors-I-T-768x480.jpg"
      //   } else {
      //     students.houseImg = "https://cdn.wallpapersafari.com/50/12/WVmuwa.jpg"
      //   }
      // }
      
      const newStudentObj = {
        id: students.length + 1,
        name: document.querySelector("#studentName").value, // The key in this object needs to be the same as the key in the original array of objects
        studentImg: document.querySelector("#studentImg").value,
        // houseImg: assignHouseColors,
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
      cardsOnDom(students);
    } else if (e.target.id) {
      const filterHouses = students.filter(hogwartsHouse => hogwartsHouse.expelled === true || hogwartsHouse.house === e.target.id);
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
          cardsOnDom(students);
      }
    });
}

export default eventListeners;
