//==============In Line===================

/*setTimeout(
    ()=>{
        console.log("\n hello after 3 seconds....\n");
    },
    3*1000
)

//================outside===============
sayHello= ()=>{
    console.log("\n hello after 3 seconds....\n");
}

setTimeout(sayHello,3000);


//=============setTimeout with parameters inside function=================

const shocks = parame =>{
    console.log(parame + '  shocks')
}

setTimeout(shocks,2*1000,'sai');
*/

const shocks=second=>{
    console.log('hello after '+second+'seconds')
}
setTimeout(shocks,4*1000,4)
setTimeout(shocks,8*1000,8)