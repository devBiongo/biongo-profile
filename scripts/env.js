const fs = require('fs');
const path = require('path');

const envFilePath = path.join(__dirname, '..', '.env');

const customPrefix = 'APP_';

const envContent = Object.entries(process.env)
  .filter(([key]) => key.startsWith(customPrefix))
  .map(([key, value]) => {
    console.log(key);
    return `${key.replace(customPrefix, '')}=${value}`;
  })
  .join('\n');
console.log(11111, envContent);
fs.writeFile(envFilePath, envContent, (err) => {
  if (err) {
    console.error('Error writing to .env file', err);
  } else {
    console.log('.env file created successfully!');
  }
});
