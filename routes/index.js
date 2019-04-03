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
// =============================== Computer Science ===========================
router.get('/csclevel1', function(req, res, next) {
  res.render('pastquestions/science/computer/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/csclevel2', function(req, res, next) {
  res.render('pastquestions/science/computer/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/csclevel3', function(req, res, next) {
  res.render('pastquestions/science/computer/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/csclevel4', function(req, res, next) {
  res.render('pastquestions/science/computer/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/csclevel5', function(req, res, next) {
  res.render('pastquestions/science/computer/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});
router.get('/cscothers', function(req, res, next) {
  res.render('pastquestions/science/computer/others', {
  others: 'Express'
  });
});

// =============================== Mathematics ===========================
router.get('/matlevel1', function(req, res, next) {
  res.render('pastquestions/science/maths/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/matlevel2', function(req, res, next) {
  res.render('pastquestions/science/maths/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/matlevel3', function(req, res, next) {
  res.render('pastquestions/science/maths/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/matlevel4', function(req, res, next) {
  res.render('pastquestions/science/maths/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/matlevel5', function(req, res, next) {
  res.render('pastquestions/science/maths/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

// =============================== Biochemistry ===========================
router.get('/bchlevel1', function(req, res, next) {
  res.render('pastquestions/science/biochemistry/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/bchlevel2', function(req, res, next) {
  res.render('pastquestions/science/biochemistry/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/bchlevel3', function(req, res, next) {
  res.render('pastquestions/science/biochemistry/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/bchlevel4', function(req, res, next) {
  res.render('pastquestions/science/biochemistry/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/bchlevel5', function(req, res, next) {
  res.render('pastquestions/science/biochemistry/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});


// =============================== Physics ===========================
router.get('/phylevel1', function(req, res, next) {
  res.render('pastquestions/science/physics/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/phylevel2', function(req, res, next) {
  res.render('pastquestions/science/physics/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/phylevel3', function(req, res, next) {
  res.render('pastquestions/science/physics/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/phylevel4', function(req, res, next) {
  res.render('pastquestions/science/physics/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/phylevel5', function(req, res, next) {
  res.render('pastquestions/science/physics/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});


// =============================== Zoology ===========================
router.get('/zoolevel1', function(req, res, next) {
  res.render('pastquestions/science/zoology/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/zoolevel2', function(req, res, next) {
  res.render('pastquestions/science/zoology/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/zoolevel3', function(req, res, next) {
  res.render('pastquestions/science/zoology/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/zoolevel4', function(req, res, next) {
  res.render('pastquestions/science/zoology/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/zoolevel5', function(req, res, next) {
  res.render('pastquestions/science/zoology/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});


// =============================== Botany ===========================
router.get('/botlevel1', function(req, res, next) {
  res.render('pastquestions/science/botany/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/botlevel2', function(req, res, next) {
  res.render('pastquestions/science/botany/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/botlevel3', function(req, res, next) {
  res.render('pastquestions/science/botany/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/botlevel4', function(req, res, next) {
  res.render('pastquestions/science/botany/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/botlevel5', function(req, res, next) {
  res.render('pastquestions/science/botany/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});


// =============================== Fishery ===========================
router.get('/fislevel1', function(req, res, next) {
  res.render('pastquestions/science/fishery/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/fislevel2', function(req, res, next) {
  res.render('pastquestions/science/fishery/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/fislevel3', function(req, res, next) {
  res.render('pastquestions/science/fishery/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/fislevel4', function(req, res, next) {
  res.render('pastquestions/science/fishery/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/fislevel5', function(req, res, next) {
  res.render('pastquestions/science/fishery/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});


// =============================== MicroBiology ===========================
router.get('/mcblevel1', function(req, res, next) {
  res.render('pastquestions/science/microbiology/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/mcblevel2', function(req, res, next) {
  res.render('pastquestions/science/microbiology/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/mcblevel3', function(req, res, next) {
  res.render('pastquestions/science/microbiology/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/mcblevel4', function(req, res, next) {
  res.render('pastquestions/science/microbiology/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/mcblevel5', function(req, res, next) {
  res.render('pastquestions/science/microbiology/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

// =============================== Fishery ===========================
router.get('/chmlevel1', function(req, res, next) {
  res.render('pastquestions/science/chemistry/100level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/chmlevel2', function(req, res, next) {
  res.render('pastquestions/science/chemistry/200level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/chmlevel3', function(req, res, next) {
  res.render('pastquestions/science/chemistry/300level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/chmlevel4', function(req, res, next) {
  res.render('pastquestions/science/chemistry/400level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});

router.get('/chmlevel5', function(req, res, next) {
  res.render('pastquestions/science/chemistry/500level', {
  question1: 'stylesheets/images/pexels-photo-748626.jpeg',
  question2: 'stylesheets/images/pexels-photo-748626.jpeg',
  question3: 'stylesheets/images/pexels-photo-748626.jpeg',
  question4: 'stylesheets/images/pexels-photo-748626.jpeg'
  });
});


module.exports = router;
