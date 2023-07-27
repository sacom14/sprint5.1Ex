// import { getPositionOfLineAndCharacter } from "typescript";

let course: Course;
let student: Student;
const courseArray: Course[] = [];
const studentArray: Student[] = [];


function submitCourse() {

    let nameInput = <HTMLInputElement>document.getElementById("nameInput");
    let hoursInput = <HTMLInputElement>document.getElementById("hoursInput");
    let priceInput = <HTMLInputElement>document.getElementById("priceInput");
    let maxPersonInput = <HTMLInputElement>document.getElementById("maxPersonInput");

    course = new Course(nameInput.value, parseFloat(hoursInput.value), parseFloat(priceInput.value), parseFloat(maxPersonInput.value));

    courseArray.push(course);

    if (validationCourse()) {
        showCourse();
        showStudentForm();
    } else {
        alert("hay You have to fill in all the fields of the form correctly");
    }
    ;

}

function showCourse() {

    const resultCourseForm = document.getElementById('result-course-form') as HTMLElement;
    resultCourseForm.style.display = "block";

    let courseName = <HTMLInputElement>document.getElementById("courseName");
    let courseHours = <HTMLInputElement>document.getElementById("courseHours");
    let coursePrice = <HTMLInputElement>document.getElementById("coursePrice");
    let maxPersonCours = <HTMLInputElement>document.getElementById("maxPerson");

    //esto para que sirve, si no se va a llegar a ver nunca? 
    courseName.innerHTML = `<b>${course.name}</b>`;
    courseHours.innerText = `Hours: ${course.hours} h`;
    coursePrice.innerText = `Price: ${course.price} €`;
    maxPersonCours.innerText = `Max. Studiants: ${course.maxPerson}`;
}

function submitStudentForm() {
    let errors = 0;
    // for (let i = 1; i <= 4; i++) {
    let studentName = <HTMLInputElement>document.getElementById("studentName");
    let studentSurname = <HTMLInputElement>document.getElementById("studentSurname");
    let studentDni = <HTMLInputElement>document.getElementById("studentDni");
    let studentPopulation = <HTMLInputElement>document.getElementById("studentPopulation");

    if (validationStudent()) {
        let student = new Student(studentName.value, studentSurname.value, studentDni.value, studentPopulation.value);
        course.addStudent(student);
        studentArray.push(student);
        showStudents();
        showStudentForm();
    } else {
        alert("You have to fill in all the fields of the form correctly");
    };
    // }
}


const numberArray: number[]=[];
numberArray.push(0);

function showStudents() {
    // const showStudents = (document.getElementById("showStudent") as HTMLTableElement);
    const resultStudentForm = document.getElementById('result-student-form') as HTMLElement;
    resultStudentForm.style.display = "block";
    const tbody = (document.getElementById("student_list") as HTMLElement);
    const totalStudents = courseArray[0].maxPerson;

    if (numberArray[numberArray.length - 1]<totalStudents){
        studentArray.forEach((item) => {
            showList();
        });
        let suma = (numberArray[numberArray.length - 1])+1;
        numberArray.push(suma);
    } else {
        showList();

        alert ("You can no longer add more students to the course. There are no more places");
    }
}

function showStudentForm() {
    let courseForm = <HTMLInputElement>document.getElementById("create-course-form");
    let courseStudent = <HTMLInputElement>document.getElementById("create-student-form");
    courseForm.style.display = "none";
    courseStudent.style.display = "block";
}


//validaciones

function validationCourse() {
    const hoursInputRegex = (document.getElementById('hoursInput') as HTMLInputElement).value;
    const priceInputRegex = (document.getElementById('priceInput') as HTMLInputElement).value;
    const maxPersonInputRegex = (document.getElementById('maxPersonInput') as HTMLInputElement).value;

    const hoursRegex = /^\d{1,3}$/;
    const priceRegex = /^\d{0,4}$/;
    const maxPersonRegex = /^(?:0?[5-9]|1[0-5])$/;

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
    const studentNameRegex = (document.getElementById('studentName') as HTMLInputElement).value;
    const studentSurnameRegex = (document.getElementById('studentSurname') as HTMLInputElement).value;
    const studentDniRegex = (document.getElementById('studentDni') as HTMLInputElement).value;
    const studentPopulationRegex = (document.getElementById('studentPopulation') as HTMLInputElement).value;

    const nameRegex = /^[A-Za-z]+$/;
    const surnameRegex = /^[A-Za-z]+$/;
    const dniRegex = /^[0-9]{8}[A-HJ-NP-TV-Za-hj-np-tv-z]$/i;
    const populationRegex = /^[A-Za-z]+$/;

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

function showList(){
    const showStudents = (document.getElementById("showStudent") as HTMLTableElement);
    const tbody = (document.getElementById("student_list") as HTMLElement);

    tbody.innerHTML = "";
    studentArray.forEach((item) => {
        
        let row = document.createElement("tr"); //the row

        let studentName = document.createElement("th"); //first column bold
        studentName.setAttribute("scope", "row");
        studentName.textContent = item.name;

        let studentSurname = document.createElement("td");//second column
        studentSurname.innerText = item.surname;

        let studentDni = document.createElement("td"); //third column
        studentDni.innerHTML = item.dni.toString();

        let studentPopulation = document.createElement("td"); //fourth column
        studentPopulation.innerText = item.population;

        row.appendChild(studentName);
        row.appendChild(studentSurname);
        row.appendChild(studentDni);
        row.appendChild(studentPopulation);

        tbody.appendChild(row);

    });
}