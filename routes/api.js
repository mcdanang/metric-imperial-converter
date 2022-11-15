'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app.route('/api/convert')
    .get((req,res) => {
      if (req.query.input) {  
        let initNum = convertHandler.getNum(req.query.input);
        let initUnit = convertHandler.getUnit(req.query.input);
        // console.log('num: ', initNum, 'unit: ', initUnit)
        
        if (!initUnit && !initNum) {
          res.send("invalid number and unit");
        } else if (!initNum) {
          res.send("invalid number");
        } else if (!initUnit) {
          res.send("invalid unit");
        } else {
          
          let returnUnit = convertHandler.getReturnUnit(initUnit);
          let returnNum = convertHandler.convert(initNum, initUnit);
          
          res.json({
            "initNum": initNum,
            "initUnit": initUnit,
            "returnNum": returnNum,
            "returnUnit": returnUnit,
            "string": initNum + " " + convertHandler.spellOutUnit(initUnit) + " converts to " + returnNum + " " + convertHandler.spellOutUnit(returnUnit)
          });
        }
      }
    });
  
  // app.get('/api/users/:_id/logs', async (req, res) => {
  //   const id = req.params._id;
  //   const fields = { '__v': 0, 'log._id': 0 };
  //   const doc = await User.findById({_id: id}).select(fields).then( (result) => {
  //     if (req.query.from || req.query.to) {
  //       let fromDate = new Date(0);
  //       let toDate = new Date();
  
  //       if (req.query.from) {
  //         fromDate = new Date(req.query.from);
  //       }
        
  //       if (req.query.to) {
  //         toDate = new Date(req.query.to);
  //       }
  
  //       console.log(fromDate, toDate);
  
  //       fromDate = fromDate.getTime();
  //       toDate = toDate.getTime();
  
  //       console.log(fromDate, toDate);
        
  //       result.log = result.log.filter( (session) => {
  //         let sessionDate = new Date(session.date).getTime();
  //         return sessionDate >= fromDate && sessionDate <= toDate;
  //       });
  //     }
  //     if (req.query.limit) {
  //       result.log = result.log.slice(0, req.query.limit);
  //     }
  //     result.count = result.log.length;
  //     res.json(result);
  //   });
  // });

};
