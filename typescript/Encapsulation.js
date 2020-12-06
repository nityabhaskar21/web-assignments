"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
function displayProduct() {
    var obj = new Product_1.Product();
    obj.setPid(1001);
    obj.setPname('Acer Laptop');
    obj.setPrice(45000);
    console.log("Product ID: " + obj.getPid() + ", Product Name: " + obj.getPname() + ", Product Price: " + obj.getPrice());
}
displayProduct();
