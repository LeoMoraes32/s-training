const people = (Firstname, lastname, email, tags) => {
  return {
    Firstname: Firstname,
    lastname: lastname,
    email: email,
    tags: tags
  };
};
let peopleComplete = people('Leonardo', 'Moraes', 'leonardo32moraes@hotmail.com', ['SI', 'NodeJS', 'PHP', 'Dev']);
console.log(peopleComplete);
