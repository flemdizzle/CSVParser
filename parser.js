var fs = require("fs");
var fileName = "NTD.csv";
var outputFileName = "output/NTD.json";


fs.readFile(fileName, "utf8", function(err, data){
  var output = {};
  output["name"]= data.substr(0,13);
  output["stuff"]= data.substr(14,20);
  writeJSON(JSON.stringify(output));

});

function writeJSON(data){
  fs.writeFile(outputFileName, data, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("JSON saved to " + outputFileName);
      fs.readFile(outputFileName, "utf8", function(err, data){
        console.log(data);
      });
    }
  });
}




