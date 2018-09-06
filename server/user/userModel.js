var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateEntered: {
        type: Date,
        required: true,
        default: new Date()
    }
});

module.exports = mongoose.model('user', UserSchema);