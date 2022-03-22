const bcrypt = require('bcrypt');
const link = require('../config/environment/index');

const bcryptPassword = async (pass = new String()) => {
    let hash = bcrypt.hashSync(pass, 10);
    return hash;
}

const bcryptCompare = async (pass = new String(), dbPass) => {
    let unhash = bcrypt.compareSync(pass, dbPass);
    return unhash;
}


module.exports = { bcryptCompare, bcryptPassword }
