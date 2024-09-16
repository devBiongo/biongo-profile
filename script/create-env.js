const fs = require('fs');
const path = require('path');

// 从环境变量中获取 SSH_KNOWN_HOST
const test = process.env.TEST;

// 定义 .env 文件的路径
const envFilePath = path.join(__dirname, '..', '.env');

// 准备要写入 .env 文件的内容
const envContent = `TEST=${test}\n`;

// 将内容写入 .env 文件
fs.writeFile(envFilePath, envContent, (err) => {
  if (err) {
    console.error('Error writing to .env file', err);
  } else {
    console.log('.env file created successfully!');
  }
});
