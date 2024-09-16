import pino from 'pino';
import fs from 'fs';
import path from 'path';
import { getCurrentDate } from './utils';

const logDir = path.join(process.cwd(), 'logs');
const logFilePath = path.join(logDir, `${getCurrentDate()}.log`);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

export const logger = pino(pino.destination(logFilePath));
