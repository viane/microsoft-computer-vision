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

_index2.default.analyzeImage({ "Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "visual-features": "Tags, faces", "details": "Landmarks", "language": "en", "request-origin": "westus" }).then(function (result) {
  console.log(result);
}).catch(function (err) {
  throw err;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wLXRlc3QuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsImltYWdlVXJsIiwibXlLZXkiLCJhbmFseXplSW1hZ2UiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7QUFDQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWCxDLENBRkE7O0FBR0EsSUFBTUMsT0FBT0QsUUFBUSxNQUFSLENBQWI7QUFDQSxJQUFNRSxXQUFXLHVCQUFqQjtBQUNBLElBQU1DLFFBQVEsa0NBQWQ7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUF1QkMsWUFBdkIsQ0FBb0MsRUFBQyw2QkFBNkJELEtBQTlCLEVBQXFDLGdCQUFnQixrQkFBckQsRUFBeUUsT0FBT0QsUUFBaEYsRUFBMEYsbUJBQWtCLGFBQTVHLEVBQTBILFdBQVUsV0FBcEksRUFBZ0osWUFBVyxJQUEzSixFQUFnSyxrQkFBaUIsUUFBakwsRUFBcEMsRUFBZ09HLElBQWhPLENBQXFPLFVBQUNDLE1BQUQsRUFBWTtBQUM3T0MsVUFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0gsQ0FGRCxFQUVHRyxLQUZILENBRVMsVUFBQ0MsR0FBRCxFQUFPO0FBQ2QsUUFBTUEsR0FBTjtBQUNELENBSkQ7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRlbXAtdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hbm51YWwgdGVzdCBkZXYgcGFnZVxuaW1wb3J0IG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24gZnJvbSAnLi9pbmRleCc7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBpbWFnZVVybCA9IFwiaHR0cHM6Ly9nb28uZ2wvSHB6N2dpXCI7XG5jb25zdCBteUtleSA9IFwiZmE3ODkxNTNiNzVhNDZlM2ExM2ZjNTQzM2U4YmJlMDdcIjtcblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gLy8gVGFnIGltYWdlIGJ5IHVybFxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24udGFnSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwidXJsXCI6IGltYWdlVXJsLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIH0pXG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIC8vIFRhZyBpbWFnZSBieSBmaWxlXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGZzLnJlYWRGaWxlKCcuL3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLnRhZ0ltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBbmFseXplIGltYWdlIGJ5IHVybFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5taWNyb3NvZkNvbXB1dGVyVmlzaW9uLmFuYWx5emVJbWFnZSh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXCJ1cmxcIjogaW1hZ2VVcmwsIFwidmlzdWFsLWZlYXR1cmVzXCI6XCJUYWdzLCBmYWNlc1wiLFwiZGV0YWlsc1wiOlwiTGFuZG1hcmtzXCIsXCJsYW5ndWFnZVwiOlwiZW5cIixcInJlcXVlc3Qtb3JpZ2luXCI6XCJ3ZXN0dXNcIn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59KS5jYXRjaCgoZXJyKT0+e1xuICB0aHJvdyBlcnI7XG59KVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBbmFseXplIGltYWdlIGJ5IGZpbGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJ3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmFuYWx5emVJbWFnZSh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLCBcImJvZHlcIjogZGF0YSwgXCJ2aXN1YWwtZmVhdHVyZXNcIjpcIlRhZ3MsIEZhY2VzXCIsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuLy8gICAgICAgdGhyb3cgZXJyO1xuLy8gICAgIH0pXG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRGVzY3JpYmUgaW1hZ2UgYnkgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24uZGVzY3JpYmVJbWFnZSh7XCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LCBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXCJ1cmxcIjogaW1hZ2VVcmwsXCJtYXgtY2FuZGlkYXRlc1wiOlwiMlwiLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIH0pLmNhdGNoKChlcnIpPT57XG4vLyAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIERlc2NyaWJlIGltYWdlIGJ5IGZpbGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZnMucmVhZEZpbGUoJ3Rlc3RzL2ltYWdlL3Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgIGlmIChlcnIpXG4vLyAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgbWljcm9zb2ZDb21wdXRlclZpc2lvbi5kZXNjcmliZUltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhLCBcIm1heC1jYW5kaWRhdGVzXCI6IFwiMlwiLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LCAnXFx0JywgNCkpO1xuLy8gICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgdGhyb3cgZXJyO1xuLy8gICB9KVxuLy8gfSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBpbWFnZSB0aHVtYm5haWwgYnkgdXJsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24uaW1hZ2VUaHVtYm5haWwoe1xuLy8gICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksXG4vLyAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICBcInVybFwiOiBpbWFnZVVybCxcbi8vICAgXCJ3aWR0aFwiOiBcIjIwMFwiLFxuLy8gICBcImhlaWdodFwiOiBcIjIwMFwiLFxuLy8gICBcInNtYXJ0LWNyb3BwaW5nXCI6IGZhbHNlLFxuLy8gICBcInJlcXVlc3Qtb3JpZ2luXCI6IFwid2VzdHVzXCJcbi8vIH0pLnRoZW4oKHRodW1ibmFpbEJpbmFyeSkgPT4ge1xuLy8gICBmcy53cml0ZUZpbGUoJy4vdGVzdHMvaW1hZ2UvdGh1bWJuYWlsLmpwZWcnLCB0aHVtYm5haWxCaW5hcnksICdiaW5hcnknLCBmdW5jdGlvbihlcnIpIHtcbi8vICAgICBpZiAoZXJyKVxuLy8gICAgICAgdGhyb3cgZXJyXG4vLyAgIH0pXG4vLyB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBpbWFnZSB0aHVtYm5haWwgYnkgZmlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBmcy5yZWFkRmlsZSgnLi90ZXN0cy9pbWFnZS90ZXN0LmpwZycsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuLy8gICAgIGlmIChlcnIpXG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vXG4vLyAgICAgbWljcm9zb2ZDb21wdXRlclZpc2lvbi5pbWFnZVRodW1ibmFpbCh7XG4vLyAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSxcbi8vICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbi8vICAgICAgICAgXCJib2R5XCI6IGRhdGEsXG4vLyAgICAgICAgIFwid2lkdGhcIjogXCIxMDBcIixcbi8vICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDBcIixcbi8vICAgICAgICAgXCJzbWFydC1jcm9wcGluZ1wiOiB0cnVlLFxuLy8gICAgICAgICBcInJlcXVlc3Qtb3JpZ2luXCI6IFwid2VzdHVzXCJcbi8vICAgICB9KS50aGVuKCh0aHVtYm5haWxCaW5hcnkpID0+IHtcbi8vICAgICAgICAgZnMud3JpdGVGaWxlKCcuL3Rlc3RzL2ltYWdlL3RodW1ibmFpbC5qcGVnJywgdGh1bWJuYWlsQmluYXJ5LCAnYmluYXJ5JywgZnVuY3Rpb24oZXJyKSB7XG4vLyAgICAgICAgICAgICBpZiAoZXJyKVxuLy8gICAgICAgICAgICAgICAgIHRocm93IGVyclxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy8gICAgIH0pXG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2V0IGltYWdlIG9yYyBieSB1cmxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gbWljcm9zb2ZDb21wdXRlclZpc2lvbi5vcmNJbWFnZSh7XG4vLyAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LFxuLy8gICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS81aGwxaEVCSEswQS9tYXhyZXNkZWZhdWx0LmpwZ1wiLFxuLy8gICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuLy8gICAgIFwiZGV0ZWN0LW9yaWVudGF0aW9uXCI6IHRydWUsXG4vLyAgICAgXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJcbi8vIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwnXFx0Jyw0KSk7XG4vLyB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgdGhyb3cgZXJyO1xuLy8gfSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2V0IGltYWdlIG9yYyBieSBmaWxlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGZzLnJlYWRGaWxlKCcuL3Rlc3RzL2ltYWdlL29yY1Rlc3QuanBnJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4vLyAgICAgaWYgKGVycilcbi8vICAgICAgICAgdGhyb3cgZXJyO1xuLy9cbi8vICAgICBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLm9yY0ltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIFwiYm9keVwiOiBkYXRhLCBcImxhbmd1YWdlXCI6IFwiZW5cIiwgXCJkZXRlY3Qtb3JpZW50YXRpb25cIjogdHJ1ZSxcInJlcXVlc3Qtb3JpZ2luXCI6XCJ3ZXN0dXNcIn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsICdcXHQnLCA0KSk7XG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgICB0aHJvdyBlcnI7XG4vLyAgICAgfSlcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBHZXQgUmVjb2duaXplIERvbWFpbiBTcGVjaWZpYyBDb250ZW50IGJ5IGltYWdlIHVybFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLnJlY29nbml6ZURvbWFpblNwZWNpZmljQ29udGVudCh7XG4vLyAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LFxuLy8gICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgIFwidXJsXCI6IFwiaHR0cDovL2QuaWJ0aW1lcy5jby51ay9lbi9mdWxsLzM3NzUzMy9iaWxsLWdhdGVzLmpwZ1wiLFxuLy8gICAgIFwibW9kZWxcIjogXCJDZWxlYnJpdGllc1wiLFxuLy8gICAgIFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wiXG4vLyB9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsJ1xcdCcsNCkpO1xuLy8gfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIHRocm93IGVycjtcbi8vIH0pXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEdldCBSZWNvZ25pemUgRG9tYWluIFNwZWNpZmljIENvbnRlbnQgYnkgaW1hZ2UgYmluYXJ5XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGZzLnJlYWRGaWxlKCcuL3Rlc3RzL2ltYWdlL1JEU0NUZXN0LmpwZycsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuLy8gICAgIGlmIChlcnIpXG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vXG4vLyAgICAgbWljcm9zb2ZDb21wdXRlclZpc2lvbi5yZWNvZ25pemVEb21haW5TcGVjaWZpY0NvbnRlbnQoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgXCJib2R5XCI6IGRhdGEsIFwibW9kZWxcIjogXCJjZWxlYnJpdGllc1wiLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgJ1xcdCcsIDQpKTtcbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICAgIHRocm93IGVycjtcbi8vICAgICB9KVxuLy8gfSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIExpc3QgZG9tYWluIHNwZWNpZmljIG1vZGVsc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uLmxpc3REb21haW5TcGVjaWZpY01vZGVscyh7XG4vLyAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IG15S2V5LFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wiXG4vLyB9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsJ1xcdCcsNCkpO1xuLy8gfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIHRocm93IGVycjtcbi8vIH0pXG4iXX0=