import * as fs from 'fs-extra';
import * as path from 'path';

console.log('Copy Locales');
const srcDir = `../../packages/locales/dist/locales`;
const buildDestDir = `dist/locales`;
const devDestDir = `public/locales`;

console.log(path.resolve(srcDir));
fs.readdirSync(srcDir).forEach(file => console.log(file));

if (!fs.existsSync('build')) {
    fs.mkdirSync('build');
}
if (!fs.existsSync(buildDestDir)) {
    fs.mkdirSync(buildDestDir, { recursive: true });
}
fs.rmSync(devDestDir, { recursive: true, force: true });
if (!fs.existsSync(devDestDir)) {
    fs.mkdirSync(devDestDir, { recursive: true });
}
fs.copySync(srcDir, buildDestDir, { overwrite: true });
fs.copySync(srcDir, devDestDir, { overwrite: true });
