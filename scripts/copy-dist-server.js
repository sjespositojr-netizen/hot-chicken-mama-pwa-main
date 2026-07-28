import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd());
const src = path.join(root, 'dist', 'server');
const dest = path.join(root, 'api', 'dist', 'server');

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    throw new Error(`Source directory does not exist: ${srcDir}`);
  }

  fs.mkdirSync(destDir, { recursive: true });

  for (const name of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, name.name);
    const destPath = path.join(destDir, name.name);

    if (name.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (name.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, dest);
console.log(`Copied ${src} to ${dest}`);
