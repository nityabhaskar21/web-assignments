"use strict";
exports.__esModule = true;
var Onroll_1 = require("./Onroll");
var Contract_1 = require("./Contract");
function EmpClient() {
    var arr = new Array(2);
    arr[0] = new Onroll_1.Onroll(1001, 'rama', 25000);
    arr[1] = new Contract_1.Contract(1002, 'tom', 2000, 15);
    display(arr);
}
function display(emps) {
    emps.forEach(function (e) { return e.display(); });
}
EmpClient();
