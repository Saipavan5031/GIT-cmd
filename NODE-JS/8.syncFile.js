const fs = require('fs');

fs.readFile(__filename, function cb(err,data)
{
    
console.log('\nfile data is', data);

})


console.log('\n TEST');