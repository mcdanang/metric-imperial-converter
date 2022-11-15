function ConvertHandler() {
  
  this.getNum = function(input) {
    const result = input.match(/^(?<num>\d*(\.\d+)?(\/\d+(\.\d+)?)?)(?<unit>([a-z]+))$/i);
    if (result && !result.groups["num"]) {
      // console.log('no number')
      return 1;
    } else if (result && result.groups["num"]) {
      // console.log('valid number')
      return eval(result.groups["num"]);
    } else {
      // console.log('invalid number')
      return null;
    }
  };
  
  this.getUnit = function(input) {
    const result = input.match(/(?<unit>([a-z]+))$/i);
    const resultUnit = result.groups["unit"].match(/^gal$|^l$|^lbs$|^kg$|^mi$|^km$/i);
    if (!resultUnit) {
      return null;
    }
    if (resultUnit[0].match(/^gal$/i)) return "gal";
    if (resultUnit[0].match(/^l$/i)) return "L";
    if (resultUnit[0].match(/^lbs$/i)) return "lbs";
    if (resultUnit[0].match(/^kg$/i)) return "kg";
    if (resultUnit[0].match(/^mi$/i)) return "mi";
    if (resultUnit[0].match(/^km$/i)) return "km";
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case "gal":
        return "L";
        break;
      case "L":
        return "gal";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case "gal":
        return "gallons";
        break;
      case "L":
        return "liters";
        break;
      case "lbs":
        return "pounds";
        break;
      case "kg":
        return "kilograms";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const roundTo5 = num => Math.round(num * 100000) / 100000;
    
    let result;
    switch(initUnit) {
      case "gal":
        result = initNum * 3.78541;
        break;
      case "L":
        result = initNum * 0.264172;
        break;
      case "lbs":
        result = initNum * 0.453592;
        break;
      case "kg":
        result = initNum * 2.204624;
        break;
      case "mi":
        result = initNum * 1.60934;
        break;
      case "km":
        result = initNum * 0.62137273665;
        break;
    }
    return roundTo5(result, 5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
