'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// tag-image.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {

            var err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now");

            reject(err);
        }

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/tag";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWctaW1hZ2UuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiaGVhZGVycyIsImJvZHkiLCJ1cmwiLCJ0aGVuIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiY2F0Y2giLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7O2tCQUVjLFVBQUNFLElBQUQsRUFBVTs7QUFFcEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7QUFDQSxZQUFJSCxLQUFLLGNBQUwsTUFBeUIsa0JBQXpCLElBQStDQSxLQUFLLGNBQUwsTUFBeUIsMEJBQTVFLEVBQXdHOztBQUVwRyxnQkFBTUksTUFBTSxJQUFJQyxLQUFKLENBQVUsNklBQVYsQ0FBWjs7QUFFQUYsbUJBQU9DLEdBQVA7QUFFSDs7QUFJRyxZQUFNRSxNQUFNLDJEQUEwRCxNQUF0RTs7QUFFQSxZQUFJQyxVQUFVO0FBQ1YsbUJBQU9ELEdBREc7QUFFVixzQkFBVSxNQUZBO0FBR1Ysb0JBQVEsTUFIRTtBQUlWLHVCQUFXO0FBQ1AsZ0NBQWdCLEVBRFQ7QUFFUCw2Q0FBNkI7QUFGdEIsYUFKRDtBQVFWLG9CQUFRO0FBUkUsU0FBZDs7QUFXQUMsZ0JBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDUixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNJLGlCQUFLLGtCQUFMO0FBQ0lPLHdCQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCx3QkFBUUUsSUFBUixHQUFlLGFBQWFULEtBQUtVLEdBQWxCLEdBQXdCLElBQXZDO0FBQ0E7QUFDSixpQkFBSywwQkFBTDtBQUNJSCx3QkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQywwQkFBbEM7QUFDQUQsd0JBQVFFLElBQVIsR0FBZVQsS0FBS1MsSUFBcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWZSOztBQWtCQVosV0FBR1UsT0FBSCxFQUFZSSxJQUFaLENBQWlCLFVBQVNDLE1BQVQsRUFBaUI7O0FBRTlCVixvQkFBUVcsS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQVI7QUFFSCxTQUpELEVBSUdHLEtBSkgsQ0FJUyxVQUFTWCxHQUFULEVBQWM7O0FBRW5CRCxtQkFBT0MsR0FBUDtBQUVILFNBUkQsRUFRR1ksSUFSSDtBQVVILEtBdkRFLENBQVA7QUEwREgsQyIsImZpbGUiOiJ0YWctaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWctaW1hZ2UuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gY29udGVudC10eXBlIGNoZWNraW5nXG4gICAgICAgIGlmIChfb3B0W1wiY29udGVudC10eXBlXCJdICE9PSBcImFwcGxpY2F0aW9uL2pzb25cIiAmJiBfb3B0W1wiY29udGVudC10eXBlXCJdICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlVuc3VwcG9ydCBjb250ZW50IHR5cGUsIHRoZSBjb250ZW50IHR5cGUgY2FuIGJlIGVpdGhlciBhcHBsaWNhdGlvbi9qc29uIG9yIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSwgbXVsdGlwYXJ0L2Zvcm0tZGF0YSBpcyBub3Qgc3VwcG9ydCBub3dcIilcblxuICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgY29uc3QgdXJpID0gXCJodHRwczovL3dlc3R1cy5hcGkuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vdmlzaW9uL3YxLjBcIisgXCIvdGFnXCI7XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiBcIlwiXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9qc29uXCI6XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwYXJ0L2Zvcm0tZGF0YSBpcyBub3Qgd29ya2luZyBkdXIgdGhlIGxhY2sgb2YgZG9jdW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiOlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5mb3JtO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0KSk7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgICAgIH0pLmRvbmUoKTtcblxuICAgICAgICB9KTtcblxuXG59O1xuIl19