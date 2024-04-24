
const express = require('express')
const cors = require('cors')
const router = require("./Routes/index");
const morgan = require('morgan');
const validateMovie = require('./middleware/validar');


const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(validateMovie)

app.use(router)

module.exports = app;