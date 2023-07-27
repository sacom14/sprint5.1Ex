"use strict";
//<--------student validation------------>
//form acces from id
var studentForm = document.getElementById("studentForm");
//input acces
var studentInput = (studentForm.querySelectorAll('input'));
var studentValidation = {
    studentName: /^[A-Za-z]+$/,
    studentSurname: /^[A-Za-z]+$/,
    studentDni: /^[0-9]{8}[A-HJ-NP-TV-Za-hj-np-tv-z]$/i,
    studentPopulation: /^[A-Za-z]+$/,
};
var inputStudentBoolean = {
    nameRegex: false,
    studentSurname: false,
    studentDni: false,
    studentPopulation: false
};
var studentFormValidation = function (e) {
    switch (e.target.id) {
        case "studentName":
            studentItemValidation(studentValidation.studentName, e.target, e.target.id);
            break;
        case "studentSurname":
            studentItemValidation(studentValidation.studentSurname, e.target, e.target.id);
            break;
        case "studentDni":
            studentItemValidation(studentValidation.studentDni, e.target, e.target.id);
            break;
        case "studentPopulation":
            studentItemValidation(studentValidation.studentPopulation, e.target, e.target.id);
            break;
    }
};
var studentItemValidation = function (studentValidation, studentInput, id) {
    if (studentValidation.test(studentInput.value)) {
        document.getElementById(id).classList.remove("is-invalid"); //se quita la classe is-invalid.
        document.getElementById(id).classList.add("is-valid"); //se añade la clase is-valid.
        inputStudentBoolean[id] = true;
    }
    else {
        document.getElementById(id).classList.add("is-invalid");
        document.getElementById(id).classList.remove("is-valid");
        inputStudentBoolean[id] = false;
    }
};
studentInput.forEach(function (studentInput) {
    studentInput.addEventListener("keyup", studentFormValidation); //cuando se levante la tecla, se ejecutará la función "formValidation" //keyup => es cuando se levanta la tecla.
    studentInput.addEventListener("blur", studentFormValidation); //blur, es que se ejecute si le da click fuera del input.
});
courseForm.addEventListener("submit", function (e) {
    e.preventDefault(); //event para evitar que se envie el formulario antes de tiempo.
});
