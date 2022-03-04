const nodejsRespos = require('../nodejs-repos.json');
let repo = nodejsRespos.filter((item) => item.forks < 50);

console.log(repo);
