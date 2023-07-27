"use strict";
var Course = /** @class */ (function () {
    function Course(name, hours, price, maxPerson) {
        this.students = new Array();
        this.name = name;
        this.hours = hours;
        this.price = price;
        this.maxPerson = maxPerson;
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    return Course;
}());
