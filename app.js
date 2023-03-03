const express = require("express");

const app = express();


app.get("/hello", (req, res)=>{
    res.send("Welcome to Hello World");
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`Server started`))