const nodejsRespos = require('../nodejs-repos.json');
let repo = nodejsRespos.filter((item) => {
  if (item.license) {
    if (item.license.key === 'mit') {
      return item.license.key;
    }
  }
});

const repoMap = repo.map((item) => {
  const { name, full_name, description, language, created_at, url } = item;
  return { name, full_name, description, language, created_at, url };
});

console.log(repoMap);
