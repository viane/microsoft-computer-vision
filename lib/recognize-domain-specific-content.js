'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// recognize-domain-specific-content.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const path = require('path');

exports.default = _opt => {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      // validate parameters
      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkModels(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(err => {
        reject(err);
      }).then(promiseResult => {

        let uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["recognize-domain-specific-content"].replace(/{model}/, _opt["model"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiY29uZmlnIiwiYWxsIiwiY2hlY2tDb250ZW50VHlwZSIsImNoZWNrTW9kZWxzIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwicmVwbGFjZSIsInJvdXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLE1BQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLE1BQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxNQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2VHLElBQUQsSUFBVTs7QUFFdEIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7O0FBRTNDO0FBQ0FMLGlCQUFhQyxLQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBYixFQUFrREMsSUFBbEQsQ0FBdURDLFVBQVU7QUFDL0Q7QUFDQU4sY0FBUU8sR0FBUixDQUFZLENBQUMsa0JBQVFDLGdCQUFSLENBQXlCVCxJQUF6QixDQUFELEVBQWlDLGtCQUFRVSxXQUFSLENBQW9CVixJQUFwQixDQUFqQyxFQUE0RCxrQkFBUVcsa0JBQVIsQ0FBMkJYLElBQTNCLENBQTVELENBQVosRUFBMkdZLEtBQTNHLENBQWtIQyxHQUFELElBQVM7QUFDeEhWLGVBQU9VLEdBQVA7QUFDRCxPQUZELEVBRUdQLElBRkgsQ0FFU1EsYUFBRCxJQUFtQjs7QUFFekIsWUFBSUMsTUFBTVIsT0FBTyxrQkFBUCxFQUEyQlMsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0NoQixLQUFLLGdCQUFMLENBQS9DLElBQXlFTyxPQUFPVSxLQUFQLENBQWEsbUNBQWIsRUFBa0RELE9BQWxELENBQTBELFNBQTFELEVBQXFFaEIsS0FBSyxPQUFMLENBQXJFLENBQW5GOztBQUVBLFlBQUlrQixVQUFVO0FBQ1osaUJBQU9ILEdBREs7QUFFWixvQkFBVSxNQUZFO0FBR1osa0JBQVEsTUFISTtBQUlaLHFCQUFXO0FBQ1QsNEJBQWdCLEVBRFA7QUFFVCx5Q0FBNkI7QUFGcEIsV0FKQztBQVFaLGtCQUFRO0FBUkksU0FBZDs7QUFXQUcsZ0JBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDbkIsS0FBSywyQkFBTCxDQUEvQzs7QUFFQSxnQkFBUUEsS0FBSyxjQUFMLENBQVI7QUFDRSxlQUFLLGtCQUFMO0FBQ0VrQixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZSxhQUFhcEIsS0FBS3FCLEdBQWxCLEdBQXdCLElBQXZDO0FBQ0E7QUFDRixlQUFLLDBCQUFMO0FBQ0VILG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlcEIsS0FBS29CLElBQXBCO0FBQ0E7QUFDRixlQUFLLHFCQUFMO0FBQ0VGLG9CQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCxvQkFBUUUsSUFBUixHQUFlcEIsS0FBS29CLElBQUwsQ0FBVUUsTUFBekI7QUFDQTtBQVpKOztBQWVBMUIsV0FBR3NCLE9BQUgsRUFBWVosSUFBWixDQUFpQixVQUFTaUIsTUFBVCxFQUFpQjs7QUFFaENyQixrQkFBUXNCLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFSO0FBRUQsU0FKRCxFQUlHWCxLQUpILENBSVMsVUFBU0MsR0FBVCxFQUFjOztBQUVyQlYsaUJBQU9VLEdBQVA7QUFFRCxTQVJELEVBUUdhLElBUkg7QUFTRCxPQTNDRDtBQTRDRCxLQTlDRCxFQThDR2QsS0E5Q0gsQ0E4Q1VDLEdBQUQsSUFBUztBQUNoQlYsYUFBT1UsR0FBUDtBQUNELEtBaEREO0FBaURELEdBcERNLENBQVA7QUFxREQsQyIsImZpbGUiOiJyZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHV0aWxpdHkgZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQoX29wdCkgPT4ge1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIC8vIGxvYWQgY29uZmlnXG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICAvLyB2YWxpZGF0ZSBwYXJhbWV0ZXJzXG4gICAgICBQcm9taXNlLmFsbChbdXRpbGl0eS5jaGVja0NvbnRlbnRUeXBlKF9vcHQpLCB1dGlsaXR5LmNoZWNrTW9kZWxzKF9vcHQpLCB1dGlsaXR5LmNoZWNrUmVxdWVzdE9yaWdpbihfb3B0KV0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0pLnRoZW4oKHByb21pc2VSZXN1bHQpID0+IHtcblxuICAgICAgICBsZXQgdXJpID0gY29uZmlnW1wicmVxdWVzdC1iYXNlLVVSTFwiXS5yZXBsYWNlKC97b3JpZ2lufS8sIF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkgKyBjb25maWcucm91dGVbXCJyZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnRcIl0ucmVwbGFjZSgve21vZGVsfS8sIF9vcHRbXCJtb2RlbFwiXSk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJvZHlcIjogXCJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICBzd2l0Y2ggKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pIHtcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keS5idWZmZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICB9KS5kb25lKCk7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pXG4gIH0pXG59O1xuIl19