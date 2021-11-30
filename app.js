const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, resp) => resp.send("Helooo World"));

app.listen(port, () => {
    console.log("Example app listenting");
});

app.get("/users/:name", (req, resp) => {
    const obj = {}
    obj["birthday"] = req.query["birthday"]
    obj["name"] = req.params["name"]
    resp.send(obj)
});
