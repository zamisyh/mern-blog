const express = require('express');
const app = express.Router();

const { userRegister, userFindById, userFindAll } = require('../controllers/user/index')
const { registerList } = require('../validation/index');

app.post('/users/register', registerList, userRegister);
app.post('/users/id', userFindById);
app.post('/users', userFindAll);

module.exports = app;

