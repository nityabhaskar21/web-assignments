"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
function StudentClient() {
    var obj = new Student_1.Student(1001, 'Sonu');
    obj.display();
}
StudentClient();
