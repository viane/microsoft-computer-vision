'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// analyze-image.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');
var path = require('path');

exports.default = function (_opt) {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      // validate parameters
      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkVisualFeature(_opt), _utility2.default.checkDetails(_opt), _utility2.default.checkLanguage(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(function (err) {
        reject(err);
      }).then(function (promiseResult) {
        ////////////////////////////////////////////////////
        //  form request package
        ////////////////////////////////////////////////////

        // default visual-features if there is none
        if (!_opt["visual-features"]) {
          _opt["visual-features"] = config["visual-features"].join();
        }

        var uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["analyze-image"] + "?visualFeatures=" + _opt["visual-features"];

        if (_opt.details) {
          uri += "&details=" + _opt.details;
        }

        if (_opt.language) {
          uri += "&language=" + _opt.language;
        }

        var options = {
          "uri": uri,
          "method": "POST",
          "type": "POST",
          "headers": {
            "Content-Type": "",
            "Ocp-Apim-Subscription-Key": ""
          },
          "body": ""
        };

        options.headers["Ocp-Apim-Subscription-Key"] = _opt["Ocp-Apim-Subscription-Key"];

        switch (_opt["content-type"]) {
          case "application/json":
            options.headers["Content-Type"] = 'application/json';
            options.body = '{"url":"' + _opt.url + '"}';
            break;
          case "application/octet-stream":
            options.headers["Content-Type"] = 'application/octet-stream';
            options.body = _opt.body;
            break;
          case "multipart/form-data":
            options.headers["Content-Type"] = 'application/octet-stream';
            options.body = _opt.body.buffer;
            break;
        }

        rp(options).then(function (result) {

          resolve(JSON.parse(result));
        }).catch(function (err) {
          reject(err);
        }).done();
      });
    }).catch(function (err) {
      reject(err);
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmFseXplLWltYWdlLmpzIl0sIm5hbWVzIjpbInJwIiwicmVxdWlyZSIsImxvYWRKc29uRmlsZSIsInBhdGgiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqb2luIiwiX19kaXJuYW1lIiwidGhlbiIsImFsbCIsImNoZWNrQ29udGVudFR5cGUiLCJjaGVja1Zpc3VhbEZlYXR1cmUiLCJjaGVja0RldGFpbHMiLCJjaGVja0xhbmd1YWdlIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwiY29uZmlnIiwidXJpIiwicmVwbGFjZSIsInJvdXRlIiwiZGV0YWlscyIsImxhbmd1YWdlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxJQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2MsVUFBQ0csSUFBRCxFQUFVOztBQUV0QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjs7QUFFM0M7QUFDQUwsaUJBQWFDLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtEQyxJQUFsRCxDQUF1RCxrQkFBVTtBQUMvRDtBQUNBTCxjQUFRTSxHQUFSLENBQVksQ0FBQyxrQkFBUUMsZ0JBQVIsQ0FBeUJSLElBQXpCLENBQUQsRUFBaUMsa0JBQVFTLGtCQUFSLENBQTJCVCxJQUEzQixDQUFqQyxFQUFtRSxrQkFBUVUsWUFBUixDQUFxQlYsSUFBckIsQ0FBbkUsRUFBK0Ysa0JBQVFXLGFBQVIsQ0FBc0JYLElBQXRCLENBQS9GLEVBQTRILGtCQUFRWSxrQkFBUixDQUEyQlosSUFBM0IsQ0FBNUgsQ0FBWixFQUEyS2EsS0FBM0ssQ0FBaUwsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hMWCxlQUFPVyxHQUFQO0FBQ0QsT0FGRCxFQUVHUixJQUZILENBRVEsVUFBQ1MsYUFBRCxFQUFtQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFJLENBQUNmLEtBQUssaUJBQUwsQ0FBTCxFQUE4QjtBQUM1QkEsZUFBSyxpQkFBTCxJQUEwQmdCLE9BQU8saUJBQVAsRUFBMEJaLElBQTFCLEVBQTFCO0FBQ0Q7O0FBRUQsWUFBSWEsTUFBTUQsT0FBTyxrQkFBUCxFQUEyQkUsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0NsQixLQUFLLGdCQUFMLENBQS9DLElBQXlFZ0IsT0FBT0csS0FBUCxDQUFhLGVBQWIsQ0FBekUsR0FBeUcsa0JBQXpHLEdBQThIbkIsS0FBSyxpQkFBTCxDQUF4STs7QUFFQSxZQUFJQSxLQUFLb0IsT0FBVCxFQUFrQjtBQUNoQkgsaUJBQU8sY0FBY2pCLEtBQUtvQixPQUExQjtBQUNEOztBQUVELFlBQUlwQixLQUFLcUIsUUFBVCxFQUFtQjtBQUNqQkosaUJBQU8sZUFBZWpCLEtBQUtxQixRQUEzQjtBQUNEOztBQUVELFlBQUlDLFVBQVU7QUFDWixpQkFBT0wsR0FESztBQUVaLG9CQUFVLE1BRkU7QUFHWixrQkFBUSxNQUhJO0FBSVoscUJBQVc7QUFDVCw0QkFBZ0IsRUFEUDtBQUVULHlDQUE2QjtBQUZwQixXQUpDO0FBUVosa0JBQVE7QUFSSSxTQUFkOztBQVdBSyxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0N2QixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNFLGVBQUssa0JBQUw7QUFDRXNCLG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlLGFBQWF4QixLQUFLeUIsR0FBbEIsR0FBd0IsSUFBdkM7QUFDQTtBQUNGLGVBQUssMEJBQUw7QUFDRUgsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWV4QixLQUFLd0IsSUFBcEI7QUFDQTtBQUNGLGVBQUsscUJBQUw7QUFDRUYsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWV4QixLQUFLd0IsSUFBTCxDQUFVRSxNQUF6QjtBQUNBO0FBWko7O0FBZUE5QixXQUFHMEIsT0FBSCxFQUFZaEIsSUFBWixDQUFpQixVQUFTcUIsTUFBVCxFQUFpQjs7QUFFaEN6QixrQkFBUTBCLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFSO0FBRUQsU0FKRCxFQUlHZCxLQUpILENBSVMsVUFBU0MsR0FBVCxFQUFjO0FBQ3JCWCxpQkFBT1csR0FBUDtBQUVELFNBUEQsRUFPR2dCLElBUEg7QUFRRCxPQTFERDtBQTRERCxLQTlERCxFQThER2pCLEtBOURILENBOERTLFVBQUNDLEdBQUQsRUFBUztBQUNoQlgsYUFBT1csR0FBUDtBQUNELEtBaEVEO0FBaUVELEdBcEVNLENBQVA7QUFxRUQsQyIsImZpbGUiOiJhbmFseXplLWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5hbHl6ZS1pbWFnZS5qc1xuXG5jb25zdCBycCA9IHJlcXVpcmUoJ3JlcXVlc3QtcHJvbWlzZScpO1xuY29uc3QgbG9hZEpzb25GaWxlID0gcmVxdWlyZSgnbG9hZC1qc29uLWZpbGUnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgdXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgLy8gbG9hZCBjb25maWdcbiAgICBsb2FkSnNvbkZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbmZpZy5qc29uJykpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIC8vIHZhbGlkYXRlIHBhcmFtZXRlcnNcbiAgICAgIFByb21pc2UuYWxsKFt1dGlsaXR5LmNoZWNrQ29udGVudFR5cGUoX29wdCksIHV0aWxpdHkuY2hlY2tWaXN1YWxGZWF0dXJlKF9vcHQpLCB1dGlsaXR5LmNoZWNrRGV0YWlscyhfb3B0KSwgdXRpbGl0eS5jaGVja0xhbmd1YWdlKF9vcHQpLCB1dGlsaXR5LmNoZWNrUmVxdWVzdE9yaWdpbihfb3B0KV0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0pLnRoZW4oKHByb21pc2VSZXN1bHQpID0+IHtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyAgZm9ybSByZXF1ZXN0IHBhY2thZ2VcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8vIGRlZmF1bHQgdmlzdWFsLWZlYXR1cmVzIGlmIHRoZXJlIGlzIG5vbmVcbiAgICAgICAgaWYgKCFfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdKSB7XG4gICAgICAgICAgX29wdFtcInZpc3VhbC1mZWF0dXJlc1wiXSA9IGNvbmZpZ1tcInZpc3VhbC1mZWF0dXJlc1wiXS5qb2luKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJpID0gY29uZmlnW1wicmVxdWVzdC1iYXNlLVVSTFwiXS5yZXBsYWNlKC97b3JpZ2lufS8sIF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkgKyBjb25maWcucm91dGVbXCJhbmFseXplLWltYWdlXCJdICsgXCI/dmlzdWFsRmVhdHVyZXM9XCIgKyBfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdO1xuXG4gICAgICAgIGlmIChfb3B0LmRldGFpbHMpIHtcbiAgICAgICAgICB1cmkgKz0gXCImZGV0YWlscz1cIiArIF9vcHQuZGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfb3B0Lmxhbmd1YWdlKSB7XG4gICAgICAgICAgdXJpICs9IFwiJmxhbmd1YWdlPVwiICsgX29wdC5sYW5ndWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXG4gICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJib2R5XCI6IFwiXCJcbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgc3dpdGNoIChfb3B0W1wiY29udGVudC10eXBlXCJdKSB7XG4gICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2pzb25cIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9ICd7XCJ1cmxcIjpcIicgKyBfb3B0LnVybCArICdcIn0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHkuYnVmZmVyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBycChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xuXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH0pLmRvbmUoKTtcbiAgICAgIH0pXG5cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KTtcbn07XG4iXX0=