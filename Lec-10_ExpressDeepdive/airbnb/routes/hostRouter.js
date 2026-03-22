const express= require('express');
const hostRouter = express.Router(); 
const path = require('path'); 
const rootDir = require('../utils/pathutils'); 

hostRouter.get('/add-home', (req, res, next) => {
 
  res.sendFile(path.join(rootDir, 'views/AddHome.html'));
});

hostRouter.post('/add-home', (req, res, next) => {
  // Here you would normally handle the form data and save it to a database
  res.sendFile(path.join(rootDir, 'views/HomeAdded.html'));
  console.log(req.body);
});


module.exports = hostRouter;