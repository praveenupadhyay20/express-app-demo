const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//  Add body-parser middleware
//  More information here: https://expressjs.com/en/resources/middleware/body-parser.html
//  And here: https://www.npmjs.com/package/body-parser
app.use(bodyParser.json());

//  Use port 3000 if the environment doesn't specify one

const PORT = process.env.PORT || 3000;

//  home route
app.get('/', (request, response) => {
  response.send({
    on: new Date(),
    message: 'Hi there!'
  });
});

//  api end-points

app.get('/api/items', (request, response) => {
  response.send({
    on: new Date(),
    message: 'GET successful'
  });
});

app.get('/api/items/:id', (request, response) => {
  const id = +request.params.id;

  response.send({
    on: new Date(),
    message: 'GET successful',
    id
  });
});

app.post('/api/items', (request, response) => {
  response.send({
    on: new Date(),
    message: 'POST successful',
    body: request.body
  });
});

app.put('/api/items', (request, response) => {
  response.send({
    on: new Date(),
    message: 'PUT successful',
    body: request.body
  });
});

app.delete('/api/items/:id', (request, response) => {
  const id = +request.params.id;
  response.send({
    on: new Date(),
    message: 'DELETE successful',
    id
  });
});

//  Listen to port
app.listen(PORT);
