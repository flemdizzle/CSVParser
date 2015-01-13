var fs = require("fs");
var fileName = "NTD.csv";
var outputFileName = "/output/NTD.json";


fs.readFile(fileName, "utf8", function(err, data){
  
});

fs.writeFile(outputFileName, "derp", function(err){
  if(err){
    console.log(err);
  }else{
    console.log("JSON saved to " + outputFileName);
  }
});



