const express = require("express");
const app = express();
const list = require("../client/src/list.json");

// url: localhost:5000/api/list
// method: GET
app.get("/api/list", (req, res)=> {
    res.json(list);
})

// url: localhost:5000/api/list/{id}
// method: GET
app.get("/api/list/:id", (req, res)=> {
    const item = list.find(i => i.id === req.params.id);
    res.json(item);
})

app.listen(5000, console.log("Localhost:5000 is running"));