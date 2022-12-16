const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports = {
    userSignUp: async (req, res) => {

        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const user = await User.create(req.body)
            res.json({ status: 'ok' })
        } catch (error) {
            res.json({ status: 'error', error: "duplicate email" })
        }
    },



    userLogin: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })

            if (user) {
                const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
                if (isPasswordValid) {

                    const token = jwt.sign({ username: user.username, email: user.email }, 'myWebAppSecretKey123')
                    // return res.json({ status: 'ok', user: true })
                    return res.status(200).json({ message: "Login Sucess", token,user:user.username });
                }else{
                    return res.status(403).json({ message: "Password Doesnot Match" });
                }
            } else {
                return res.status(500).json({ message: "No User Found" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "something went wrong" });
        }
    },


    userDash: async (req, res) => {
        const token = req.headers['x-access-token']
        try {
            const decoded = jwt.verify(token, 'myWebAppSecretKey123')
            const email = decoded.email
            const user = await User.findOne({ email: email })
            res.json({ status: 'ok', user: user.name })
        } catch (error) {
            console.log(error);
            res.json({ status: 'error', error: "invalid token" })


        }
    }
}