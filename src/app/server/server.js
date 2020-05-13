const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.get('/', function(req, res){
    res.send('Hello from server');
})

app.post('/profile', function( req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data recceived"});
}) // end point where the Routines are being posted to

app.listen(PORT, function(){
    console.log("Server is running on localhost:" + PORT);
});
