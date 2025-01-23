/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const express = require('express');
const router = express();
const contactsController = require('../controllers/contactsControllers');
const validation = require('../middleware/validation');

/****************************/
/*** ROUTES ***/
/****************************/
/*** get all contacts ***/
router.get('/', contactsController.getAllContacts);
/*** get single contact ***/
router.get('/:id', contactsController.getSingleContact);
/*** create contact ***/
router.post('/', validation.validateContact, contactsController.createContact);
/*** update contact ***/
router.put('/:id', validation.validateContact, contactsController.updateContact);
/*** delete contact ***/
router.delete('/:id', contactsController.deleteContact);

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = router;
