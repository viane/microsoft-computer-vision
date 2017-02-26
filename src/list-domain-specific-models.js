// list-domain-specific-models.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const appRoot = require('app-root-path');

export default(_opt) => {

    return new Promise(function(resolve, reject) {

        loadJsonFile(appRoot + '/config/config.json').then(config => {

            const uri = config.requestBaseURL + config.route["List-Domain-Specific-Models"];

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

    });

};
