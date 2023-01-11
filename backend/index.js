require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.APP_PORT ?? 5000;

app.use(cors());
app.use(express.json());

app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.warn(`server is listening on ${port}`);
    }
});
