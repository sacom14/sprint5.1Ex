"use strict";
//<--------course validation------------>
//form acces from id
var courseForm = document.getElementById("courseForm");
//input acces
var courseInput = (courseForm.querySelectorAll('input'));
var courseValidation = {
    hoursInput: /^\d{1,3}$/,
    priceInput: /^\d{0,4}$/,
    maxPersonInput: /^(?:1[0-5]|[5-9])/
};
var inputCourseBoolean = {
    hoursInput: false,
    priceInput: false,
    maxPersonInput: false
};
var courseFormValidation = function (e) {
    switch (e.target.id) {
        case "hoursInput":
            courseItemValidation(courseValidation.hoursInput, e.target, e.target.id); //se envia los siguientes parámetros.
            break;
        case "priceInput":
            courseItemValidation(courseValidation.priceInput, e.target, e.target.id);
            break;
        case "maxPersonInput":
            courseItemValidation(courseValidation.maxPersonInput, e.target, e.target.id);
            break;
    }
};
var courseItemValidation = function (courseValidation, courseInput, id) {
    if (courseValidation.test(courseInput.value)) {
        document.getElementById(id).classList.remove("is-invalid"); //se quita la classe is-invalid.
        document.getElementById(id).classList.add("is-valid"); //se añade la clase is-valid.
        inputCourseBoolean[id] = true;
    }
    else {
        document.getElementById(id).classList.add("is-invalid");
        document.getElementById(id).classList.remove("is-valid");
        inputCourseBoolean[id] = false;
    }
};
courseInput.forEach(function (courseInput) {
    courseInput.addEventListener("keyup", courseFormValidation); //cuando se levante la tecla, se ejecutará la función "formValidation" //keyup => es cuando se levanta la tecla.
    courseInput.addEventListener("blur", courseFormValidation); //blur, es que se ejecute si le da click fuera del input.
});
courseForm.addEventListener("submit", function (e) {
    e.preventDefault(); //event para evitar que se envie el formulario antes de tiempo.
});
