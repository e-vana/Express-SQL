//Setup imports
const express = require('express');
const router = express.Router();
const CatchErrors = require("../util/catchErrors")
const sqlite3 = require('sqlite3').verbose();

//Util Functions

//CORS
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});





router.get("/", CatchErrors(async (req, res) => {
  let db = new sqlite3.Database('./db/test.db', (err) => {
    if(err){
      throw {message: err}
    }

    var sql = "SELECT * FROM meals";
    db.all(sql, function(err, rows){
      if(err){
        throw {message: err}

      }
      res.send(rows);
    })

    db.close();
  })
}))

router.get("/:cost", CatchErrors(async (req, res) => {
  let db = new sqlite3.Database('./db/test.db', (err) => {
    if(err){
      throw {message: err}
    }
    var sql = "SELECT * FROM meals WHERE cost <= ?";
    db.all(sql, req.params.cost, function(err, rows){
      if(err){
        throw {message: err}

      }
      res.send(rows);
    })

    db.close();
  })
}))


module.exports = router;
