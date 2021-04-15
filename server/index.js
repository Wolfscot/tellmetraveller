const config = require('./config/config');
const dbConnection = require('./config/database');
const path=require("path");
const express = require('express');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(express.static('Client/build'));
    
    app.get('/*', function (req, res) {
       res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
     });
    
    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);