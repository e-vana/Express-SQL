const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const serveStatic = require('serve-static')
const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');



require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//@@ Router Route locations
app.use('/api/books', require('./routes/books'));

//@@ CORS Configuration
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");
  next();
});


//@@ Configure Dist to serve Static client files
app.use('/', serveStatic(path.join(__dirname, '../client/dist')))

//@@this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, ()=> {
  if(!port){
    console.log("Failed to start server."); 
  }

  // let db = new sqlite3.Database('./db/test.db', (err) => {
  //   if(err){
  //     return console.log(err.message);
  //   }

    // db.all(`SELECT * FROM meals`, (err, result)=> {
    //   if(err){
    //     console.log(err)
    //   }
    //   console.log(result);
    // })


    //MAKE A NEW DB WITH NAMES COLUMN
    // db.run('CREATE TABLE meals(name text, cost number)', (err)=> {
    //   if(err){
    //     console.log(err);
    //   }
    // });

    // ADD A NEW COLUMN TO THE DATABASE
    // db.run('ALTER TABLE food ADD spiceLevel number')

    // UPDATE A COLUMN
    // let data = 2;
    // let name = "Burrito"
    // let sql = `UPDATE meals SET spiceLevel = ${data} WHERE names = `; 
    // db.run(sql, data, (err)=> {
    //   if(err){
    //     console.log(err.message);
    //   }
    // })

    //INSERT INTO DB

    // db.run(`INSERT INTO meals VALUES("Chicke Pot Pie", 4.50)`, (err)=> {
    //   if(err){
    //     console.log(err);
    //   }
    // })


  //   console.log("Connected to in-memory DB.")
  // })

  // db.close((err)=> {
  //   if(err){
  //     return console.log(err.message);
  //   }
  //   console.log("Closed DB.")

  // })


  console.log(`Server started on port: ${port}`);
})
