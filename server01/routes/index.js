var express = require('express');
var router = express.Router();
// var Profile=require('..models/profile');
var mongoose=require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/somefile', function(req, res, next) {
  // res.render('index', { title: 'Express' });
//   console.log(req.body);
//   if(req.body){
//     var usermsg=new Profile();
//     usermsg.Wave=req.body.Wave;
//     usermsg.Name=req.body.Name;
//     usermsg.Email=req.body.Email;
//     usermsg.Phone=req.body.Phone;
//     usermsg.Git=req.body.Git;
//     usermsg.Eno=req.body.Eno;
//     usermsg.Dept=req.body.Dept;
//     usermsg.Desig=req.body.Desig;
//     usermsg.Skills=req.body.Skills;
//     usermsg.Experience=req.body.Experience;
//     usermsg.save(function(err,usermsg){
//       if(err){
//        return console.error(err);
//       }
//       else{
//         res.send({usermsg:"saved success"});
//       }
//
//     })
//   }
//   else {
//     console.log("not found");
//   }
// });
//
// router.get('showProfile',function(req,res,next){
//   profile.find(function(err,docs){
//     if(docs){
//       res.json(docs);
//     }
//     else {
//       console.log(err);
//     }
//   })
// });
module.exports = router;
