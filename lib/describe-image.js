'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// describe-image.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const path = require('path');

exports.default = _opt => {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {

      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(err => {
        reject(err);
      }).then(promiseResult => {
        // set default max-candidates by 10 if there is none

        if (!_opt['max-candidates']) {
          _opt['max-candidates'] = 10;
        }

        let uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["describe-image"] + "?maxCandidates=" + _opt["max-candidates"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXNjcmliZS1pbWFnZS5qcyJdLCJuYW1lcyI6WyJycCIsInJlcXVpcmUiLCJsb2FkSnNvbkZpbGUiLCJwYXRoIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwiam9pbiIsIl9fZGlybmFtZSIsInRoZW4iLCJjb25maWciLCJhbGwiLCJjaGVja0NvbnRlbnRUeXBlIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwicmVwbGFjZSIsInJvdXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLE1BQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLE1BQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxNQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2VHLElBQUQsSUFBVTs7QUFFdEIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7O0FBRTNDO0FBQ0FMLGlCQUFhQyxLQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBYixFQUFrREMsSUFBbEQsQ0FBdURDLFVBQVU7O0FBRS9ETixjQUFRTyxHQUFSLENBQVksQ0FBQyxrQkFBUUMsZ0JBQVIsQ0FBeUJULElBQXpCLENBQUQsRUFBaUMsa0JBQVFVLGtCQUFSLENBQTJCVixJQUEzQixDQUFqQyxDQUFaLEVBQWdGVyxLQUFoRixDQUF1RkMsR0FBRCxJQUFTO0FBQzdGVCxlQUFPUyxHQUFQO0FBQ0QsT0FGRCxFQUVHTixJQUZILENBRVNPLGFBQUQsSUFBaUI7QUFDdkI7O0FBRUEsWUFBSSxDQUFDYixLQUFLLGdCQUFMLENBQUwsRUFBNkI7QUFDM0JBLGVBQUssZ0JBQUwsSUFBeUIsRUFBekI7QUFDRDs7QUFFRCxZQUFJYyxNQUFNUCxPQUFPLGtCQUFQLEVBQTJCUSxPQUEzQixDQUFtQyxVQUFuQyxFQUErQ2YsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RU8sT0FBT1MsS0FBUCxDQUFhLGdCQUFiLENBQXpFLEdBQTBHLGlCQUExRyxHQUE4SGhCLEtBQUssZ0JBQUwsQ0FBeEk7O0FBRUEsWUFBSWlCLFVBQVU7QUFDWixpQkFBT0gsR0FESztBQUVaLG9CQUFVLE1BRkU7QUFHWixrQkFBUSxNQUhJO0FBSVoscUJBQVc7QUFDVCw0QkFBZ0IsRUFEUDtBQUVULHlDQUE2QjtBQUZwQixXQUpDO0FBUVosa0JBQVE7QUFSSSxTQUFkOztBQVdBRyxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0NsQixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNFLGVBQUssa0JBQUw7QUFDRWlCLG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlLGFBQWFuQixLQUFLb0IsR0FBbEIsR0FBd0IsSUFBdkM7QUFDQTtBQUNGLGVBQUssMEJBQUw7QUFDRUgsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWVuQixLQUFLbUIsSUFBcEI7QUFDQTtBQUNGLGVBQUsscUJBQUw7QUFDRUYsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWVuQixLQUFLbUIsSUFBTCxDQUFVRSxNQUF6QjtBQUNBO0FBWko7O0FBZUF6QixXQUFHcUIsT0FBSCxFQUFZWCxJQUFaLENBQWlCLFVBQVNnQixNQUFULEVBQWlCOztBQUVoQ3BCLGtCQUFRcUIsS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQVI7QUFFRCxTQUpELEVBSUdYLEtBSkgsQ0FJUyxVQUFTQyxHQUFULEVBQWM7O0FBRXJCVCxpQkFBT1MsR0FBUDtBQUVELFNBUkQsRUFRR2EsSUFSSDtBQVNELE9BaEREO0FBaURELEtBbkRELEVBbURHZCxLQW5ESCxDQW1EVUMsR0FBRCxJQUFTO0FBQ2hCVCxhQUFPUyxHQUFQO0FBQ0QsS0FyREQ7QUFzREQsR0F6RE0sQ0FBUDtBQTJERCxDIiwiZmlsZSI6ImRlc2NyaWJlLWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGVzY3JpYmUtaW1hZ2UuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHV0aWxpdHkgZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQoX29wdCkgPT4ge1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIC8vIGxvYWQgY29uZmlnXG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG5cbiAgICAgIFByb21pc2UuYWxsKFt1dGlsaXR5LmNoZWNrQ29udGVudFR5cGUoX29wdCksIHV0aWxpdHkuY2hlY2tSZXF1ZXN0T3JpZ2luKF9vcHQpXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pLnRoZW4oKHByb21pc2VSZXN1bHQpPT57XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG1heC1jYW5kaWRhdGVzIGJ5IDEwIGlmIHRoZXJlIGlzIG5vbmVcblxuICAgICAgICBpZiAoIV9vcHRbJ21heC1jYW5kaWRhdGVzJ10pIHtcbiAgICAgICAgICBfb3B0WydtYXgtY2FuZGlkYXRlcyddID0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJpID0gY29uZmlnW1wicmVxdWVzdC1iYXNlLVVSTFwiXS5yZXBsYWNlKC97b3JpZ2lufS8sIF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkgKyBjb25maWcucm91dGVbXCJkZXNjcmliZS1pbWFnZVwiXSArIFwiP21heENhbmRpZGF0ZXM9XCIgKyBfb3B0W1wibWF4LWNhbmRpZGF0ZXNcIl07XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJvZHlcIjogXCJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICBzd2l0Y2ggKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pIHtcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keS5idWZmZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICB9KS5kb25lKCk7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9KTtcblxufTtcbiJdfQ==