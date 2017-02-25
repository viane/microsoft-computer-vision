// tag-image.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');
const appRoot = require('app-root-path');

export default(_opt) => {
    return new Promise(function(resolve, reject) {
        loadJsonFile(appRoot + '/config/config.json').then(config => {
            const uri = config.requestBaseURL + config.route["Tag-Image"];
            let options = {
                "uri": uri,
                "method": "POST",
                "type": "POST",
                "resolveWithFullResponse": "",
                "headers": {
                    "Content-Type": "",
                    "Ocp-Apim-Subscription-Key": ""
                },
                resolveWithFullResponse: true
            };
            options.headers["Ocp-Apim-Subscription-Key"] = _opt["Ocp-Apim-Subscription-Key"];
            // check content type is either json, stream or form-data
            switch (_opt["content-type"]) {
                case "application/json":
                    options.headers["content-type"] = 'application/json';
                    options.body = '{"url":"' + _opt.url + '"}';
                    break;
                case "application/octet-stream":

                    break;
                case "multipart/form-data":

                    break;
                default:
                    throw new Error("Unsupport content type, the content type can be either application/json, application/octet-stream or multipart/form-data");
            }

            rp(options).then(function(result) {
                resolve(result);
            }).catch(function(err) {
                throw err;
                reject(err);
            });
        });

    });

};
