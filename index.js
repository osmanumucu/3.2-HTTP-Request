import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Well Done!")
})

app.get("/about", (req, res) => {
    res.send("About Me!")
})

app.get("/contact", (req, res) => {
    res.send("Contact!")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})