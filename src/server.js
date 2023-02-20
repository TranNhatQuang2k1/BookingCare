// const express = require("express");
import express from 'express';
const app = express();
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
import connectDB from './config/connectDB';
require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

configViewEngine(app);
initWebRouters(app);

connectDB();

let PORT = process.env.PORT  || 6969;

app.listen(PORT, () => {
    console.log("Back-end is runing " + PORT);
});