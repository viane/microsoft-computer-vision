'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs"); // mannual test dev page

var path = require('path');
var imageUrl = "https://goo.gl/Hpz7gi";
var myKey = "fa789153b75a46e3a13fc5433e8bbe07";

// ////////////////////////////////////////
// // Tag image by url
// ////////////////////////////////////////


// microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl,"request-origin":"westus"}).then((result) => {
//     console.log(result);
// })

// ////////////////////////////////////////
// // Tag image by file
// ////////////////////////////////////////

// fs.readFile('./tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data,"request-origin":"westus"}).then((result) => {
//         console.log(result);
//     })
// });

////////////////////////////////////////
// Analyze image by url
////////////////////////////////////////

// microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "visual-features":"Tags, faces","details":"Landmarks","language":"en","request-origin":"westus"}).then((result) => {
//     console.log(result);
// }).catch((err)=>{
//   throw err;
// })

////////////////////////////////////////
// Analyze image by file
////////////////////////////////////////

// fs.readFile('tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "visual-features":"Tags, Faces","request-origin":"westus"}).then((result) => {
//         console.log(result);
//     }).catch((err)=>{
//       throw err;
//     })
// });

////////////////////////////////////////
// Describe image by url
////////////////////////////////////////

// microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl,"max-candidates":"2","request-origin":"westus"}).then((result) => {
//     console.log(result);
// }).catch((err)=>{
//   throw err;
// })

////////////////////////////////////////
// Describe image by file
////////////////////////////////////////

// fs.readFile('tests/image/test.jpg', function(err, data) {
//   if (err)
//     throw err;
//
//   microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "max-candidates": "2","request-origin":"westus"}).then((result) => {
//     console.log(JSON.stringify(result, '\t', 4));
//   }).catch((err) => {
//     throw err;
//   })
// });

////////////////////////////////////////
// Get image thumbnail by url
////////////////////////////////////////

// microsofComputerVision.imageThumbnail({
//   "Ocp-Apim-Subscription-Key": myKey,
//   "content-type": "application/json",
//   "url": imageUrl,
//   "width": "200",
//   "height": "200",
//   "smart-cropping": false,
//   "request-origin": "westus"
// }).then((thumbnailBinary) => {
//   fs.writeFile('./tests/image/thumbnail.jpeg', thumbnailBinary, 'binary', function(err) {
//     if (err)
//       throw err
//   })
// }).catch((err) => {
//   throw err;
// })

////////////////////////////////////////
// Get image thumbnail by file
////////////////////////////////////////

// fs.readFile('./tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.imageThumbnail({
//         "Ocp-Apim-Subscription-Key": myKey,
//         "content-type": "application/octet-stream",
//         "body": data,
//         "width": "100",
//         "height": "100",
//         "smart-cropping": true,
//         "request-origin": "westus"
//     }).then((thumbnailBinary) => {
//         fs.writeFile('./tests/image/thumbnail.jpeg', thumbnailBinary, 'binary', function(err) {
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
//     "Ocp-Apim-Subscription-Key": myKey,
//     "content-type": "application/json",
//     "url": "https://i.ytimg.com/vi/5hl1hEBHK0A/maxresdefault.jpg",
//     "language": "en",
//     "detect-orientation": true,
//     "request-origin":"westus"
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })

////////////////////////////////////////
// Get image orc by file
////////////////////////////////////////

// fs.readFile('./tests/image/orcTest.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.orcImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "language": "en", "detect-orientation": true,"request-origin":"westus"}).then((result) => {
//         console.log(JSON.stringify(result, '\t', 4));
//     }).catch((err) => {
//         throw err;
//     })
// });

//////////////////////////////////////////////////////////
// Get Recognize Domain Specific Content by image url
//////////////////////////////////////////////////////////

// microsofComputerVision.recognizeDomainSpecificContent({
//     "Ocp-Apim-Subscription-Key": myKey,
//     "content-type": "application/json",
//     "url": "http://d.ibtimes.co.uk/en/full/377533/bill-gates.jpg",
//     "model": "Celebrities",
//     "request-origin":"westus"
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })

//////////////////////////////////////////////////////////
// Get Recognize Domain Specific Content by image binary
//////////////////////////////////////////////////////////

// fs.readFile('./tests/image/RDSCTest.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "model": "celebrities","request-origin":"westus"}).then((result) => {
//         console.log(JSON.stringify(result, '\t', 4));
//     }).catch((err) => {
//         throw err;
//     })
// });

//////////////////////////////////////////////////////////
// List domain specific models
//////////////////////////////////////////////////////////

// microsofComputerVision.listDomainSpecificModels({
//     "Ocp-Apim-Subscription-Key": myKey,"request-origin":"westus"
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wLXRlc3QuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsImltYWdlVXJsIiwibXlLZXkiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYLEMsQ0FGQTs7QUFHQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1FLFdBQVcsdUJBQWpCO0FBQ0EsSUFBTUMsUUFBUSxrQ0FBZDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGVtcC10ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFubnVhbCB0ZXN0IGRldiBwYWdlXG5pbXBvcnQgbWljcm9zb2ZDb21wdXRlclZpc2lvbiBmcm9tICcuL2luZGV4JztcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGltYWdlVXJsID0gXCJodHRwczovL2dvby5nbC9IcHo3Z2lcIjtcbmNvbnN0IG15S2V5ID0gXCJmYTc4OTE1M2I3NWE0NmUzYTEzZmM1NDMzZThiYmUwN1wiO1xuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAvLyBUYWcgaW1hZ2UgYnkgdXJsXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLy8gbWljcm9zb2ZDb21wdXRlclZpc2lvbi50YWdJbWFnZSh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXCJ1cmxcIjogaW1hZ2VVcmwsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gfSlcblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gLy8gVGFnIGltYWdlIGJ5IGZpbGVcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJy4vdGVzdHMvaW1hZ2UvdGVzdC5qcGcnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vICAgICBpZiAoZXJyKVxuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vL1xuLy8gICAgIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24udGFnSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgXCJib2R5XCI6IGRhdGEsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICB9KVxuLy8gfSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFuYWx5emUgaW1hZ2UgYnkgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24uYW5hbHl6ZUltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCBcInVybFwiOiBpbWFnZVVybCwgXCJ2aXN1YWwtZmVhdHVyZXNcIjpcIlRhZ3MsIGZhY2VzXCIsXCJkZXRhaWxzXCI6XCJMYW5kbWFya3NcIixcImxhbmd1YWdlXCI6XCJlblwiLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIH0pLmNhdGNoKChlcnIpPT57XG4vLyAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFuYWx5emUgaW1hZ2UgYnkgZmlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBmcy5yZWFkRmlsZSgndGVzdHMvaW1hZ2UvdGVzdC5qcGcnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vICAgICBpZiAoZXJyKVxuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vL1xuLy8gICAgIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24uYW5hbHl6ZUltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhLCBcInZpc3VhbC1mZWF0dXJlc1wiOlwiVGFncywgRmFjZXNcIixcInJlcXVlc3Qtb3JpZ2luXCI6XCJ3ZXN0dXNcIn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgIH0pLmNhdGNoKChlcnIpPT57XG4vLyAgICAgICB0aHJvdyBlcnI7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBEZXNjcmliZSBpbWFnZSBieSB1cmxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gbWljcm9zb2ZDb21wdXRlclZpc2lvbi5kZXNjcmliZUltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCBcInVybFwiOiBpbWFnZVVybCxcIm1heC1jYW5kaWRhdGVzXCI6XCIyXCIsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gfSkuY2F0Y2goKGVycik9Pntcbi8vICAgdGhyb3cgZXJyO1xuLy8gfSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRGVzY3JpYmUgaW1hZ2UgYnkgZmlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBmcy5yZWFkRmlsZSgndGVzdHMvaW1hZ2UvdGVzdC5qcGcnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vICAgaWYgKGVycilcbi8vICAgICB0aHJvdyBlcnI7XG4vL1xuLy8gICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmRlc2NyaWJlSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgXCJib2R5XCI6IGRhdGEsIFwibWF4LWNhbmRpZGF0ZXNcIjogXCIyXCIsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsICdcXHQnLCA0KSk7XG4vLyAgIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICB0aHJvdyBlcnI7XG4vLyAgIH0pXG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2V0IGltYWdlIHRodW1ibmFpbCBieSB1cmxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gbWljcm9zb2ZDb21wdXRlclZpc2lvbi5pbWFnZVRodW1ibmFpbCh7XG4vLyAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSxcbi8vICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgIFwidXJsXCI6IGltYWdlVXJsLFxuLy8gICBcIndpZHRoXCI6IFwiMjAwXCIsXG4vLyAgIFwiaGVpZ2h0XCI6IFwiMjAwXCIsXG4vLyAgIFwic21hcnQtY3JvcHBpbmdcIjogZmFsc2UsXG4vLyAgIFwicmVxdWVzdC1vcmlnaW5cIjogXCJ3ZXN0dXNcIlxuLy8gfSkudGhlbigodGh1bWJuYWlsQmluYXJ5KSA9PiB7XG4vLyAgIGZzLndyaXRlRmlsZSgnLi90ZXN0cy9pbWFnZS90aHVtYm5haWwuanBlZycsIHRodW1ibmFpbEJpbmFyeSwgJ2JpbmFyeScsIGZ1bmN0aW9uKGVycikge1xuLy8gICAgIGlmIChlcnIpXG4vLyAgICAgICB0aHJvdyBlcnJcbi8vICAgfSlcbi8vIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgdGhyb3cgZXJyO1xuLy8gfSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2V0IGltYWdlIHRodW1ibmFpbCBieSBmaWxlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGZzLnJlYWRGaWxlKCcuL3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmltYWdlVGh1bWJuYWlsKHtcbi8vICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LFxuLy8gICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuLy8gICAgICAgICBcImJvZHlcIjogZGF0YSxcbi8vICAgICAgICAgXCJ3aWR0aFwiOiBcIjEwMFwiLFxuLy8gICAgICAgICBcImhlaWdodFwiOiBcIjEwMFwiLFxuLy8gICAgICAgICBcInNtYXJ0LWNyb3BwaW5nXCI6IHRydWUsXG4vLyAgICAgICAgIFwicmVxdWVzdC1vcmlnaW5cIjogXCJ3ZXN0dXNcIlxuLy8gICAgIH0pLnRoZW4oKHRodW1ibmFpbEJpbmFyeSkgPT4ge1xuLy8gICAgICAgICBmcy53cml0ZUZpbGUoJy4vdGVzdHMvaW1hZ2UvdGh1bWJuYWlsLmpwZWcnLCB0aHVtYm5haWxCaW5hcnksICdiaW5hcnknLCBmdW5jdGlvbihlcnIpIHtcbi8vICAgICAgICAgICAgIGlmIChlcnIpXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgZXJyXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBHZXQgaW1hZ2Ugb3JjIGJ5IHVybFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLm9yY0ltYWdlKHtcbi8vICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksXG4vLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpLzVobDFoRUJISzBBL21heHJlc2RlZmF1bHQuanBnXCIsXG4vLyAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4vLyAgICAgXCJkZXRlY3Qtb3JpZW50YXRpb25cIjogdHJ1ZSxcbi8vICAgICBcInJlcXVlc3Qtb3JpZ2luXCI6XCJ3ZXN0dXNcIlxuLy8gfSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LCdcXHQnLDQpKTtcbi8vIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICB0aHJvdyBlcnI7XG4vLyB9KVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBHZXQgaW1hZ2Ugb3JjIGJ5IGZpbGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJy4vdGVzdHMvaW1hZ2Uvb3JjVGVzdC5qcGcnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vICAgICBpZiAoZXJyKVxuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vL1xuLy8gICAgIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ub3JjSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgXCJib2R5XCI6IGRhdGEsIFwibGFuZ3VhZ2VcIjogXCJlblwiLCBcImRldGVjdC1vcmllbnRhdGlvblwiOiB0cnVlLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgJ1xcdCcsIDQpKTtcbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vICAgICB9KVxuLy8gfSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBSZWNvZ25pemUgRG9tYWluIFNwZWNpZmljIENvbnRlbnQgYnkgaW1hZ2UgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ucmVjb2duaXplRG9tYWluU3BlY2lmaWNDb250ZW50KHtcbi8vICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksXG4vLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgXCJ1cmxcIjogXCJodHRwOi8vZC5pYnRpbWVzLmNvLnVrL2VuL2Z1bGwvMzc3NTMzL2JpbGwtZ2F0ZXMuanBnXCIsXG4vLyAgICAgXCJtb2RlbFwiOiBcIkNlbGVicml0aWVzXCIsXG4vLyAgICAgXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJcbi8vIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwnXFx0Jyw0KSk7XG4vLyB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgdGhyb3cgZXJyO1xuLy8gfSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2V0IFJlY29nbml6ZSBEb21haW4gU3BlY2lmaWMgQ29udGVudCBieSBpbWFnZSBiaW5hcnlcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJy4vdGVzdHMvaW1hZ2UvUkRTQ1Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLnJlY29nbml6ZURvbWFpblNwZWNpZmljQ29udGVudCh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLCBcImJvZHlcIjogZGF0YSwgXCJtb2RlbFwiOiBcImNlbGVicml0aWVzXCIsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LCAnXFx0JywgNCkpO1xuLy8gICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy8gICAgIH0pXG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gTGlzdCBkb21haW4gc3BlY2lmaWMgbW9kZWxzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ubGlzdERvbWFpblNwZWNpZmljTW9kZWxzKHtcbi8vICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJcbi8vIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwnXFx0Jyw0KSk7XG4vLyB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgdGhyb3cgZXJyO1xuLy8gfSlcbiJdfQ==