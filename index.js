const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 1234;

const app = express();

app.use("/openai", require("./routes/openai"));

app.listen(port, () => console.log(`Server started on ${port}`));