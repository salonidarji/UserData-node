var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

router.get('/:id?', function(req, res, next) {
  
   if(req.params.id){

    User.getUser(req.params.id ,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }

    });
   } 
   else {
   
    User.getAllUser(function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }

    });
   }
    
});

router.post('/', function(req, res, next) {
  
  User.insertUser(req.body,function(err,rows){
    if(err){
      res.json(err);
    }
    else{
      res.json(rows);
    }

  });
});

router.put('/:id', function(req, res, next) {
  
  User.updateUser(req.params.id, req.body, function(err,rows){
    if(err){
      res.json(err);
    }
    else{
      res.json(rows);
    }

  });
});

router.delete('/:id', function(req, res, next) {
  
  User.deleteUser(req.params.id,function(err,rows){
    if(err){
      res.json(err);
    }
    else{
      res.json(rows);
    }

  });
});

module.exports=router;
 
