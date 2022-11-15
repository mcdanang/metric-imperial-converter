const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    test("Decimal number input", function(done) {
      let input = "3.2gal";
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });
    test("Fractional input", function(done) {
      let input = "3/2mi";
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });
    test("Fractional input with a decimal", function(done) {
      let input = "3.5/7km";
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    test("Invalid input on a double-fraction", function(done) {
      let input = "3/2/3lbs";
      assert.equal(convertHandler.getNum(input), null);
      done();
    });
    test("No numerical input", function(done) {
      let input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
    test("Correctly read each valid unit input", function(done) {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(32 + ele), ele);
      });
      done();
    });
    test("Invalid input unit", function(done) {
      let input = "100g";
      assert.equal(convertHandler.getUnit(input), null);
      done();
    });
    test("Return the correct return unit for each valid input unit", function(done) {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      const output = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), output[i]);
      });
      done();
    });
    test("Correctly return the spelled-out string unit for each valid input unit", function(done) {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      const output = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), output[i]);
      });
      done();
    });
    test("Convert gal to L", function(done) {
      let input = [5, "gal"];
      let expected = 18.92705;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    test("Convert L to gal", function(done) {
      let input = [5, "L"];
      let expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    test("Convert mi to km", function(done) {
      let input = [5, "mi"];
      let expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    test("Convert km to mi", function(done) {
      let input = [5, "km"];
      let expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    test("Convert lbs to kg", function(done) {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    test("Convert kg to lbs", function(done) {
      let input = [5, "kg"];
      let expected = 11.02312;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    
  });
});