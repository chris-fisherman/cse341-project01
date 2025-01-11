/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const express = require('express')
const router = express()
const contactsController = require('../controllers/contactsControllers')


/****************************/
/*** ROUTES ***/
/****************************/
/*** get all contacts ***/
router.get('/', contactsController.getAllContacts)
/*** get single contact ***/
router.get('/:id', contactsController.getSingleContact)


/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = router

