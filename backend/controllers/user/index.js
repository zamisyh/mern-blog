const user = require('../../models/user')

const userRegister = async (req, res) => {
    try {
        await new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirm_password: req.body.confirm_password
        }).save((err, data) => {
            (err) ? res.status(400).json(err) : res.status(200).json({
                status: 200,
                message: "Succesfully create user",
                data: data
            })
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

const userFindById = async (req, res, next) => {
    try {
        await user.findById(req.body._id)
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