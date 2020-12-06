"use strict";
exports.__esModule = true;
var NokiaN7_1 = require("./NokiaN7");
function NokiaCLient() {
    var obj = new NokiaN7_1.NokiaN7();
    obj.price = 23000;
    obj.camPx = '32px';
    console.log(obj);
    obj.doConverse();
    obj.captureVideo();
}
NokiaCLient();
