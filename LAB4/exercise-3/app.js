var should = require('should');
var calc = require('./calculator');

calc.addTwoNumbers("a","b");

describe('calculator', function(){
  describe('when used synchronously', function(){
    it('should add two numbers correctly', function(){
      calc.addTwoNumbers(2,2).should.equal(4);
    });
  });
});

calc.substractTwoNumber("a","b");

describe('calculator', function(){
  describe('when used synchronously', function(){
    it('should substract two numbers correctly', function(){
      calc.substractTwoNumber(4,2).should.equal(2);
    });
  });
});



describe('calculator', function(){
  describe('when used asynchronously', function(){
    it('should add two numbers correctly', function(){
      calc.ddTwoNumberAsync(4,2).should.equal(6);

      describe("ddTwoNumberAsync()", function(){
        it("add two numbers", function(){
          calc.ddTwoNumberAsync("a","b"), function(){
            calc.ddTwoNumberAsync(4,2).should.equal(6);
          };
        })
      })
    });
  });
});
