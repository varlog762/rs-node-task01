import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
  const SOURCE_FILE = 'src/zip/files/archive.gz';
  const DESTINATION_FILE = 'src/zip/files/fileToCompress.txt';

  const readStream = fs.createReadStream(SOURCE_FILE);
  const decompressor = zlib.createGunzip();
  const writeStream = fs.createWriteStream(DESTINATION_FILE);

  readStream.pipe(decompressor).pipe(writeStream);

  readStream.on('error', error => {
    console.error('Error reading compressed file:', error);
  });

  readStream.on('error', error => {
    console.error(error);
  });

  decompressor.on('error', error => {
    console.error(error + '1');
  });

  writeStream.on('error', error => {
    console.error(error + '2');
  });
};

await decompress();
