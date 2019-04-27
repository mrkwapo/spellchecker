// console.log("Server running");

const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
// const fruits = require('./data');

require("fs").readFile("./words.txt", function (err, data) {
  if (err) throw err;
  if(data.includes('search string')){
      //I got this code from stackoverflow and still trying to figure out how to take the searchTerm variable
      //and replace 'search string' string to search the file for the users input.
   console.log(data)
  }
});

console.log('Working');

//c9 does not all ow you to run port 3000 
//to run a port on c9 or any other cloud program like c9  use 8080 or process.env.PORT || 5000;
app.get('/', function(req, res) {
    // to recieve input from the client or user 
    //user is how we use the search term
    const searchTerm = req.query.term;
    res.send('You spelled ' + searchTerm + ' correctly!')
    });
//request and response

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//port is doorway to the outside world. it needs to know which door. if it were a hotel it would be the door number

// () => console.log(`App listening on port ${port}!`)) is a callback function that tells you w what port is being used or listened to


//back ticks let you  insert a variable inside a string.