/* eslint-disable no-undef */
var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));


// app.use('/photographer/*', express.static(path.join(__dirname, 'public')));

app.get('/photographer/*', (_, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(5500);
