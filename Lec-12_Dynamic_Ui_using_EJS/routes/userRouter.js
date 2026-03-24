const expess = require("express");
const userRouter = expess.Router();
const path = require('path');

const {registeredHomes} = require('./hostRouter');

// const HomePage= path.join(__dirname, '../views/home.html');

userRouter.get('/', (req, res, next) => {
  console.log(registeredHomes)
    res.render('home', { registeredHomes: registeredHomes });
});

exports.userRouter = userRouter;