"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    // private stuId: number;
    // private stuName: string;
    // constructor(stuId: number, stuName: string) {
    //   this.stuId = stuId;
    //   this.stuName = stuName;
    // }
    function Student(stuId, stuName) {
        this.stuId = stuId;
        this.stuName = stuName;
        this.stuId = stuId;
        this.stuName = stuName;
    }
    Student.prototype.display = function () {
        console.log("Student ID: " + this.stuId + ", Student Name: " + this.stuName);
    };
    return Student;
}());
exports.Student = Student;
