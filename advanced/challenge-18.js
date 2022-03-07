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
  return res.send(people);
});

app.get('/:id', (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    return res.send(people[id]);
  }
});
app.post('/', (req, res) => {
  const body = Object.keys(req.body);
  const peopleMock = Object.keys(people[0]);
  const bodyString = JSON.stringify(body);
  const peopleMockString = JSON.stringify(peopleMock);
  if (bodyString === peopleMockString) {
    people.push(req.body);
    res.status(201);
    return res.send(req.body);
  } else {
    res.status(400);
    return res.send({ error: 'Wrong format' });
  }
});
