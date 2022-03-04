const nodejsRespos = require('../nodejs-repos.json');
let repo = nodejsRespos.filter((item) => item.license === null);

console.log(repo.length);
