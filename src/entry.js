// mannual test dev page
import microsofComputerVision from './index';
const appRoot = require("app-root-path");
const fs = require("fs");
const FormData = require('form-data');

// ////////////////////////////////////////
// // Tag image by url
// ////////////////////////////////////////
//
// const imageUrl = "https://goo.gl/Hpz7gi";
//
// microsofComputerVision.getImageTag({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl}).then((result) => {
//     console.log(result);
// })
//
// ////////////////////////////////////////
// // Tag image by file
// ////////////////////////////////////////
//
// fs.readFile(appRoot + '/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.getImageTag({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data}).then((result) => {
//         console.log(result);
//     })
// });

////////////////////////////////////////
// Analyze image by url
////////////////////////////////////////

// const imageUrl = "https://goo.gl/Hpz7gi";
//
// microsofComputerVision.getImageAnalysis({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl, "visual-features":"Tags, Faces"}).then((result) => {
//     console.log(result);
// }).catch((err)=>{
//   throw err;
// })

// ////////////////////////////////////////
// // Analyze image by file
// ////////////////////////////////////////
//
// fs.readFile(appRoot + '/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.getImageAnalysis({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data, "visual-features":"Tags, Faces"}).then((result) => {
//         console.log(result);
//     }).catch((err)=>{
//       throw err;
//     })
// });
