const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookie_parser = require('cookie-parser')
require('dotenv').config()


app.use(cors({
    origin: 'https://anime-databases.onrender.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
))
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookie_parser())

//ADMIN ROUTE
app.use('/admin', require('./src/router/admin_route.js'))
app.use('/anime', require('./src/router/animeRoute.js'))

app.listen(2000, () => {
    console.log(`server running at port 2000`);
    mongoose.connect('mongodb+srv://jasonthepprogrammer:nRiXe1iMeM0rgwCU@animedatabase.rtscahd.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('database connected');
    })
    .catch(() => {
        console.log('connection failed')
    })
})


