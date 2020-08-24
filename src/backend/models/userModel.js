var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    fathername: String,
    mothername: String,
    email: String,
    company: String,
    contactNo: String,
    dob: Date,
    message: [{ from: String, to: String, at: Date, msg: String }],
});


module.exports = mongoose.model('User', userSchema);
