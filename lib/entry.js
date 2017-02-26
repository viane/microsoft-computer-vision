'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs"); // mannual test dev page

var FormData = require('form-data');
var imageUrl = "https://goo.gl/Hpz7gi";

// ////////////////////////////////////////
// // Tag image by url
// ////////////////////////////////////////
//
//
// microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl}).then((result) => {
//     console.log(result);
// })
//
// ////////////////////////////////////////
// // Tag image by file
// ////////////////////////////////////////
//
// fs.readFile('/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data}).then((result) => {
//         console.log(result);
//     })
// });

////////////////////////////////////////
// Analyze image by url
////////////////////////////////////////

//
// microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl, "visual-features":"Tags, Faces"}).then((result) => {
//     console.log(result);
// }).catch((err)=>{
//   throw err;
// })

// ////////////////////////////////////////
// // Analyze image by file
// ////////////////////////////////////////
//
// fs.readFile('/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data, "visual-features":"Tags, Faces"}).then((result) => {
//         console.log(result);
//     }).catch((err)=>{
//       throw err;
//     })
// });

////////////////////////////////////////
// Describe image by url
////////////////////////////////////////

_index2.default.describeImage({ "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl, "max-candidates": "2" }).then(function (result) {
  console.log(result);
}).catch(function (err) {
  throw err;
});

////////////////////////////////////////
// Describe image by file
////////////////////////////////////////

// fs.readFile('/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data,"max-candidates":"2"}).then((result) => {
//         console.log(JSON.stringify(result,'\t',4));
//     }).catch((err)=>{
//       throw err;
//     })
// });

////////////////////////////////////////
// Get image thumbnail by url
////////////////////////////////////////

// microsofComputerVision.imageThumbnail({
//     "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33",
//     "content-type": "application/json",
//     "url": imageUrl,
//     "width": "100",
//     "height": "100",
//     "smart-cropping": true
// }).then((thumbnailBinary) => {
//     fs.writeFile('/tests/image/thumbnail.jpg', thumbnailBinary, 'binary', function(err) {
//         if (err)
//             throw err
//     })
// }).catch((err) => {
//     throw err;
// })

////////////////////////////////////////
// Get image thumbnail by file
////////////////////////////////////////

// fs.readFile('/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.imageThumbnail({
//         "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33",
//         "content-type": "application/octet-stream",
//         "body": data,
//         "width": "100",
//         "height": "100",
//         "smart-cropping": true
//     }).then((thumbnailBinary) => {
//         fs.writeFile('/tests/image/thumbnail.jpg', thumbnailBinary, 'binary', function(err) {
//             if (err)
//                 throw err
//         })
//     }).catch((err) => {
//         throw err;
//     })
// });

////////////////////////////////////////
// Get image orc by url
////////////////////////////////////////

// microsofComputerVision.orcImage({
//     "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33",
//     "content-type": "application/json",
//     "url": "http://cdn.quotesgram.com/img/81/49/660235022-Random-Funny-Quotes-.jpg",
//     "language": "en",
//     "detect-orientation": true
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })

////////////////////////////////////////
// Get image orc by file
////////////////////////////////////////
//
// fs.readFile('/tests/image/orcTest.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.orcImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data, "language": "en", "detect-orientation": true}).then((result) => {
//         console.log(JSON.stringify(result, '\t', 4));
//     }).catch((err) => {
//         throw err;
//     })
// });

//////////////////////////////////////////////////////////
// Get Recognize Domain Specific Content by image url
//////////////////////////////////////////////////////////

// microsofComputerVision.recognizeDomainSpecificContent({
//     "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33",
//     "content-type": "application/json",
//     "url": "http://d.ibtimes.co.uk/en/full/377533/bill-gates.jpg",
//     "model": "celebrities"
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })

//////////////////////////////////////////////////////////
// Get Recognize Domain Specific Content by image binary
//////////////////////////////////////////////////////////

// fs.readFile('/tests/image/RDSCTest.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data, "model": "celebrities"}).then((result) => {
//         console.log(JSON.stringify(result, '\t', 4));
//     }).catch((err) => {
//         throw err;
//     })
// });

//////////////////////////////////////////////////////////
// List domain specific models
//////////////////////////////////////////////////////////

// microsofComputerVision.listDomainSpecificModels({
//     "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33"
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })