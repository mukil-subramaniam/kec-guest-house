const mongoose = require('mongoose');
const moment = require('moment');

const bookingschema = new mongoose.Schema({
    'userid': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersmodel'
    },
    "bookedon": {
        type: String,
        default: moment().format('DD-MM-YYYY')
    },
    "firstname": {
        type: String,
        required: true
    },
    "lastname": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "phonenumber": {
        type: String,
        required: true
    },
    "admin": {
        type: String,
        required: false
    },
    "address": {
        type: String,
        required: true
    },
    "fromdate": {
        type: String,
        required: true
    },
    "enddate": {
        type: String,
        required: true
    },
    
    "rooms": {
        type: Array,
        required: true
    },
    "roomstype": {
        type: Array,
        required: true
    },
    "specialrequest": {
        type: String
    },
    "meals": {
        type: String,
        required: true
    },
    "status": {
        type: String,
        default: "Pending"
    }
});

const BookingsModel = mongoose.model("bookingsmodel", bookingschema);

module.exports = BookingsModel;
