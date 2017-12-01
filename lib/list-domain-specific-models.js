'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list-domain-specific-models.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const path = require('path');

exports.default = _opt => {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      // validate parameters
      Promise.all([_utility2.default.checkRequestOrigin(_opt)]).catch(err => {
        reject(err);
      }).then(promiseResult => {

        const uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["list-domain-specific-models"];

        let options = {
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
    }).catch(err => {
      reject(err);
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHMuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiY29uZmlnIiwiYWxsIiwiY2hlY2tSZXF1ZXN0T3JpZ2luIiwiY2F0Y2giLCJlcnIiLCJwcm9taXNlUmVzdWx0IiwidXJpIiwicmVwbGFjZSIsInJvdXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXN1bHQiLCJKU09OIiwicGFyc2UiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7Ozs7O0FBTEE7O0FBRUEsTUFBTUEsS0FBS0MsUUFBUSxpQkFBUixDQUFYO0FBQ0EsTUFBTUMsZUFBZUQsUUFBUSxnQkFBUixDQUFyQjtBQUNBLE1BQU1FLE9BQU9GLFFBQVEsTUFBUixDQUFiOztrQkFHZUcsSUFBRCxJQUFVOztBQUV0QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjs7QUFFM0M7QUFDQUwsaUJBQWFDLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtEQyxJQUFsRCxDQUF1REMsVUFBVTtBQUMvRDtBQUNBTixjQUFRTyxHQUFSLENBQVksQ0FBQyxrQkFBUUMsa0JBQVIsQ0FBMkJULElBQTNCLENBQUQsQ0FBWixFQUFnRFUsS0FBaEQsQ0FBdURDLEdBQUQsSUFBUztBQUM3RFIsZUFBT1EsR0FBUDtBQUNELE9BRkQsRUFFR0wsSUFGSCxDQUVTTSxhQUFELElBQW1COztBQUV6QixjQUFNQyxNQUFNTixPQUFPLGtCQUFQLEVBQTJCTyxPQUEzQixDQUFtQyxVQUFuQyxFQUErQ2QsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RU8sT0FBT1EsS0FBUCxDQUFhLDZCQUFiLENBQXJGOztBQUVBLFlBQUlDLFVBQVU7QUFDWixpQkFBT0gsR0FESztBQUVaLG9CQUFVLEtBRkU7QUFHWixrQkFBUSxLQUhJO0FBSVoscUJBQVc7QUFDVCx5Q0FBNkI7QUFEcEI7QUFKQyxTQUFkOztBQVNBRyxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0NqQixLQUFLLDJCQUFMLENBQS9DOztBQUVBSixXQUFHb0IsT0FBSCxFQUFZVixJQUFaLENBQWlCLFVBQVNZLE1BQVQsRUFBaUI7O0FBRWhDaEIsa0JBQVFpQixLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBUjtBQUVELFNBSkQsRUFJR1IsS0FKSCxDQUlTLFVBQVNDLEdBQVQsRUFBYzs7QUFFckJSLGlCQUFPUSxHQUFQO0FBRUQsU0FSRCxFQVFHVSxJQVJIO0FBU0QsT0ExQkQ7QUEyQkQsS0E3QkQsRUE2QkdYLEtBN0JILENBNkJVQyxHQUFELElBQVM7QUFDaEJSLGFBQU9RLEdBQVA7QUFDRCxLQS9CRDtBQWdDRCxHQW5DTSxDQUFQO0FBcUNELEMiLCJmaWxlIjoibGlzdC1kb21haW4tc3BlY2lmaWMtbW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlzdC1kb21haW4tc3BlY2lmaWMtbW9kZWxzLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB1dGlsaXR5IGZyb20gJy4vdXRpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAvLyBsb2FkIGNvbmZpZ1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgLy8gdmFsaWRhdGUgcGFyYW1ldGVyc1xuICAgICAgUHJvbWlzZS5hbGwoW3V0aWxpdHkuY2hlY2tSZXF1ZXN0T3JpZ2luKF9vcHQpXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSkudGhlbigocHJvbWlzZVJlc3VsdCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHVyaSA9IGNvbmZpZ1tcInJlcXVlc3QtYmFzZS1VUkxcIl0ucmVwbGFjZSgve29yaWdpbn0vLCBfb3B0W1wicmVxdWVzdC1vcmlnaW5cIl0pICsgY29uZmlnLnJvdXRlW1wibGlzdC1kb21haW4tc3BlY2lmaWMtbW9kZWxzXCJdO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIkdFVFwiLFxuICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgcnAob3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHQpKTtcblxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblxuICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH0pLmRvbmUoKTtcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfSlcbiAgfSlcblxufTtcbiJdfQ==