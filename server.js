const express = require('express');
const app = express();
const PORT = process.env.PORT ||6701;

app.use(express.static("frontend"));

app.listen(PORT, () => {
    console.log("App is running on http://localhost:" + PORT);
});