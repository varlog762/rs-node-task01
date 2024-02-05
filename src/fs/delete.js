import { promises as fs } from 'fs';

const remove = async () => {
  const FILE = 'src/fs/files/fileToRemove.txt';

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
    await fs.unlink(FILE);
  } catch (error) {
    throw error;
  }
};

await remove();
