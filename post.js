const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080
app.use(bodyParser.json());

app.post('/sayHello', function(req, res) {
  res.send('Hello ' + req.body.name)
});

app.listen(port)
