const fs = require('fs');
const path = require('path');

// 定义 .env 文件的路径（主目录）
const envFilePath = path.join(__dirname, '..', '.env');

// 准备要写入 .env 文件的内容
const envContent = Object.entries(process.env)
  .map(([key, value]) => {
    console.log(`${key}=${value}`);
    return `${key}=${value}`;
  })
  .join('\n');

// 将内容写入 .env 文件
fs.writeFile(envFilePath, envContent, (err) => {
  if (err) {
    console.error('Error writing to .env file', err);
  } else {
    console.log('.env file created successfully!');
  }
});
