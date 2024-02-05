import { promises as fs } from 'fs';
import path from 'path';

const copy = async () => {
  const SOURCE_DIR = 'src/fs/files';
  const DESTINATION_DIR = 'src/fs/files_copy';

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
    await fs.access(DESTINATION_DIR, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(DESTINATION_DIR);
    } else {
      throw error;
    }
  }

  const files = await fs.readdir(SOURCE_DIR);

  for (const file of files) {
    const sourceFile = path.join(SOURCE_DIR, file);
    const destinationFile = path.join(DESTINATION_DIR, file);
    await fs.copyFile(sourceFile, destinationFile);
  }
};

await copy();
