const fs = require('fs');

const content = fs.readFileSync('./text.txt', 'utf8');

 console.log(content);