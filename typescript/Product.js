"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.setPid = function (pid) {
        this.pid = pid;
    };
    Product.prototype.getPid = function () {
        return this.pid;
    };
    Product.prototype.setPname = function (pid) {
        this.pname = pid;
    };
    Product.prototype.getPname = function () {
        return this.pname;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
exports.Product = Product;
