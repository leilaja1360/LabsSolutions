module.exports.addTwoNumbers = function (num1, num2){
  return num1 + num2;
}

module.exports.substractTwoNumber = function (num1, num2){
  return num1 - num2;
}

function ddTwoNumberAsync (num1, num2){
  setTimeout(function(){
    return num1 + num2;
  }, 5000)
}
module.exports.ddTwoNumberAsync = ddTwoNumberAsync; 
