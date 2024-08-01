require("dotenv").config();

const moongose = require("mongoose");

const conexion = async() =>{
    await moongose.connect(process.env.MONGO_URI);
    console.log(process.env.MONGO_URI);
};

module.exports = conexion;