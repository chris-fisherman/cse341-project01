/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const express = require('express');
const router = express();
const contactsRoutes = require('./contactsRoutes');
const swaggerRoutes = require('./swaggerRoutes');

/****************************/
/*** ROUTES ***/
/****************************/
/*** swagger ***/
router.use('/', swaggerRoutes);
/*** main ***/
router.get('/', (req, res) => {
  //#swagger.tags=['Hello World']
  res.send('Hello World');
});
/*** contacts ***/
router.use('/contacts', contactsRoutes);

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = router;
