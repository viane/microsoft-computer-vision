// list-domain-specific-models.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');

export default(_opt) => {

    return new Promise(function(resolve, reject) {


            const uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/models";

            let options = {
                "uri": uri,
                "method": "GET",
                "type": "GET",
                "headers": {
                    "Ocp-Apim-Subscription-Key": ""
                }
            };

            options.headers["Ocp-Apim-Subscription-Key"] = _opt["Ocp-Apim-Subscription-Key"];

            rp(options).then(function(result) {

                resolve(JSON.parse(result));

            }).catch(function(err) {

                reject(err);

            }).done();

        });


};
