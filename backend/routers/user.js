const express = require('express');
const app = express.Router();

const { userRegister, userFindById, userFindAll, userLogin, getMe } = require('../controllers/user/index');
const { protect } = require('../middleware/authMiddleware');
const { verifyJWT } = require('../middleware/jwt/verifyToken');
const { registerList, loginList } = require('../validation/index');


app.post('/users/register', registerList, userRegister);
app.post('/users/id', protect, userFindById);
app.post('/users', userFindAll);
app.post('/users/login', loginList, userLogin);
app.post('/users/me', verifyJWT, getMe)
module.exports = app;

