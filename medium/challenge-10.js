const people = {
  Firstname: 'Leonardo',
  lastname: 'Moraes',
  email: 'leonardo32moraes@hotmail.com',
  tags: ['SI', 'NodeJS', 'PHP', 'Dev']
};

const object = (anyObject) => {
  return console.table(anyObject);
};
console.log(object(people));

Object.keys(people).forEach((item) => {
  console.log(item + ' = ' + people[item]);
});
