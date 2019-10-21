const jwt = require('jsonwebtoken');
const models = require('../models/index');
const bcrypt = require('bcryptjs');

var authService = {}

//create token
authService.signUser = user => {
    const token = jwt.sign({
        Username: user.Username,
        UserId: user.UserId
        }, 'secretkey', { expiresIn: '1h' });
    return token
}


//decrypt the token and find the user,
authService.verifyUser = token => {
    try {
        let decoded = jwt.verify(token, 'secretkey');
        return models.users.findByPk( decoded.UserId );
    } catch (error) {
        console.log(`
        UNABE_TO_VERIFY_USER
            ${error}
        `)
        return null
    }
};

// Has password at signup
authService.hashPassword = plainTextPassword => {

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(plainTextPassword, salt);
    return hash;

};

//compaare passwords
authService.comparePasswords = (plainTextPassword, hashedPassword) => {
    return bcrypt.compareSync(plainTextPassword, hashedPassword)
}


module.exports = authService;