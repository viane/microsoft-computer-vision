'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// orc.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');
var path = require('path');

exports.default = function (_opt) {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      // validate parameters
      Promise.all([_utility2.default.checkLanguage(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(function (err) {
        reject(err);
      }).then(function (promiseResult) {

        var uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["orc"];

        if (!_opt.language) {
          _opt.language = 'unk';
        }

        uri += "?language=" + _opt.language;

        if (_opt["detect-orientation"]) {
          uri += "&detectOrientation =true";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcmMuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiYWxsIiwiY2hlY2tMYW5ndWFnZSIsImNoZWNrUmVxdWVzdE9yaWdpbiIsImNhdGNoIiwiZXJyIiwicHJvbWlzZVJlc3VsdCIsInVyaSIsImNvbmZpZyIsInJlcGxhY2UiLCJyb3V0ZSIsImxhbmd1YWdlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiYnVmZmVyIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUxBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxJQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7a0JBR2MsVUFBQ0csSUFBRCxFQUFVOztBQUV0QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjs7QUFFM0M7QUFDQUwsaUJBQWFDLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtEQyxJQUFsRCxDQUF1RCxrQkFBVTtBQUMvRDtBQUNBTCxjQUFRTSxHQUFSLENBQVksQ0FBQyxrQkFBUUMsYUFBUixDQUFzQlIsSUFBdEIsQ0FBRCxFQUE4QixrQkFBUVMsa0JBQVIsQ0FBMkJULElBQTNCLENBQTlCLENBQVosRUFBNkVVLEtBQTdFLENBQW1GLFVBQUNDLEdBQUQsRUFBUztBQUMxRlIsZUFBT1EsR0FBUDtBQUNELE9BRkQsRUFFR0wsSUFGSCxDQUVRLFVBQUNNLGFBQUQsRUFBbUI7O0FBRXpCLFlBQUlDLE1BQU1DLE9BQU8sa0JBQVAsRUFBMkJDLE9BQTNCLENBQW1DLFVBQW5DLEVBQStDZixLQUFLLGdCQUFMLENBQS9DLElBQXlFYyxPQUFPRSxLQUFQLENBQWEsS0FBYixDQUFuRjs7QUFFQSxZQUFJLENBQUNoQixLQUFLaUIsUUFBVixFQUFvQjtBQUNsQmpCLGVBQUtpQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBRURKLGVBQU8sZUFBZWIsS0FBS2lCLFFBQTNCOztBQUVBLFlBQUlqQixLQUFLLG9CQUFMLENBQUosRUFBZ0M7QUFDOUJhLGlCQUFPLDBCQUFQO0FBQ0Q7O0FBRUQsWUFBSUssVUFBVTtBQUNaLGlCQUFPTCxHQURLO0FBRVosb0JBQVUsTUFGRTtBQUdaLGtCQUFRLE1BSEk7QUFJWixxQkFBVztBQUNULDRCQUFnQixFQURQO0FBRVQseUNBQTZCO0FBRnBCLFdBSkM7QUFRWixrQkFBUTtBQVJJLFNBQWQ7O0FBV0FLLGdCQUFRQyxPQUFSLENBQWdCLDJCQUFoQixJQUErQ25CLEtBQUssMkJBQUwsQ0FBL0M7O0FBRUEsZ0JBQVFBLEtBQUssY0FBTCxDQUFSO0FBQ0UsZUFBSyxrQkFBTDtBQUNFa0Isb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0Msa0JBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWUsYUFBYXBCLEtBQUtxQixHQUFsQixHQUF3QixJQUF2QztBQUNBO0FBQ0YsZUFBSywwQkFBTDtBQUNFSCxvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZXBCLEtBQUtvQixJQUFwQjtBQUNBO0FBQ0YsZUFBSyxxQkFBTDtBQUNFRixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZXBCLEtBQUtvQixJQUFMLENBQVVFLE1BQXpCO0FBQ0E7QUFaSjs7QUFlQTFCLFdBQUdzQixPQUFILEVBQVlaLElBQVosQ0FBaUIsVUFBU2lCLE1BQVQsRUFBaUI7O0FBRWhDckIsa0JBQVFzQixLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBUjtBQUVELFNBSkQsRUFJR2IsS0FKSCxDQUlTLFVBQVNDLEdBQVQsRUFBYzs7QUFFckJSLGlCQUFPUSxHQUFQO0FBRUQsU0FSRCxFQVFHZSxJQVJIO0FBU0QsT0FyREQ7QUFzREQsS0F4REQsRUF3REdoQixLQXhESCxDQXdEUyxVQUFDQyxHQUFELEVBQVM7QUFDaEJSLGFBQU9RLEdBQVA7QUFDRCxLQTFERDtBQTJERCxHQTlETSxDQUFQO0FBK0RELEMiLCJmaWxlIjoib3JjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gb3JjLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB1dGlsaXR5IGZyb20gJy4vdXRpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAvLyBsb2FkIGNvbmZpZ1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgLy8gdmFsaWRhdGUgcGFyYW1ldGVyc1xuICAgICAgUHJvbWlzZS5hbGwoW3V0aWxpdHkuY2hlY2tMYW5ndWFnZShfb3B0KSwgdXRpbGl0eS5jaGVja1JlcXVlc3RPcmlnaW4oX29wdCldKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9KS50aGVuKChwcm9taXNlUmVzdWx0KSA9PiB7XG5cbiAgICAgICAgbGV0IHVyaSA9IGNvbmZpZ1tcInJlcXVlc3QtYmFzZS1VUkxcIl0ucmVwbGFjZSgve29yaWdpbn0vLCBfb3B0W1wicmVxdWVzdC1vcmlnaW5cIl0pICsgY29uZmlnLnJvdXRlW1wib3JjXCJdO1xuXG4gICAgICAgIGlmICghX29wdC5sYW5ndWFnZSkge1xuICAgICAgICAgIF9vcHQubGFuZ3VhZ2UgPSAndW5rJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVyaSArPSBcIj9sYW5ndWFnZT1cIiArIF9vcHQubGFuZ3VhZ2U7XG5cbiAgICAgICAgaWYgKF9vcHRbXCJkZXRlY3Qtb3JpZW50YXRpb25cIl0pIHtcbiAgICAgICAgICB1cmkgKz0gXCImZGV0ZWN0T3JpZW50YXRpb24gPXRydWVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXG4gICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJib2R5XCI6IFwiXCJcbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgc3dpdGNoIChfb3B0W1wiY29udGVudC10eXBlXCJdKSB7XG4gICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2pzb25cIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9ICd7XCJ1cmxcIjpcIicgKyBfb3B0LnVybCArICdcIn0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHkuYnVmZmVyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBycChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xuXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfSkuZG9uZSgpO1xuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KVxufTtcbiJdfQ==