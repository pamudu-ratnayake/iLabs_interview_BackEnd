const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

//DB URL
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

	useNewUrlParser: true,
	useUnifiedTopology: true,

});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("<=== Database connected ! ====>");
	console.log(`<=== Running on URL: http://localhost:${PORT} ====>`);
});

app.listen(PORT, () => {
	console.log(`<=== Server is up and running on port ${PORT} ====>`);
});

const FAQRouter = require("./routes/FAQsRT");
app.use("/faqs", FAQRouter);