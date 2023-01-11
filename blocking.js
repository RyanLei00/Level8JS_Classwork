//Ryan Lei, Section 86 Period 7/8, Subchapter 2//

var fs = require("fs");

fs.readFile('input.txt', function (err, data)
{
    if (err)
        return console.erroer(err);
    console.log(data.toString());
});

console.log("Program Ended");
