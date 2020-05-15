const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./server/routes/api');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(PORT, function(){
    console.log("Server is running on localhost:" + PORT);
});

app.get('/', function(req, res){
    res.send('Hello from server');
})

app.post('/profile', function( req, res){ 
    console.log(req.body);
    res.status(200).send({"message": "New Post Data recceived"});
}) // end point where the Routines are being posted to

app.post('/profile', function( req, res){ 
    console.log(req.body);
    res.status(200).send({"message": "New User Data recceived"});
}) // end point where the Users are being posted/Created to