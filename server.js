
const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Trang application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});


const db= require("./model");
const Role = db.role;

const url = 'mongodb+srv://thuytrang:trang123@cluster0.eqrr5wa.mongodb.net/?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true ,
    
}
const mongoose = require('mongoose') 
mongoose.connect(url,connectionParams)
    .then( () => {
              console.log('Connected to the database ')
              initital();
          })
            .catch( (err) => {
                console.error(`Error connecting to the database. n${err}`);
                process.exit();
    })
function initital() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
            new Role({
              name: "user"
            }).save(err => {
              if (err) {
                console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });
      new Role({
          name: "admin"
      }).save(err => {
          if (err) {
            console.log("error", err);
          }

        console.log("added 'admin' to roles collection");
      });
}
});
}
