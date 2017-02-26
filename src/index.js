import getTagFromImage from './tag-image';
import getAnalysisFromImage from './analyze-image';
import getDescriptionFromImage from './describe-image';
import getThumbnailFromImage from './get-thumbnail';
import getORCFromImage from './orc';
import getRDSC from './recognize-domain-specific-content';

exports.analyzeImage = (_opt) => {
    if (_opt) {
        return getAnalysisFromImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#analyze-image");
            reject(err);
        });
    }
};

exports.describeImage = (_opt) => {
    if (_opt) {
        return getDescriptionFromImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#tag-image");
            reject(err);
        });
    }
};

exports.imageThumbnail = (_opt) => {
    if (_opt) {
        return getThumbnailFromImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#image-thumbnail");
            reject(err);
        });
    }
};

exports.orcImage = (_opt) => {
    if (_opt) {
        return getORCFromImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#orc-image");
            reject(err);
        });
    }
};

exports.recognizeDomainSpecificContent = (_opt) => {
    if (_opt) {
        return getRDSC(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#recognize-domain-specific-content");
            reject(err);
        });
    }
};

exports.tagImage = (_opt) => {
    if (_opt) {
        return getTagFromImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#describe-image");
            reject(err);
        });
    }
};
