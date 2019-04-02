var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/timetable', function(req, res) {
  res.render('timetable', { title: 'Express' });
});
router.get('/pq', function(req, res) {
  res.render('pq', { title: 'Express' });
});
router.get('/solution', function(req, res) {
  res.render('solution', { title: 'Express' });
});

module.exports = router;
