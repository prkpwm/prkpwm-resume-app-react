import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../dist/index.html');

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: 'resume.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
console.log('resume.pdf generated');
