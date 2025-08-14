const mongoose = require('mongoose')

// mongoose schema 

const StudentSchema = new mongoose.Schema({
    sname: String,
    semail: String,
    smobile: Number
})

// export Schema As Model

var StudentModel = mongoose.model('Student',StudentSchema);

module.exports = StudentModel;