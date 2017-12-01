'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get-thumbnail.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const path = require('path');

exports.default = _opt => {

  return new Promise(function (resolve, reject) {

    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {

      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkThumbWidthHeight(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(err => {
        reject(err);
      }).then(promiseResult => {
        let uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["get-thumbnail"] + "?width=" + _opt.width + "&height=" + _opt.height;

        if (_opt["smart-cropping"]) {
          uri += "&smartCropping=" + _opt["smart-cropping"];
        } else {
          // true by default
          uri += "&smartCropping=true";
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

        rp(options).then(function (thumbnailBinary) {

          resolve(thumbnailBinary);
        }).catch(function (err) {

          reject(err);
        }).done();
      });
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtdGh1bWJuYWlsLmpzIl0sIm5hbWVzIjpbInJwIiwicmVxdWlyZSIsImxvYWRKc29uRmlsZSIsInBhdGgiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqb2luIiwiX19kaXJuYW1lIiwidGhlbiIsImNvbmZpZyIsImFsbCIsImNoZWNrQ29udGVudFR5cGUiLCJjaGVja1RodW1iV2lkdGhIZWlnaHQiLCJjaGVja1JlcXVlc3RPcmlnaW4iLCJjYXRjaCIsImVyciIsInByb21pc2VSZXN1bHQiLCJ1cmkiLCJyZXBsYWNlIiwicm91dGUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsInVybCIsImJ1ZmZlciIsInRodW1ibmFpbEJpbmFyeSIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7Ozs7QUFMQTs7QUFFQSxNQUFNQSxLQUFLQyxRQUFRLGlCQUFSLENBQVg7QUFDQSxNQUFNQyxlQUFlRCxRQUFRLGdCQUFSLENBQXJCO0FBQ0EsTUFBTUUsT0FBT0YsUUFBUSxNQUFSLENBQWI7O2tCQUdlRyxJQUFELElBQVU7O0FBRXRCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCOztBQUUzQ0wsaUJBQWFDLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtEQyxJQUFsRCxDQUF1REMsVUFBVTs7QUFFL0ROLGNBQVFPLEdBQVIsQ0FBWSxDQUFDLGtCQUFRQyxnQkFBUixDQUF5QlQsSUFBekIsQ0FBRCxFQUFpQyxrQkFBUVUscUJBQVIsQ0FBOEJWLElBQTlCLENBQWpDLEVBQXFFLGtCQUFRVyxrQkFBUixDQUEyQlgsSUFBM0IsQ0FBckUsQ0FBWixFQUFvSFksS0FBcEgsQ0FBMkhDLEdBQUQsSUFBUztBQUNqSVYsZUFBT1UsR0FBUDtBQUNELE9BRkQsRUFFR1AsSUFGSCxDQUVTUSxhQUFELElBQW1CO0FBQ3pCLFlBQUlDLE1BQU1SLE9BQU8sa0JBQVAsRUFBMkJTLE9BQTNCLENBQW1DLFVBQW5DLEVBQStDaEIsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RU8sT0FBT1UsS0FBUCxDQUFhLGVBQWIsQ0FBekUsR0FBeUcsU0FBekcsR0FBcUhqQixLQUFLa0IsS0FBMUgsR0FBa0ksVUFBbEksR0FBK0lsQixLQUFLbUIsTUFBOUo7O0FBRUEsWUFBSW5CLEtBQUssZ0JBQUwsQ0FBSixFQUE0QjtBQUMxQmUsaUJBQU8sb0JBQW9CZixLQUFLLGdCQUFMLENBQTNCO0FBQ0QsU0FGRCxNQUVNO0FBQ0o7QUFDQWUsaUJBQU8scUJBQVA7QUFDRDs7QUFFRCxZQUFJSyxVQUFVO0FBQ1osaUJBQU9MLEdBREs7QUFFWixvQkFBVSxNQUZFO0FBR1osa0JBQVEsTUFISTtBQUlaLHFCQUFXO0FBQ1QsNEJBQWdCLEVBRFA7QUFFVCx5Q0FBNkI7QUFGcEIsV0FKQztBQVFaLGtCQUFRO0FBUkksU0FBZDs7QUFXQUssZ0JBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDckIsS0FBSywyQkFBTCxDQUEvQzs7QUFFQSxnQkFBUUEsS0FBSyxjQUFMLENBQVI7QUFDRSxlQUFLLGtCQUFMO0FBQ0VvQixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZSxhQUFhdEIsS0FBS3VCLEdBQWxCLEdBQXdCLElBQXZDO0FBQ0E7QUFDRixlQUFLLDBCQUFMO0FBQ0VILG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFldEIsS0FBS3NCLElBQXBCO0FBQ0E7QUFDRixlQUFLLHFCQUFMO0FBQ0VGLG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFldEIsS0FBS3NCLElBQUwsQ0FBVUUsTUFBekI7QUFDQTtBQVpKOztBQWVBNUIsV0FBR3dCLE9BQUgsRUFBWWQsSUFBWixDQUFpQixVQUFTbUIsZUFBVCxFQUEwQjs7QUFFekN2QixrQkFBUXVCLGVBQVI7QUFFRCxTQUpELEVBSUdiLEtBSkgsQ0FJUyxVQUFTQyxHQUFULEVBQWM7O0FBRXJCVixpQkFBT1UsR0FBUDtBQUVELFNBUkQsRUFRR2EsSUFSSDtBQVNELE9BakREO0FBbURELEtBckREO0FBc0RELEdBeERNLENBQVA7QUEwREQsQyIsImZpbGUiOiJnZXQtdGh1bWJuYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2V0LXRodW1ibmFpbC5qc1xuXG5jb25zdCBycCA9IHJlcXVpcmUoJ3JlcXVlc3QtcHJvbWlzZScpO1xuY29uc3QgbG9hZEpzb25GaWxlID0gcmVxdWlyZSgnbG9hZC1qc29uLWZpbGUnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgdXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG5cbiAgICAgIFByb21pc2UuYWxsKFt1dGlsaXR5LmNoZWNrQ29udGVudFR5cGUoX29wdCksIHV0aWxpdHkuY2hlY2tUaHVtYldpZHRoSGVpZ2h0KF9vcHQpLHV0aWxpdHkuY2hlY2tSZXF1ZXN0T3JpZ2luKF9vcHQpXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSkudGhlbigocHJvbWlzZVJlc3VsdCkgPT4ge1xuICAgICAgICBsZXQgdXJpID0gY29uZmlnW1wicmVxdWVzdC1iYXNlLVVSTFwiXS5yZXBsYWNlKC97b3JpZ2lufS8sIF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkgKyBjb25maWcucm91dGVbXCJnZXQtdGh1bWJuYWlsXCJdICsgXCI/d2lkdGg9XCIgKyBfb3B0LndpZHRoICsgXCImaGVpZ2h0PVwiICsgX29wdC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKF9vcHRbXCJzbWFydC1jcm9wcGluZ1wiXSkge1xuICAgICAgICAgIHVyaSArPSBcIiZzbWFydENyb3BwaW5nPVwiICsgX29wdFtcInNtYXJ0LWNyb3BwaW5nXCJdO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgLy8gdHJ1ZSBieSBkZWZhdWx0XG4gICAgICAgICAgdXJpICs9IFwiJnNtYXJ0Q3JvcHBpbmc9dHJ1ZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJvZHlcIjogXCJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICBzd2l0Y2ggKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pIHtcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keS5idWZmZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24odGh1bWJuYWlsQmluYXJ5KSB7XG5cbiAgICAgICAgICByZXNvbHZlKHRodW1ibmFpbEJpbmFyeSk7XG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICB9KS5kb25lKCk7XG4gICAgICB9KVxuXG4gICAgfSlcbiAgfSk7XG5cbn07XG4iXX0=