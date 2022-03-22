const express = require('express');
const app = express.Router();

const { userRegister, userFindById, userFindAll } = require('../controllers/user/index')

app.post('/users/register', userRegister);
app.post('/users/id', userFindById);
app.post('/users', userFindAll);

module.exports = app;

