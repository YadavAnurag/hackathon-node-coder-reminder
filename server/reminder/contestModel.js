var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContestSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('contest', ContestSchema);
