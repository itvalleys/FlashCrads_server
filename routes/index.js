var express = require('express');
var router = express.Router();

var courseCtrl = require('../controllers/course.controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postCourse', courseCtrl.postCourse)


module.exports = router;
