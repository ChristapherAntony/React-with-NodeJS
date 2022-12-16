const express = require('express');
const { adminLogin, getUsers, deleteUser, getUser, updateUser } = require('../controllers/admin');
const router = express.Router();



router.post('/login',adminLogin)
router.get('/getAllUsers',getUsers)
router.get('/getUser/:id',getUser)
router.delete('/deleteUser/:id',deleteUser)
router.put('/updateUser/:id',updateUser)







module.exports = router;