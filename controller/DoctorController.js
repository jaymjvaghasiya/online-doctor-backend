let doctorSchema = require('../model/DoctorModel');

let getAllDoctor = (req, res) => {
    doctorSchema.find().then((data) => {
        res.status(200).json({
            data: data,
            message: "All doctors fetched successfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Doctor cannot be fetched.",
            flag: 0
        })
    })
}

let createDoctor = (req, res) => {
    let newData = new doctorSchema(req.body);
    newData.save().then((data) => {
        res.status(201).json({
            data: data,
            message: "Doctor created successfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Doctor cannot be created.",
            flag: 0
        })
    })
}

let deleteDoctor = (req, res) => {
    let id = req.params.id;
    doctorSchema.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            message: "Doctor deleted sucessfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Doctor cannot be deletd.",
            flag: 0
        })
    })
}

let updateDoctor = (req, res) => {
    let id = req.params.id;
    let updatedData = req.body;
    doctorSchema.findByIdAndUpdate(id, updatedData).then((data) => {
        res.status(200).json({
            message: "Data updated successfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Data cannot be updated.",
            flag: 0
        })
    })
}

module.exports = {
    getAllDoctor,
    createDoctor,
    deleteDoctor,
    updateDoctor
}