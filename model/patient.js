const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    Name: { type: String, required: true, min: 1 },
    Mobile: { type: Number, required: true, min: 6 },
    Clinic: { type: String, required: false },
    CareOffice: { type: String, required: false },
    DateCreated: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model('Patient', patientSchema);