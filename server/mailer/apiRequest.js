var request = require('request');
var moment = require('moment');
var mail = require('./mail');

var contestApiUrl = 'http://localhost:3000/reminder';
var userApiUrl = 'http://localhost:3000/user';

var futureContests = [];
var emails = [];
var a = 0;
var myBody = [];

function setBody(something){
  contests = [];
  myBody[a] = something;
  notset = false;
  a++;
  if(a==2){
    emailBody = myBody[0];
    var contestsBody = JSON.parse(myBody[1]);
    for(key in contestsBody){
      if((moment().format())<=(moment().format(contestsBody[key].startDate))){
        var contest = {
          code: contestsBody[key].code,
          name: contestsBody[key].name,
          startDate: moment(contestsBody[key].startDate).format('Do MMMM YYYY'),
          startTime: moment(contestsBody[key].startDate).format('h:mm A'),
          endDate: moment(contestsBody[key].endDate).format('Do MMMM YYYY'),
          endTime: moment(contestsBody[key].endTime).format('h:mm A')
        };
        futureContests.push(contest);
      }
    }

    var emailsBody = JSON.parse(myBody[0]);
    for(key in emailsBody){
      emails.push(emailsBody[key].email);
    }
    mail.sendMail(emails, futureContests);
  }
}
request(contestApiUrl, function(err, response, body){
  if(err) console.log("############################################3"+err);
  setBody(body);
});

request(userApiUrl, function(err, response, body){
  if(err) console.log("############################################3"+err);
  setBody(body);
});
