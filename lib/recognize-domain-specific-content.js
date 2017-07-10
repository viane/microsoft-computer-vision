'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// recognize-domain-specific-content.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {
            var err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now");
            reject(err);
        }

        if (!_opt.model) {
            var _err = new Error("Specified model type is not valid");
            reject(_err);
        }

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/models/{model}/analyze";
        uri = uri.replace("{model}", _opt.model);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiRXJyb3IiLCJtb2RlbCIsInVyaSIsInJlcGxhY2UiLCJvcHRpb25zIiwiaGVhZGVycyIsImJvZHkiLCJ1cmwiLCJ0aGVuIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiY2F0Y2giLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7O2tCQUVjLFVBQUNFLElBQUQsRUFBVTs7QUFFcEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7QUFDQSxZQUFJSCxLQUFLLGNBQUwsTUFBeUIsa0JBQXpCLElBQStDQSxLQUFLLGNBQUwsTUFBeUIsMEJBQTVFLEVBQXdHO0FBQ3BHLGdCQUFNSSxNQUFNLElBQUlDLEtBQUosQ0FBVSw2SUFBVixDQUFaO0FBQ0FGLG1CQUFPQyxHQUFQO0FBQ0g7O0FBRUQsWUFBSSxDQUFDSixLQUFLTSxLQUFWLEVBQWlCO0FBQ2YsZ0JBQU1GLE9BQU0sSUFBSUMsS0FBSixDQUFVLG1DQUFWLENBQVo7QUFDQUYsbUJBQU9DLElBQVA7QUFDRDs7QUFHRyxZQUFJRyxNQUFNLDJEQUEyRCx5QkFBckU7QUFDQUEsY0FBTUEsSUFBSUMsT0FBSixDQUFZLFNBQVosRUFBdUJSLEtBQUtNLEtBQTVCLENBQU47QUFDQSxZQUFJRyxVQUFVO0FBQ1YsbUJBQU9GLEdBREc7QUFFVixzQkFBVSxNQUZBO0FBR1Ysb0JBQVEsTUFIRTtBQUlWLHVCQUFXO0FBQ1AsZ0NBQWdCLEVBRFQ7QUFFUCw2Q0FBNkI7QUFGdEIsYUFKRDtBQVFWLG9CQUFRO0FBUkUsU0FBZDs7QUFXQUUsZ0JBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDVixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNJLGlCQUFLLGtCQUFMO0FBQ0lTLHdCQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCx3QkFBUUUsSUFBUixHQUFlLGFBQWFYLEtBQUtZLEdBQWxCLEdBQXdCLElBQXZDO0FBQ0E7QUFDSixpQkFBSywwQkFBTDtBQUNJSCx3QkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsd0JBQVFFLElBQVIsR0FBZVgsS0FBS1csSUFBcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWZSOztBQWtCQWQsV0FBR1ksT0FBSCxFQUFZSSxJQUFaLENBQWlCLFVBQVNDLE1BQVQsRUFBaUI7O0FBRTlCWixvQkFBUWEsS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQVI7QUFFSCxTQUpELEVBSUdHLEtBSkgsQ0FJUyxVQUFTYixHQUFULEVBQWM7O0FBRW5CRCxtQkFBT0MsR0FBUDtBQUVILFNBUkQsRUFRR2MsSUFSSDtBQVVILEtBeERFLENBQVA7QUEyREgsQyIsImZpbGUiOiJyZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gY29udGVudC10eXBlIGNoZWNraW5nXG4gICAgICAgIGlmIChfb3B0W1wiY29udGVudC10eXBlXCJdICE9PSBcImFwcGxpY2F0aW9uL2pzb25cIiAmJiBfb3B0W1wiY29udGVudC10eXBlXCJdICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJVbnN1cHBvcnQgY29udGVudCB0eXBlLCB0aGUgY29udGVudCB0eXBlIGNhbiBiZSBlaXRoZXIgYXBwbGljYXRpb24vanNvbiBvciBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0sIG11bHRpcGFydC9mb3JtLWRhdGEgaXMgbm90IHN1cHBvcnQgbm93XCIpXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX29wdC5tb2RlbCkge1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlNwZWNpZmllZCBtb2RlbCB0eXBlIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGxldCB1cmkgPSBcImh0dHBzOi8vd2VzdHVzLmFwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS92aXNpb24vdjEuMFwiICsgXCIvbW9kZWxzL3ttb2RlbH0vYW5hbHl6ZVwiO1xuICAgICAgICAgICAgdXJpID0gdXJpLnJlcGxhY2UoXCJ7bW9kZWx9XCIsIF9vcHQubW9kZWwpO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgXCJ1cmlcIjogdXJpLFxuICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJib2R5XCI6IFwiXCJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICAgICAgc3dpdGNoIChfb3B0W1wiY29udGVudC10eXBlXCJdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL2pzb25cIjpcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSAne1widXJsXCI6XCInICsgX29wdC51cmwgKyAnXCJ9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aXBhcnQvZm9ybS1kYXRhIGlzIG5vdCB3b3JraW5nIGR1ciB0aGUgbGFjayBvZiBkb2N1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmZvcm07XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcnAob3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHQpKTtcblxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICAgICAgfSkuZG9uZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbn07XG4iXX0=