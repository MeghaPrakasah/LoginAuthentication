const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    user: { type: String, required: true,unique : true },
    password: { type: String, required: true },
   

});

const adminSchema = mongoose.Schema({
    user: { type: String, required: true,unique : true },
    password: { type: String, required: true },
   

});


module.exports = mongoose.model('User',userSchema);

module.exports = mongoose.model('Admin',adminSchema);
