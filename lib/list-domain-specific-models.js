'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list-domain-specific-models.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');
var path = require('path');

exports.default = function (_opt) {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      // validate parameters
      Promise.all([_utility2.default.checkRequestOrigin(_opt)]).catch(function (err) {
        reject(err);
      }).then(function (promiseResult) {

        var uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["list-domain-specific-models"];

        var options = {
          "uri": uri,
          "method": "GET",
          "type": "GET",
          "headers": {
            "Ocp-Apim-Subscription-Key": ""
          }
        };

        options.headers["Ocp-Apim-Subscription-Key"] = _opt["Ocp-Apim-Subscription-Key"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHMuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiYWxsIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwiY29uZmlnIiwicmVwbGFjZSIsInJvdXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXN1bHQiLCJKU09OIiwicGFyc2UiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7Ozs7O0FBTEE7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxpQkFBUixDQUFYO0FBQ0EsSUFBTUMsZUFBZUQsUUFBUSxnQkFBUixDQUFyQjtBQUNBLElBQU1FLE9BQU9GLFFBQVEsTUFBUixDQUFiOztrQkFHYyxVQUFDRyxJQUFELEVBQVU7O0FBRXRCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCOztBQUUzQztBQUNBTCxpQkFBYUMsS0FBS0ssSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWIsRUFBa0RDLElBQWxELENBQXVELGtCQUFVO0FBQy9EO0FBQ0FMLGNBQVFNLEdBQVIsQ0FBWSxDQUFDLGtCQUFRQyxrQkFBUixDQUEyQlIsSUFBM0IsQ0FBRCxDQUFaLEVBQWdEUyxLQUFoRCxDQUFzRCxVQUFDQyxHQUFELEVBQVM7QUFDN0RQLGVBQU9PLEdBQVA7QUFDRCxPQUZELEVBRUdKLElBRkgsQ0FFUSxVQUFDSyxhQUFELEVBQW1COztBQUV6QixZQUFNQyxNQUFNQyxPQUFPLGtCQUFQLEVBQTJCQyxPQUEzQixDQUFtQyxVQUFuQyxFQUErQ2QsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RWEsT0FBT0UsS0FBUCxDQUFhLDZCQUFiLENBQXJGOztBQUVBLFlBQUlDLFVBQVU7QUFDWixpQkFBT0osR0FESztBQUVaLG9CQUFVLEtBRkU7QUFHWixrQkFBUSxLQUhJO0FBSVoscUJBQVc7QUFDVCx5Q0FBNkI7QUFEcEI7QUFKQyxTQUFkOztBQVNBSSxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0NqQixLQUFLLDJCQUFMLENBQS9DOztBQUVBSixXQUFHb0IsT0FBSCxFQUFZVixJQUFaLENBQWlCLFVBQVNZLE1BQVQsRUFBaUI7O0FBRWhDaEIsa0JBQVFpQixLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBUjtBQUVELFNBSkQsRUFJR1QsS0FKSCxDQUlTLFVBQVNDLEdBQVQsRUFBYzs7QUFFckJQLGlCQUFPTyxHQUFQO0FBRUQsU0FSRCxFQVFHVyxJQVJIO0FBU0QsT0ExQkQ7QUEyQkQsS0E3QkQsRUE2QkdaLEtBN0JILENBNkJTLFVBQUNDLEdBQUQsRUFBUztBQUNoQlAsYUFBT08sR0FBUDtBQUNELEtBL0JEO0FBZ0NELEdBbkNNLENBQVA7QUFxQ0QsQyIsImZpbGUiOiJsaXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHMuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHV0aWxpdHkgZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQoX29wdCkgPT4ge1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIC8vIGxvYWQgY29uZmlnXG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICAvLyB2YWxpZGF0ZSBwYXJhbWV0ZXJzXG4gICAgICBQcm9taXNlLmFsbChbdXRpbGl0eS5jaGVja1JlcXVlc3RPcmlnaW4oX29wdCldKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9KS50aGVuKChwcm9taXNlUmVzdWx0KSA9PiB7XG5cbiAgICAgICAgY29uc3QgdXJpID0gY29uZmlnW1wicmVxdWVzdC1iYXNlLVVSTFwiXS5yZXBsYWNlKC97b3JpZ2lufS8sIF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkgKyBjb25maWcucm91dGVbXCJsaXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHNcIl07XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiR0VUXCIsXG4gICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICBycChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xuXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfSkuZG9uZSgpO1xuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KVxuXG59O1xuIl19