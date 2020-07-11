const dynamoose = require('dynamoose');
const { v1: uuidv1 }= require('uuid');

const regexString = /^[^<>]*$/;

const productSchema = new dynamoose.Schema({
    id: { type: String, required: true, default: uuidv1 },
    user: { type: String, required: true },
    name: { type: String, required: true, validate: regexString},
    description: { type: String, required: true, validate: regexString },
    price: { type: Number, required: true },
}, {
    timestamps: true,
    saveUnknown: false,
    useDocumentTypes: true,
})

module.exports = productSchema