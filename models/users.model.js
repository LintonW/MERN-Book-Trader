//mongoose module
const mongoose = require('mongoose');

//Mongoose schema
let UsersSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
    },
    books: {
        type: Array,
        required: false,
    },
});

//model
module.exports = mongoose.model('Users', UsersSchema);
