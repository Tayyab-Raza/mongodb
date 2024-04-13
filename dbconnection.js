const mongoose = require("mongoose");

function dbconnection(){
const db_url = process.env.MONGO_URL;

mongoose.connect(db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error to db!"));
db.once("open", function(){
    console.log("db connected!")
})
}

module.exports = dbconnection;
