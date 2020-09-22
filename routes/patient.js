const router = require('express').Router();
const Patient = require('../model/patient');

router.post('/create', async (req, res) => {
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


module.exports = router;