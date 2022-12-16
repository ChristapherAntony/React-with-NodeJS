const express = require('express');
const { adminLogin, getUsers, deleteUser } = require('../controllers/admin');
const router = express.Router();



router.post('/login',adminLogin)
router.get('/getAllUsers',getUsers)
router.delete('/deleteUser/:id',deleteUser)







module.exports = router;