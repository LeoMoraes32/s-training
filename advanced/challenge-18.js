const express = require('express');
const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log('Server online!');
});

let people = [
  {
    firstname: 'Leonardo',
    lastname: 'Moraes',
    email: 'leonardo32moraes@hotmail.com',
    tags: ['NodeJS', 'PHP', 'SQL']
  }
];
//
const hasId = (id, bodyMockString, peopleMockString) => {
  if (id && id <= people.length - 1) {
    if (bodyMockString.length <= peopleMockString.length) {
      result = people[id];
      return result;
    }
    return false;
  }
  return false;
};

//Rotas
app.get('/', (req, res) => {
  let valid = Object.keys(req.query);
  if (valid.length > 0) {
    filteredPeople = people.filter((item) => {
      if (req.query.firstname === item.firstname) return item;
      else if (req.query.lastname === item.lastname) return item;
      else if (req.query.email === item.email) return item;
      else if (req.query.tags === item.tags) return item;
    });
    console.log('passou aqui');
    return res.send(filteredPeople);
  } else {
    let obj = {
      people: people,
      tam: people.length
    };
    return res.send(obj);
  }
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

      people[result] = body;
      res.status(200);
      return res.send(people[req.params.id]);
    }
  } else {
    res.status(400);
    return res.send({ error: 'Id not found' });
  }
});

app.delete('/:id', (req, res) => {
  const id = req.params.id;

  const bodyMock = Object.keys(req.body);
  const peopleMock = Object.keys(people[0]);

  const bodyMockString = JSON.stringify(bodyMock);
  const peopleMockString = JSON.stringify(peopleMock);

  const peopleResultant = hasId(id, bodyMockString, peopleMockString);
  if (peopleResultant) {
    let peopleResult = people.filter((item) => item != peopleResultant);
    people = peopleResult;
    res.status(204);
    return res.send(`Deleted: ${peopleResultant}`);
  } else {
    res.status(400);
    return res.send({ error: 'Id not found' });
  }
});
