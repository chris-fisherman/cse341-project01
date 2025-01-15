/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const swaggerAutogen = require('swagger-autogen')();

/****************************/
/*** VARIABLES ***/
/****************************/
const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API'
  },
  host: 'localhost:3000',
  schemes: ['http', 'https']
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/****************************/
/*** GENERATE swagger.json ***/
/****************************/
swaggerAutogen(outputFile, endpointsFiles, doc);
