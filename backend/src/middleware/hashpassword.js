const bcrypt = require ('bcrypt');
const hashpassword  = (req, res, next) => {
    bcrypt
    .genSalt(8)
    .then(salt => {
        return bcrypt.hash(req.body.pass, salt)
    })
    .then(hash => {
        req.hash = hash
        next()
    })
    .catch(error => console.error(error.message))
    
}  

module.exports = hashpassword