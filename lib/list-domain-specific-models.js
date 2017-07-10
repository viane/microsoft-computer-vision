'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// list-domain-specific-models.js

var rp = require('request-promise');
var loadJsonFile = require('load-json-file');

exports.default = function (_opt) {

    return new Promise(function (resolve, reject) {

        var uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/models";

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
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHMuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwibG9hZEpzb25GaWxlIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJpIiwib3B0aW9ucyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiY2F0Y2giLCJlcnIiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLElBQU1BLEtBQUtDLFFBQVEsaUJBQVIsQ0FBWDtBQUNBLElBQU1DLGVBQWVELFFBQVEsZ0JBQVIsQ0FBckI7O2tCQUVjLFVBQUNFLElBQUQsRUFBVTs7QUFFcEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7O0FBR3JDLFlBQU1DLE1BQU0sMkRBQTJELFNBQXZFOztBQUVBLFlBQUlDLFVBQVU7QUFDVixtQkFBT0QsR0FERztBQUVWLHNCQUFVLEtBRkE7QUFHVixvQkFBUSxLQUhFO0FBSVYsdUJBQVc7QUFDUCw2Q0FBNkI7QUFEdEI7QUFKRCxTQUFkOztBQVNBQyxnQkFBUUMsT0FBUixDQUFnQiwyQkFBaEIsSUFBK0NOLEtBQUssMkJBQUwsQ0FBL0M7O0FBRUFILFdBQUdRLE9BQUgsRUFBWUUsSUFBWixDQUFpQixVQUFTQyxNQUFULEVBQWlCOztBQUU5Qk4sb0JBQVFPLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFSO0FBRUgsU0FKRCxFQUlHRyxLQUpILENBSVMsVUFBU0MsR0FBVCxFQUFjOztBQUVuQlQsbUJBQU9TLEdBQVA7QUFFSCxTQVJELEVBUUdDLElBUkg7QUFVSCxLQTFCRSxDQUFQO0FBNkJILEMiLCJmaWxlIjoibGlzdC1kb21haW4tc3BlY2lmaWMtbW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlzdC1kb21haW4tc3BlY2lmaWMtbW9kZWxzLmpzXG5cbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuXG5leHBvcnQgZGVmYXVsdChfb3B0KSA9PiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cblxuICAgICAgICAgICAgY29uc3QgdXJpID0gXCJodHRwczovL3dlc3R1cy5hcGkuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vdmlzaW9uL3YxLjBcIiArIFwiL21vZGVsc1wiO1xuXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBcInVyaVwiOiB1cmksXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIl0gPSBfb3B0W1wiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiXTtcblxuICAgICAgICAgICAgcnAob3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHQpKTtcblxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcblxuICAgICAgICAgICAgfSkuZG9uZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbn07XG4iXX0=