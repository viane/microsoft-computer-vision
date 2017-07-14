'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tag-image.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');
var path = require('path');

exports.default = function (_opt) {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      // validate parameters
      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(function (err) {
        reject(err);
      }).then(function (promiseResult) {
        var uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["tag-image"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWctaW1hZ2UuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiYWxsIiwiY2hlY2tDb250ZW50VHlwZSIsImNoZWNrUmVxdWVzdE9yaWdpbiIsImNhdGNoIiwiZXJyIiwicHJvbWlzZVJlc3VsdCIsInVyaSIsImNvbmZpZyIsInJlcGxhY2UiLCJyb3V0ZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsInVybCIsImJ1ZmZlciIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7Ozs7QUFMQTs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLGlCQUFSLENBQVg7QUFDQSxJQUFNQyxlQUFlRCxRQUFRLGdCQUFSLENBQXJCO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUSxNQUFSLENBQWI7O2tCQUdjLFVBQUNHLElBQUQsRUFBVTs7QUFFdEIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7O0FBRTNDO0FBQ0FMLGlCQUFhQyxLQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBYixFQUFrREMsSUFBbEQsQ0FBdUQsa0JBQVU7QUFDL0Q7QUFDQUwsY0FBUU0sR0FBUixDQUFZLENBQUMsa0JBQVFDLGdCQUFSLENBQXlCUixJQUF6QixDQUFELEVBQWlDLGtCQUFRUyxrQkFBUixDQUEyQlQsSUFBM0IsQ0FBakMsQ0FBWixFQUFnRlUsS0FBaEYsQ0FBc0YsVUFBQ0MsR0FBRCxFQUFTO0FBQzdGUixlQUFPUSxHQUFQO0FBQ0QsT0FGRCxFQUVHTCxJQUZILENBRVEsVUFBQ00sYUFBRCxFQUFtQjtBQUN6QixZQUFNQyxNQUFNQyxPQUFPLGtCQUFQLEVBQTJCQyxPQUEzQixDQUFtQyxVQUFuQyxFQUErQ2YsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RWMsT0FBT0UsS0FBUCxDQUFhLFdBQWIsQ0FBckY7O0FBRUEsWUFBSUMsVUFBVTtBQUNaLGlCQUFPSixHQURLO0FBRVosb0JBQVUsTUFGRTtBQUdaLGtCQUFRLE1BSEk7QUFJWixxQkFBVztBQUNULDRCQUFnQixFQURQO0FBRVQseUNBQTZCO0FBRnBCLFdBSkM7QUFRWixrQkFBUTtBQVJJLFNBQWQ7O0FBV0FJLGdCQUFRQyxPQUFSLENBQWdCLDJCQUFoQixJQUErQ2xCLEtBQUssMkJBQUwsQ0FBL0M7O0FBRUEsZ0JBQVFBLEtBQUssY0FBTCxDQUFSO0FBQ0UsZUFBSyxrQkFBTDtBQUNFaUIsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0Msa0JBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWUsYUFBYW5CLEtBQUtvQixHQUFsQixHQUF3QixJQUF2QztBQUNBO0FBQ0YsZUFBSywwQkFBTDtBQUNFSCxvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZW5CLEtBQUttQixJQUFwQjtBQUNBO0FBQ0YsZUFBSyxxQkFBTDtBQUNFRixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZW5CLEtBQUttQixJQUFMLENBQVVFLE1BQXpCO0FBQ0E7QUFaSjs7QUFlQXpCLFdBQUdxQixPQUFILEVBQVlYLElBQVosQ0FBaUIsVUFBU2dCLE1BQVQsRUFBaUI7O0FBRWhDcEIsa0JBQVFxQixLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBUjtBQUVELFNBSkQsRUFJR1osS0FKSCxDQUlTLFVBQVNDLEdBQVQsRUFBYzs7QUFFckJSLGlCQUFPUSxHQUFQO0FBRUQsU0FSRCxFQVFHYyxJQVJIO0FBU0QsT0ExQ0Q7QUEyQ0QsS0E3Q0QsRUE2Q0dmLEtBN0NILENBNkNTLFVBQUNDLEdBQUQsRUFBUztBQUNoQlIsYUFBT1EsR0FBUDtBQUNELEtBL0NEO0FBZ0RELEdBbkRNLENBQVA7QUFvREQsQyIsImZpbGUiOiJ0YWctaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWctaW1hZ2UuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHV0aWxpdHkgZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQoX29wdCkgPT4ge1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIC8vIGxvYWQgY29uZmlnXG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICAvLyB2YWxpZGF0ZSBwYXJhbWV0ZXJzXG4gICAgICBQcm9taXNlLmFsbChbdXRpbGl0eS5jaGVja0NvbnRlbnRUeXBlKF9vcHQpLCB1dGlsaXR5LmNoZWNrUmVxdWVzdE9yaWdpbihfb3B0KV0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0pLnRoZW4oKHByb21pc2VSZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgdXJpID0gY29uZmlnW1wicmVxdWVzdC1iYXNlLVVSTFwiXS5yZXBsYWNlKC97b3JpZ2lufS8sIF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkgKyBjb25maWcucm91dGVbXCJ0YWctaW1hZ2VcIl07XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJvZHlcIjogXCJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICBzd2l0Y2ggKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pIHtcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keS5idWZmZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICB9KS5kb25lKCk7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pXG4gIH0pXG59O1xuIl19