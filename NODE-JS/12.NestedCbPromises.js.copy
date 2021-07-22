const fs = require('fs').promises;

async function main(){

    const data = await fs.readFile(__filename);

    await fs.writeFile(__filename+'.copy', data);

    //we can write more awits here........ 
}

main();

console.log('test');