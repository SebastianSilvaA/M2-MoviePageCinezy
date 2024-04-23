require('dotenv').config();
const mongoose = require('mongoose');

const URI =  "mongodb+srv://sebastinsilvaaleman:g4nrsFzyFEJP8XYV@micluster.jafvbnl.mongodb.net/Movie?retryWrites=true&w=majority&appName=Micluster"
const Dbconnect = async () => {
    await mongoose.connect(URI);
}

module.exports = { Dbconnect };
