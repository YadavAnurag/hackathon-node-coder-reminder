var User = require('./userModel');
var _ = require('lodash');
var apiRequest = require('./../mailer/apiRequest');

exports.params = function(req, res, next, id){
    User.findById(id)
        .exec()
        .then(function(user){
            if(!user){
                res.json('No user with provided id')
            }else{
                req.user = user;
                next();
            }
        }, function(err){
            res.json('Error \n'+err);
        })
};

exports.get = function(req, res, next){
  User.find({})
      .exec()
      .then(function(users){
          res.json(users);
      }, function(err){
          res.json('Error in finding users details \n'+err);
      });
};

exports.getOne = function(req, res, next){
  var user = req.user;
  res.json(user);
};

exports.put = function(req, res, next){
    var user = req.user;
    var update = req.body;
    _.merge(user, update);

    user.save(function(err, saved){
        if(err){
            res.json('Error while putting contest data \n'+err);
        }else{
            res.json(saved);
        }
    });
};

exports.post = function(req, res, next){
    var newUser = new User(req.body);
    newUser.save(function(err, user){
        if(err){
            res.json('Error while saving data '+err);
        }else{
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next){
    req.user.remove(function(err, removed){
        if(err){
            res.json('Error while removing data\n'+err);
        }else{
            res.json(removed);
        }
    });
};
