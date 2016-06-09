var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Standup project' });
});

/* GET New Note page */
router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});

/* POST New Note page*/
router.post('/newnote', function(req, res) {
  return standupCtrl.createNote(req, res);
});

module.exports = router;
