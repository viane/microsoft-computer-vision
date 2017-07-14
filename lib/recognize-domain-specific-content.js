'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// recognize-domain-specific-content.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');
var path = require('path');

exports.default = function (_opt) {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      // validate parameters
      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkModels(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(function (err) {
        reject(err);
      }).then(function (promiseResult) {

        var uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["recognize-domain-specific-content"].replace(/{model}/, _opt["model"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiYWxsIiwiY2hlY2tDb250ZW50VHlwZSIsImNoZWNrTW9kZWxzIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwiY29uZmlnIiwicmVwbGFjZSIsInJvdXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxJQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2MsVUFBQ0csSUFBRCxFQUFVOztBQUV0QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjs7QUFFM0M7QUFDQUwsaUJBQWFDLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtEQyxJQUFsRCxDQUF1RCxrQkFBVTtBQUMvRDtBQUNBTCxjQUFRTSxHQUFSLENBQVksQ0FBQyxrQkFBUUMsZ0JBQVIsQ0FBeUJSLElBQXpCLENBQUQsRUFBaUMsa0JBQVFTLFdBQVIsQ0FBb0JULElBQXBCLENBQWpDLEVBQTRELGtCQUFRVSxrQkFBUixDQUEyQlYsSUFBM0IsQ0FBNUQsQ0FBWixFQUEyR1csS0FBM0csQ0FBaUgsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hIVCxlQUFPUyxHQUFQO0FBQ0QsT0FGRCxFQUVHTixJQUZILENBRVEsVUFBQ08sYUFBRCxFQUFtQjs7QUFFekIsWUFBSUMsTUFBTUMsT0FBTyxrQkFBUCxFQUEyQkMsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0NoQixLQUFLLGdCQUFMLENBQS9DLElBQXlFZSxPQUFPRSxLQUFQLENBQWEsbUNBQWIsRUFBa0RELE9BQWxELENBQTBELFNBQTFELEVBQXFFaEIsS0FBSyxPQUFMLENBQXJFLENBQW5GOztBQUVBLFlBQUlrQixVQUFVO0FBQ1osaUJBQU9KLEdBREs7QUFFWixvQkFBVSxNQUZFO0FBR1osa0JBQVEsTUFISTtBQUlaLHFCQUFXO0FBQ1QsNEJBQWdCLEVBRFA7QUFFVCx5Q0FBNkI7QUFGcEIsV0FKQztBQVFaLGtCQUFRO0FBUkksU0FBZDs7QUFXQUksZ0JBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDbkIsS0FBSywyQkFBTCxDQUEvQzs7QUFFQSxnQkFBUUEsS0FBSyxjQUFMLENBQVI7QUFDRSxlQUFLLGtCQUFMO0FBQ0VrQixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZSxhQUFhcEIsS0FBS3FCLEdBQWxCLEdBQXdCLElBQXZDO0FBQ0E7QUFDRixlQUFLLDBCQUFMO0FBQ0VILG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlcEIsS0FBS29CLElBQXBCO0FBQ0E7QUFDRixlQUFLLHFCQUFMO0FBQ0VGLG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlcEIsS0FBS29CLElBQUwsQ0FBVUUsTUFBekI7QUFDQTtBQVpKOztBQWVBMUIsV0FBR3NCLE9BQUgsRUFBWVosSUFBWixDQUFpQixVQUFTaUIsTUFBVCxFQUFpQjs7QUFFaENyQixrQkFBUXNCLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFSO0FBRUQsU0FKRCxFQUlHWixLQUpILENBSVMsVUFBU0MsR0FBVCxFQUFjOztBQUVyQlQsaUJBQU9TLEdBQVA7QUFFRCxTQVJELEVBUUdjLElBUkg7QUFTRCxPQTNDRDtBQTRDRCxLQTlDRCxFQThDR2YsS0E5Q0gsQ0E4Q1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCVCxhQUFPUyxHQUFQO0FBQ0QsS0FoREQ7QUFpREQsR0FwRE0sQ0FBUDtBQXFERCxDIiwiZmlsZSI6InJlY29nbml6ZS1kb21haW4tc3BlY2lmaWMtY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlY29nbml6ZS1kb21haW4tc3BlY2lmaWMtY29udGVudC5qc1xuXG5jb25zdCBycCA9IHJlcXVpcmUoJ3JlcXVlc3QtcHJvbWlzZScpO1xuY29uc3QgbG9hZEpzb25GaWxlID0gcmVxdWlyZSgnbG9hZC1qc29uLWZpbGUnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgdXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgLy8gbG9hZCBjb25maWdcbiAgICBsb2FkSnNvbkZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbmZpZy5qc29uJykpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIC8vIHZhbGlkYXRlIHBhcmFtZXRlcnNcbiAgICAgIFByb21pc2UuYWxsKFt1dGlsaXR5LmNoZWNrQ29udGVudFR5cGUoX29wdCksIHV0aWxpdHkuY2hlY2tNb2RlbHMoX29wdCksIHV0aWxpdHkuY2hlY2tSZXF1ZXN0T3JpZ2luKF9vcHQpXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSkudGhlbigocHJvbWlzZVJlc3VsdCkgPT4ge1xuXG4gICAgICAgIGxldCB1cmkgPSBjb25maWdbXCJyZXF1ZXN0LWJhc2UtVVJMXCJdLnJlcGxhY2UoL3tvcmlnaW59LywgX29wdFtcInJlcXVlc3Qtb3JpZ2luXCJdKSArIGNvbmZpZy5yb3V0ZVtcInJlY29nbml6ZS1kb21haW4tc3BlY2lmaWMtY29udGVudFwiXS5yZXBsYWNlKC97bW9kZWx9LywgX29wdFtcIm1vZGVsXCJdKTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBcInVyaVwiOiB1cmksXG4gICAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYm9keVwiOiBcIlwiXG4gICAgICAgIH07XG5cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXSA9IF9vcHRbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdO1xuXG4gICAgICAgIHN3aXRjaCAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSkge1xuICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9qc29uXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSAne1widXJsXCI6XCInICsgX29wdC51cmwgKyAnXCJ9JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5ib2R5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5ib2R5LmJ1ZmZlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcnAob3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHQpKTtcblxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblxuICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH0pLmRvbmUoKTtcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfSlcbiAgfSlcbn07XG4iXX0=