var should = require('should');
var calc = require('./calculator');

//calc.addTwoNumbers("a","b");

describe('calculator', function () {
    describe('when used synchronously', function () {
        it('should add two numbers correctly', function () {
            calc.addTwoNumbers(2, 2).should.equal(4);
        });
    });
});
describe('calculator', function () {
    describe('when used synchronously', function () {
        it('should throw exception', function () {
            should(function () {
                calc.addTwoNumbers("tss", 3);       //when enter something except numbers it will throw exception
            }).throw('wrong value')                 //this is exception message
        });
    });
});
describe('calculator', function () {
    describe('when used synchronously', function () {
        it('should add two numbers not correctly', function () {
            should.notEqual(calc.substractTwoNumber(4, 2), 7);      //checking not equal
        });
    });
});
//calc.substractTwoNumber("a","b");

describe('calculator', function () {
    describe('when used synchronously', function () {
        it('should substract two numbers correctly', function () {
            calc.substractTwoNumber(4, 2).should.equal(2);
        });
    });
});

//calc.addTwoNumbers("a","b");


//calc.substractTwoNumber("a","b");

describe('calculator', function () {
    describe('when used synchronously', function () {
        it('should substract two numbers not correct', function () {
            should.notEqual(calc.substractTwoNumber(14, 14), 28)
        });
    });
});
describe('calculator', function () {
    describe('when used synchronously', function () {
        it('should throw exception in subtraction', function () {
            should(function () {
                calc.addTwoNumbers("tss", 3);
            }).throw('wrong value')
        });
    });
});
describe('calculator', function () {
    describe('when used asynchronously', function () {
        it('should add two numbers correctly', function () {

            var addTwoNumberAsync = calc.addTwoNumberAsync(5, 25).then(function (rsult) {       //use then to async result
                rsult.should.be.equal(30);
            });
        });
    });
});
