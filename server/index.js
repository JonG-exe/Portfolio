const 
    PORT = process.env.PORT || 5000,
    express = require("express"),
    app = express(),
    path = require("path");

app.use(express.static(path.join(__dirname, "build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.get("/23", (req, res) => {
    res.sendFile(path.join(__dirname, "build/static/media/23_new.4054b34b9b168988d2b3.png"))
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, () => console.log(`\n\tListening at http://localhost:${PORT}\n\t`))