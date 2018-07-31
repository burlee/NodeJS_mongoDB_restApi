const express = require('express');
const route = express.Router();
const Character = require('../models/character')


route.get('/characters', function(req,res,next){
    // Character.find({}).then(function(characters){
    //     res.send(characters)
    // });
    Character.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: 'dist.calculated'
    }).then(function(characters){
        res.send(characters);
    })
    .catch(next)
});

//ADD CHARACTER TO DB
route.post('/characters', function(req,res,next){
    // console.log(req.body);
    Character.create(req.body)
    .then(function(character){
        res.send(character);
    })
    .catch(next)

    // res.send({
    //     type: 'POST',
    //     name: req.body.name,
    //     rank: req.body.rank
    // });
});

//UPDATE CHARACTER IN DB
route.put('/characters/:id', function(req,res,next){
    res.send({type: 'PUT'});
    Character.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(){
        Character.findOne({_id: req.params.id})
        .then(function(character){
            res.send(character);
        })
    })
});

//DELETE CHARACTER FROM DB
route.delete('/characters/:id', function(req,res,next){
    //console.log(req) req is Object and has params property.
    // console.log(req.params.id)
    Character.findByIdAndRemove({_id: req.params.id})
    .then(function(character){
        res.send(character)
    })
    res.send({type: 'DELETE'})
});

module.exports = route;