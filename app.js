const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./routes/actionRoute');

const app = express();

const port = 3000;

//creating a connection to the database
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "library"
});

//connecting to database
database.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});
global.database=database;//to get the database access to all files

//configuring middleware
app.set('port', process.env.port || port);//setting the port to use
app.set('views', __dirname + '/views');//folder to look into for rdering 
app.set('view engine','ejs');//setting template engine
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//to parse data from client
app.use(express.static(path.join(__dirname, "public")));

//configuring routes 
app.use('/',route);
app.use((req,res) => {
    res.render('404.ejs',{title: 'Page not found'})//if link doesnot exit
})


//setting the app to listen on this port
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
            