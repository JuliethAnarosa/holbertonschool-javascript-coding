#!/usr/bin/node
const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Uso: node 0-readme.js <ruta del archivo>');
  process.exit(1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
