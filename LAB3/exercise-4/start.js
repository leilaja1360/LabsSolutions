var handleCounter = function(result){
  console.log('The callback count is ' + result);
}

function callbackLoop(n, func){
  for(var i = 1; i <= n; i++){
    func(i);
  }
  console.log("*** exiting callbackLoop *****");
}


callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);
