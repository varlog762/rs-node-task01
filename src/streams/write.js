import fs from 'fs';

const write = async () => {
  const FILE = 'src/streams/files/fileToWrite.txt';

  const writableStream = fs.createWriteStream(FILE, { flags: 'a' });

  process.stdin.pipe(writableStream);

  writableStream.on('finish', () => {
    console.log(`Data written to ${FILE} successfully.`);
  });

  writableStream.on('error', error => {
    console.error(error);
  });
};

await write();
