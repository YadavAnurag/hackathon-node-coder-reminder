var Contest = require('./contestModel');
var _ = require('lodash');


exports.params = function(req, res, next, id){
    Contest.findById(id)
        .exec()
        .then(function(contest){
            if(!contest){
                res.json('No contest with provided id')
            }else{
                req.contest = contest;
                next();
            }
        }, function(err){
            res.json('Error \n'+err);
        })
};

exports.get = function(req, res, next){
    Contest.find({})
        .exec()
        .then(function(contests){
            res.json(contests);
        }, function(err){
            res.json('Error in finding contests details \n'+err);
        });
};

exports.getOne = function(req, res, next){
    var contest = req.contest;
    res.json(contest);
};

exports.put = function(req, res, next){
    var contest = req.contest;
    var update = req.body;
    _.merge(contest, update);

    contest.save(function(err, saved){
        if(err){
            res.json('Error while putting contest data \n'+err);
        }else{
            res.json(saved);
        }
    });
};

exports.post = function(req, res, next){
    // var newContest = new Contest(req.body);
    // console.log(req.body);
    newContest.save(function(err, contest){
        if(err){
            res.json('Error while saving data \n'+err);
        }else{
          res.json(contest);
        }
    });
};

exports.delete = function(req, res, next){
    req.contest.remove(function(err, removed){
        if(err){
            res.json('Error while removing data\n'+err);
        }else{
            res.json(removed);
        }
    });
};
