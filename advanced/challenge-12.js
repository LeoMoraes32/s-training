const nodejsRespos = require('../nodejs-repos.json');
let repo = nodejsRespos.filter((item) => item.default_branch === 'master');

const repoMap = repo.map((item) => {
  const { name, full_name, description, language, created_at } = item;
  return { name, full_name, description, language, created_at };
});

console.log(repoMap);
