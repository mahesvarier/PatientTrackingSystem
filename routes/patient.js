const router = require('express').Router();
const Patient = require('../model/patient');
var patientModel = require('../model/patient');

router.post('/Create', async (req, res) => {
    const patient = new Patient({
        Name: req.body.name,
        Mobile: req.body.mobile,
        Clinic: req.body.clinic,
        CareOffice: req.body.careOffice,
    });

    try {
        const savedPatient = await patient.save();
        res.send(savedPatient);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/GetPatient', async (req, res) => {
    console.log('AAAAA', req.body.name);
    var patientInfo = await patientModel.findOne({ 'Name': req.body.name });
    console.log(patientInfo);
    if (patientInfo != null) {
        res.send(patientInfo)
    } else { res.status.send('No user found') };
})


module.exports = router;