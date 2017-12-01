'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const myKey = "fa789153b75a46e3a13fc5433e8bbe07"; // test on the server side

const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');
const http = require('http');

////////////////////////////////////////
// Analyze image by multipart-form
////////////////////////////////////////

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return;
    }

    // Everything went fine
    _index2.default.analyzeImage({ "Ocp-Apim-Subscription-Key": myKey, "content-type": "multipart/form-data", "body": req.file, "visual-features": "Tags, Faces", "request-origin": "westus" }).then(result => {
      console.log(result);
    }).catch(err => {
      throw err;
    });
  });
  res.sendStatus(200);
});

const server = http.createServer(app);
server.listen(app.get('port') || 8000, function () {
  console.log('√ Server listening on port ' + app.get('port'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIl0sIm5hbWVzIjpbIm15S2V5IiwicGF0aCIsInJlcXVpcmUiLCJleHByZXNzIiwiYXBwIiwibXVsdGVyIiwic3RvcmFnZSIsIm1lbW9yeVN0b3JhZ2UiLCJ1cGxvYWQiLCJzaW5nbGUiLCJodHRwIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiLCJqb2luIiwiX19kaXJuYW1lIiwicG9zdCIsIm5leHQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYW5hbHl6ZUltYWdlIiwiZmlsZSIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInNlbmRTdGF0dXMiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7OztBQUNBLE1BQU1BLFFBQVEsa0NBQWQsQyxDQUhBOztBQUlBLE1BQU1DLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQ0EsTUFBTUMsVUFBVUQsUUFBUSxTQUFSLENBQWhCO0FBQ0EsTUFBTUUsTUFBTUQsU0FBWjtBQUNBLE1BQU1FLFNBQVVILFFBQVEsUUFBUixDQUFoQjtBQUNBLE1BQU1JLFVBQVVELE9BQU9FLGFBQVAsRUFBaEI7QUFDQSxNQUFNQyxTQUFTSCxPQUFPLEVBQUVDLFNBQVNBLE9BQVgsRUFBUCxFQUE2QkcsTUFBN0IsQ0FBb0MsT0FBcEMsQ0FBZjtBQUNBLE1BQU1DLE9BQU9SLFFBQVEsTUFBUixDQUFiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQUUsSUFBSU8sR0FBSixDQUFRLEdBQVIsRUFBWSxDQUFDQyxHQUFELEVBQUtDLEdBQUwsS0FBVztBQUNyQkEsTUFBSUMsUUFBSixDQUFhYixLQUFLYyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsWUFBckIsQ0FBYjtBQUNELENBRkQ7O0FBSUFaLElBQUlhLElBQUosQ0FBUyxTQUFULEVBQXFCLENBQUNMLEdBQUQsRUFBTUMsR0FBTixFQUFXSyxJQUFYLEtBQW9CO0FBQ3ZDVixTQUFPSSxHQUFQLEVBQVlDLEdBQVosRUFBaUIsVUFBVU0sR0FBVixFQUFlO0FBQzlCLFFBQUlBLEdBQUosRUFBUztBQUNQO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxvQkFBdUJHLFlBQXZCLENBQW9DLEVBQUMsNkJBQTZCdEIsS0FBOUIsRUFBcUMsZ0JBQWdCLHFCQUFyRCxFQUE0RSxRQUFRWSxJQUFJVyxJQUF4RixFQUE4RixtQkFBa0IsYUFBaEgsRUFBOEgsa0JBQWlCLFFBQS9JLEVBQXBDLEVBQThMQyxJQUE5TCxDQUFvTUMsTUFBRCxJQUFZO0FBQzNNTCxjQUFRQyxHQUFSLENBQVlJLE1BQVo7QUFDSCxLQUZELEVBRUdDLEtBRkgsQ0FFVVAsR0FBRCxJQUFPO0FBQ2QsWUFBTUEsR0FBTjtBQUNELEtBSkQ7QUFLRCxHQWJEO0FBY0FOLE1BQUljLFVBQUosQ0FBZSxHQUFmO0FBQ0QsQ0FoQkQ7O0FBa0JBLE1BQU1DLFNBQVNsQixLQUFLbUIsWUFBTCxDQUFrQnpCLEdBQWxCLENBQWY7QUFDQXdCLE9BQU9FLE1BQVAsQ0FBYzFCLElBQUlPLEdBQUosQ0FBUSxNQUFSLEtBQW1CLElBQWpDLEVBQXNDLFlBQVc7QUFDN0NTLFVBQVFDLEdBQVIsQ0FBYSxnQ0FBZ0NqQixJQUFJTyxHQUFKLENBQVEsTUFBUixDQUE3QztBQUNILENBRkQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGVzdCBvbiB0aGUgc2VydmVyIHNpZGVcblxuaW1wb3J0IG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24gZnJvbSAnLi4vaW5kZXgnO1xuY29uc3QgbXlLZXkgPSBcImZhNzg5MTUzYjc1YTQ2ZTNhMTNmYzU0MzNlOGJiZTA3XCI7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBtdWx0ZXIgID0gcmVxdWlyZSgnbXVsdGVyJylcbmNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXIubWVtb3J5U3RvcmFnZSgpXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlOiBzdG9yYWdlIH0pLnNpbmdsZSgnaW1hZ2UnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJylcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQW5hbHl6ZSBpbWFnZSBieSBtdWx0aXBhcnQtZm9ybVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5hcHAuZ2V0KCcvJywocmVxLHJlcyk9PntcbiAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdpbmRleC5odG1sJykpO1xufSlcblxuYXBwLnBvc3QoJy91cGxvYWQnLCAgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHVwbG9hZChyZXEsIHJlcywgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoZW4gdXBsb2FkaW5nXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgd2VudCBmaW5lXG4gICAgbWljcm9zb2ZDb21wdXRlclZpc2lvbi5hbmFseXplSW1hZ2Uoe1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBteUtleSwgXCJjb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIFwiYm9keVwiOiByZXEuZmlsZSwgXCJ2aXN1YWwtZmVhdHVyZXNcIjpcIlRhZ3MsIEZhY2VzXCIsXCJyZXF1ZXN0LW9yaWdpblwiOlwid2VzdHVzXCJ9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pXG4gIH0pXG4gIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG59KVxuXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuc2VydmVyLmxpc3RlbihhcHAuZ2V0KCdwb3J0JykgfHwgODAwMCxmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygoJ+KImiBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIGFwcC5nZXQoJ3BvcnQnKSkpXG59KTtcbiJdfQ==