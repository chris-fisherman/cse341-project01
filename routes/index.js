/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const express = require('express');
const router = express();
const contactsRoutes = require('./contactsRoutes');

/****************************/
/*** ROUTES ***/
/****************************/
/*** main ***/
router.get('/', (req, res) => {
	res.send('Hello World');
});
/*** contacts ***/
router.use('/contacts', contactsRoutes);

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = router;
