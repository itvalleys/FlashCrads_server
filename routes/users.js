var express = require('express');
var router = express.Router();

const userCtrl = require('../Controller_Users/user.controller')

const coctrl = require('../Controller_Users/Corse.controller')

const jwtHelper = require('../config/jwtHelper');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userCtrl.register);
router.post('/authenticate', userCtrl.authenticate)

router.get('/GetAllCourses', coctrl.GetAllCourses)

router.get('/getsingleCourse/:id', coctrl.getsingleCourse)

router.get('/getConceptsofSubj/:id', coctrl.getConceptsofSubj)

router.get('/getQueOfConcept/:id', coctrl.getQueOfConcept)


router.post('/googleuser', userCtrl.google)

router.post('/addTofavourites', jwtHelper.verifyJwtToken, coctrl.pushtofav)

router.get('/getfavlist', jwtHelper.verifyJwtToken, userCtrl.getfavlist)

module.exports = router;



