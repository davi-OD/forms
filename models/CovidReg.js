const mongoose = require('mongoose');

const covidSchema = new mongoose.Schema({
    surName: {
        type: String
    },
    givenName: {
        type: String
    },
    dob: {
        type: String
    },
    residence: {
        type: String
    },
    occupation: {
        type: String
    },
    nation: {
        type:String
    },
    gender: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('CovidReg', covidSchema);