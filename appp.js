var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Framfart123',
    database: 'tododb'


});

//app.use(express.static(__dirname + '/public'));

connection.connect(function (error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/todo/', function (req, resp) {
    connection.query("SELECT * FROM todoList", function (error, rows, fields) {
        if (error) {
            console.log('Error');
        } else {
            console.log('Lyckad koppling');
            resp.send(rows);
        }

    });
});
   // app.post()

app.post('/todo/', function (req, resp) {
    connection.query("INSERT INTO todoList (todoTitle) VALUES('test')", function (error) {
        if (error) {
            console.log('Error');
        } else {
            console.log('Lyckad insert');
        }



    });
});



app.listen(8000);