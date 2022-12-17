const express = require('express');
const router = express.Router();
const { userSignUp, userLogin, verifyToken } = require('../controllers/user');



router.post('/verifyToken',verifyToken)
router.post('/signup',userSignUp)
router.post('/login',userLogin)




module.exports = router;