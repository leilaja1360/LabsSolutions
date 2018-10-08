var calc = require('./calculator');
var should = require('should');



describe('calculator', function(){
    describe('when multiplying two numbers', function(){
        it('should multiply two numbers correctly 4 * 4 = 16', function(){
            calc.multiplyTwoNumbers(4,4).should.equal(16);
        });
        it('should multiply two numbers correctly 2 * 5 = 10', function(){
            calc.multiplyTwoNumbers(2,5).should.equal(10);
        });
        it('multiply two numbers should not equal  2 * 2 = 5', function(){
            should.notEqual(calc.multiplyTwoNumbers(2,2),(5));
        });
        it('should throw an error ="x" * "y"', function(){
            should(function () {
                calc.multiplyTwoNumbers("x", "y");
            }).throw('wrong value')
        });
    });
});
describe('calculator', function(){
    describe('even doubler', function(){
        it('even doubler when even 2 = 4', function(){
            calc.evenDoubler(2).should.equal(4);
        });
        it('should not double when odd 3 = 9', function(){
            should.notEqual(calc.evenDoubler(3),9);
        });
        it('should equal zero when odd 9 => 0', function(){
            calc.evenDoubler(9).should.equal(0);
        });
    });
});
