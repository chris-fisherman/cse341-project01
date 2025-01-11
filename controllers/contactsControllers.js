/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId


/****************************/
/*** GET ALL CONTACTS ***/
/****************************/
const getAllContacts = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find()
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    })
}

/****************************/
/*** GET A SINGLE CONTACT BY ID ***/
/****************************/
const getSingleContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: contactId })
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts[0])
    })
}


/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = { getAllContacts, getSingleContact }