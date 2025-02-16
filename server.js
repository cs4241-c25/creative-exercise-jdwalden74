const express = require("express");
const { join } = require("node:path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile( join(__dirname, "index.html"));
});

app.get("/favicon.ico", (req, res) => res.status(204));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
