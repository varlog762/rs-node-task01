import { promises as fs } from 'fs';

const read = async () => {
  const FILE = 'src/fs/files/fileToRead.txt';

  try {
    await fs.access(FILE, fs.constants.F_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }

  try {
    const content = await fs.readFile(FILE, 'utf-8');
    console.log(content);
  } catch (error) {
    throw error;
  }
};

await read();
