const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();

// const pdfTemplate = require("./documents");

const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/generate-pdf", (req, res) => {

	console.log("Generating PDF");
	// console.log("Data :"+req.data);
	// console.log("Data2 :"+req.data.details);
	// console.log("Data3 :"+res.data);
	// console.log("Data4 :"+res.data.details);
	// console.log("Data5 :"+res.body);
	console.log("Data6 :" + req.body);
	const details = {
		about: about,

		links: links,

		highSchool: highSchool,

		secondarySchool: secondarySchool,

		college: college,

		job: job,

		skills: skillsList
	} = req.body;

	console.log(details);
	const html = getPdfCode(req.body);

	const finalPdfPath = path.join(__dirname, "resume.pdf");

	pdf.create(html, options).toFile(finalPdfPath, (err, fileInfo) => {
		if (err) {
			console.log(err);
			// res.send(Promise.reject());
		} else {
			console.log("PDF generated");
			console.log("File Info:" + fileInfo);
		}
	});
});

app.get("/download-pdf", (req, res) => {
	const filePath = path.join(__dirname, "resume.pdf");
	console.log("Final file path:" + filePath);
	res.sendFile(filePath);
});

function getPdfCode(details) {
	const html = `
			<html>
				<head>
				<title>Resume Template 1</title>
					<meta charset="utf-8" />
					<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="description"
						content="Web site created using create-react-app"
					/>
					<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
						crossorigin="anonymous"
					/>
				</head>

				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<div id="root"></div>
					<div class="container" style="width: 800px;" id="res-temp1">
						<div class="row">
							<div class="col-md-4 mt-2">
								<div class="p-3 mb-2 bg-white text-dark py-5">
									<div
										class="container py-3 text-center"
										id="about1"
										style="font-weight: bold"
									>
										<p>${details.about.name}</p>
										<p>${details.about.phone}</p>
										<p>${details.about.address}</p>
										<hr />
										<p><a href=${details.links.twitterId}>Facebook</a></p>
										<p><a href=${details.links.linkedInUrl}>LinkedIn</a></p>
									</div>

									<div class="obcard" id="objcard1">
										<div class="card-header bg-info">
											<h3>About Me</h3>
										</div>
										<div class="card-body">
											<p class="text-justify">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Dolorum adipisci iure quos ipsa doloremque
					</p>
										</div>
									</div>

									<div class="obcard" id="objcard1">
										<div class="card-header bg-info">
											<h3>Skills</h3>
										</div>
										<div class="card-body">
											<div class="col-md-4-mt-2">
												<ul>
													<li><p>${details.skills[0].skillName}</p></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-8 mt-2">
								<div class="p-3 mb-2 bg-white text-dark">
									<h1 class="text-center" style="font-weight: bold" id="bgname">Mayank Soni</h1>

									<div class="obcard mt-3" id="objcard2">
										<div class="card-header bg-info">
											<h3>Objective</h3>
										</div>
										<div class="card-body">
											<p class="text-justify">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Dolorum adipisci iure quos ipsa doloremque, illum commodi
												quasi dignissimos corrupti enim quia officia sint, perferendis
												laboriosam maiores quam nostrum laborum quod voluptas corporis
												tempore architecto itaque. Esse necessitatibus non odit
												dignissimos quasi quia sunt? Ullam inventore deleniti
												repellendus cum beatae fugit.
					</p>
										</div>
									</div>

									<div class="obcard mt-3" id="objcard3">
										<div class="card-header bg-info">
											<h3>Work Experience</h3>
										</div>
										<div class="card-body">
											<ul>
												<li>
													${details.job.jobTitle}
					  </li>
												<li>
												${details.job.companyName}
					  </li>
												<li>
												${details.job.jobStartDate}
					  </li>
												<li>
												${details.job.jobEndDate}
					  </li>
											</ul>
										</div>
									</div>
									<div class="obcard mt-3" id="objcard3">
										<div class="card-header bg-info">
											<h3>Academic Qualifications</h3>
										</div>
										<div class="card-body">
											<ul>
												<li>
												<p>High School</p>
												<p>${details.highSchool.highSchoolName}</p>
												<p>${details.highSchool.highSchoolLocation}</p>
												<p>${details.highSchool.highSchoolPassingYear}</p>
					  </li>
												<li>
													Lorem ipsum dolor sit amet consectetur, adipisicing elit.
													Deleniti, cupiditate?
					  </li>
												<li>
													Lorem ipsum dolor sit amet consectetur, adipisicing elit.
													Deleniti, cupiditate?
					  </li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
						crossorigin="anonymous"
					></script>
				</body>
			</html>`;
	return html;
}

app.listen(4000, () => console.log("Server started at port 4000"));


// const express = require("express");
// const bodyParser = require("body-parser");
// const pdf = require("html-pdf");
// const cors = require("cors");

// const app = express();

// const pdfTemplate = require("./documents");

// const options = {
// 	height: "42cm",
// 	width: "29.7cm",
// 	timeout: "6000",
// };

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // POST route for PDF generation....
// app.post("/create-pdf", (req, res) => {
// 	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
// 		if (err) {
// 			console.log(err);
// 			res.send(Promise.reject());
// 		} else res.send(Promise.resolve());
// 	});
// });

// // GET route -> send generated PDF to client...
// app.get("/fetch-pdf", (req, res) => {
// 	const file = `${__dirname}/Resume.pdf`;
// 	res.download(file);
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server started on port ${port}`));