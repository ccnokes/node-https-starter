const PORT = process.env.PORT || 4433;
const fs = require('fs');
const https = require('https'); 
const express = require('express');

const options = { 
  key: fs.readFileSync('./certs/server-key.pem'), 
  cert: fs.readFileSync('./certs/server-crt.pem'), 
  ca: fs.readFileSync('./certs/ca-crt.pem')
}; 

const app = express();


/**
 * Middleware goes here
 */

// Log requests
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Allow requests from anyone, anywhere
app.use((res, req, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // add more headers here as needed
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/', (req, res, next) => {
  res.json({
    message: `You're the best around... Nothing's ever gonna keep ya down!`
  });
});


/**
 * Create and start the server
 */

https.createServer(options, app).listen(PORT);
console.log(`Server started on *:${PORT}`);
