const express = require('express');
const app = express.Router();

const { userRegister, userFindById, userFindAll, userLogin } = require('../controllers/user/index')
const { registerList, loginList } = require('../validation/index');

app.post('/users/register', registerList, userRegister);
app.post('/users/id', userFindById);
app.post('/users', userFindAll);
app.post('/users/login', loginList, userLogin);

module.exports = app;

