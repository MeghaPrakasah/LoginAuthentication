const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    user: { type: String, required: true,unique : true },
    password: { type: String, required: true }
});