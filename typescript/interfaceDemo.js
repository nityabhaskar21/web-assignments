var Flight = /** @class */ (function () {
    function Flight() {
    }
    Flight.prototype.fly = function () {
        console.log('flight fly');
    };
    return Flight;
}());
function flyableClient() {
    var obj = new Flight();
    obj.fly();
}
flyableClient();
