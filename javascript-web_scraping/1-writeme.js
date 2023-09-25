#!/usr/bin/node

const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: ./1-writeme.js <file path> <string to write>');
  process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];

fs.writeFile(filePath, content, 'utf-8', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Content written to ${filePath}`);
  }
});
