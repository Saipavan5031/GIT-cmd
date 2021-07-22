const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main(){

    const data = await readFile(__filename);

    console.log('file data is', data);
}

main();

console.log('test');