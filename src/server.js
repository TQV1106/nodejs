import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js";
import connectDB from "./config/connectDB.js";
import cors from 'cors';

require('dotenv').config();

let app = express();
app.use(cors({origin: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("backend nodejs is running on the port : " + port);
})