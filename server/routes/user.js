const express = require('express');
const router = express.Router();

const { userSignUp, userLogin, verifyToken, imageupload, getuser, removeimage } = require('../controllers/user');
const { uploadSingleFile } = require('../utils/multer');



router.post('/verifyToken', verifyToken)
router.post('/signup', userSignUp)
router.post('/login', userLogin)
router.post('/imageupload/:Stoken', uploadSingleFile, imageupload)
router.get('/getuser', getuser)
router.delete('/removeimage/:Stoken', removeimage)



module.exports = router;