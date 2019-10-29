// A sample Mocha test
const {Telephony} = require('nativescript-telephony')


var assert = require('assert');
describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function(done) {
			this.timeout(5000);
			console.log("teste básico")
			assert.equal([1+1], 2);
			let simData;
			let imei;
			Telephony().then((responseDevice) => {
				simData = responseDevice;
				imei = simData.deviceId;
				assert.equal(imei, 358240051111110);
				done();
			});
		});
	});
});