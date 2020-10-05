var express = require('express');
var router = express.Router();

var courseCtrl = require('../controllers_Admin/course.controller');
var conCtrl = require('../controllers_Admin/concept.controller');
var queCtrl = require('../controllers_Admin/QnA.controller');
var adctrl = require('../controllers_Admin/admin.controller');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postCourse', courseCtrl.postCourse)

router.get('/getCourse', courseCtrl.getCourse)
router.get('/getsingleCourse/:id', courseCtrl.getSinglecourse)

router.post('/getconceptsofsubject', conCtrl.getconceptsofsubject)
router.post('/postConcepts', conCtrl.postConcepts)

router.post('/posttrail', conCtrl.postToTrail)

router.get('/getQuestionsData/:id', queCtrl.getQuestionsData)

router.post('/deletedoc', conCtrl.deletedoc)

router.post('/deleteoneque', queCtrl.deleteoneque);

router.post('/editSingleQue', queCtrl.editSingleQue)

router.post('/adminauthenticate', adctrl.authentication)


module.exports = router;
