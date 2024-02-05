import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
  const SOURCE_FILE = 'src/zip/files/fileToCompress.txt';
  const DESTINATION_FILE = 'src/zip/files/archive.gz';

  const readStream = fs.createReadStream(SOURCE_FILE);
  const compressor = zlib.createGzip();
  const writeStream = fs.createWriteStream(DESTINATION_FILE);

  readStream.pipe(compressor).pipe(writeStream);

  readStream.on('error', error => {
    console.error(error);
  });

  compressor.on('error', error => {
    console.error('Error compressing data:', error);
  });

  writeStream.on('error', error => {
    console.error(error);
  });
};

await compress();
