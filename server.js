'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/*', (req, res) => {
  res.send(`***Hello World! You used this URL: ${req.originalUrl} Running on ${os.arch()}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);