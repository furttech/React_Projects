import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import paths from "./routes/paths.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/paths", paths);

// start the Express Server
app.listen(PORT, () => {
    console.log(`Server Active: Listening on Port: ${PORT}`)
})