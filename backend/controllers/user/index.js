const user = require('../../models/user');
const { bcryptCompare, bcryptPassword } = require('../../helpers/index');
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {

    const { name, email, password, confirm_password } = req.body;
    if (confirm_password != password) {
        return res.send({message: "Confirm password not match!"})
    }

    try {
        user.findOne({email: req.body.email}, (err, data) => {
            if(data){
                return res.send({message: "Email already exist"})
            }else{
                const newUser = new user({name, email, password});
                newUser.password = bcrypt.hashSync(password, 10);
                newUser.save((err, data) => {
                    (err) ? res.status(400).json(err) : res.status(200).json({
                        status:200,
                        message: "Succesfully create user",
                    })
                })
            }
        })    
    } catch (error) {
        console.log(error);
    }
}

const userFindAll = async (req, res) => {
    try {
        await user.find()
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(422).json({
                    status: 422,
                    message: "Something wrong"
                })
            });
    } catch (error) {
        console.log(error);       
    }
}

const userFindById = async (req, res) => {
    try {
        await user.findById(req.body.id)
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(422).json({
                    status: 422,
                    mwssage: "User not found!"
                })
            })
    } catch (error) {
        console.log(error);       
    }
}

module.exports = { userRegister, userFindAll, userFindById }