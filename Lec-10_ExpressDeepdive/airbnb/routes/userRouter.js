const expess = require("express");
const userRouter = expess.Router();
const path = require('path');
const rootDir = require('../utils/pathutils');

// const HomePage= path.join(__dirname, '../views/home.html');

userRouter.get('/', (req, res, next) => {
  
    res.sendFile(path.join(rootDir, 'views/home.html'));
});

module.exports = userRouter;