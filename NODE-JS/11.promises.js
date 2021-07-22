const {  readFile } = require('fs').promises;

async function main(){

    const data = await readFile(__filename);

    console.log('file data is', data);
}

main();

console.log('test');