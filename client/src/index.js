import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import pdf from "html-pdf";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// var html=getHtmlCode();
// var html="<html><head><title>Title</title><body><h1>Heading</h1></body></head></html>";
// pdf.create(html).toFile('./resume.pdf', function (err, res) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(res);
//   }
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function getHtmlCode() {
//   let html = <div>
//     <h1>"Hello Prashant Ji"</h1>
//   </div>;
//   return html;
// }