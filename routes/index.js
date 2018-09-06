var express = require('express');
var request = require('request');
var router = express.Router();
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Coder Reminder' });
});


router.use('/user', require('./../server/user/userRoutes'));
router.use('/reminder', require('./../server/reminder/contestRoutes'));


module.exports = router;




/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Coder Reminder' });
// });

// router.post('/', function(req, res, next) {

//   let city = req.body.email;
  
//   request(url, (err, response, body)=>{
//     if(err){
//       res.render('index', {weather:null, error: 'Error, Please try again later'});
//     }
//     else{
//       let weather = JSON.parse(body);
//       console.log(weather);
//       if(weather.main==undefined){
//         res.render('index', {weather:null, error: 'City not Found, Please try again'});
//       }
//       else{
//         let wt = '';
//         if(weather.main.temp<20)
//         wt = 'cloud';
//         else if(weather.main.temp>23 && weather.main.temp<30)
//         wt = 'sun'
//         else if(weather.main.temp>30)
//         wt = 'hot'


//         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}! (${weather.sys.country})`;
//         res.render('index', {title: 'Get Your Weather', weather: weatherText, error: null,w:weather, wtype:wt});
//       }
//     }
//   });

// });


