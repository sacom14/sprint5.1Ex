//<--------student validation------------>

//form acces from id
const studentForm = (document.getElementById("studentForm") as HTMLFormElement);
//input acces
const studentInput = (studentForm.querySelectorAll('input'));

const studentValidation = {
    studentName: /^[A-Za-z]+$/,
    studentSurname: /^[A-Za-z]+$/,
    studentDni: /^[0-9]{8}[A-HJ-NP-TV-Za-hj-np-tv-z]$/i,
    studentPopulation: /^[A-Za-z]+$/,
}
//required marcar que todos son falsos en un principio porque estan incorrectos, através de "itemvalidation() se convertira, en true o false.".
interface inputStudentBoolean {
    nameRegex: boolean;
    studentSurname: boolean;
    studentDni: boolean;
    studentPopulation: boolean;
}
const inputStudentBoolean: inputStudentBoolean = {
    nameRegex: false,
    studentSurname: false,
    studentDni: false,
    studentPopulation: false
}

const studentFormValidation = (e:any) => { //identificamos en que input se ejecuta el evento (e). 
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
}

const studentItemValidation = (studentValidation: RegExp, studentInput: HTMLInputElement, id: keyof inputStudentBoolean,) => { //le pasamos validation, el input (el valor del input) y la id).
    
    if (studentValidation.test(studentInput.value)) {
        document.getElementById(id)!.classList.remove("is-invalid"); //se quita la classe is-invalid.
        document.getElementById(id)!.classList.add("is-valid"); //se añade la clase is-valid.
        inputStudentBoolean[id] = true;
    } else {
        document.getElementById(id)!.classList.add("is-invalid");
        document.getElementById(id)!.classList.remove("is-valid");
        inputStudentBoolean[id] = false;
    }
}

studentInput.forEach((studentInput) => {
    studentInput.addEventListener("keyup", studentFormValidation) //cuando se levante la tecla, se ejecutará la función "formValidation" //keyup => es cuando se levanta la tecla.
    studentInput.addEventListener("blur", studentFormValidation); //blur, es que se ejecute si le da click fuera del input.
});

courseForm.addEventListener("submit", (e) => {
    e.preventDefault(); //event para evitar que se envie el formulario antes de tiempo.
});