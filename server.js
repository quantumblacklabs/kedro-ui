var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('styleguide'));
app.use(express.static('cypress/videos'));
app.use(express.static('cypress/screenshots'));

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});
