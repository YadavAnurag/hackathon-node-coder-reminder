const nodemailer = require('nodemailer');
const xoauth2 = require('oauth2');
const cron = require('node-cron');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth : {
    user: 'ccodechef@gmail.com',
    pass: 'shivam00'
      // type: "oauth2",
      // user: "ccodechef@gmail.com",
      // clientId: "1079228301023-fbrqbe24dc296mqac9tp0g2hrgip849m.apps.googleusercontent.com",
      // clientSecret: "R4Y7aZTHiE7kJ3M5ukmCqA2b",
      // accessToken: "ya29.Glv6BR6_lu8leNpju4Ks6WzjPLuA3fDJty8SpASo7n2dDrO9UAlK4X6inBeFg9DVfTQEWl8s8Gy_CXhbX_M0_ixLE9ZLSYi77LmE1ECCJyPTNOQciIpX-h_yHRY0",
      // refreshToken: "1/tU-SC39wUVAfMBFkFzMybL7XjO0U8VaOTVHG9a9E_J0"
  }
});

var mailOptions = {
  from : 'anuragyadav13481@gmail.com',
  to : 'anuragyadav13481@gmail.com',
  subject : 'Coder Reminder',
  text : 'This is body',
  html : '<h1 style="text-align:center;color:green">Codechef Contest Reminder<h1>',
};


exports.sendMail = function(emails, futureContests){
  // console.log(futureContests);
  // console.log( 2  + " 33333333333333333333333333333333333333333333333333333333333333333333333333");
  // console.log(emails);
  mailOptions.to = emails;
  for(key in futureContests){
    mailOptions.html+=
    `<div>
      <p style="text-align:justify;font-size:20px;">
      Code : ${futureContests[key].code}<br />
      Contest : ${futureContests[key].name} <br />
      Starting From : ${futureContests[key].startDate} Time: ${futureContests[key].startTime} <br/>
      Contest End : ${futureContests[key].endDate} Time: ${futureContests[key].endDate} <br/>
      <br/><br/>
    </p></div>
    <br/>
    `;
  }

  //00 22 * * *
  cron.schedule("* * * * * *", ()=>{
    transporter.sendMail(mailOptions, function(error,info){
      if (error) {
        console.log(error);
      }
      else {
        console.log('Mail sent : '+ info.accepted);
      }
    });
  });
};
