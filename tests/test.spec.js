import microsofComputerVision from 'index';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.use(require('chai-fs'));
const expect = chai.expect;
const assert = chai.assert;
const fs = require('fs');
const myKey = "fa789153b75a46e3a13fc5433e8bbe07";

describe('#tagImage()', () => {
    it('Should return an array of tags by image URI', function() {
        this.timeout(2500);
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";
        const contentType = "application/json";

        const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": contentType, "url": imageUrl});

        return expect(result).to.eventually.have.property("tags");
    });

    it('Should return an array of tags by image binary', function() {
        this.timeout(2500);
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": contentType, "url": data});

            return expect(result).to.eventually.have.property("tags");
        })

    });

});

describe('#analyzeImage()', () => {
    it('Should return an array of faces by image URI', function() {
        this.timeout(2500);
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "visual-features": "Faces"});

        return expect(result).to.eventually.have.property("faces");
    });

    it('Should return an array of faces by image binary', function() {
        this.timeout(2500);
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "visual-features": "Faces"});

            return expect(result).to.eventually.have.property("faces");
        })

    });

});

describe('#describeImage()', () => {
    it('Should return a description of image URI', function() {
        this.timeout(2500);
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "max-candidates": "2"});

        return expect(result).to.eventually.have.property("description");
    });

    it('Should return a description of image binary', function() {
        this.timeout(2500);
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "max-candidates": "2"});

            return expect(result).to.eventually.have.property("description");
        })

    });

});

describe('#imageThumbnail()', () => {
    it('Should write the thumbnail of image URI to /tests/image/thumbnail.jpg', function() {
        this.timeout(2500);
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.imageThumbnail({
            "Ocp-Apim-Subscription-Key": myKey,
            "content-type": "application/json",
            "url": imageUrl,
            "width": "100",
            "height": "100",
            "smart-cropping": true
        });
        return expect(result).to.not.eventually.have.property("code");

    });

    it('Should write the thumbnail of image binary to /tests/image/thumbnail.jpg', function() {
        this.timeout(2500);
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.imageThumbnail({
                "Ocp-Apim-Subscription-Key": myKey,
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

describe('#orcImage()', () => {
    it('Should return the Optical Character Recognition of image URI', function() {
        this.timeout(2500);
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

        const result = microsofComputerVision.orcImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": "http://cdn.quotesgram.com/img/81/49/660235022-Random-Funny-Quotes-.jpg", "language": "en", "detect-orientation": true});
        return expect(result).to.eventually.have.property("regions");

    });

    it('Should return the Optical Character Recognition of image binary', function() {
        this.timeout(2500);
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/tests/image/orcTest.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.orcImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "language": "en", "detect-orientation": true});

            return expect(result).to.eventually.have.property("regions");
        });
    });
});

describe('#listDomainSpecificModels()', () => {
    it('Should return the available models', function() {
        this.timeout(2500);
        const result = microsofComputerVision.listDomainSpecificModels({"Ocp-Apim-Subscription-Key": myKey});

        return expect(result).to.eventually.have.deep.property("models");

    });
});

describe('#recognizeDomainSpecificContent()', () => {
    it('Should return the Optical Character Recognition of image URI', function() {
        this.timeout(2500);
        const result = microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": "http://d.ibtimes.co.uk/en/full/377533/bill-gates.jpg", "model": "celebrities"});
        return expect(result).to.eventually.have.deep.property("result.celebrities");

    });

    it('Should return the Optical Character Recognition of image binary', function() {
        this.timeout(2500);
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/tests/image/RDSCTest.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "model": "celebrities"});

            return expect(result).to.eventually.have.deep.property("result.celebrities");
        });
    });
});
