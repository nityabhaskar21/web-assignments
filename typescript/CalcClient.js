"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
function client() {
    var obj = new Calculator_1.Calculator();
    obj.amt = 5000;
    obj.years = 5;
    obj.rate = 2.5;
    console.log("Simple interest: " + obj.calcSimple() + ", Compound Interest: " + obj.calcComp() + " ");
}
client();
