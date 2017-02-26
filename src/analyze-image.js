// analyze-image.js

const rp = require('request-promise');
const loadJsonFile = require('load-json-file');

export default(_opt) => {

    return new Promise(function(resolve, reject) {
        // content-type checking
        if (_opt["content-type"] !== "application/json" && _opt["content-type"] !== "application/octet-stream") {

            const err = new Error("Unsupport content type, the content type can be either application/json or application/octet-stream, multipart/form-data is not support now")

            reject(err);

        }

        // visual-features checking
        if (!_opt["visual-features"]) {

            const err = new Error("Missing visual-features")

            reject(err);

        } else {
            // valid visual-features
            const possibleVisualFeatures = [
                "Categories",
                "Tags",
                "Description",
                "Faces",
                "ImageType",
                "Color",
                "Adult"
            ];

            const visualFeatures = _opt["visual-features"].split(/[\s,]+/);

            // cross cheking
            visualFeatures.map((inputFeature) => {
                if (possibleVisualFeatures.indexOf(inputFeature) === -1) {
                    const err = new Error("Specified feature type is not valid");
                    reject(err);
                }
            })
        }

        // details checking
        if (_opt.details && _opt.details != "Celebrities") {
            const err = new Error("Specified details is not valid");
            reject(err);
        }

        // language checking
        if (_opt.language && _opt.language != "en" && _opt.language != "cn") {
            const err = new Error("Specified language is not valid");
            reject(err);
        }



            let uri = "https://westus.api.cognitive.microsoft.com/vision/v1.0" + "/analyze" + "?visualFeatures=" + _opt["visual-features"];

            if (_opt.details) {
                uri += "&details=" + _opt.details;
            }

            if (!_opt.language) {
                uri += "&language=en";
            }

            let options = {
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

            rp(options).then(function(result) {

                resolve(JSON.parse(result));

            }).catch(function(err) {

                reject(err);

            }).done();

    });

};
