"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.getAge = function () {
        console.log(this.age);
    };
    return Customer;
}());
exports.Customer = Customer;
