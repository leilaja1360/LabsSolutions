var fs = require('fs');
var zlib = require('zlib');

var myReadableStrem = fs.createReadStream("output.txt");
var myWritableStream = fs.createWriteStream("output.txt.gz");
var gzip = zlib.createGzip();
myReadableStrem.pipe(gzip).pipe(myWritableStream);
