import app from 'index';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;

describe('app', () => {
    it('returns string', () => {
        expect(typeof(app.basic())).to.equal('string');
    });
});

describe('#getTagFromImage()', () => {
    it('Should return an array of tags by image URI', () => {
        const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";
        const contentType = "application/json";

        const result = app.getTagFromImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": contentType, "url": imageUrl});

        return expect(result).to.eventually.have.property("tags");
    });

    it('Should return an array of tags by image binary', () => {
        const fs = require('fs');
        const contentType = "application/octet-stream";
        return fs.readFile('/image/test.jpg', function(err, data) {
            if (err) {
                throw err;
            }

            const result = app.getTagFromImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": contentType, "url": data});

            return expect(result).to.eventually.have.property("tags");
        })

    });

});
