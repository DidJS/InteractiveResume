var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join( __dirname, '/src')));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
   console.log('Listening to port', port);
});
