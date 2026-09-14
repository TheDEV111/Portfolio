const fs = require('fs');

let content = fs.readFileSync('src/data/projects.ts', 'utf8');

content = content.replace(/category: "Open Source"/g, 'category: "Blockchain"');

fs.writeFileSync('src/data/projects.ts', content);
console.log('Categories updated.');
