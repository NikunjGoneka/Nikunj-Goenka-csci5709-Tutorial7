const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: String
}, { versionKey: false });

module.exports = mongoose.model("users", userSchema);