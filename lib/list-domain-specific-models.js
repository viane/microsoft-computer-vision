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