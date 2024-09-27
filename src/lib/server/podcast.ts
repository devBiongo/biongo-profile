import fs from 'fs';
import path from 'path';

export function resolveStaticResourcePath(...subdirs: string[]) {
  const temprorayDir = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    'resource',
    ...subdirs
  );
  if (!fs.existsSync(temprorayDir)) {
    fs.mkdirSync(temprorayDir, { recursive: true });
  }
  return temprorayDir;
}

export function checkFileExists(filePath: string) {
  return new Promise((resolve) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

export function deleteFile(filePath: string) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(new Error('Error deleting file: ' + err.message));
      } else {
        resolve('File deleted successfully');
      }
    });
  });
}

export async function downloadFileToLocal(
  resource: Buffer,
  savePath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(savePath);
    writer.on('finish', () => {
      console.log('Download complete!');
      resolve();
    });

    writer.on('error', (err) => {
      console.error('Error writing to file:', err);
      reject(err);
    });

    writer.write(resource);
    writer.end();
  });
}

export async function readLocalFileBuffer(
  filePath: string
): Promise<Buffer | null> {
  return new Promise<Buffer | null>((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject('Error reading file:');
      } else {
        resolve(data);
      }
    });
  });
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
