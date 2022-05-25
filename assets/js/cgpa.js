function gradeCalc(grade, unit) {
    if (grade === "A+") {
        return 4 * unit;
    } else if (grade === "A") {
        return 3.75 * unit;
    } else if (grade === "A-") {
        return 3.5 * unit;
    } else if (grade === "B+") {
        return 3.25 * unit;
    } else if (grade === "B") {
        return 3 * unit;
    } else if (grade === "B-") {
        return 2.75 * unit;
    } else if (grade === "C+") {
        return 2.5 * unit;
    } else if (grade === "C") {
        return 2.25 * unit;
    } else if (grade === "D") {
        return 2 * unit;
    } else if (grade === "F") {
        return 0 * unit;
    }
}

let counter = 1;

function addCourse() {
    let addNew = document.createElement("form");
    addNew.classList.add("add_new", `key-${counter}`);
    const course_name = `
  <form class="add_new key-${counter}">
   <div class="form-row row">
    <div class="col">
     <input type="text" placeholder="Course" class="form-control key-${counter}" required></div>
    <div class="col">
     <input type="number" placeholder="Credit" class="form-control credit-units key-${counter}" required></div>
    <div class="col">
    <select class="form-control form-select grade key-${counter}" required>
      <option value="select">Grade</option>
      <option value="4">A+</option>
      <option value="3.75">A</option>
      <option value="3.5">A-</option>
      <option value="3.25">B+</option>
      <option value="3">B</option>
      <option value="2.75">B-</option>
      <option value="2.5">C+</option>
      <option value="2.25">C</option>
      <option value="2">D</option>
      <option value="0">F</option>
    </select></div>
   </div>
  </form>
  `;
    addNew.innerHTML = course_name;
    document.getElementById("course-wrapper").appendChild(addNew);
    counter++;
}

function removeCourse() {
    let mainForm = document.querySelector("form.add_new");
    mainForm.remove();
}

function clearAll() {

    // while (1) {
    //  let mainForm = document.querySelector("form.add_new");
    //   mainForm.remove();
    //  }
    const divExist = document.querySelector("form.add_new");
    while (divExist) {
        let mainForm = document.querySelector("form.add_new");
        mainForm.remove();
        document.querySelector("form").reset();
        document.getElementById("cgpa-calc").textContent = "Your CGPA is : " + "";
    }


}

const reports = [];

/**
 * @description calculates cgpa
 */
function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");

    const courseReport = {};

    const listOfGrades = [];
    const listOfUnits = [];
    let totalUnits = 0;

    GRADESSELECT.forEach((e) => {
        let GRADES = e.options;
        const selectedIndex = e.selectedIndex;
        const selectedGrade = GRADES[selectedIndex];
        const gradeValue = selectedGrade.text.toUpperCase();
        listOfGrades.push(gradeValue);
    });
    console.log(listOfGrades);

    UNIT.forEach((e) => {
        const unitValue = parseInt(e.value);
        totalUnits += unitValue;
        listOfUnits.push(unitValue);
    });
    console.log(listOfUnits);

    let totalEarnedUnits = 0;

    for (let i = 0; i < listOfUnits.length; i++) {
        totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
    }
    const gpa = totalEarnedUnits / totalUnits;

    if (gpa >= 0) {
        CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);
    } else {
        CGPAPARAGRAPH.textContent = "Please enter your correct grade and credit units";
    }

}