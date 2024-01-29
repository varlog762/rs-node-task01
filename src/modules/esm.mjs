import path from 'path';
import os from 'os';
import http from 'http';
import './files/c.js';
import { readFileSync } from 'fs';

const { release, version } = os;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(readFileSync('src/modules/files/a.json', 'utf-8'));
} else {
  unknownObject = JSON.parse(readFileSync('src/modules/files/b.json', 'utf-8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = http.createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
