import tagImage from './tag-image';

exports.getTagFromImage = (_opt) => {
    if (_opt) {
        return tagImage(_opt)
    } else {
        return new Promise(function(resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#tag-image");
            reject(err);
        });
    }
};
