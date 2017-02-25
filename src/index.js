import tagImage from './tag-image';

// common request url structure: requestBaseURL/[route]

exports.basic = () => {
    const message = 'Just NPM package template for starting quickly.';
    return message;
};

exports.getTagFromImage = () => {

    // prep API request option

    // return promise
    return tagImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "json", "data": "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg"})
};
