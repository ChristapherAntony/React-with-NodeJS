const express = require('express')
const User = require('../models/user')

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
// const connection = mongoose.createConnection("mongodb://localhost:27017/ADMIN-CLIENT-SERVER");


mongoose.connect('mongodb://127.0.0.1:27017/ADMIN-CLIENT-SERVER', (err) => {
    if (!err) console.log("db connected");
    else console.log(`db error${err}`);
});

module.exports = {
    userSignUp: async (req, res) => {

        try {
            const user = await User.create(req.body)
            res.json({ status: 'ok' })
        } catch (error) {
            res.json({ status: 'error', error: "duplicate email" })
        }
    },
    userLogin: async (req, res) => {
        try {
            const user = await User.findOne({
                email: req.body.email,
                password: req.body.password
            })
           
            if (user) {
                // return res.json({ status: 'ok', user: true })
                return res.status(200).json({ message: "Login Sucess" });
            } else {
                return res.status(403).json({ message: "Password Doesnot Match" });
            }

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "something went wrong" });
        }
    }
}