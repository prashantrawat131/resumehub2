const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const path = require("path");
const fs=require("fs");
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

	console.log("Generating PDF");

	const html = "<h1>Ji</h1>";

	const finalPdfPath=path.join(__dirname,"resume.pdf");

	pdf.create(html, options).toFile(finalPdfPath, (err, fileInfo) => {
		if (err) {
			console.log(err);
			// res.send(Promise.reject());
		} else {
			console.log("PDF generated");
			console.log("File Info:" + fileInfo);
			res.sendFile(finalPdfPath);
		}
	});
});

app.get("/download-pdf", (req, res) => {
	const filePath = path.join(__dirname, "resume.pdf");
	console.log("Final file path:" + filePath);
	res.sendFile(filePath);
});

app.listen(5000, () => console.log("Server started at port 5000"));