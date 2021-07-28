require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5050;
const mongoose = require("mongoose");
const mongoAtlas = process.env.MONGO_ATLAS;
const routes = require("./api/routes/api.routes");
const cors = require("cors")

// Connect to MongoATlas
mongoose.connect(mongoAtlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => console.log("Couldn't Connect to MongoDB Atlas"))
const db = mongoose.connection;
db.once("open", () => {console.log("Connected to Atlas!")})

// Middlewares
app.use(cors())
app.use(express.static(__dirname + "/public"))
app.use("/api/v1/", routes)


app.get("/", (req, res) => {
    res.send("index.html")
})

app.listen(port, console.log(`Server running on Port ${port}`))