module.exports.addTwoNumbers = function (num1, num2) {
    if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {       //this is to type checking
        throw new Error('wrong value');                         //if num1 or num2 is num number
    }                                                       //it will throw exception
    return num1 + num2;
}

module.exports.substractTwoNumber = function (num1, num2) {
    if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {       //for type checking and exception
        throw new TypeError('wrong value');
    }
    return num1 - num2;
}

function addTwoNumberAsync(num1, num2) {

    var p = new Promise(function (resolve, reject) {        //for asynchronous result we used promise and resolve
        setTimeout(function () {
            resolve(num1 + num2);
        }, 5000);
    });
    return p;
}

module.exports.addTwoNumberAsync = addTwoNumberAsync;
