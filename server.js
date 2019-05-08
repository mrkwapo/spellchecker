//letting the application know we are using express
const express = require('express');
//set up express app
const app = express();
//created a variable for designating the port
const port = process.env.PORT || 8000;

//to listen and respond to GET requests
//by using a GET method, settign a route(check), and using a callback (req, res)
app.get('/check', function(req, res) {
  console.log('GET Request');
  res.send({name: 'Nate'});
  
  const name = req.query.name;
  const email = getemail(users, name);
  if (email){
    res.send("You spelled it correctly");
  }else{
    res.send("Incorrect Spelling");
  }
  
  
  
});


//listen for requests
app.listen(port, function() {
  console.log(`Now listening for requests on port ${port}!`);
});






// const fruits = require('./data');


// app.get('/', (req, res) => res.send('You spelled it correctly!'))


// app.use(express.static('public'))
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });


























// console.log(fruits);

// //c9 does not all ow you to run port 3000 
// //to run a port on c9 or any other cloud program like c9  use 8080 or process.env.PORT || 5000;
// app.get('/', function(req, res) {
//     // to recieve input from the client or user 
//     //user is how we use the search term
//     const searchTerm = req.query.term;
//     res.send('You spelled ' + searchTerm + ' correctly!')
//     });
// //request and response

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// //port is doorway to the outside world. it needs to know which door. if it were a hotel it would be the door number

// // () => console.log(`App listening on port ${port}!`)) is a callback function that tells you w what port is being used or listened to


// //back ticks let you  insert a variable inside a string.