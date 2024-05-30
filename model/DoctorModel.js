let mongoose = require('mongoose');
let schema = mongoose.Schema;

const doctorSchema = new schema ({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
    },
    Specialization: {
        type: String,
        required: true
    },
    Experience: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Doctor', doctorSchema);