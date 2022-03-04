const nodejsRespos = require('../nodejs-repos.json');
let repo = nodejsRespos.filter((item) => {
  if (item.language) {
    if (item.language === 'CSS' || item.language === 'Python') {
      return item.license.language;
    }
  }
});

let repoMap = repo.map((item) => {
  const { name, full_name, language, has_issues, has_projects } = item;
  return { name, full_name, language, has_issues, has_projects };
});

console.log(repoMap);
