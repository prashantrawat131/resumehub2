const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const path=require("path");
// const cors = require("cors");

const app = express();

// const pdfTemplate = require("./documents");

const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/generate-pdf", (req, res) => {

	const html="<h1>Hello</h1>";

	pdf.create(html, options).toFile("resume.pdf", (err) => {
		if (err) {
			console.log(err);
			// res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
});

app.get("/download-pdf", (req, res) => {
	const filePath=path.join(__dirname,"resume.pdf");
	res.download(filePath);
});

app.listen(5000, () => console.log("Sever started at port 5000"));