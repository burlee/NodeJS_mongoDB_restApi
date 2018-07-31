const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Setup express enviroment
const app = express();

//Make connect to MongoDB

mongoose.connect('mongodb://localhost/character');
mongoose.Promise = global.Promise;

app.get('/api', function(req,res){
    console.log('Make request');
    res.send({name: 'Seweryn'});
    
});

//Middleware function called before respond from server
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//Listen requests
app.listen(process.env.port || 4000, function(){
    console.log('Success')
});