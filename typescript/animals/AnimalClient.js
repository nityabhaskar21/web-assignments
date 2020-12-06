"use strict";
exports.__esModule = true;
var Dog_1 = require("./Dog");
var Lion_1 = require("./Lion");
var Cat_1 = require("./Cat");
function display() {
    var animals = new Array(3);
    animals[0] = new Dog_1.Dog();
    animals[1] = new Cat_1.Cat();
    animals[2] = new Lion_1.Lion();
    animals.forEach(function (e) { return e.makeNoise(); });
}
display();
