import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
  const DIR = 'src/fs/files';
  const FILE_NAME = 'fresh.txt';
  const FILE_CONTENT = 'I am fresh and young';
  const FILE_PATH = path.join(DIR, FILE_NAME);

  try {
    await fs.access(FILE_PATH, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  try {
    await fs.writeFile(FILE_PATH, FILE_CONTENT);
  } catch (error) {
    throw error;
  }
};

await create();
