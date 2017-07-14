'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myKey = "fa789153b75a46e3a13fc5433e8bbe07"; // test on the server side

var path = require('path');
var express = require('express');
var app = express();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage }).single('image');
var http = require('http');

////////////////////////////////////////
// Analyze image by multipart-form
////////////////////////////////////////

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return;
    }

    // Everything went fine
    _index2.default.analyzeImage({ "Ocp-Apim-Subscription-Key": myKey, "content-type": "multipart/form-data", "body": req.file, "visual-features": "Tags, Faces", "request-origin": "westus" }).then(function (result) {
      console.log(result);
    }).catch(function (err) {
      throw err;
    });
  });
  res.sendStatus(200);
});

var server = http.createServer(app);
server.listen(app.get('port') || 8000, function () {
  console.log('√ Server listening on port ' + app.get('port'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIl0sIm5hbWVzIjpbIm15S2V5IiwicGF0aCIsInJlcXVpcmUiLCJleHByZXNzIiwiYXBwIiwibXVsdGVyIiwic3RvcmFnZSIsIm1lbW9yeVN0b3JhZ2UiLCJ1cGxvYWQiLCJzaW5nbGUiLCJodHRwIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiLCJqb2luIiwiX19kaXJuYW1lIiwicG9zdCIsIm5leHQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYW5hbHl6ZUltYWdlIiwiZmlsZSIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInNlbmRTdGF0dXMiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7OztBQUNBLElBQU1BLFFBQVEsa0NBQWQsQyxDQUhBOztBQUlBLElBQU1DLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUUsTUFBTUQsU0FBWjtBQUNBLElBQU1FLFNBQVVILFFBQVEsUUFBUixDQUFoQjtBQUNBLElBQU1JLFVBQVVELE9BQU9FLGFBQVAsRUFBaEI7QUFDQSxJQUFNQyxTQUFTSCxPQUFPLEVBQUVDLFNBQVNBLE9BQVgsRUFBUCxFQUE2QkcsTUFBN0IsQ0FBb0MsT0FBcEMsQ0FBZjtBQUNBLElBQU1DLE9BQU9SLFFBQVEsTUFBUixDQUFiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQUUsSUFBSU8sR0FBSixDQUFRLEdBQVIsRUFBWSxVQUFDQyxHQUFELEVBQUtDLEdBQUwsRUFBVztBQUNyQkEsTUFBSUMsUUFBSixDQUFhYixLQUFLYyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsWUFBckIsQ0FBYjtBQUNELENBRkQ7O0FBSUFaLElBQUlhLElBQUosQ0FBUyxTQUFULEVBQXFCLFVBQUNMLEdBQUQsRUFBTUMsR0FBTixFQUFXSyxJQUFYLEVBQW9CO0FBQ3ZDVixTQUFPSSxHQUFQLEVBQVlDLEdBQVosRUFBaUIsVUFBVU0sR0FBVixFQUFlO0FBQzlCLFFBQUlBLEdBQUosRUFBUztBQUNQO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxvQkFBdUJHLFlBQXZCLENBQW9DLEVBQUMsNkJBQTZCdEIsS0FBOUIsRUFBcUMsZ0JBQWdCLHFCQUFyRCxFQUE0RSxRQUFRWSxJQUFJVyxJQUF4RixFQUE4RixtQkFBa0IsYUFBaEgsRUFBOEgsa0JBQWlCLFFBQS9JLEVBQXBDLEVBQThMQyxJQUE5TCxDQUFtTSxVQUFDQyxNQUFELEVBQVk7QUFDM01MLGNBQVFDLEdBQVIsQ0FBWUksTUFBWjtBQUNILEtBRkQsRUFFR0MsS0FGSCxDQUVTLFVBQUNQLEdBQUQsRUFBTztBQUNkLFlBQU1BLEdBQU47QUFDRCxLQUpEO0FBS0QsR0FiRDtBQWNBTixNQUFJYyxVQUFKLENBQWUsR0FBZjtBQUNELENBaEJEOztBQWtCQSxJQUFNQyxTQUFTbEIsS0FBS21CLFlBQUwsQ0FBa0J6QixHQUFsQixDQUFmO0FBQ0F3QixPQUFPRSxNQUFQLENBQWMxQixJQUFJTyxHQUFKLENBQVEsTUFBUixLQUFtQixJQUFqQyxFQUFzQyxZQUFXO0FBQzdDUyxVQUFRQyxHQUFSLENBQWEsZ0NBQWdDakIsSUFBSU8sR0FBSixDQUFRLE1BQVIsQ0FBN0M7QUFDSCxDQUZEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRlc3Qgb24gdGhlIHNlcnZlciBzaWRlXG5cbmltcG9ydCBtaWNyb3NvZkNvbXB1dGVyVmlzaW9uIGZyb20gJy4uL2luZGV4JztcbmNvbnN0IG15S2V5ID0gXCJmYTc4OTE1M2I3NWE0NmUzYTEzZmM1NDMzZThiYmUwN1wiO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuY29uc3QgbXVsdGVyICA9IHJlcXVpcmUoJ211bHRlcicpXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLm1lbW9yeVN0b3JhZ2UoKVxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZTogc3RvcmFnZSB9KS5zaW5nbGUoJ2ltYWdlJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFuYWx5emUgaW1hZ2UgYnkgbXVsdGlwYXJ0LWZvcm1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuYXBwLmdldCgnLycsKHJlcSxyZXMpPT57XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpKTtcbn0pXG5cbmFwcC5wb3N0KCcvdXBsb2FkJywgIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB1cGxvYWQocmVxLCByZXMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGVuIHVwbG9hZGluZ1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFdmVyeXRoaW5nIHdlbnQgZmluZVxuICAgIG1pY3Jvc29mQ29tcHV0ZXJWaXNpb24uYW5hbHl6ZUltYWdlKHtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogbXlLZXksIFwiY29udGVudC10eXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBcImJvZHlcIjogcmVxLmZpbGUsIFwidmlzdWFsLWZlYXR1cmVzXCI6XCJUYWdzLCBGYWNlc1wiLFwicmVxdWVzdC1vcmlnaW5cIjpcIndlc3R1c1wifSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgIHRocm93IGVycjtcbiAgICB9KVxuICB9KVxuICByZXMuc2VuZFN0YXR1cygyMDApO1xufSlcblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbnNlcnZlci5saXN0ZW4oYXBwLmdldCgncG9ydCcpIHx8IDgwMDAsZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coKCfiiJogU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBhcHAuZ2V0KCdwb3J0JykpKVxufSk7XG4iXX0=