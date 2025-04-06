const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());

/// Login out the activities in this application
const logger = function(req, res, next){
     console.log("Hello the app middleware Function is Called")
    next();
}
app.use(logger);

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

module.exports=app