'use strict';
const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
const address = process.env.ADDR || "http://localhost";

app.get('/', (req, res) => res.send("Hello World!"));

app.listen(8080, () => console.log(`listening to ${address}:${port}...`));