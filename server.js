/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

/****************************/
/*** USES ***/
/****************************/
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

/****************************/
/*** ROUTES ***/
/****************************/
app.use('/', routes);

/****************************/
/*** ERROR HANDLING ***/
/****************************/
process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin ${origin}`);
});

/****************************/
/*** LISTEN PORT ***/
/****************************/
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}.`);
    });
  }
});
