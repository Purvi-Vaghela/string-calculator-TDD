import { expect } from "chai";
import { add } from "./stringCalculator.js";

describe("String Calculator", () => {
    // Test for an empty string
    it("should return 0 for an empty string", () => {
        expect(add("")).to.equal(0);
    });

    // Test for a single number
    it("should return the number itself for a single number", () => {
        expect(add("1")).to.equal(1);
    });

    // Test for the sum of two numbers
    it("should return the sum of two numbers", () => {
        expect(add("1,2")).to.equal(3);
    });

    // Test for the sum of multiple numbers
    it("should return the sum of multiple numbers", () => {
        expect(add("1,2,3")).to.equal(6);
    });

    // Test for handling new lines between numbers
    it("should handle new lines", () => {
        expect(add("1\n2,3")).to.equal(6);
    });

    // Test for handling custom delimiters
    it("should handle custom delimiters", () => {
        expect(add("//;\n1;2")).to.equal(3);
    });

    // Test for throwing an error with a single negative number
    it("should throw an error for negative numbers", () => {
        expect(() => add("1,-2,3")).to.throw("Negative numbers not allowed: -2");
    });

    // Test for showing all negative numbers in the error message
    it("should show all negative numbers in the error message", () => {
        expect(() => add("1,-2,-3")).to.throw("Negative numbers not allowed: -2, -3");
    });
});
