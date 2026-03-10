/**
 * 本地静态服务：提供 vue3-form / react-form 的 UMD 文件，供主应用跨域加载。
 * 用法：pnpm run serve:forms（需先执行 pnpm run build:forms）
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.FORMS_SERVER_PORT) || 5000;

const ROUTES = [
  { path: '/vue3-form.umd.js', file: path.join(__dirname, 'vue3-form/dist/vue3-form.umd.js') },
  { path: '/react-form.umd.js', file: path.join(__dirname, 'react-form/dist/react-form.umd.js') },
  { path: '/vue3-form.css', file: path.join(__dirname, 'vue3-form/dist/style.css') },
];

const server = http.createServer((req, res) => {
  const route = ROUTES.find((r) => r.path === req.url?.split('?')[0]);
  if (!route) {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }
  if (!fs.existsSync(route.file)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`File not found. Run: pnpm run build:forms`);
    return;
  }
  const ext = path.extname(route.file);
  const contentType = ext === '.js' ? 'application/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', contentType);
  fs.createReadStream(route.file).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Forms UMD server: http://localhost:${PORT}`);
  console.log('  /vue3-form.umd.js');
  console.log('  /react-form.umd.js');
});
