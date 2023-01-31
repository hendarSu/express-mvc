const express = require("express");
const router = require("./routers/router");
const app = express();
const PORT = 3000;

// Middleware content-type
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set("view engine", "ejs");

// Router
app.use("/", router);
// End Router

app.use("/ping", (req, res) => {
    res.send("Server UP!");
})

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT);
})