"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Contract = void 0;
var Emp_1 = require("./Emp");
var Contract = /** @class */ (function (_super) {
    __extends(Contract, _super);
    function Contract(eid, ename, sal, days) {
        var _this = _super.call(this, eid, ename, sal) || this;
        _this.days = days;
        return _this;
    }
    Contract.prototype.display = function () {
        console.log("EID: " + this.getEid() + ", Ename: " + this.getEname() + ", Sal: " + this.getSal() + ",\n    DA: -N/A-, PF: -N/A- , Days:" + this.days + ", NetSal: " + this.calcSal());
    };
    Contract.prototype.calcSal = function () {
        return this.getSal() * this.days;
    };
    return Contract;
}(Emp_1.Emp));
exports.Contract = Contract;
