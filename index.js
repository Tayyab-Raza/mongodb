const express = require("express");


const dotenv = require('dotenv')

// database connection
const dbconnection = require("./dbconnection")

dotenv.config();

const usersRouter = require("./routes/users")
const booksRouter = require("./routes/books")

const app = express();

dbconnection();

const PORT = 8082;
app.use(express.json());

app.use("/users", usersRouter)
app.use("/books", booksRouter)


app.get("/", (req, res)=>{
    res.status(200).json({
        message: "server is up and running"
    })
});

app.listen(PORT, ()=>{
    console.log(`server is up and running on port ${PORT}`);
})

