"use strict";
exports.__esModule = true;
exports.Emp = void 0;
var Emp = /** @class */ (function () {
    function Emp(eid, ename, sal) {
        this.eid = eid;
        this.ename = ename;
        this.sal = sal;
    }
    Emp.prototype.setEid = function (eid) {
        this.eid = eid;
    };
    Emp.prototype.getEid = function () {
        return this.eid;
    };
    Emp.prototype.setEname = function (ename) {
        this.ename = ename;
    };
    Emp.prototype.getEname = function () {
        return this.ename;
    };
    Emp.prototype.setSal = function (sal) {
        this.sal = sal;
    };
    Emp.prototype.getSal = function () {
        return this.sal;
    };
    return Emp;
}());
exports.Emp = Emp;
