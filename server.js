const express = require("express");
const {join} = require("node:path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

