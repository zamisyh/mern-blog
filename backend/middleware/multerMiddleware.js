const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, res, callback){
        callback(null, path.join(__dirname, "/uploads"))
    },
    filename: function(req, file, callback){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

module.exports = { upload }