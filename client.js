var PORT = 8888;
var HOST = 'localhost';

var dgram = require('dgram');
var message = new Buffer('Testing, testing, 1.2.3.');

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});
