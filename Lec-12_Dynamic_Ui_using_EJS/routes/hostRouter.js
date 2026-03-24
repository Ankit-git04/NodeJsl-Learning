const express= require('express');
const hostRouter = express.Router(); 
const path = require('path'); 
const rootDir = require('../utils/pathutils'); 

hostRouter.get('/add-home', (req, res, next) => {
 
  res.render('AddHome', { pageTitle: 'Add Home' });
});

  const registeredHomes = []; // This will store the registered homes in memory
hostRouter.post('/add-home', (req, res, next) => {
  // Here you would normally handle the form data and save it to a database
  console.log("Registered Homes:",req.body)
  registeredHomes.push(req.body);
  res.render('HomeAdded', { pageTitle: 'Home Added' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;