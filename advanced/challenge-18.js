const express = require('express');
const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log('Server online!');
});

const people = [
  {
    firstname: 'Leonardo',
    lastname: 'Moraes',
    email: 'leonardo32moraes@hotmail.com',
    tags: ['NodeJS', 'PHP', 'SQL']
  }
];

//Rotas
app.get('/', (req, res) => {
  console.log('GET');
  return res.send(people);
});

app.post('/', (req, res) => {
  people.push(req.body);
  res.status(201);
  return res.send(req.body);
});
