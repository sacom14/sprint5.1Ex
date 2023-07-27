"use strict";
// import { getPositionOfLineAndCharacter } from "typescript";
var course;
var student;
var courseArray = [];
var studentArray = [];
function submitCourse() {
    var nameInput = document.getElementById("nameInput");
    var hoursInput = document.getElementById("hoursInput");
    var priceInput = document.getElementById("priceInput");
    var maxPersonInput = document.getElementById("maxPersonInput");
    course = new Course(nameInput.value, parseFloat(hoursInput.value), parseFloat(priceInput.value), parseFloat(maxPersonInput.value));
    courseArray.push(course);
    if (validationCourse()) {
        showCourse();
        showStudentForm();
    }
    else {
        alert("hay You have to fill in all the fields of the form correctly");
    }
    ;
}
function showCourse() {
    var resultCourseForm = document.getElementById('result-course-form');
    resultCourseForm.style.display = "block";
    var courseName = document.getElementById("courseName");
    var courseHours = document.getElementById("courseHours");
    var coursePrice = document.getElementById("coursePrice");
    var maxPersonCours = document.getElementById("maxPerson");
    //esto para que sirve, si no se va a llegar a ver nunca? 
    courseName.innerHTML = "<b>".concat(course.name, "</b>");
    courseHours.innerText = "Hours: ".concat(course.hours, " h");
    coursePrice.innerText = "Price: ".concat(course.price, " \u20AC");
    maxPersonCours.innerText = "Max. Studiants: ".concat(course.maxPerson);
}
function submitStudentForm() {
    var errors = 0;
    // for (let i = 1; i <= 4; i++) {
    var studentName = document.getElementById("studentName");
    var studentSurname = document.getElementById("studentSurname");
    var studentDni = document.getElementById("studentDni");
    var studentPopulation = document.getElementById("studentPopulation");
    if (validationStudent()) {
        var student_1 = new Student(studentName.value, studentSurname.value, studentDni.value, studentPopulation.value);
        course.addStudent(student_1);
        studentArray.push(student_1);
        showStudents();
        showStudentForm();
    }
    else {
        alert("You have to fill in all the fields of the form correctly");
    }
    ;
    // }
}
var numberArray = [];
numberArray.push(0);
function showStudents() {
    // const showStudents = (document.getElementById("showStudent") as HTMLTableElement);
    var resultStudentForm = document.getElementById('result-student-form');
    resultStudentForm.style.display = "block";
    var tbody = document.getElementById("student_list");
    var totalStudents = courseArray[0].maxPerson;
    if (numberArray[numberArray.length - 1] < totalStudents) {
        studentArray.forEach(function (item) {
            showList();
        });
        var suma = (numberArray[numberArray.length - 1]) + 1;
        numberArray.push(suma);
    }
    else {
        showList();
        alert("You can no longer add more students to the course. There are no more places");
    }
}
function showStudentForm() {
    var courseForm = document.getElementById("create-course-form");
    var courseStudent = document.getElementById("create-student-form");
    courseForm.style.display = "none";
    courseStudent.style.display = "block";
}
//validaciones
function validationCourse() {
    var hoursInputRegex = document.getElementById('hoursInput').value;
    var priceInputRegex = document.getElementById('priceInput').value;
    var maxPersonInputRegex = document.getElementById('maxPersonInput').value;
    var hoursRegex = /^\d{1,3}$/;
    var priceRegex = /^\d{0,4}$/;
    var maxPersonRegex = /^(?:0?[5-9]|1[0-5])$/;
    if (!hoursRegex.test(hoursInputRegex)) {
        // Si la hora no cumple con el formato
        return false;
    }
    if (!priceRegex.test(priceInputRegex)) {
        // Si el precio no cumple con el formato
        return false;
    }
    if (!maxPersonRegex.test(maxPersonInputRegex)) {
        // Si el número máximo de estudiantes no cumple con el formato
        return false;
    }
    // Si todas las validaciones pasan, el formulario es válido
    return true;
}
function validationStudent() {
    var studentNameRegex = document.getElementById('studentName').value;
    var studentSurnameRegex = document.getElementById('studentSurname').value;
    var studentDniRegex = document.getElementById('studentDni').value;
    var studentPopulationRegex = document.getElementById('studentPopulation').value;
    var nameRegex = /^[A-Za-z]+$/;
    var surnameRegex = /^[A-Za-z]+$/;
    var dniRegex = /^[0-9]{8}[A-HJ-NP-TV-Za-hj-np-tv-z]$/i;
    var populationRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(studentNameRegex)) {
        return false;
    }
    if (!surnameRegex.test(studentSurnameRegex)) {
        return false;
    }
    if (!dniRegex.test(studentDniRegex)) {
        return false;
    }
    if (!populationRegex.test(studentPopulationRegex)) {
        return false;
    }
    // Si todas las validaciones pasan, el formulario es válido
    return true;
}
function showList() {
    var showStudents = document.getElementById("showStudent");
    var tbody = document.getElementById("student_list");
    tbody.innerHTML = "";
    studentArray.forEach(function (item) {
        var row = document.createElement("tr"); //the row
        var studentName = document.createElement("th"); //first column bold
        studentName.setAttribute("scope", "row");
        studentName.textContent = item.name;
        var studentSurname = document.createElement("td"); //second column
        studentSurname.innerText = item.surname;
        var studentDni = document.createElement("td"); //third column
        studentDni.innerHTML = item.dni.toString();
        var studentPopulation = document.createElement("td"); //fourth column
        studentPopulation.innerText = item.population;
        row.appendChild(studentName);
        row.appendChild(studentSurname);
        row.appendChild(studentDni);
        row.appendChild(studentPopulation);
        tbody.appendChild(row);
    });
}
