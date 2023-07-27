class Course{
    name:string;
    hours:number;
    price: number;
    maxPerson: number;

    students:Student[]=new Array();

    constructor(name:string, hours:number, price:number, maxPerson:number){
        this.name = name;
        this.hours = hours;
        this.price = price;
        this.maxPerson = maxPerson;
    }

    addStudent(student:Student):void{
        this.students.push(student);
    }
}