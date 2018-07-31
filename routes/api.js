const express = require('express');


const route = express.Router();

route.get('/characters', function(req,res){
    res.send({type: 'GET'})
});

//ADD CHARACTER TO DB
route.post('/characters', function(req,res){
    res.send({type: 'POST'})
});

//UPDATE CHARACTER IN DB
route.put('/characters/:id', function(req,res){
    res.send({type: 'PUT'})
});

//DELETE CHARACTER FROM DB
route.delete('/characters/:id', function(req,res){
    res.send({type: 'DELETE'})
});

module.exports = route;