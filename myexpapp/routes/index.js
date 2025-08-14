var express = require('express');
var router = express.Router();

// import model
var StudentModel = require('../models/Student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/add-student', function(req, res, next) {
  res.render('add-student');
});

router.post('/add-student-process', function(req, res, next) {
  var StudentData = {
    sname: req.body.txt1,
    semail:req.body.txt2,
    smobile : req.body.txt3
  }

  var mydata = StudentModel(StudentData)
  // save in database 
  mydata.save()
    .then(()=> {
      res.send("Data Added Sucessfully🥳")
    })
});

router.get('/display-student',function(req,res,next){
  StudentModel.find()
    .then(data=>{
      console.log(data)
      res.render('display-student',{mydata:data})
    })
})

router.get('display-student-api', function (req,res,next){
  StudentModel.find()
    .then(data=>{
      console.log(data)
      res.json(data)
    })
});

module.exports = router;
