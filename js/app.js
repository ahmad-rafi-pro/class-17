// Function for calculating grades
const calculate = () => {
    // Getting input from user into height variable.
    let bengali = document.querySelector("#bengali").value;
    let eng = document.querySelector("#eng").value;
    let chemistry = document.querySelector("#chemistry").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let bio = document.querySelector("#bio").value;
    let religion = document.querySelector("#religion").value;
    let grades = "";
 
    // Input is string so typecasting is necessary. */
    let totalgrades =
       parseFloat(bengali) +
       parseFloat(eng) +
       parseFloat(chemistry) +
       parseFloat(maths) +
       parseFloat(phy) +
       parseFloat(bio) +
       parseFloat(religion); 
    // Checking the condition for the providing the
    // grade to student based on average
    let average = totalgrades / 7;
    if (average <= 100 && average >= 80) {
       grades = "A+";
    } else if (average <= 79 && average >= 75) {
       grades = "A";
    } else if (average <= 74 && average >= 70) {
       grades = "A-";
    } else if (average <= 69 && average >= 65) {
       grades = "B+"; 
    } else if (average <= 64 && average >= 60) {
       grades = "B-"; 
    } else if (average <= 59 && average >= 55) {
       grades = "C"; 
    } else if (average <= 54 && average >= 50) {
       grades = "D"; 
    } else if (average <= 49 && average >= 45) {
       grades = "E"; 
    } else {
       grades = "F";
    }
    // Checking the values are empty if empty then
    // Show fill all fields
    if (bengali == ""|| eng == ""|| chemistry == ""|| maths == "" || phy == ""|| bio == ""|| religion == "") { document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    } else {
       // Checking condition for fail and pass
       if (average >= 45) {
       document.querySelector(
          "#showdata"
       ).innerHTML =
          ` Out of 700 your total is ${totalgrades}
          and average is ${average}. <br>
          Your grade is ${grades}. You Passed. Congratulation `;
       } else {
          document.querySelector(
             "#showdata"
       ).innerHTML =
          ` Out of 700 your total is ${totalgrades}
          and average is ${average}. <br>
          Your grade is ${grades}. You Failed. Try Harder Next Time`;
       }
    }
 };