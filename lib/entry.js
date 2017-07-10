'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs"); // mannual test dev page

var FormData = require('form-data');
var imageUrl = "https://goo.gl/Hpz7gi";
var myKey = "";

// ////////////////////////////////////////
// // Tag image by url
// ////////////////////////////////////////
//
//
// microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl}).then((result) => {
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
//     microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data}).then((result) => {
//         console.log(result);
//     })
// });

////////////////////////////////////////
// Analyze image by url
////////////////////////////////////////

//
// microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "visual-features":"Tags, Faces"}).then((result) => {
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
//     microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "visual-features":"Tags, Faces"}).then((result) => {
//         console.log(result);
//     }).catch((err)=>{
//       throw err;
//     })
// });

////////////////////////////////////////
// Describe image by url
////////////////////////////////////////

// microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl,"max-candidates":"2"}).then((result) => {
//     console.log(result);
// }).catch((err)=>{
//   throw err;
// })

////////////////////////////////////////
// Describe image by file
////////////////////////////////////////

// fs.readFile('/tests/image/test.jpg', function(err, data) {
//     if (err)
//         throw err;
//
//     microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data,"max-candidates":"2"}).then((result) => {
//         console.log(JSON.stringify(result,'\t',4));
//     }).catch((err)=>{
//       throw err;
//     })
// });

////////////////////////////////////////
// Get image thumbnail by url
////////////////////////////////////////

// microsofComputerVision.imageThumbnail({
//     "Ocp-Apim-Subscription-Key": myKey,
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
//         "Ocp-Apim-Subscription-Key": myKey,
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
//     "Ocp-Apim-Subscription-Key": myKey,
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
//     microsofComputerVision.orcImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "language": "en", "detect-orientation": true}).then((result) => {
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
//     microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "model": "celebrities"}).then((result) => {
//         console.log(JSON.stringify(result, '\t', 4));
//     }).catch((err) => {
//         throw err;
//     })
// });

//////////////////////////////////////////////////////////
// List domain specific models
//////////////////////////////////////////////////////////

// microsofComputerVision.listDomainSpecificModels({
//     "Ocp-Apim-Subscription-Key": myKey
// }).then((result) => {
//     console.log(JSON.stringify(result,'\t',4));
// }).catch((err) => {
//     throw err;
// })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyeS5qcyJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJGb3JtRGF0YSIsImltYWdlVXJsIiwibXlLZXkiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYLEMsQ0FGQTs7QUFHQSxJQUFNQyxXQUFXRCxRQUFRLFdBQVIsQ0FBakI7QUFDQSxJQUFNRSxXQUFXLHVCQUFqQjtBQUNBLElBQU1DLFFBQVEsRUFBZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYW5udWFsIHRlc3QgZGV2IHBhZ2VcbmltcG9ydCBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uIGZyb20gJy4vaW5kZXgnO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpO1xuY29uc3QgaW1hZ2VVcmwgPSBcImh0dHBzOi8vZ29vLmdsL0hwejdnaVwiO1xuY29uc3QgbXlLZXkgPSBcIlwiO1xuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAvLyBUYWcgaW1hZ2UgYnkgdXJsXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy9cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24udGFnSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwidXJsXCI6IGltYWdlVXJsfSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIH0pXG4vL1xuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gLy8gVGFnIGltYWdlIGJ5IGZpbGVcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyBmcy5yZWFkRmlsZSgnL3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLnRhZ0ltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhfSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBbmFseXplIGltYWdlIGJ5IHVybFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vL1xuLy8gbWljcm9zb2ZDb21wdXRlclZpc2lvbi5hbmFseXplSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwidXJsXCI6IGltYWdlVXJsLCBcInZpc3VhbC1mZWF0dXJlc1wiOlwiVGFncywgRmFjZXNcIn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyB9KS5jYXRjaCgoZXJyKT0+e1xuLy8gICB0aHJvdyBlcnI7XG4vLyB9KVxuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAvLyBBbmFseXplIGltYWdlIGJ5IGZpbGVcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyBmcy5yZWFkRmlsZSgnL3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmFuYWx5emVJbWFnZSh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLCBcImJvZHlcIjogZGF0YSwgXCJ2aXN1YWwtZmVhdHVyZXNcIjpcIlRhZ3MsIEZhY2VzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuLy8gICAgICAgdGhyb3cgZXJyO1xuLy8gICAgIH0pXG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRGVzY3JpYmUgaW1hZ2UgYnkgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24uZGVzY3JpYmVJbWFnZSh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXCJ1cmxcIjogaW1hZ2VVcmwsXCJtYXgtY2FuZGlkYXRlc1wiOlwiMlwifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIH0pLmNhdGNoKChlcnIpPT57XG4vLyAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIERlc2NyaWJlIGltYWdlIGJ5IGZpbGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJy90ZXN0cy9pbWFnZS90ZXN0LmpwZycsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuLy8gICAgIGlmIChlcnIpXG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vXG4vLyAgICAgbWljcm9zb2ZDb21wdXRlclZpc2lvbi5kZXNjcmliZUltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhLFwibWF4LWNhbmRpZGF0ZXNcIjpcIjJcIn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsJ1xcdCcsNCkpO1xuLy8gICAgIH0pLmNhdGNoKChlcnIpPT57XG4vLyAgICAgICB0aHJvdyBlcnI7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBHZXQgaW1hZ2UgdGh1bWJuYWlsIGJ5IHVybFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmltYWdlVGh1bWJuYWlsKHtcbi8vICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksXG4vLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgXCJ1cmxcIjogaW1hZ2VVcmwsXG4vLyAgICAgXCJ3aWR0aFwiOiBcIjEwMFwiLFxuLy8gICAgIFwiaGVpZ2h0XCI6IFwiMTAwXCIsXG4vLyAgICAgXCJzbWFydC1jcm9wcGluZ1wiOiB0cnVlXG4vLyB9KS50aGVuKCh0aHVtYm5haWxCaW5hcnkpID0+IHtcbi8vICAgICBmcy53cml0ZUZpbGUoJy90ZXN0cy9pbWFnZS90aHVtYm5haWwuanBnJywgdGh1bWJuYWlsQmluYXJ5LCAnYmluYXJ5JywgZnVuY3Rpb24oZXJyKSB7XG4vLyAgICAgICAgIGlmIChlcnIpXG4vLyAgICAgICAgICAgICB0aHJvdyBlcnJcbi8vICAgICB9KVxuLy8gfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBpbWFnZSB0aHVtYm5haWwgYnkgZmlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBmcy5yZWFkRmlsZSgnL3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmltYWdlVGh1bWJuYWlsKHtcbi8vICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LFxuLy8gICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuLy8gICAgICAgICBcImJvZHlcIjogZGF0YSxcbi8vICAgICAgICAgXCJ3aWR0aFwiOiBcIjEwMFwiLFxuLy8gICAgICAgICBcImhlaWdodFwiOiBcIjEwMFwiLFxuLy8gICAgICAgICBcInNtYXJ0LWNyb3BwaW5nXCI6IHRydWVcbi8vICAgICB9KS50aGVuKCh0aHVtYm5haWxCaW5hcnkpID0+IHtcbi8vICAgICAgICAgZnMud3JpdGVGaWxlKCcvdGVzdHMvaW1hZ2UvdGh1bWJuYWlsLmpwZycsIHRodW1ibmFpbEJpbmFyeSwgJ2JpbmFyeScsIGZ1bmN0aW9uKGVycikge1xuLy8gICAgICAgICAgICAgaWYgKGVycilcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBlcnJcbi8vICAgICAgICAgfSlcbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vICAgICB9KVxuLy8gfSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBpbWFnZSBvcmMgYnkgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ub3JjSW1hZ2Uoe1xuLy8gICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSxcbi8vICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICBcInVybFwiOiBcImh0dHA6Ly9jZG4ucXVvdGVzZ3JhbS5jb20vaW1nLzgxLzQ5LzY2MDIzNTAyMi1SYW5kb20tRnVubnktUXVvdGVzLS5qcGdcIixcbi8vICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbi8vICAgICBcImRldGVjdC1vcmllbnRhdGlvblwiOiB0cnVlXG4vLyB9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsJ1xcdCcsNCkpO1xuLy8gfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBpbWFnZSBvcmMgYnkgZmlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vIGZzLnJlYWRGaWxlKCcvdGVzdHMvaW1hZ2Uvb3JjVGVzdC5qcGcnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vICAgICBpZiAoZXJyKVxuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vL1xuLy8gICAgIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ub3JjSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgXCJib2R5XCI6IGRhdGEsIFwibGFuZ3VhZ2VcIjogXCJlblwiLCBcImRldGVjdC1vcmllbnRhdGlvblwiOiB0cnVlfSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgJ1xcdCcsIDQpKTtcbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vICAgICB9KVxuLy8gfSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBSZWNvZ25pemUgRG9tYWluIFNwZWNpZmljIENvbnRlbnQgYnkgaW1hZ2UgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ucmVjb2duaXplRG9tYWluU3BlY2lmaWNDb250ZW50KHtcbi8vICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksXG4vLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgXCJ1cmxcIjogXCJodHRwOi8vZC5pYnRpbWVzLmNvLnVrL2VuL2Z1bGwvMzc3NTMzL2JpbGwtZ2F0ZXMuanBnXCIsXG4vLyAgICAgXCJtb2RlbFwiOiBcImNlbGVicml0aWVzXCJcbi8vIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwnXFx0Jyw0KSk7XG4vLyB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgdGhyb3cgZXJyO1xuLy8gfSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2V0IFJlY29nbml6ZSBEb21haW4gU3BlY2lmaWMgQ29udGVudCBieSBpbWFnZSBiaW5hcnlcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJy90ZXN0cy9pbWFnZS9SRFNDVGVzdC5qcGcnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vICAgICBpZiAoZXJyKVxuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vL1xuLy8gICAgIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24ucmVjb2duaXplRG9tYWluU3BlY2lmaWNDb250ZW50KHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhLCBcIm1vZGVsXCI6IFwiY2VsZWJyaXRpZXNcIn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsICdcXHQnLCA0KSk7XG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBMaXN0IGRvbWFpbiBzcGVjaWZpYyBtb2RlbHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gbWljcm9zb2ZDb21wdXRlclZpc2lvbi5saXN0RG9tYWluU3BlY2lmaWNNb2RlbHMoe1xuLy8gICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleVxuLy8gfSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LCdcXHQnLDQpKTtcbi8vIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICB0aHJvdyBlcnI7XG4vLyB9KVxuIl19