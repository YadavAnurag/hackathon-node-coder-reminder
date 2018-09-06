var request = require('request');
var moment = require('moment');
var mail = require('./mail');

var contestApiUrl = 'http://localhost:3000/reminder';
var userApiUrl = 'http://localhost:3000/user';

var futureContests = [];
var users = [];

exports.makeRequest = function(){
  var r = request(contestApiUrl, function(err, response, body){

    var info = JSON.parse(body);

    for(key in info){

      if((moment().format())<=(moment().format(info[key].startDate))){
        var contest = {
          code: info[key].code,
          name: info[key].name,
          startDate: moment(info[key].startDate).format('Do MMMM YYYY'),
          startTime: moment(info[key].startDate).format('h:mm A'),
          endDate: moment(info[key].endDate).format('Do MMMM YYYY'),
          endTime: moment(info[key].endTime).format('h:mm A')
        };
        futureContests.push(contest);
      }
    }
    console.log(futureContests);
  });
};
