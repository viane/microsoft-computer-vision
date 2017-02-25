import app from 'index';

describe('app', () => {
    it('returns string', () => {
        expect(typeof(app.basic())).to.equal('string');
    });
});

describe('Tag Image function', () => {

    it('Should return the result from Tag Image API', function() { // no done
        // note the return
        return app.getTagFromImage().then(function(data) {
            expect(data).to.be.true;
        });
    });
});
