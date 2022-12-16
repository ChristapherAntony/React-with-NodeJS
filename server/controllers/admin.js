const express = require('express')
const User = require('../models/user')







module.exports = {

    adminLogin: async (req, res) => {
        console.log(req.body);
        try {
            console.log(req.body);


            return res.status(200).json({ message: "Login Sucess admin" });

            // const user = await User.findOne({
            //     email: req.body.email,
            //     password: req.body.password
            // })
           
            // if (user) {
            //     // return res.json({ status: 'ok', user: true })
            //     return res.status(200).json({ message: "Login Sucess" });
            // } else {
            //     return res.status(403).json({ message: "Password Doesnot Match" });
            // }

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "something went wrong" });
        }
    },
    getUsers: async(req,res)=>{
        try {
            const user = await User.find().select("-password")
            if(!user) return res.status(500).json({ message: "didnt got users from database" });

            res.status(200).json({ message: "Success", user });
        } catch (error) {
            res.status(500).json({message:"something went wrong" })
        }
    },
    getUser: async(req,res)=>{
        
        try {
            const user = await User.findOne({_id:req.params.id}).select("-password")
            if(!user) return res.status(500).json({ message: "didnt got users from database" });
            // console.log(user);
            res.status(200).json({ message: "Sucess", user });
        } catch (error) {
            res.status(500).json({message:"something went wrong" })
        }
    },
    deleteUser: async(req,res)=>{
        try {
            const deleteUser=await User.deleteOne({_id:req.params.id})
            res.status(200).json({ message: "Sucess" });
        } catch (error) {
            res.status(500).json({message:"something went wrong" })
        }
    },
    updateUser: async(req,res)=>{
        console.log("api call",req.params.id);
        console.log(req.body);
        const {username,email}=req.body
        try {

          const update=await User.findOneAndUpdate({_id:req.params.id},{
            $set:{
                username,
                email
            }
          })
          console.log(update);
            
            res.status(200).json({ message: "Sucess" });
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"something went wrong" })
        }
    },
    searchUser:async(req,res)=>{
        console.log("hooei");
        console.log(req.params.key);
        try {
            const users=await User.find({
                "$or": [
                    {
                        username: { $regex: req.params.key }
                    },
                    {
                        email: { $regex: req.params.key }
                    }
                ]
            })
            res.status(200).json({ message: "Sucess",users });
        } catch (error) {
            res.status(500).json({message:"something went wrong" })
        }
    }
    


}