const express = require("express");

const app = express();


app.use("/home", (req, res) => {
    res.send("Hello from the homepage");
});

app.use("/title", (req, res) => {
    res.send("Hello from the title page");
});

app.use("/", (req, res) => {
    res.send("Hello from the dashboard");
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Listening from PORT ${PORT}`));