/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

/****************************/
/*** GET ALL CONTACTS ***/
/****************************/
const getAllContacts = async (req, res) => {
  //#swagger.tags=['Contacts']
  // mongodb
  //   .getDatabase()
  //   .db()
  //   .collection('contacts')
  //   .find()
  //   .toArray((err, lists) => {
  //     if (err) {
  //       res.status(400).json({ message: err });
  //     }
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).json(lists);
  //   });
  // *** OLD CODE
  const result = await mongodb.getDatabase().db().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

/****************************/
/*** GET A SINGLE CONTACT BY ID ***/
/****************************/
const getSingleContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  // const contactId = new ObjectId(req.params.id);
  // mongodb
  //   .getDatabase()
  //   .db()
  //   .collection('contacts')
  //   .find({ _id: contactId })
  //   .toArray((err, contacts) => {
  //     if (err) {
  //       res.status(400).json({ message: err });
  //     }
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).json(contacts[0]);
  //   });
  // *** OLD CODE
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to find a contact.');
  }
  const contactsId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: contactsId });
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  });
};

/****************************/
/*** CREATE CONTACT ***/
/****************************/
const createContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection('contacts').insertOne(contact);

  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error ocurred while creating the contact.');
  }
};

/****************************/
/*** UPDATE CONTACT ***/
/****************************/
const updateContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to update a contact.');
  }
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .replaceOne({ _id: contactId }, contact);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error ocurred while updating the contact.');
  }
};

/****************************/
/*** DELETE CONTACT ***/
/****************************/
const deleteContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to delete a contact.');
  }
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .deleteOne({ _id: contactId });

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error ocurred while deleting the contact.');
  }
};

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
