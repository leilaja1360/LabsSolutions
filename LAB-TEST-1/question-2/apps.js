var fs = require('fs');


var myReadableStream = fs.createReadStream("data.txt");
var myWriterStream = fs.createWriteStream("output.txt");

myReadableStream.on('data', function(chunk){
    console.log(chunk);
    var buffer = Buffer.from(chunk);
    console.log(buffer.toString());
    myWriterStream.write(buffer.toString());
});
myReadableStream.on('end', function(chunk){
    myWriterStream.end();
    console.log("write is completed!")
});
