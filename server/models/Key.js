const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeySchema = new Schema({
    serviceId: {
        type: String,
        required: true
    },
    templateId: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Key', KeySchema)