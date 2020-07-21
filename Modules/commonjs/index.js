const fs = require('fs');

fs.readdirSync(__dirname)
  .filter((f) => f.endsWith('.test.js'))
  .forEach((f) => require(__dirname + '/' + f));
