var express = require('express');
var app = express();
var PORT = process.env.PORT || 1337;

app.use(express.static('styleguide'));
app.use(express.static('cypress/videos'));
app.use(express.static('cypress/screenshots'));

app.use(function (req, res, next) {
  res.status(404)
    .send('Not found');
});

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});
