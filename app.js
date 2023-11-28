const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const router = require("./routers/main.js");
const mainControllers = require("./controllers/mainController.js");





app.use(express.static(path.join(__dirname, "public")));



app.get("/", router);


app.get("/about", mainControllers.about);






app.listen(PORT, ()=> {
    console.log("Servidor funcionando en el puerto " + PORT );




})
