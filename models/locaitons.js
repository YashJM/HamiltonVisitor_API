var mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema({
    properties: {
        OBJECTID: Number,
        TITLE: String,
        ADDRESS: String,
        PHONE: String,
        FAX: String,
        EMAIL: String,
        TOLL_FREE: String,
        URL: String,
        DESCRIPTION: String,
        LONGITUDE: String,
        LATITUDE: String,
    },
});
const Location = mongoose.model('tourism_points_of_interest', locationsSchema, 'tourism_points_of_interest');

module.exports = Location;