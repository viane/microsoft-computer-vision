// tag-image.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const appRoot = require('app-root-path');

export default(_opt) => {

    return new Promise(function(resolve, reject) {

        loadJsonFile(appRoot + '/config/config.js').then(config => {
            const requestUri = config.requestBaseURL + config.route["Tag-Image"],
                subscriptionKey = _opt["Ocp-Apim-Subscription-Key"],
                contentType = _opt["content-type"];

            // check content type is either json, stream or form-data
                 
            const  dataUrl = _opt.data

            console.log(options);

            rp(options).then(function(parsedBody) {
                // POST succeeded...
            }).catch(function(err) {
                // POST failed...
            });

            if (options.url.length == 0) {
                reject(false);
                return;
            }
            resolve(true);
        });

    });

};
