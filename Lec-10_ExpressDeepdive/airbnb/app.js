const express = require("express");
const app = express();
const path = require('path');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathutils');

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use( userRouter);
app.use('/host', hostRouter);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views/404.html'));
});

// Sample data for listings and bookings  




const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});