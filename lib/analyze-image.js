'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// analyze-image.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const path = require('path');

exports.default = _opt => {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      // validate parameters
      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkVisualFeature(_opt), _utility2.default.checkDetails(_opt), _utility2.default.checkLanguage(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(err => {
        reject(err);
      }).then(promiseResult => {
        ////////////////////////////////////////////////////
        //  form request package
        ////////////////////////////////////////////////////

        // default visual-features if there is none
        if (!_opt["visual-features"]) {
          _opt["visual-features"] = config["visual-features"].join();
        }

        let uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["analyze-image"] + "?visualFeatures=" + _opt["visual-features"];

        if (_opt.details) {
          uri += "&details=" + _opt.details;
        }

        if (_opt.language) {
          uri += "&language=" + _opt.language;
        }

        let options = {
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
    }).catch(err => {
      reject(err);
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmFseXplLWltYWdlLmpzIl0sIm5hbWVzIjpbInJwIiwicmVxdWlyZSIsImxvYWRKc29uRmlsZSIsInBhdGgiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqb2luIiwiX19kaXJuYW1lIiwidGhlbiIsImNvbmZpZyIsImFsbCIsImNoZWNrQ29udGVudFR5cGUiLCJjaGVja1Zpc3VhbEZlYXR1cmUiLCJjaGVja0RldGFpbHMiLCJjaGVja0xhbmd1YWdlIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwicmVwbGFjZSIsInJvdXRlIiwiZGV0YWlscyIsImxhbmd1YWdlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLE1BQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLE1BQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxNQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2VHLElBQUQsSUFBVTs7QUFFdEIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7O0FBRTNDO0FBQ0FMLGlCQUFhQyxLQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBYixFQUFrREMsSUFBbEQsQ0FBdURDLFVBQVU7QUFDL0Q7QUFDQU4sY0FBUU8sR0FBUixDQUFZLENBQUMsa0JBQVFDLGdCQUFSLENBQXlCVCxJQUF6QixDQUFELEVBQWlDLGtCQUFRVSxrQkFBUixDQUEyQlYsSUFBM0IsQ0FBakMsRUFBbUUsa0JBQVFXLFlBQVIsQ0FBcUJYLElBQXJCLENBQW5FLEVBQStGLGtCQUFRWSxhQUFSLENBQXNCWixJQUF0QixDQUEvRixFQUE0SCxrQkFBUWEsa0JBQVIsQ0FBMkJiLElBQTNCLENBQTVILENBQVosRUFBMktjLEtBQTNLLENBQWtMQyxHQUFELElBQVM7QUFDeExaLGVBQU9ZLEdBQVA7QUFDRCxPQUZELEVBRUdULElBRkgsQ0FFU1UsYUFBRCxJQUFtQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFJLENBQUNoQixLQUFLLGlCQUFMLENBQUwsRUFBOEI7QUFDNUJBLGVBQUssaUJBQUwsSUFBMEJPLE9BQU8saUJBQVAsRUFBMEJILElBQTFCLEVBQTFCO0FBQ0Q7O0FBRUQsWUFBSWEsTUFBTVYsT0FBTyxrQkFBUCxFQUEyQlcsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0NsQixLQUFLLGdCQUFMLENBQS9DLElBQXlFTyxPQUFPWSxLQUFQLENBQWEsZUFBYixDQUF6RSxHQUF5RyxrQkFBekcsR0FBOEhuQixLQUFLLGlCQUFMLENBQXhJOztBQUVBLFlBQUlBLEtBQUtvQixPQUFULEVBQWtCO0FBQ2hCSCxpQkFBTyxjQUFjakIsS0FBS29CLE9BQTFCO0FBQ0Q7O0FBRUQsWUFBSXBCLEtBQUtxQixRQUFULEVBQW1CO0FBQ2pCSixpQkFBTyxlQUFlakIsS0FBS3FCLFFBQTNCO0FBQ0Q7O0FBRUQsWUFBSUMsVUFBVTtBQUNaLGlCQUFPTCxHQURLO0FBRVosb0JBQVUsTUFGRTtBQUdaLGtCQUFRLE1BSEk7QUFJWixxQkFBVztBQUNULDRCQUFnQixFQURQO0FBRVQseUNBQTZCO0FBRnBCLFdBSkM7QUFRWixrQkFBUTtBQVJJLFNBQWQ7O0FBV0FLLGdCQUFRQyxPQUFSLENBQWdCLDJCQUFoQixJQUErQ3ZCLEtBQUssMkJBQUwsQ0FBL0M7O0FBRUEsZ0JBQVFBLEtBQUssY0FBTCxDQUFSO0FBQ0UsZUFBSyxrQkFBTDtBQUNFc0Isb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0Msa0JBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWUsYUFBYXhCLEtBQUt5QixHQUFsQixHQUF3QixJQUF2QztBQUNBO0FBQ0YsZUFBSywwQkFBTDtBQUNFSCxvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZXhCLEtBQUt3QixJQUFwQjtBQUNBO0FBQ0YsZUFBSyxxQkFBTDtBQUNFRixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZXhCLEtBQUt3QixJQUFMLENBQVVFLE1BQXpCO0FBQ0E7QUFaSjs7QUFlQTlCLFdBQUcwQixPQUFILEVBQVloQixJQUFaLENBQWlCLFVBQVNxQixNQUFULEVBQWlCOztBQUVoQ3pCLGtCQUFRMEIsS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQVI7QUFFRCxTQUpELEVBSUdiLEtBSkgsQ0FJUyxVQUFTQyxHQUFULEVBQWM7QUFDckJaLGlCQUFPWSxHQUFQO0FBRUQsU0FQRCxFQU9HZSxJQVBIO0FBUUQsT0ExREQ7QUE0REQsS0E5REQsRUE4REdoQixLQTlESCxDQThEVUMsR0FBRCxJQUFTO0FBQ2hCWixhQUFPWSxHQUFQO0FBQ0QsS0FoRUQ7QUFpRUQsR0FwRU0sQ0FBUDtBQXFFRCxDIiwiZmlsZSI6ImFuYWx5emUtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmFseXplLWltYWdlLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB1dGlsaXR5IGZyb20gJy4vdXRpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAvLyBsb2FkIGNvbmZpZ1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgLy8gdmFsaWRhdGUgcGFyYW1ldGVyc1xuICAgICAgUHJvbWlzZS5hbGwoW3V0aWxpdHkuY2hlY2tDb250ZW50VHlwZShfb3B0KSwgdXRpbGl0eS5jaGVja1Zpc3VhbEZlYXR1cmUoX29wdCksIHV0aWxpdHkuY2hlY2tEZXRhaWxzKF9vcHQpLCB1dGlsaXR5LmNoZWNrTGFuZ3VhZ2UoX29wdCksIHV0aWxpdHkuY2hlY2tSZXF1ZXN0T3JpZ2luKF9vcHQpXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSkudGhlbigocHJvbWlzZVJlc3VsdCkgPT4ge1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vICBmb3JtIHJlcXVlc3QgcGFja2FnZVxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLy8gZGVmYXVsdCB2aXN1YWwtZmVhdHVyZXMgaWYgdGhlcmUgaXMgbm9uZVxuICAgICAgICBpZiAoIV9vcHRbXCJ2aXN1YWwtZmVhdHVyZXNcIl0pIHtcbiAgICAgICAgICBfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdID0gY29uZmlnW1widmlzdWFsLWZlYXR1cmVzXCJdLmpvaW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmkgPSBjb25maWdbXCJyZXF1ZXN0LWJhc2UtVVJMXCJdLnJlcGxhY2UoL3tvcmlnaW59LywgX29wdFtcInJlcXVlc3Qtb3JpZ2luXCJdKSArIGNvbmZpZy5yb3V0ZVtcImFuYWx5emUtaW1hZ2VcIl0gKyBcIj92aXN1YWxGZWF0dXJlcz1cIiArIF9vcHRbXCJ2aXN1YWwtZmVhdHVyZXNcIl07XG5cbiAgICAgICAgaWYgKF9vcHQuZGV0YWlscykge1xuICAgICAgICAgIHVyaSArPSBcIiZkZXRhaWxzPVwiICsgX29wdC5kZXRhaWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9vcHQubGFuZ3VhZ2UpIHtcbiAgICAgICAgICB1cmkgKz0gXCImbGFuZ3VhZ2U9XCIgKyBfb3B0Lmxhbmd1YWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJvZHlcIjogXCJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICBzd2l0Y2ggKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pIHtcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keS5idWZmZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfSkuZG9uZSgpO1xuICAgICAgfSlcblxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pXG4gIH0pO1xufTtcbiJdfQ==