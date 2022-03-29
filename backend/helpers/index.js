const bcrypt = require('bcrypt');
const link = require('../config/environment/index');
const { upload } = require('../middleware/multerMiddleware');

const bcryptPassword = async (pass = new String()) => {
    let hash = bcrypt.hashSync(pass, 10);
    return hash;
}

const bcryptCompare = async (pass = new String(), dbPass) => {
    let unhash = bcrypt.compareSync(pass, dbPass);
    return unhash;
}


const sluggable = (str = new String()) => {
    str = str.replace(/^\s+|\s+$/g, '').toLowerCase();
    
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

const uploadSingle = async () => {
   return upload.single('thumbnail')
}


module.exports = { bcryptCompare, bcryptPassword, sluggable, uploadSingle}
