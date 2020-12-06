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
exports.Onroll = void 0;
var Emp_1 = require("./Emp");
var Onroll = /** @class */ (function (_super) {
    __extends(Onroll, _super);
    function Onroll(eid, ename, sal) {
        var _this = _super.call(this, eid, ename, sal) || this;
        _this.da = _this.getSal() * 0.4;
        _this.pf = _this.getSal() * 0.12;
        return _this;
    }
    Onroll.prototype.display = function () {
        console.log("EID: " + this.getEid() + ", Ename: " + this.getEname() + ", Sal: " + this.getSal() + ", DA: \n      " + this.da + ", PF: " + this.pf + ", Days: -NA-, NetSal: " + this.calcSal());
    };
    Onroll.prototype.calcSal = function () {
        return this.getSal() + this.da - this.pf;
    };
    return Onroll;
}(Emp_1.Emp));
exports.Onroll = Onroll;
