import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reversedText = chunk.toString().split('').reverse().join('');
      callback(null, reversedText + '\n');
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  reverseStream.on('error', error => {
    console.error(error);
  });

  console.log('Enter the data:');

  await new Promise(resolve => {
    process.stdin.once('data', resolve);
  });
};

await transform();
