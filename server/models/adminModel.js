const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    adminname : {
        type : String,
        required : true
    },
    admincode : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
},{timestamps : true});

const adminModel = mongoose.model('admin',adminSchema);
module.exports = adminModel;