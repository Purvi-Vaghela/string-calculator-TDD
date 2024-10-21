import { expect } from 'chai';
import { add } from './stringCalculator.js';

describe('String Calculator', () => {

    // empty string
    it('should return 0 for an empty string', () => {
        expect(add("")).to.equal(0);
    });

    // single number
    it('should return the number itself for a single number', () => {
         expect(add("1")).to.equal(1);
     });
         // sum of two numbers
    it('should return the sum of two numbers', () => {
        expect(add("1,2")).to.equal(3);
    });


});
