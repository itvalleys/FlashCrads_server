const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const streams = require('../socket/streams');

var adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email can't be empty",
    },
    password: {
        type: String,
        required: "password can't be empty",
    },

    fullname: {
        type: String,
        default: 'Admin'
    },

    imgurl: {
        type: String,
    },

});

module.exports = mongoose.model('admin', adminSchema);