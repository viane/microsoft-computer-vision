'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tag-image.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const path = require('path');

exports.default = _opt => {

  return new Promise(function (resolve, reject) {

    // load config
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      // validate parameters
      Promise.all([_utility2.default.checkContentType(_opt), _utility2.default.checkRequestOrigin(_opt)]).catch(err => {
        reject(err);
      }).then(promiseResult => {
        const uri = config["request-base-URL"].replace(/{origin}/, _opt["request-origin"]) + config.route["tag-image"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWctaW1hZ2UuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwicGF0aCIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ0aGVuIiwiY29uZmlnIiwiYWxsIiwiY2hlY2tDb250ZW50VHlwZSIsImNoZWNrUmVxdWVzdE9yaWdpbiIsImNhdGNoIiwiZXJyIiwicHJvbWlzZVJlc3VsdCIsInVyaSIsInJlcGxhY2UiLCJyb3V0ZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsInVybCIsImJ1ZmZlciIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7Ozs7QUFMQTs7QUFFQSxNQUFNQSxLQUFLQyxRQUFRLGlCQUFSLENBQVg7QUFDQSxNQUFNQyxlQUFlRCxRQUFRLGdCQUFSLENBQXJCO0FBQ0EsTUFBTUUsT0FBT0YsUUFBUSxNQUFSLENBQWI7O2tCQUdlRyxJQUFELElBQVU7O0FBRXRCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCOztBQUUzQztBQUNBTCxpQkFBYUMsS0FBS0ssSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWIsRUFBa0RDLElBQWxELENBQXVEQyxVQUFVO0FBQy9EO0FBQ0FOLGNBQVFPLEdBQVIsQ0FBWSxDQUFDLGtCQUFRQyxnQkFBUixDQUF5QlQsSUFBekIsQ0FBRCxFQUFpQyxrQkFBUVUsa0JBQVIsQ0FBMkJWLElBQTNCLENBQWpDLENBQVosRUFBZ0ZXLEtBQWhGLENBQXVGQyxHQUFELElBQVM7QUFDN0ZULGVBQU9TLEdBQVA7QUFDRCxPQUZELEVBRUdOLElBRkgsQ0FFU08sYUFBRCxJQUFtQjtBQUN6QixjQUFNQyxNQUFNUCxPQUFPLGtCQUFQLEVBQTJCUSxPQUEzQixDQUFtQyxVQUFuQyxFQUErQ2YsS0FBSyxnQkFBTCxDQUEvQyxJQUF5RU8sT0FBT1MsS0FBUCxDQUFhLFdBQWIsQ0FBckY7O0FBRUEsWUFBSUMsVUFBVTtBQUNaLGlCQUFPSCxHQURLO0FBRVosb0JBQVUsTUFGRTtBQUdaLGtCQUFRLE1BSEk7QUFJWixxQkFBVztBQUNULDRCQUFnQixFQURQO0FBRVQseUNBQTZCO0FBRnBCLFdBSkM7QUFRWixrQkFBUTtBQVJJLFNBQWQ7O0FBV0FHLGdCQUFRQyxPQUFSLENBQWdCLDJCQUFoQixJQUErQ2xCLEtBQUssMkJBQUwsQ0FBL0M7O0FBRUEsZ0JBQVFBLEtBQUssY0FBTCxDQUFSO0FBQ0UsZUFBSyxrQkFBTDtBQUNFaUIsb0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0Msa0JBQWxDO0FBQ0FELG9CQUFRRSxJQUFSLEdBQWUsYUFBYW5CLEtBQUtvQixHQUFsQixHQUF3QixJQUF2QztBQUNBO0FBQ0YsZUFBSywwQkFBTDtBQUNFSCxvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZW5CLEtBQUttQixJQUFwQjtBQUNBO0FBQ0YsZUFBSyxxQkFBTDtBQUNFRixvQkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsb0JBQVFFLElBQVIsR0FBZW5CLEtBQUttQixJQUFMLENBQVVFLE1BQXpCO0FBQ0E7QUFaSjs7QUFlQXpCLFdBQUdxQixPQUFILEVBQVlYLElBQVosQ0FBaUIsVUFBU2dCLE1BQVQsRUFBaUI7O0FBRWhDcEIsa0JBQVFxQixLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBUjtBQUVELFNBSkQsRUFJR1gsS0FKSCxDQUlTLFVBQVNDLEdBQVQsRUFBYzs7QUFFckJULGlCQUFPUyxHQUFQO0FBRUQsU0FSRCxFQVFHYSxJQVJIO0FBU0QsT0ExQ0Q7QUEyQ0QsS0E3Q0QsRUE2Q0dkLEtBN0NILENBNkNVQyxHQUFELElBQVM7QUFDaEJULGFBQU9TLEdBQVA7QUFDRCxLQS9DRDtBQWdERCxHQW5ETSxDQUFQO0FBb0RELEMiLCJmaWxlIjoidGFnLWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFnLWltYWdlLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB1dGlsaXR5IGZyb20gJy4vdXRpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAvLyBsb2FkIGNvbmZpZ1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgLy8gdmFsaWRhdGUgcGFyYW1ldGVyc1xuICAgICAgUHJvbWlzZS5hbGwoW3V0aWxpdHkuY2hlY2tDb250ZW50VHlwZShfb3B0KSwgdXRpbGl0eS5jaGVja1JlcXVlc3RPcmlnaW4oX29wdCldKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9KS50aGVuKChwcm9taXNlUmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVyaSA9IGNvbmZpZ1tcInJlcXVlc3QtYmFzZS1VUkxcIl0ucmVwbGFjZSgve29yaWdpbn0vLCBfb3B0W1wicmVxdWVzdC1vcmlnaW5cIl0pICsgY29uZmlnLnJvdXRlW1widGFnLWltYWdlXCJdO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXG4gICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJib2R5XCI6IFwiXCJcbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgc3dpdGNoIChfb3B0W1wiY29udGVudC10eXBlXCJdKSB7XG4gICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2pzb25cIjpcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9ICd7XCJ1cmxcIjpcIicgKyBfb3B0LnVybCArICdcIn0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiOlxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHkuYnVmZmVyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBycChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xuXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfSkuZG9uZSgpO1xuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KVxufTtcbiJdfQ==