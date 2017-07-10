'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// get-thumbnail.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {

            var err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now");

            reject(err);
        }

        // params checking
        if (!_opt.width || !_opt.height) {
            var _err = new Error("Missing specification of width or height");

            reject(_err);
        }

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/generateThumbnail" + "?width=" + _opt.width + "&height=" + _opt.height;

        if (_opt["smart-cropping"]) {
            uri += "&smartCropping=" + _opt["smart-cropping"];
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

        rp(options).then(function (thumbnailBinary) {

            resolve(thumbnailBinary);
        }).catch(function (err) {

            reject(err);
        }).done();
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtdGh1bWJuYWlsLmpzIl0sIm5hbWVzIjpbInJwIiwicmVxdWlyZSIsImxvYWRKc29uRmlsZSIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsIkVycm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ1cmkiLCJvcHRpb25zIiwiaGVhZGVycyIsImJvZHkiLCJ1cmwiLCJ0aGVuIiwidGh1bWJuYWlsQmluYXJ5IiwiY2F0Y2giLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7O2tCQUVjLFVBQUNFLElBQUQsRUFBVTs7QUFFcEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7QUFDQSxZQUFJSCxLQUFLLGNBQUwsTUFBeUIsa0JBQXpCLElBQStDQSxLQUFLLGNBQUwsTUFBeUIsMEJBQTVFLEVBQXdHOztBQUVwRyxnQkFBTUksTUFBTSxJQUFJQyxLQUFKLENBQVUsNklBQVYsQ0FBWjs7QUFFQUYsbUJBQU9DLEdBQVA7QUFFSDs7QUFFRDtBQUNBLFlBQUksQ0FBQ0osS0FBS00sS0FBTixJQUFlLENBQUNOLEtBQUtPLE1BQXpCLEVBQWlDO0FBQy9CLGdCQUFNSCxPQUFNLElBQUlDLEtBQUosQ0FBVSwwQ0FBVixDQUFaOztBQUVBRixtQkFBT0MsSUFBUDtBQUNEOztBQUdHLFlBQUlJLE1BQU0sMkRBQTJELG9CQUEzRCxHQUFrRixTQUFsRixHQUE4RlIsS0FBS00sS0FBbkcsR0FBMkcsVUFBM0csR0FBd0hOLEtBQUtPLE1BQXZJOztBQUVBLFlBQUlQLEtBQUssZ0JBQUwsQ0FBSixFQUE0QjtBQUN4QlEsbUJBQU8sb0JBQW9CUixLQUFLLGdCQUFMLENBQTNCO0FBQ0g7O0FBRUQsWUFBSVMsVUFBVTtBQUNWLG1CQUFPRCxHQURHO0FBRVYsc0JBQVUsTUFGQTtBQUdWLG9CQUFRLE1BSEU7QUFJVix1QkFBVztBQUNQLGdDQUFnQixFQURUO0FBRVAsNkNBQTZCO0FBRnRCLGFBSkQ7QUFRVixvQkFBUTtBQVJFLFNBQWQ7O0FBV0FDLGdCQUFRQyxPQUFSLENBQWdCLDJCQUFoQixJQUErQ1YsS0FBSywyQkFBTCxDQUEvQzs7QUFFQSxnQkFBUUEsS0FBSyxjQUFMLENBQVI7QUFDSSxpQkFBSyxrQkFBTDtBQUNJUyx3QkFBUUMsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQUQsd0JBQVFFLElBQVIsR0FBZSxhQUFhWCxLQUFLWSxHQUFsQixHQUF3QixJQUF2QztBQUNBO0FBQ0osaUJBQUssMEJBQUw7QUFDSUgsd0JBQVFDLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsMEJBQWxDO0FBQ0FELHdCQUFRRSxJQUFSLEdBQWVYLEtBQUtXLElBQXBCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFmUjs7QUFrQkFkLFdBQUdZLE9BQUgsRUFBWUksSUFBWixDQUFpQixVQUFTQyxlQUFULEVBQTBCOztBQUV2Q1osb0JBQVFZLGVBQVI7QUFFSCxTQUpELEVBSUdDLEtBSkgsQ0FJUyxVQUFTWCxHQUFULEVBQWM7O0FBRW5CRCxtQkFBT0MsR0FBUDtBQUVILFNBUkQsRUFRR1ksSUFSSDtBQVVILEtBakVFLENBQVA7QUFvRUgsQyIsImZpbGUiOiJnZXQtdGh1bWJuYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2V0LXRodW1ibmFpbC5qc1xuXG5jb25zdCBycCA9IHJlcXVpcmUoJ3JlcXVlc3QtcHJvbWlzZScpO1xuY29uc3QgbG9hZEpzb25GaWxlID0gcmVxdWlyZSgnbG9hZC1qc29uLWZpbGUnKTtcblxuZXhwb3J0IGRlZmF1bHQoX29wdCkgPT4ge1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBjb250ZW50LXR5cGUgY2hlY2tpbmdcbiAgICAgICAgaWYgKF9vcHRbXCJjb250ZW50LXR5cGVcIl0gIT09IFwiYXBwbGljYXRpb24vanNvblwiICYmIF9vcHRbXCJjb250ZW50LXR5cGVcIl0gIT09IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIpIHtcblxuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiVW5zdXBwb3J0IGNvbnRlbnQgdHlwZSwgdGhlIGNvbnRlbnQgdHlwZSBjYW4gYmUgZWl0aGVyIGFwcGxpY2F0aW9uL2pzb24gb3IgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLCBtdWx0aXBhcnQvZm9ybS1kYXRhIGlzIG5vdCBzdXBwb3J0IG5vd1wiKVxuXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyYW1zIGNoZWNraW5nXG4gICAgICAgIGlmICghX29wdC53aWR0aCB8fCAhX29wdC5oZWlnaHQpIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJNaXNzaW5nIHNwZWNpZmljYXRpb24gb2Ygd2lkdGggb3IgaGVpZ2h0XCIpXG5cbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGxldCB1cmkgPSBcImh0dHBzOi8vd2VzdHVzLmFwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS92aXNpb24vdjEuMFwiICsgXCIvZ2VuZXJhdGVUaHVtYm5haWxcIiArIFwiP3dpZHRoPVwiICsgX29wdC53aWR0aCArIFwiJmhlaWdodD1cIiArIF9vcHQuaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoX29wdFtcInNtYXJ0LWNyb3BwaW5nXCJdKSB7XG4gICAgICAgICAgICAgICAgdXJpICs9IFwiJnNtYXJ0Q3JvcHBpbmc9XCIgKyBfb3B0W1wic21hcnQtY3JvcHBpbmdcIl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIFwidXJpXCI6IHVyaSxcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiBcIlwiXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdID0gX29wdFtcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoX29wdFtcImNvbnRlbnQtdHlwZVwiXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9qc29uXCI6XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gJ3tcInVybFwiOlwiJyArIF9vcHQudXJsICsgJ1wifSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjpcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwYXJ0L2Zvcm0tZGF0YSBpcyBub3Qgd29ya2luZyBkdXIgdGhlIGxhY2sgb2YgZG9jdW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiOlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9ucy5ib2R5ID0gX29wdC5mb3JtO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJwKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24odGh1bWJuYWlsQmluYXJ5KSB7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRodW1ibmFpbEJpbmFyeSk7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgICAgIH0pLmRvbmUoKTtcblxuICAgICAgICB9KTtcblxuXG59O1xuIl19