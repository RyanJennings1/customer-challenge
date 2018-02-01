const assert = require('assert');
const calculate = require('../lib/calculations');
const constants = require('../lib/constants');

describe('Calculations', () => {
  describe('#toRadians()', () => {
    it('should convert degrees to radians', () => {
      assert.equal(calculate.toRadians(114.592), 2.000007696445342);
    });
  });

  describe('#isInDistance()', () => {
    it('should return true if second param is less than or equal to the first param', () => {
      assert.equal(calculate.isInDistance(constants.distance, 99999), true);
    });
  });

  describe('#calcDistance()', () => {
    it('should return distance in metres between two points on the earth\'s surface', () => {
      assert.equal(
          Math.round(calculate.calcDistance(53.339428, -6.257664, 52.986375, -6.043701)), 
          41769);
    });
  });

  describe('#distanceFromOffice()', () => {
    it('should return distance in metres between a point and the office location', () => {
      assert.equal(
          Math.round(calculate.distanceFromOffice(52.986375, -6.043701)), 
          41769);
    });
  });
});

