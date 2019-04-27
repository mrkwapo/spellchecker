// console.log("Server running");
// var fs = require("fs");
// var text = fs.readFileSync("./words.txt");
// var textByLine = text.split("\n")


// var fs = require('fs');
// var stream = fs.createReadStream("https://github.com/dwyl/english-words/blob/master/words.txt");
// var found = false;
// stream.on('data',function(d){
//   if(!found) found=!!(''+d).match(content)
// });
// stream.on('error',function(err){
//     then(err, found);
// });
// stream.on('close',function(err){
//     then(err, found);
// });






const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
// const fruits = require('./data');

require("fs").readFile("./words.txt", function (err, data) {
  if (err) throw err;
  if(data.includes('search string')){
   console.log(data)
  }
});


// const words = require('./words');

// var text = fs.readFileSync("./words.txt").toString('utf-8');

console.log("Correct!");
//c9 does not all ow you to run port 3000 
//to run a port on c9 or any other cloud program like c9  use 8080 or process.env.PORT || 5000;
app.get('/', function(req, res) {
    // to recieve input from the client or user
    const searchTerm = req.query.user;
    res.send('Hello ' + searchTerm + '!')
    });
//request and response

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//port is doorway to the outside world. it needs to know which door. if it were a hotel it would be the door number

// () => console.log(`App listening on port ${port}!`)) is a callback function that tells you w what port is being used or listened to


//back ticks let you  insert a variable inside a string.