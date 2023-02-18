const express = require("express");
const app = express();

const citizens = [
    {id: 1, name: "Maria", nationality: "Venezuelan"},
    {id: 2, name: "Luis", nationality: "Colombian"},
    {id: 3, name: "Martha", nationality: "American"},
    {id: 4, name: "Andres", nationality: "Italian"},
    {id: 5, name: "Neil", nationality: "Peruvian"},
]

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api/citizens", (req, res) => {
    res.send(citizens);
})

app.get("/api/citizens/:id", (req, res) => {
    const citizensFilter = citizens.find(el => el.id === parseInt(req.params.id));
    if (!citizensFilter) return res.status(404).send("User does not exist");
    res.send(citizensFilter);
})



const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`))