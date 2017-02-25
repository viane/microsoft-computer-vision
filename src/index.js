import tagImage from './tag-image';

// common request url structure: requestBaseURL/[route]

exports.basic = () => {
    const message = 'Just NPM package template for starting quickly.';
    return message;
};

exports.getTagFromImage = (_opt) => {
    return tagImage(_opt)
};
