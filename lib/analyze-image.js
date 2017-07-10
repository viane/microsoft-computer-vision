'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// analyze-image.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {

            var err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now");

            reject(err);
        }

        // visual-features checking
        if (!_opt["visual-features"]) {

            var _err = new Error("Missing visual-features");

            reject(_err);
        } else {
            // valid visual-features
            var possibleVisualFeatures = ["Categories", "Tags", "Description", "Faces", "ImageType", "Color", "Adult"];

            var visualFeatures = _opt["visual-features"].split(/[\s,]+/);

            // cross cheking
            visualFeatures.map(function (inputFeature) {
                if (possibleVisualFeatures.indexOf(inputFeature) === -1) {
                    var _err2 = new Error("Specified feature type is not valid");
                    reject(_err2);
                }
            });
        }

        // details checking
        if (_opt.details && _opt.details != "Celebrities") {
            var _err3 = new Error("Specified details is not valid");
            reject(_err3);
        }

        // language checking
        if (_opt.language && _opt.language != "en" && _opt.language != "cn") {
            var _err4 = new Error("Specified language is not valid");
            reject(_err4);
        }

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/analyze" + "?visualFeatures=" + _opt["visual-features"];

        if (_opt.details) {
            uri += "&details=" + _opt.details;
        }

        if (!_opt.language) {
            uri += "&language=en";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmFseXplLWltYWdlLmpzIl0sIm5hbWVzIjpbInJwIiwicmVxdWlyZSIsImxvYWRKc29uRmlsZSIsIl9vcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsIkVycm9yIiwicG9zc2libGVWaXN1YWxGZWF0dXJlcyIsInZpc3VhbEZlYXR1cmVzIiwic3BsaXQiLCJtYXAiLCJpbnB1dEZlYXR1cmUiLCJpbmRleE9mIiwiZGV0YWlscyIsImxhbmd1YWdlIiwidXJpIiwib3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwidGhlbiIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsImNhdGNoIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLGlCQUFSLENBQVg7QUFDQSxJQUFNQyxlQUFlRCxRQUFRLGdCQUFSLENBQXJCOztrQkFFYyxVQUFDRSxJQUFELEVBQVU7O0FBRXBCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDO0FBQ0EsWUFBSUgsS0FBSyxjQUFMLE1BQXlCLGtCQUF6QixJQUErQ0EsS0FBSyxjQUFMLE1BQXlCLDBCQUE1RSxFQUF3Rzs7QUFFcEcsZ0JBQU1JLE1BQU0sSUFBSUMsS0FBSixDQUFVLDZJQUFWLENBQVo7O0FBRUFGLG1CQUFPQyxHQUFQO0FBRUg7O0FBRUQ7QUFDQSxZQUFJLENBQUNKLEtBQUssaUJBQUwsQ0FBTCxFQUE4Qjs7QUFFMUIsZ0JBQU1JLE9BQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQVo7O0FBRUFGLG1CQUFPQyxJQUFQO0FBRUgsU0FORCxNQU1PO0FBQ0g7QUFDQSxnQkFBTUUseUJBQXlCLENBQzNCLFlBRDJCLEVBRTNCLE1BRjJCLEVBRzNCLGFBSDJCLEVBSTNCLE9BSjJCLEVBSzNCLFdBTDJCLEVBTTNCLE9BTjJCLEVBTzNCLE9BUDJCLENBQS9COztBQVVBLGdCQUFNQyxpQkFBaUJQLEtBQUssaUJBQUwsRUFBd0JRLEtBQXhCLENBQThCLFFBQTlCLENBQXZCOztBQUVBO0FBQ0FELDJCQUFlRSxHQUFmLENBQW1CLFVBQUNDLFlBQUQsRUFBa0I7QUFDakMsb0JBQUlKLHVCQUF1QkssT0FBdkIsQ0FBK0JELFlBQS9CLE1BQWlELENBQUMsQ0FBdEQsRUFBeUQ7QUFDckQsd0JBQU1OLFFBQU0sSUFBSUMsS0FBSixDQUFVLHFDQUFWLENBQVo7QUFDQUYsMkJBQU9DLEtBQVA7QUFDSDtBQUNKLGFBTEQ7QUFNSDs7QUFFRDtBQUNBLFlBQUlKLEtBQUtZLE9BQUwsSUFBZ0JaLEtBQUtZLE9BQUwsSUFBZ0IsYUFBcEMsRUFBbUQ7QUFDL0MsZ0JBQU1SLFFBQU0sSUFBSUMsS0FBSixDQUFVLGdDQUFWLENBQVo7QUFDQUYsbUJBQU9DLEtBQVA7QUFDSDs7QUFFRDtBQUNBLFlBQUlKLEtBQUthLFFBQUwsSUFBaUJiLEtBQUthLFFBQUwsSUFBaUIsSUFBbEMsSUFBMENiLEtBQUthLFFBQUwsSUFBaUIsSUFBL0QsRUFBcUU7QUFDakUsZ0JBQU1ULFFBQU0sSUFBSUMsS0FBSixDQUFVLGlDQUFWLENBQVo7QUFDQUYsbUJBQU9DLEtBQVA7QUFDSDs7QUFJRyxZQUFJVSxNQUFNLDJEQUEyRCxVQUEzRCxHQUF3RSxrQkFBeEUsR0FBNkZkLEtBQUssaUJBQUwsQ0FBdkc7O0FBRUEsWUFBSUEsS0FBS1ksT0FBVCxFQUFrQjtBQUNkRSxtQkFBTyxjQUFjZCxLQUFLWSxPQUExQjtBQUNIOztBQUVELFlBQUksQ0FBQ1osS0FBS2EsUUFBVixFQUFvQjtBQUNoQkMsbUJBQU8sY0FBUDtBQUNIOztBQUVELFlBQUlDLFVBQVU7QUFDVixtQkFBT0QsR0FERztBQUVWLHNCQUFVLE1BRkE7QUFHVixvQkFBUSxNQUhFO0FBSVYsdUJBQVc7QUFDUCxnQ0FBZ0IsRUFEVDtBQUVQLDZDQUE2QjtBQUZ0QixhQUpEO0FBUVYsb0JBQVE7QUFSRSxTQUFkOztBQVdBQyxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0NoQixLQUFLLDJCQUFMLENBQS9DOztBQUVBLGdCQUFRQSxLQUFLLGNBQUwsQ0FBUjtBQUNJLGlCQUFLLGtCQUFMO0FBQ0llLHdCQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBRCx3QkFBUUUsSUFBUixHQUFlLGFBQWFqQixLQUFLa0IsR0FBbEIsR0FBd0IsSUFBdkM7QUFDQTtBQUNKLGlCQUFLLDBCQUFMO0FBQ0lILHdCQUFRQyxPQUFSLENBQWdCLGNBQWhCLElBQWtDLDBCQUFsQztBQUNBRCx3QkFBUUUsSUFBUixHQUFlakIsS0FBS2lCLElBQXBCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFmUjs7QUFrQkFwQixXQUFHa0IsT0FBSCxFQUFZSSxJQUFaLENBQWlCLFVBQVNDLE1BQVQsRUFBaUI7O0FBRTlCbEIsb0JBQVFtQixLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBUjtBQUVILFNBSkQsRUFJR0csS0FKSCxDQUlTLFVBQVNuQixHQUFULEVBQWM7O0FBRW5CRCxtQkFBT0MsR0FBUDtBQUVILFNBUkQsRUFRR29CLElBUkg7QUFVUCxLQXpHTSxDQUFQO0FBMkdILEMiLCJmaWxlIjoiYW5hbHl6ZS1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuYWx5emUtaW1hZ2UuanNcblxuY29uc3QgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5cbmV4cG9ydCBkZWZhdWx0KF9vcHQpID0+IHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gY29udGVudC10eXBlIGNoZWNraW5nXG4gICAgICAgIGlmIChfb3B0W1wiY29udGVudC10eXBlXCJdICE9PSBcImFwcGxpY2F0aW9uL2pzb25cIiAmJiBfb3B0W1wiY29udGVudC10eXBlXCJdICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlVuc3VwcG9ydCBjb250ZW50IHR5cGUsIHRoZSBjb250ZW50IHR5cGUgY2FuIGJlIGVpdGhlciBhcHBsaWNhdGlvbi9qc29uIG9yIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSwgbXVsdGlwYXJ0L2Zvcm0tZGF0YSBpcyBub3Qgc3VwcG9ydCBub3dcIilcblxuICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZpc3VhbC1mZWF0dXJlcyBjaGVja2luZ1xuICAgICAgICBpZiAoIV9vcHRbXCJ2aXN1YWwtZmVhdHVyZXNcIl0pIHtcblxuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiTWlzc2luZyB2aXN1YWwtZmVhdHVyZXNcIilcblxuICAgICAgICAgICAgcmVqZWN0KGVycik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHZhbGlkIHZpc3VhbC1mZWF0dXJlc1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWaXN1YWxGZWF0dXJlcyA9IFtcbiAgICAgICAgICAgICAgICBcIkNhdGVnb3JpZXNcIixcbiAgICAgICAgICAgICAgICBcIlRhZ3NcIixcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJGYWNlc1wiLFxuICAgICAgICAgICAgICAgIFwiSW1hZ2VUeXBlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2xvclwiLFxuICAgICAgICAgICAgICAgIFwiQWR1bHRcIlxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY29uc3QgdmlzdWFsRmVhdHVyZXMgPSBfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdLnNwbGl0KC9bXFxzLF0rLyk7XG5cbiAgICAgICAgICAgIC8vIGNyb3NzIGNoZWtpbmdcbiAgICAgICAgICAgIHZpc3VhbEZlYXR1cmVzLm1hcCgoaW5wdXRGZWF0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlVmlzdWFsRmVhdHVyZXMuaW5kZXhPZihpbnB1dEZlYXR1cmUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgZmVhdHVyZSB0eXBlIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRldGFpbHMgY2hlY2tpbmdcbiAgICAgICAgaWYgKF9vcHQuZGV0YWlscyAmJiBfb3B0LmRldGFpbHMgIT0gXCJDZWxlYnJpdGllc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgZGV0YWlscyBpcyBub3QgdmFsaWRcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxhbmd1YWdlIGNoZWNraW5nXG4gICAgICAgIGlmIChfb3B0Lmxhbmd1YWdlICYmIF9vcHQubGFuZ3VhZ2UgIT0gXCJlblwiICYmIF9vcHQubGFuZ3VhZ2UgIT0gXCJjblwiKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgbGFuZ3VhZ2UgaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIGxldCB1cmkgPSBcImh0dHBzOi8vd2VzdHVzLmFwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS92aXNpb24vdjEuMFwiICsgXCIvYW5hbHl6ZVwiICsgXCI/dmlzdWFsRmVhdHVyZXM9XCIgKyBfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdO1xuXG4gICAgICAgICAgICBpZiAoX29wdC5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgdXJpICs9IFwiJmRldGFpbHM9XCIgKyBfb3B0LmRldGFpbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghX29wdC5sYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgIHVyaSArPSBcIiZsYW5ndWFnZT1lblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBcInVyaVwiOiB1cmksXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImJvZHlcIjogXCJcIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXSA9IF9vcHRbXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCJdO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9ICd7XCJ1cmxcIjpcIicgKyBfb3B0LnVybCArICdcIn0nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBfb3B0LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpcGFydC9mb3JtLWRhdGEgaXMgbm90IHdvcmtpbmcgZHVyIHRoZSBsYWNrIG9mIGRvY3VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbnMuYm9keSA9IF9vcHQuZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBycChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xuXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuXG4gICAgICAgICAgICB9KS5kb25lKCk7XG5cbiAgICB9KTtcblxufTtcbiJdfQ==