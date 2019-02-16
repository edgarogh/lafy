const lafy = require('./index');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const { expect } = chai;

describe("lafy", () => {

    function callbackAfter5ms(returnValue, callback) {
        setTimeout(() => {
            callback(null, returnValue);
        }, 5);
    }

    function errorAfter5ms(callback) {
        setTimeout(() => {
            callback(new Error("I'm an evil error !"));
        }, 5);
    }

    it("should asynchronously return callback value", async () => {
        expect(lafy(cb => callbackAfter5ms(42, cb))).to.eventually.equal(42);
    });

    it("should asynchronously throw an error", async () => {
        expect(lafy(cb => errorAfter5ms(cb))).to.be.rejectedWith(Error);
    });

});
