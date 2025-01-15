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
/*** BODY PARSER ***/
/****************************/
app.use(bodyParser.json());

/****************************/
/*** ROUTES ***/
/****************************/
app.use('/', routes);

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
