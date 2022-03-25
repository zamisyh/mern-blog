const user = require('../../models/user');
const { bcryptCompare, bcryptPassword } = require('../../helpers/index');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../../middleware/jwt/generateToken');

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
                        token: generateToken(data._id)
                    })
                })
            }
        })    
    } catch (error) {
        console.log(error);
    }
}

const userLogin = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const u = await user.findOne({email})

    if(u && (await bcrypt.compare(password, u.password))){
        res.json({
            _id: u.id,
            name: u.name,
            email: u.email,
            token: generateToken(u._id)
        })
    }else{
        res.status(400).json({message: "Invalid credentials"})
    }
})

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
        await user.findById(req.user.id)
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

const getMe = async (req, res) => {
    await res.json({
        isLoggedIn: true,
        data: {
            id: req.user.id,
           
        }
    })
}

module.exports = { userRegister, userFindAll, userFindById, userLogin, getMe }