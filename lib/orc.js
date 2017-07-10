'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// orc.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {

            var err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now");

            reject(err);
        }

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/ocr" + "?language=" + _opt.language;

        if (_opt["detect-orientation"]) {
            uri += "&detectOrientation=true";
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

            // multipart/form-data is not working dur the lack of document

            // case "multipart/form-data":
            //     options.headers["Content-Type"] = 'multipart/form-data';
            //     options.body = _opt.form;
            //     break;
        }

        rp(options).then(function (result) {

            resolve(JSON.parse(result));
        }).catch(function (err) {

            reject(err);
        }).done();
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcmMuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiRXJyb3IiLCJ1cmkiLCJsYW5ndWFnZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsInVybCIsInRoZW4iLCJyZXN1bHQiLCJKU09OIiwicGFyc2UiLCJjYXRjaCIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxpQkFBUixDQUFYO0FBQ0EsSUFBTUMsZUFBZUQsUUFBUSxnQkFBUixDQUFyQjs7a0JBRWMsVUFBQ0UsSUFBRCxFQUFVOztBQUVwQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QztBQUNBLFlBQUlILEtBQUssY0FBTCxNQUF5QixrQkFBekIsSUFBK0NBLEtBQUssY0FBTCxNQUF5QiwwQkFBNUUsRUFBd0c7O0FBRXBHLGdCQUFNSSxNQUFNLElBQUlDLEtBQUosQ0FBVSw2SUFBVixDQUFaOztBQUVBRixtQkFBT0MsR0FBUDtBQUVIOztBQU1HLFlBQUlFLE1BQU0sMkRBQTJELE1BQTNELEdBQWtFLFlBQWxFLEdBQStFTixLQUFLTyxRQUE5Rjs7QUFFQSxZQUFJUCxLQUFLLG9CQUFMLENBQUosRUFBZ0M7QUFDOUJNLG1CQUFPLHlCQUFQO0FBQ0Q7O0FBRUQsWUFBSUUsVUFBVTtBQUNWLG1CQUFPRixHQURHO0FBRVYsc0JBQVUsTUFGQTtBQUdWLG9CQUFRLE1BSEU7QUFJVix1QkFBVztBQUNQLGdDQUFnQixFQURUO0FBRVAsNkNBQTZCO0FBRnRCLGFBSkQ7QUFRVixvQkFBUTtBQVJFLFNBQWQ7O0FBV0FFLGdCQUFRQyxPQUFSLENBQWdCLDJCQUFoQixJQUErQ1QsS0FBSywyQkFBTCxDQUEvQzs7QUFFQSxnQkFBUUEsS0FBSyxjQUFMLENBQVI7QUFDSSxpQkFBSyxrQkFBTDtBQUNJUSx3QkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQUQsd0JBQVFFLElBQVIsR0FBZSxhQUFhVixLQUFLVyxHQUFsQixHQUF3QixJQUF2QztBQUNBO0FBQ0osaUJBQUssMEJBQUw7QUFDSUgsd0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELHdCQUFRRSxJQUFSLEdBQWVWLEtBQUtVLElBQXBCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFmUjs7QUFrQkFiLFdBQUdXLE9BQUgsRUFBWUksSUFBWixDQUFpQixVQUFTQyxNQUFULEVBQWlCOztBQUU5Qlgsb0JBQVFZLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFSO0FBRUgsU0FKRCxFQUlHRyxLQUpILENBSVMsVUFBU1osR0FBVCxFQUFjOztBQUVuQkQsbUJBQU9DLEdBQVA7QUFFSCxTQVJELEVBUUdhLElBUkg7QUFVSCxLQTdERSxDQUFQO0FBZ0VILEMiLCJmaWxlIjoib3JjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gb3JjLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIGNvbnRlbnQtdHlwZSBjaGVja2luZ1xuICAgICAgICBpZiAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSAhPT0gXCJhcHBsaWNhdGlvbi9qc29uXCIgJiYgX29wdFtcImNvbnRlbnQtdHlwZVwiXSAhPT0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIikge1xuXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJVbnN1cHBvcnQgY29udGVudCB0eXBlLCB0aGUgY29udGVudCB0eXBlIGNhbiBiZSBlaXRoZXIgYXBwbGljYXRpb24vanNvbiBvciBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0sIG11bHRpcGFydC9mb3JtLWRhdGEgaXMgbm90IHN1cHBvcnQgbm93XCIpXG5cbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgICAgICBsZXQgdXJpID0gXCJodHRwczovL3dlc3R1cy5hcGkuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vdmlzaW9uL3YxLjBcIiArIFwiL29jclwiK1wiP2xhbmd1YWdlPVwiK19vcHQubGFuZ3VhZ2U7XG5cbiAgICAgICAgICAgIGlmIChfb3B0W1wiZGV0ZWN0LW9yaWVudGF0aW9uXCJdKSB7XG4gICAgICAgICAgICAgIHVyaSArPSBcIiZkZXRlY3RPcmllbnRhdGlvbj10cnVlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiBcIlwiXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9qc29uXCI6XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwYXJ0L2Zvcm0tZGF0YSBpcyBub3Qgd29ya2luZyBkdXIgdGhlIGxhY2sgb2YgZG9jdW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiOlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5mb3JtO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgICAgIH0pLmRvbmUoKTtcblxuICAgICAgICB9KTtcblxuXG59O1xuIl19