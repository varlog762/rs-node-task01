import fs from 'fs';

const read = async () => {
  const FILE = 'src/streams/files/fileToRead.txt';

  const readableStream = fs.createReadStream(FILE, { encoding: 'utf-8' });

  readableStream.on('data', chunk => {
    process.stdout.write(chunk);
  });

  readableStream.on('end', () => {
    console.log('\nFile read successfully.');
  });

  readableStream.on('error', error => {
    console.error(error);
  });
};

await read();
