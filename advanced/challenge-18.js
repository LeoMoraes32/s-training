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

app.put('/:id', (req, res) => {
  const bodyMock = Object.keys(req.body);
  const peopleMock = Object.keys(people[0]);

  const bodyMockString = JSON.stringify(bodyMock);
  const peopleMockString = JSON.stringify(peopleMock);

  const body = req.body;
  let result = '';
  if (req.params.id && req.params.id <= people.length - 1) {
    if (bodyMockString.length <= peopleMockString.length) {
      const id = req.params.id;
      result = people[id];

      people[req.params.id] = body;
      res.status(200);
      return res.send(people[req.params.id]);
    }
  } else {
    res.status(400);
    return res.send({ error: 'Id not found' });
  }
});
