"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calcSimple = function () {
        return (this.amt * this.years * this.rate) / 100;
    };
    Calculator.prototype.calcComp = function () {
        return this.amt * Math.pow(1 + this.rate / 100, this.years) - this.amt;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
