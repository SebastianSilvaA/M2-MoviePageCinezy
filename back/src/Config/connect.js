require('dotenv').config();
const mongoose = require('mongoose');

const URI = `${process.env.DB_HOST}+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.jafvbnl.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Micluster`

const Dbconnect = async () => {
    await mongoose.connect(URI);
}

module.exports = { Dbconnect };
