var express =  require('express');
var app = express();
var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({port: 8889});



app.use(express.static('static'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/jsmpeg.html', function(){

});

wss.on('connection', function connection(ws) {
  console.log("Testing connection");
  clientWS = ws;
  clientWS.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
