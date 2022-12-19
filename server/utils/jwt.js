const jwt = require('jsonwebtoken')
const maxAge = 0 * 0 * 0 * 5
const key = "myWebAppSecretKey123"
// const adminToken = jwt.sign({ username: admin.username, email: admin.email }, 'myWebAppSecretKey123',{expiresIn:maxAge})



const createToken = (username, email) => {
    jwt.sign({ username: username, email: email }, key, { expiresIn: 5000 })
}


module.exports = createToken;