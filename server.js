const mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/censusdb"; 



mongoose.connect(mongoDB,{useNewUrlParser: true, 
    useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB failed to connect'));
db.on('connected', console.log.bind(console, 'MongoDB connected'));

const express = require('express');
const app = express()

const port = 8081;
app.use(express.json());
app.use('/api', require('./route/request'));

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

   

