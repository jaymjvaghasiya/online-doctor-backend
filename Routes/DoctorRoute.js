let express = require('express');
let router = express.Router();
let doctorController = require('../controller/DoctorController');
const { route } = require('./UserRoute');

router.get('/doctor', doctorController.getAllDoctor);
router.post('/doctor', doctorController.createDoctor);
router.delete('/doctor/:id', doctorController.deleteDoctor);
router.put('/doctor/:id', doctorController.updateDoctor);

module.exports = router;