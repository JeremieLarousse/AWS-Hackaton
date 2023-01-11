require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.APP_PORT ?? 5000;

const missionRouter = require("./routers/mission.router");
const voitureRouter = require('./routers/voitures.router');
const destinationRoutes = require("./routers/destination.route");


app.use(cors());
app.use(express.json());
app.use("/parc", voitureRouter);

app.use("/destination", destinationRoutes);

app.use("/api/mission", missionRouter);


app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.warn(`server is listening on ${port}`);
    }
});


