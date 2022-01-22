var fs = require('fs');

fs.readFile('sample2.txt', 'utf-8', function(err, data){
    console.log("main text : %s", data);
});