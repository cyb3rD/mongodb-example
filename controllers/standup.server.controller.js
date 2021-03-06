var Standup = require('../models/standup.server.model.js');

exports.createNote = function(req, res) {
  var entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });

  entry.save(); // Need to use callback to handle errors

  // redirect to home page
  res.redirect(301, '/');
};

exports.getNote = function(req, res) {
  res.render('newnote', {title: 'Add new note'});
}