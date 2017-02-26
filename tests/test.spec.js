import microsofComputerVision from 'index';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.use(require('chai-fs'));
const expect = chai.expect;
const assert = chai.assert;
const appRoot = require('app-root-path');
const fs =require('fs');

describe('#tagImage()', () => {
    it('Should return an array of tags by image URI', () => {
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";
        const contentType = "application/json";

        const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": contentType, "url": imageUrl});

        return expect(result).to.eventually.have.property("tags");
    });

    it('Should return an array of tags by image binary', () => {
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": contentType, "url": data});

            return expect(result).to.eventually.have.property("tags");
        })

    });

});

describe('#analyzeImage()', () => {
    it('Should return an array of faces by image URI', () => {
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl, "visual-features": "Faces"});

        return expect(result).to.eventually.have.property("faces");
    });

    it('Should return an array of faces by image binary', () => {
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data, "visual-features": "Faces"});

            return expect(result).to.eventually.have.property("faces");
        })

    });

});

describe('#describeImage()', () => {
    it('Should return a description of image URI', () => {
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/json", "url": imageUrl, "max-candidates": "2"});

        return expect(result).to.eventually.have.property("description");
    });

    it('Should return a description of image binary', () => {
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": "application/octet-stream", "body": data, "max-candidates": "2"});

            return expect(result).to.eventually.have.property("description");
        })

    });

});

describe('#imageThumbnail()', () => {
    it('Should write the thumbnail of image URI to /tests/image/thumbnail.jpg', () => {
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.imageThumbnail({
            "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33",
            "content-type": "application/json",
            "url": imageUrl,
            "width": "100",
            "height": "100",
            "smart-cropping": true
        });
        return expect(result).to.not.eventually.have.property("code");

    });

    it('Should write the thumbnail of image binary to /tests/image/thumbnail.jpg', () => {
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.imageThumbnail({
                "Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33",
                "content-type": "application/octet-stream",
                "body": data,
                "width": "100",
                "height": "100",
                "smart-cropping": true
            });

            return expect(result).to.not.eventually.have.property("code");
        });
    });
});
