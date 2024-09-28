import dayjs from 'dayjs';

export function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isDev() {
  return process.env.NODE_ENV === 'development';
}

export function formatDate(target: Date, pattern?: string) {
  return dayjs(target).format(pattern || 'YYYY-MM-DD HH:mm:ss');
}
