var max = 50;

var handleCounter = function(err = 'error msg', counter, waitTime, timestamp){
  try{

  }catch(e){
    console.log(e.message + err);
  }

}

var callbackWait = function(counter, callback){
  var rand = Math.floor(Math.random() * 100) + 1;
  if (rand > max){

  }else{
      setTimeout(function(){
          console.log('timeout');
        }, 3000);
  }
  var timestamp = date.getTime();
}


for(var i=0; i < 10; i++){
  callbackWait(i, handleCounter);
}
