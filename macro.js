import { spawnSync } from "child_process";
import fs from 'fs';

const arr = [
    '강경호',
    '강연우',
    '김동규',
    '김태현',
    '손준혁',
    '이루미',
    '이형주',
    '황해린',
    '고은찬',
    '김소은',
    '신동명',
    '전도현',
    '탁도현',
    '이지우',
    '이시온',
    '한상혁',
    '함윤승',
    '지윤성'
];
let br = spawnSync('git', ['branch', '--show-current']).stdout.toString('utf-8');
if(!br.includes('main')) throw 'main 브랜치가 아닙니다.'
for(let name of arr){

    spawnSync('git', ['checkout', name])
    spawnSync('git', ['pull']);
    let buf = spawnSync('git', ['merge', 'main', '-m', `'${new Date().toString()} 숙제 추가'`]);
    let countH = 0;
    let countM = 0;
    for(let i of buf.stdout.toString('utf-8').matchAll(/Merge conflict in (.+?)\n/g)){
        let file = fs.readFileSync(i[1], { encoding:'utf-8' });
        for(let j of file.matchAll(/^<{7}\sHEAD([\s\S]+?)>{7}\s.+$/gm)){
            const arr = j[0].split('\n');
            let n = arr.findIndex(v => /^={7}$/m.test(v));
            const HEAD = arr.slice(1, n);
            const MAIN = arr.slice(n + 1, -1);
            if(/\/app\-b\//.test(i[1])){
                countH += 1;
                file = file.replace(j[0], HEAD.join('\n'));
            } else {
                countM += 1;
                file = file.replace(j[0], MAIN.join('\n'));
            }
        }
        fs.writeFileSync(i[1], file, {encoding:'utf-8'});
    }
    
    spawnSync('git', ['add', '-A']);
    spawnSync('git', ['commit', '-m', `'${new Date().toString()} 숙제 추가'`]);
    spawnSync('git', ['push']);
}

spawnSync('git', ['checkout', 'main'])