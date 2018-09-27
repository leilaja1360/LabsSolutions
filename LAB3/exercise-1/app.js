var fs = require('fs');
//By adding the utf8 we can convert the buffer value back to a string and output it to the console
var stream = fs.createReadStream("data.txt", 'utf8');

stream.on("data", function(data){
  console.log(data);
})
