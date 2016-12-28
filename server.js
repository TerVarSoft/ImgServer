process.env.NODE_ENV = 'production';

var app = require('./app');

var fs = require('fs'),
https = require('https');


https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
  passphrase: 'test'
}, app).listen(4000);