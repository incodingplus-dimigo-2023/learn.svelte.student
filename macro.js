// #!/bin/bash
// for name in 강경호 강연우 김동규 김태현 손준혁 이루미 이형주 황해린
// do
//     git checkout $name
//     git pull
//     git merge main -m 'main과 합침'
//     git add -A
//     git reset
//     git add -A
//     git commit -m "$(date "%Y%m%d") 숙제 추가"
//     git push
// done
import { spawnSync } from "child_process";
import fs from 'fs';

const arr = [
    '강경호',
    '강연우',
    '김동규',
]

spawnSync('git', ['checkout', '강경호'])
spawnSync('git', ['pull']);
let buf = spawnSync('git', ['merge', 'main', '-m', `'main과 합침'`]);
for(let i of buf.stdout.toString('utf-8').matchAll(/Merge conflict in (.+?)\n/g)){
    let file = fs.readFileSync(i[1], { encoding:'utf-8' });
    for(let j of file.matchAll(/^<{7}\sHEAD([\s\S]+?)>{7}\s.+$/gm)){
        const arr = j[0].split('\n');
        let n = arr.findIndex(v => /^={7}$/m.test(v));
        const HEAD = arr.slice(1, n);
        const MAIN = arr.slice(n + 1, -1);
        if(/\/app\-b\//.test(i[1])){
            file = file.replace(j[0], HEAD.join('\n'));
        } else {
            file = file.replace(j[0], MAIN.join('\n'));
        }
    }
    fs.writeFileSync(i[1], file, {encoding:'utf-8'});
}

spawnSync('git', ['add', '-A']);
spawnSync('git', ['commit', '-m', `'${new Date().toString()} 숙제 추가'`]);