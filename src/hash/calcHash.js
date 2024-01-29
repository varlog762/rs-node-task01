import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const FILE = 'src/hash/files/fileToCalculateHashFor.txt';

  const hash = crypto.createHash('sha256');
  const readStream = fs.createReadStream(FILE);

  readStream.on('data', chunk => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log('SHA256 Hash:', hexHash);
  });

  readStream.on('error', error => {
    console.error(error);
  });
};

await calculateHash();
