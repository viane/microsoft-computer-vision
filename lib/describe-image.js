'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// describe-image.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');
var path = require('path');

exports.default = function (_opt) {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {

      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(function (err) {
        reject(err);
      }).then(function (promiseResult) {
        // set default max-candidates by 10 if there is none

        if (!_opt['max-candidates']) {
          _opt['max-candidates'] = 10;
        }

        var uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["describe-image"] + "?maxCandidates=" + _opt["max-candidates"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXNjcmliZS1pbWFnZS5qcyJdLCJuYW1lcyI6WyJycCIsInJlcXVpcmUiLCJsb2FkSnNvbkZpbGUiLCJwYXRoIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwiam9pbiIsIl9fZGlybmFtZSIsInRoZW4iLCJhbGwiLCJjaGVja0NvbnRlbnRUeXBlIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwiY29uZmlnIiwicmVwbGFjZSIsInJvdXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxJQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2MsVUFBQ0csSUFBRCxFQUFVOztBQUV0QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjs7QUFFM0M7QUFDQUwsaUJBQWFDLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtEQyxJQUFsRCxDQUF1RCxrQkFBVTs7QUFFL0RMLGNBQVFNLEdBQVIsQ0FBWSxDQUFDLGtCQUFRQyxnQkFBUixDQUF5QlIsSUFBekIsQ0FBRCxFQUFpQyxrQkFBUVMsa0JBQVIsQ0FBMkJULElBQTNCLENBQWpDLENBQVosRUFBZ0ZVLEtBQWhGLENBQXNGLFVBQUNDLEdBQUQsRUFBUztBQUM3RlIsZUFBT1EsR0FBUDtBQUNELE9BRkQsRUFFR0wsSUFGSCxDQUVRLFVBQUNNLGFBQUQsRUFBaUI7QUFDdkI7O0FBRUEsWUFBSSxDQUFDWixLQUFLLGdCQUFMLENBQUwsRUFBNkI7QUFDM0JBLGVBQUssZ0JBQUwsSUFBeUIsRUFBekI7QUFDRDs7QUFFRCxZQUFJYSxNQUFNQyxPQUFPLGtCQUFQLEVBQTJCQyxPQUEzQixDQUFtQyxVQUFuQyxFQUErQ2YsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RWMsT0FBT0UsS0FBUCxDQUFhLGdCQUFiLENBQXpFLEdBQTBHLGlCQUExRyxHQUE4SGhCLEtBQUssZ0JBQUwsQ0FBeEk7O0FBRUEsWUFBSWlCLFVBQVU7QUFDWixpQkFBT0osR0FESztBQUVaLG9CQUFVLE1BRkU7QUFHWixrQkFBUSxNQUhJO0FBSVoscUJBQVc7QUFDVCw0QkFBZ0IsRUFEUDtBQUVULHlDQUE2QjtBQUZwQixXQUpDO0FBUVosa0JBQVE7QUFSSSxTQUFkOztBQVdBSSxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0NsQixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNFLGVBQUssa0JBQUw7QUFDRWlCLG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlLGFBQWFuQixLQUFLb0IsR0FBbEIsR0FBd0IsSUFBdkM7QUFDQTtBQUNGLGVBQUssMEJBQUw7QUFDRUgsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWVuQixLQUFLbUIsSUFBcEI7QUFDQTtBQUNGLGVBQUsscUJBQUw7QUFDRUYsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWVuQixLQUFLbUIsSUFBTCxDQUFVRSxNQUF6QjtBQUNBO0FBWko7O0FBZUF6QixXQUFHcUIsT0FBSCxFQUFZWCxJQUFaLENBQWlCLFVBQVNnQixNQUFULEVBQWlCOztBQUVoQ3BCLGtCQUFRcUIsS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQVI7QUFFRCxTQUpELEVBSUdaLEtBSkgsQ0FJUyxVQUFTQyxHQUFULEVBQWM7O0FBRXJCUixpQkFBT1EsR0FBUDtBQUVELFNBUkQsRUFRR2MsSUFSSDtBQVNELE9BaEREO0FBaURELEtBbkRELEVBbURHZixLQW5ESCxDQW1EUyxVQUFDQyxHQUFELEVBQVM7QUFDaEJSLGFBQU9RLEdBQVA7QUFDRCxLQXJERDtBQXNERCxHQXpETSxDQUFQO0FBMkRELEMiLCJmaWxlIjoiZGVzY3JpYmUtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXNjcmliZS1pbWFnZS5qc1xuXG5jb25zdCBycCA9IHJlcXVpcmUoJ3JlcXVlc3QtcHJvbWlzZScpO1xuY29uc3QgbG9hZEpzb25GaWxlID0gcmVxdWlyZSgnbG9hZC1qc29uLWZpbGUnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgdXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgLy8gbG9hZCBjb25maWdcbiAgICBsb2FkSnNvbkZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbmZpZy5qc29uJykpLnRoZW4oY29uZmlnID0+IHtcblxuICAgICAgUHJvbWlzZS5hbGwoW3V0aWxpdHkuY2hlY2tDb250ZW50VHlwZShfb3B0KSwgdXRpbGl0eS5jaGVja1JlcXVlc3RPcmlnaW4oX29wdCldKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSkudGhlbigocHJvbWlzZVJlc3VsdCk9PntcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgbWF4LWNhbmRpZGF0ZXMgYnkgMTAgaWYgdGhlcmUgaXMgbm9uZVxuXG4gICAgICAgIGlmICghX29wdFsnbWF4LWNhbmRpZGF0ZXMnXSkge1xuICAgICAgICAgIF9vcHRbJ21heC1jYW5kaWRhdGVzJ10gPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmkgPSBjb25maWdbXCJyZXF1ZXN0LWJhc2UtVVJMXCJdLnJlcGxhY2UoL3tvcmlnaW59LywgX29wdFtcInJlcXVlc3Qtb3JpZ2luXCJdKSArIGNvbmZpZy5yb3V0ZVtcImRlc2NyaWJlLWltYWdlXCJdICsgXCI/bWF4Q2FuZGlkYXRlcz1cIiArIF9vcHRbXCJtYXgtY2FuZGlkYXRlc1wiXTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBcInVyaVwiOiB1cmksXG4gICAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYm9keVwiOiBcIlwiXG4gICAgICAgIH07XG5cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXSA9IF9vcHRbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdO1xuXG4gICAgICAgIHN3aXRjaCAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSkge1xuICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9qc29uXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSAne1widXJsXCI6XCInICsgX29wdC51cmwgKyAnXCJ9JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5ib2R5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5ib2R5LmJ1ZmZlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcnAob3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHQpKTtcblxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblxuICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH0pLmRvbmUoKTtcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuIl19