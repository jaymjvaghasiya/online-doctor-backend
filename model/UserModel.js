let mongoose = require('mongoose');
let schema = mongoose.Schema;

const userSchema = new schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', userSchema);