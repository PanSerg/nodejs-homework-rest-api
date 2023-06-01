const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers/handleMongooseError');

const contactSchemaDb = new Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for contact"],
        },
        email: {
            type: String,
            required: [true, "Set email for contact"],
        },
        phone: {
            type: String,
            match: /^[0-9]{10}$/,
            required: [true, "Set phone number for contact"],
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true
    },
);

contactSchemaDb.post("save", handleMongooseError);

const Contact = model('Contact', contactSchemaDb);

module.exports = Contact;