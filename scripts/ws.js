import { Server } from 'socket.io';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
/**
 * 
 * @param {import('vite').ViteDevServer} server 
*/
export default async function injectSocketIO(server) {
    const io = new Server(server);
    const dir = path.resolve(fileURLToPath(import.meta.url), '../../content');
    let pro = fs.watch(dir, {
        recursive:true,
    });
    for await (let i of pro){
        const arr = i.filename.split(path.sep);
        if(!arr.includes('app-b')) continue;
        const stat = await fs.lstat(path.resolve(dir, i.filename))
        io.local.emit('message', {
            ...i, mtimeMs:stat.mtimeMs
        });
    }
}