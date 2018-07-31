const express = require('express');
const bodyParser = require('body-parser');

//Setup express enviroment
const app = express();

app.get('/api', function(req,res){
    console.log('Make request');
    res.send({name: 'Seweryn'});
    
});

app.use('/api', require('./routes/api'));

//Listen requests
app.listen(process.env.port || 4000, function(){
    console.log('Success')
});