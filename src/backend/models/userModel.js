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
    message: {
        incoming: [{ from: String, at: Date, msg: String }],
        outgoing: [{ to: String, at: Date, msg: String }]
    }
});


module.exports = mongoose.model('User', userSchema);
