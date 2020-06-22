// use this library to test our code
const assert = require('assert');

//reference our app code so we can test it 
// does not yet exist.
const app = require('../app.js');

describe('Vehicle Rating Calculator', function () {
    it('calculates a rating of 10 for a vehicle with 4 cylinders and diesel fuel', function () {
        const smallCar = app.smallCar;
        const rating = app.calculateVehicleRating(smallCar);
        assert.equal(rating, 10);
    });
}); 