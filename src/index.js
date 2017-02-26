import getTagFromImage from './tag-image';
import getAnalysisFromImage from './analyze-image';
import getDescriptionFromImage from './describe-image';

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

exports.tagImage = (_opt) => {
    if (_opt) {
        return getTagFromImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#tag-image");
            reject(err);
        });
    }
};
