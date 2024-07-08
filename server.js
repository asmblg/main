//Install express server
require('dotenv').config();

const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;


const app = express();
// const routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(routes);



// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/build'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

// app.use(routes);

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/MAHS-DATA-EXPLORER';
// console.log(MONGODB_URI);

// Connect to the Mongo DB
// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('DB Connected:', MONGODB_URI ? 'production' : 'dev');
//   })
//   .catch(err => {
//     console.log('DB Connection ERROR: ', err);
//   });


// Start the app by listening on the default Heroku port
app.listen(PORT, () => 
  console.log(`Listening on port ${PORT}`));