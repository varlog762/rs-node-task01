import { promises as fs } from 'fs';

const rename = async () => {
  const SOURCE_FILE = 'src/fs/files/wrongFilename.txt';
  const DESTINATION_FILE = 'src/fs/files/properFilename.md';

  try {
    await fs.access(SOURCE_FILE, fs.constants.F_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed1');
    } else {
      throw error;
    }
  }

  try {
    await fs.access(DESTINATION_FILE, fs.constants.F_OK);
    throw new Error('FS operation failed2');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  await fs.rename(SOURCE_FILE, DESTINATION_FILE);
};

await rename();
