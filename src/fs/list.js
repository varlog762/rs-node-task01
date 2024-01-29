import { promises as fs } from 'fs';

const list = async () => {
  const SOURCE_DIR = 'src/fs/files';

  try {
    await fs.access(SOURCE_DIR, fs.constants.F_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }

  try {
    const files = await fs.readdir(SOURCE_DIR);
    console.log(files);
  } catch (error) {
    throw error;
  }
};

await list();
