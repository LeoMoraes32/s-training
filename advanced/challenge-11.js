const nodejsRespos = require('../nodejs-repos.json');

const repo = nodejsRespos.map((item) => {
  const { full_name, description, language, created_at } = item;
  return { full_name, description, language, created_at };
});
console.log(repo.length);
console.log(repo);
