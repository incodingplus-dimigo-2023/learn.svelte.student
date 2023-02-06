import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { text_files } from '$lib/server/content';
const dir = path.resolve(fileURLToPath(import.meta.url), '../../../../content');
/** @type {import('./$types').RequestHandler} */
export const POST = async ({request}) => {
    /** @type { fs.FileChangeInfo<string> & {dir:string}} */
    const json = await request.json();
    const theFile = path.resolve(dir, json.filename);
    const text = text_files.has(path.extname(theFile) || path.basename(theFile));
    const contents = await fs.readFile(theFile, text ? 'utf-8' : 'base64');
    const name = path.relative(path.resolve(json.dir, 'app-b'), theFile);
    if(name.startsWith('.')){
        return new Response(null, {
            status:500
        });
    }
    return new Response(JSON.stringify({
        type: 'file',
        name:`/${name.replaceAll(path.sep, path.posix.sep)}`,
        basename:path.basename(theFile),
        text,
        contents
    }));
}