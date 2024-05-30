const userSchema = require('../model/UserModel');
const sendMail = require('../Util/MailUtil');

let getAllUser = (req, res) => {
    userSchema.find().then((data) => {
        res.status(200).json({
            data: data,
            message: "All user fetched successfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "User cannot be fetched.",
            flag: 0
        })
    })
}

let createUser = (req, res) => {
    let newData = new userSchema(req.body);
    sendMail(newData.Email);
    newData.save().then((data) => {
        res.status(201).json({
            data: data,
            message: "User created successfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "User cannot be created.",
            flag: 0
        })
    })
}

let deleteUser = (req, res) => {
    let id = req.params.id;
    userSchema.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            message: "User deleted sucessfully.",
            flag: 1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Use cannot be deletd.",
            flag: 0
        })
    })
}

let updateUser = (req, res) => {
    let id = req.params.id;
    let updatedData = req.body;
    userSchema.findByIdAndUpdate(id, updatedData).then((data) => {
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

let userLogin = (req, res) => {
    let Email = req.body.Email;
    let Password = req.body.Password;
    userSchema.findOne({Email :Email, Password: Password}).then((data) => {
        // console.log(data);
        if(data)
        {
            res.status(200).json({
                data: data,
                message: "User logged in successfully.",
                flag: 1
            })
        }
        else
        {
            res.status(200).json({
                message: "Invalide credentials.",
                flag: 0
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: "Error in loggin in user.",
            flag: 0
        })
    })
}

module.exports = {
    getAllUser,
    createUser,
    deleteUser,
    updateUser,
    userLogin
}