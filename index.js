let express = require('express');
let bodyParser = require( 'body-parser');

let usersRoutes = require('./routes/users.js');

const app = express();
PORT = process.env.PORT || 3000
app.use(bodyParser.json());

app.use('/users', usersRoutes);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

const mongoose = require('mongoose') 

const url = 'mongodb+srv://thuytrang:trang123@cluster0.eqrr5wa.mongodb.net/?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true ,
    
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })