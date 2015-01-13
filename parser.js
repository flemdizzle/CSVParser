var fs = require("fs");
var fileName = "NTD.csv";

fs.open(fileName, function(err, stats){
  console.log(stats);
});