var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
router.get('/about', function (req, res, next) {
  res.render('index', { title: 'About Us', page: 'about' });
});
router.get('/projects', function (req, res, next) {
  res.render('index', { title: 'Our Projects', page: 'projects' });
});
router.get('/services', function (req, res, next) {
  res.render('index', { title: 'Our Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

module.exports = router;
