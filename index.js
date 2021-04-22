//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const covidRoute = require('./routes/covidRoute');

require('dotenv').config();

//Instanciate
const app = express();

//Db connection.
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//Connection to database using mongoose
mongoose.connection.
on('open', () => {
console.log('Mongoose connection open');
})
.on('error', (err) => {
console.log(`Connection error: ${err.message}`);
});

//Middlewares
app.use(express.urlencoded({
    extended: true
}));

//Serving static files
app.use(express.static('public'));
// app.use('/public/images', express.static(__dirname + '/public/images'));


//Middleware Configurations
app.set('views', 'views');
app.set('view engine', 'pug');

//Routes
app.use('/covid', covidRoute);


app.listen(3000, () => {
    console.log('Listening on port 3000');
});