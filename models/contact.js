const mongoose = require("mongoose");

const {Schema} = mongoose;

const contactSchema = new Schema({
    fullName: String,
    email: String,
    phoneNumber: Number,
    message: String
});

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact;