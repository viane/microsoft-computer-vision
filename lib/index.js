'use strict';

var _tagImage = require('./tag-image');

var _tagImage2 = _interopRequireDefault(_tagImage);

var _analyzeImage = require('./analyze-image');

var _analyzeImage2 = _interopRequireDefault(_analyzeImage);

var _describeImage = require('./describe-image');

var _describeImage2 = _interopRequireDefault(_describeImage);

var _getThumbnail = require('./get-thumbnail');

var _getThumbnail2 = _interopRequireDefault(_getThumbnail);

var _orc = require('./orc');

var _orc2 = _interopRequireDefault(_orc);

var _recognizeDomainSpecificContent = require('./recognize-domain-specific-content');

var _recognizeDomainSpecificContent2 = _interopRequireDefault(_recognizeDomainSpecificContent);

var _listDomainSpecificModels = require('./list-domain-specific-models');

var _listDomainSpecificModels2 = _interopRequireDefault(_listDomainSpecificModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.analyzeImage = function (_opt) {
    if (_opt) {
        return (0, _analyzeImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#analyze-image");
            reject(err);
        });
    }
};

exports.describeImage = function (_opt) {
    if (_opt) {
        return (0, _describeImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#tag-image");
            reject(err);
        });
    }
};

exports.imageThumbnail = function (_opt) {
    if (_opt) {
        return (0, _getThumbnail2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#image-thumbnail");
            reject(err);
        });
    }
};

exports.orcImage = function (_opt) {
    if (_opt) {
        return (0, _orc2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#orc-image");
            reject(err);
        });
    }
};

exports.listDomainSpecificModels = function (_opt) {
    if (_opt) {
        return (0, _listDomainSpecificModels2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#list-domain-specific-models");
            reject(err);
        });
    }
};

exports.recognizeDomainSpecificContent = function (_opt) {
    if (_opt) {
        return (0, _recognizeDomainSpecificContent2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#recognize-domain-specific-content");
            reject(err);
        });
    }
};

exports.tagImage = function (_opt) {
    if (_opt) {
        return (0, _tagImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#describe-image");
            reject(err);
        });
    }
};