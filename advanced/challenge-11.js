const nodejsRespos = require('../nodejs-repos.json');

const repo = nodejsRespos.map((item) => {
  const { name, full_name, description, language, created_at } = item;
  return { name, full_name, description, language, created_at };
});
console.log(repo.length);
console.log(repo);
