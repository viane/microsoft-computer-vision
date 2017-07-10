'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// describe-image.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {

            var err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now");

            reject(err);
        }

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/describe" + "?maxCandidates=" + _opt["max-candidates"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXNjcmliZS1pbWFnZS5qcyJdLCJuYW1lcyI6WyJycCIsInJlcXVpcmUiLCJsb2FkSnNvbkZpbGUiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsInVybCIsInRoZW4iLCJyZXN1bHQiLCJKU09OIiwicGFyc2UiLCJjYXRjaCIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxpQkFBUixDQUFYO0FBQ0EsSUFBTUMsZUFBZUQsUUFBUSxnQkFBUixDQUFyQjs7a0JBRWMsVUFBQ0UsSUFBRCxFQUFVOztBQUVwQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QztBQUNBLFlBQUlILEtBQUssY0FBTCxNQUF5QixrQkFBekIsSUFBK0NBLEtBQUssY0FBTCxNQUF5QiwwQkFBNUUsRUFBd0c7O0FBRXBHLGdCQUFNSSxNQUFNLElBQUlDLEtBQUosQ0FBVSw2SUFBVixDQUFaOztBQUVBRixtQkFBT0MsR0FBUDtBQUVIOztBQUdHLFlBQU1FLE1BQU0sMkRBQTJELFdBQTNELEdBQXVFLGlCQUF2RSxHQUF5Rk4sS0FBSyxnQkFBTCxDQUFyRzs7QUFFQSxZQUFJTyxVQUFVO0FBQ1YsbUJBQU9ELEdBREc7QUFFVixzQkFBVSxNQUZBO0FBR1Ysb0JBQVEsTUFIRTtBQUlWLHVCQUFXO0FBQ1AsZ0NBQWdCLEVBRFQ7QUFFUCw2Q0FBNkI7QUFGdEIsYUFKRDtBQVFWLG9CQUFRO0FBUkUsU0FBZDs7QUFXQUMsZ0JBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDUixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNJLGlCQUFLLGtCQUFMO0FBQ0lPLHdCQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCx3QkFBUUUsSUFBUixHQUFlLGFBQWFULEtBQUtVLEdBQWxCLEdBQXdCLElBQXZDO0FBQ0E7QUFDSixpQkFBSywwQkFBTDtBQUNJSCx3QkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsd0JBQVFFLElBQVIsR0FBZVQsS0FBS1MsSUFBcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWZSOztBQWtCQVosV0FBR1UsT0FBSCxFQUFZSSxJQUFaLENBQWlCLFVBQVNDLE1BQVQsRUFBaUI7O0FBRTlCVixvQkFBUVcsS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQVI7QUFFSCxTQUpELEVBSUdHLEtBSkgsQ0FJUyxVQUFTWCxHQUFULEVBQWM7O0FBRW5CRCxtQkFBT0MsR0FBUDtBQUVILFNBUkQsRUFRR1ksSUFSSDtBQVdQLEtBdkRNLENBQVA7QUF5REgsQyIsImZpbGUiOiJkZXNjcmliZS1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRlc2NyaWJlLWltYWdlLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIGNvbnRlbnQtdHlwZSBjaGVja2luZ1xuICAgICAgICBpZiAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSAhPT0gXCJhcHBsaWNhdGlvbi9qc29uXCIgJiYgX29wdFtcImNvbnRlbnQtdHlwZVwiXSAhPT0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIikge1xuXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJVbnN1cHBvcnQgY29udGVudCB0eXBlLCB0aGUgY29udGVudCB0eXBlIGNhbiBiZSBlaXRoZXIgYXBwbGljYXRpb24vanNvbiBvciBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0sIG11bHRpcGFydC9mb3JtLWRhdGEgaXMgbm90IHN1cHBvcnQgbm93XCIpXG5cbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgICAgICBjb25zdCB1cmkgPSBcImh0dHBzOi8vd2VzdHVzLmFwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS92aXNpb24vdjEuMFwiICsgXCIvZGVzY3JpYmVcIitcIj9tYXhDYW5kaWRhdGVzPVwiK19vcHRbXCJtYXgtY2FuZGlkYXRlc1wiXTtcblxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJib2R5XCI6IFwiXCJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICAgICAgc3dpdGNoIChfb3B0W1wiY29udGVudC10eXBlXCJdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2pzb25cIjpcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSAne1widXJsXCI6XCInICsgX29wdC51cmwgKyAnXCJ9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aXBhcnQvZm9ybS1kYXRhIGlzIG5vdCB3b3JraW5nIGR1ciB0aGUgbGFjayBvZiBkb2N1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmZvcm07XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcnAob3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHQpKTtcblxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICAgICAgfSkuZG9uZSgpO1xuXG5cbiAgICB9KTtcblxufTtcbiJdfQ==