
const express = require('express')
const router = require("./Routes/index")

const app = express();

app.use(router)

module.exports = app;